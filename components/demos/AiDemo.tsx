'use client'

import { useEffect, useRef, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { Icon } from '@/components/ui/Icon'
import { DemoFrame, demoNote, smallBtn } from './DemoFrame'

type Analysis = {
  intent: string
  priority: 'high' | 'medium' | 'low'
  route: string
  reply: string
}
type Item = { text: string; channel: string; analysis: Analysis }

const copy: Record<
  Locale,
  {
    title: string
    inbox: string
    analyze: string
    thinking: string
    intent: string
    priority: string
    route: string
    reply: string
    send: string
    sent: string
    priorities: Record<Analysis['priority'], string>
    hint: string
    items: Item[]
  }
> = {
  uz: {
    title: 'AI · Murojaatlarni saralash',
    inbox: 'Kiruvchi murojaatlar',
    analyze: 'AI bilan tahlil',
    thinking: 'Tahlil qilinmoqda…',
    intent: 'Maqsad',
    priority: 'Muhimlik',
    route: "Yo'naltirish",
    reply: 'Javob loyihasi',
    send: 'Tasdiqlash va yuborish',
    sent: 'Yuborildi ✓',
    priorities: { high: 'Yuqori', medium: "O'rta", low: 'Past' },
    hint: 'Murojaatni tanlang — AI uni tasniflaydi va javob tayyorlaydi. Yuborishdan oldin xodim tasdiqlaydi.',
    items: [
      {
        channel: 'Telegram',
        text: 'Kecha buyurtma qilgan edim, hali ham yetib kelmadi! Pulimni qaytarasizlarmi?',
        analysis: {
          intent: 'Shikoyat: yetkazib berish kechikdi',
          priority: 'high',
          route: "Yetkazib berish bo'limi · Javob 15 daqiqada",
          reply:
            "Kechikish uchun uzr so'raymiz. Buyurtmangizni tekshirdik — bugun 18:00 gacha yetkaziladi. Kompensatsiya sifatida keyingi buyurtmaga 15% chegirma beramiz.",
        },
      },
      {
        channel: 'Instagram',
        text: 'Salom, 30 kishilik ziyofat uchun zal bormi? Shanba kuni kechqurun.',
        analysis: {
          intent: 'Savdo: banket bron qilish',
          priority: 'medium',
          route: 'Banket menejeri · CRM: yangi lid',
          reply:
            "Assalomu alaykum! Shanba kuni kechqurun 30 kishilik zal bo'sh. Menyu variantlarini yuboraymi?",
        },
      },
      {
        channel: 'Sayt',
        text: 'Ish vaqtingiz qanday? Yakshanba ochiqmisizlar?',
        analysis: {
          intent: "Ma'lumot: ish vaqti",
          priority: 'low',
          route: 'Avtomatik javob',
          reply: 'Biz har kuni 10:00 dan 23:00 gacha ishlaymiz, yakshanba ham ochiqmiz.',
        },
      },
    ],
  },
  ru: {
    title: 'AI · Сортировка обращений',
    inbox: 'Входящие обращения',
    analyze: 'Анализ AI',
    thinking: 'Анализирую…',
    intent: 'Намерение',
    priority: 'Приоритет',
    route: 'Маршрут',
    reply: 'Черновик ответа',
    send: 'Подтвердить и отправить',
    sent: 'Отправлено ✓',
    priorities: { high: 'Высокий', medium: 'Средний', low: 'Низкий' },
    hint: 'Выберите обращение — AI классифицирует его и подготовит ответ. Перед отправкой сотрудник подтверждает.',
    items: [
      {
        channel: 'Telegram',
        text: 'Заказывал вчера, до сих пор не привезли! Деньги вернёте?',
        analysis: {
          intent: 'Жалоба: задержка доставки',
          priority: 'high',
          route: 'Отдел доставки · ответ за 15 минут',
          reply:
            'Приносим извинения за задержку. Мы проверили заказ — его доставят сегодня до 18:00. В качестве компенсации дарим скидку 15% на следующий заказ.',
        },
      },
      {
        channel: 'Instagram',
        text: 'Здравствуйте, есть зал на 30 человек? В субботу вечером.',
        analysis: {
          intent: 'Продажа: бронь банкета',
          priority: 'medium',
          route: 'Банкетный менеджер · CRM: новый лид',
          reply:
            'Здравствуйте! В субботу вечером зал на 30 человек свободен. Прислать варианты меню?',
        },
      },
      {
        channel: 'Сайт',
        text: 'Какой у вас график? В воскресенье работаете?',
        analysis: {
          intent: 'Информация: график работы',
          priority: 'low',
          route: 'Автоответ',
          reply: 'Мы работаем ежедневно с 10:00 до 23:00, в воскресенье тоже открыты.',
        },
      },
    ],
  },
  en: {
    title: 'AI · Request triage',
    inbox: 'Incoming requests',
    analyze: 'Analyze with AI',
    thinking: 'Analyzing…',
    intent: 'Intent',
    priority: 'Priority',
    route: 'Routing',
    reply: 'Draft reply',
    send: 'Approve and send',
    sent: 'Sent ✓',
    priorities: { high: 'High', medium: 'Medium', low: 'Low' },
    hint: 'Pick a request: the AI classifies it and drafts a reply. A person approves before anything is sent.',
    items: [
      {
        channel: 'Telegram',
        text: 'I ordered yesterday and it still hasn’t arrived! Will you refund me?',
        analysis: {
          intent: 'Complaint: late delivery',
          priority: 'high',
          route: 'Delivery team · reply within 15 minutes',
          reply:
            'We apologise for the delay. We checked your order — it will arrive today before 18:00. As compensation, here is 15% off your next order.',
        },
      },
      {
        channel: 'Instagram',
        text: 'Hi, do you have a hall for 30 people? Saturday evening.',
        analysis: {
          intent: 'Sales: banquet booking',
          priority: 'medium',
          route: 'Banquet manager · CRM: new lead',
          reply:
            'Hello! The hall for 30 guests is free on Saturday evening. Shall I send menu options?',
        },
      },
      {
        channel: 'Website',
        text: 'What are your opening hours? Are you open on Sunday?',
        analysis: {
          intent: 'Info: opening hours',
          priority: 'low',
          route: 'Auto-reply',
          reply: 'We are open every day from 10:00 to 23:00, Sundays included.',
        },
      },
    ],
  },
}

const priorityClass = {
  high: 'bg-danger/15 text-danger',
  medium: 'bg-accent/15 text-accent-text',
  low: 'bg-success/15 text-success',
}

export default function AiDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [selected, setSelected] = useState(0)
  const [state, setState] = useState<'idle' | 'thinking' | 'done' | 'sent'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  const item = t.items[selected]
  const analyze = () => {
    setState('thinking')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setState('done'), 1100)
  }

  return (
    <DemoFrame title={t.title} note={demoNote[locale]}>
      <p className="mb-3 text-xs text-muted">{t.hint}</p>
      <div className="grid gap-3 md:grid-cols-[1fr_1.15fr]">
        <div className="rounded-control bg-bg p-2">
          <p className="px-2 py-1.5 text-[10px] font-bold tracking-widest text-muted uppercase">
            {t.inbox}
          </p>
          <ul className="space-y-1.5">
            {t.items.map((it, i) => (
              <li key={it.text}>
                <button
                  type="button"
                  aria-pressed={selected === i}
                  onClick={() => {
                    setSelected(i)
                    setState('idle')
                  }}
                  className={`w-full rounded-lg border p-2.5 text-left text-xs transition ${
                    selected === i
                      ? 'border-accent bg-surface'
                      : 'border-line bg-surface/50 hover:border-line-strong'
                  }`}
                >
                  <span className="mb-1 block text-[10px] font-bold text-accent-text">
                    {it.channel}
                  </span>
                  {it.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col rounded-control bg-bg p-3" aria-live="polite">
          {state === 'idle' && (
            <div className="grid flex-1 place-items-center py-8">
              <button type="button" onClick={analyze} className={smallBtn}>
                <Icon name="sparkles" className="size-3.5" /> {t.analyze}
              </button>
            </div>
          )}
          {state === 'thinking' && (
            <div className="grid flex-1 place-items-center py-8 text-sm text-muted">
              <span className="flex items-center gap-2">
                <Icon name="sparkles" className="animate-pulse-dot size-4 text-accent-text" />{' '}
                {t.thinking}
              </span>
            </div>
          )}
          {(state === 'done' || state === 'sent') && (
            <div className="animate-fade-up space-y-3 text-xs">
              <dl className="space-y-3">
                <div>
                  <dt className="text-[10px] font-bold tracking-widest text-muted uppercase">
                    {t.intent}
                  </dt>
                  <dd className="mt-1 font-bold">{item.analysis.intent}</dd>
                </div>
                <div className="flex gap-6">
                  <div>
                    <dt className="text-[10px] font-bold tracking-widest text-muted uppercase">
                      {t.priority}
                    </dt>
                    <dd
                      className={`mt-1 inline-block rounded px-2 py-0.5 font-bold ${priorityClass[item.analysis.priority]}`}
                    >
                      {t.priorities[item.analysis.priority]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold tracking-widest text-muted uppercase">
                      {t.route}
                    </dt>
                    <dd className="mt-1 font-semibold">{item.analysis.route}</dd>
                  </div>
                </div>
                <div>
                  <dt className="text-[10px] font-bold tracking-widest text-muted uppercase">
                    {t.reply}
                  </dt>
                  <dd className="mt-1 rounded-lg border border-line bg-surface p-2.5 leading-relaxed">
                    {item.analysis.reply}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                disabled={state === 'sent'}
                onClick={() => setState('sent')}
                className={`${smallBtn} disabled:opacity-70`}
              >
                {state === 'sent' ? t.sent : t.send}
              </button>
            </div>
          )}
        </div>
      </div>
    </DemoFrame>
  )
}
