import { NextResponse } from 'next/server'
import { leadSchema, type Lead } from '@/lib/lead'

// Best-effort limit per serverless instance. For a hard limit across instances
// plug in a shared store (e.g. Upstash Redis) — see README.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function telegramText(lead: Lead) {
  const rows = [
    '<b>🟡 Yangi ariza — zolvi.uz</b>',
    `<b>Ism:</b> ${escapeHtml(lead.name)}`,
    `<b>Telefon:</b> ${lead.phone}`,
    lead.business && `<b>Biznes:</b> ${escapeHtml(lead.business)}`,
    lead.plan && `<b>Paket:</b> ${escapeHtml(lead.plan)}`,
    lead.comment && `<b>Izoh:</b> ${escapeHtml(lead.comment)}`,
    `<b>Til:</b> ${lead.locale}`,
    lead.page && `<b>Sahifa:</b> ${escapeHtml(lead.page)}`,
  ]
  return rows.filter(Boolean).join('\n')
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const raw = body as Record<string, unknown>
  const phone =
    typeof raw.phone === 'string' ? `+998${raw.phone.replace(/\D/g, '').replace(/^998/, '')}` : ''
  const parsed = leadSchema.safeParse({ ...raw, phone })
  if (!parsed.success) {
    // A filled honeypot gets a fake success so bots don't retry.
    if (typeof raw.website === 'string' && raw.website) return NextResponse.json({ ok: true })
    return NextResponse.json(
      { ok: false, error: 'validation', fields: parsed.error.issues.map((i) => i.path.join('.')) },
      { status: 400 },
    )
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    console.error('[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set', parsed.data)
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 })
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: telegramText(parsed.data),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })
  if (!res.ok) {
    console.error('[lead] Telegram API error', res.status, await res.text())
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
