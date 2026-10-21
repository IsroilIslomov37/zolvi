'use client'

import { useRef, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { Icon } from '@/components/ui/Icon'
import { currency, DemoFrame, demoNote, fmtNumber, smallBtn } from './DemoFrame'

const copy = {
  uz: {
    title: 'POS · Kassa → Oshxona',
    menu: ['Osh', "Lag'mon", 'Somsa', 'Shashlik', 'Choy', 'Salat'],
    order: 'Buyurtma',
    table: 'Stol',
    empty: "Taomni tanlang — buyurtmaga qo'shiladi",
    send: 'Oshxonaga yuborish',
    kitchen: 'Oshxona ekrani',
    waiting: "Hozircha buyurtma yo'q",
    sent: 'yetib keldi',
    ready: 'Tayyor',
    total: 'Jami',
  },
  ru: {
    title: 'POS · Касса → Кухня',
    menu: ['Плов', 'Лагман', 'Самса', 'Шашлык', 'Чай', 'Салат'],
    order: 'Заказ',
    table: 'Стол',
    empty: 'Выберите блюдо — оно добавится в заказ',
    send: 'Отправить на кухню',
    kitchen: 'Экран кухни',
    waiting: 'Пока заказов нет',
    sent: 'доставлен за',
    ready: 'Готово',
    total: 'Итого',
  },
  en: {
    title: 'POS · Till → Kitchen',
    menu: ['Plov', 'Lagman', 'Samsa', 'Shashlik', 'Tea', 'Salad'],
    order: 'Order',
    table: 'Table',
    empty: 'Pick a dish to add it to the order',
    send: 'Send to kitchen',
    kitchen: 'Kitchen display',
    waiting: 'No orders yet',
    sent: 'arrived in',
    ready: 'Ready',
    total: 'Total',
  },
}

const prices = [45_000, 38_000, 9_000, 28_000, 6_000, 22_000]

type Ticket = { id: number; table: number; items: string[]; latency: string; ready: boolean }

export default function PosDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [cart, setCart] = useState<number[]>([])
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [table, setTable] = useState(4)
  const nextId = useRef(1)

  const total = cart.reduce((s, i) => s + prices[i], 0)
  const send = () => {
    if (!cart.length) return
    const counts = cart.reduce<Record<number, number>>(
      (m, i) => ({ ...m, [i]: (m[i] ?? 0) + 1 }),
      {},
    )
    const items = Object.entries(counts).map(([i, n]) => `${n}× ${t.menu[Number(i)]}`)
    const latency = (1.6 + Math.random() * 0.9).toFixed(1)
    const id = nextId.current++
    setTickets((ts) => [{ id, table, items, latency, ready: false }, ...ts].slice(0, 4))
    setCart([])
    setTable((n) => (n % 12) + 1)
  }

  return (
    <DemoFrame title={t.title} note={demoNote[locale]}>
      <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-control bg-bg p-3">
          <div className="grid grid-cols-3 gap-2">
            {t.menu.map((dish, i) => (
              <button
                key={dish}
                type="button"
                onClick={() => setCart((c) => [...c, i])}
                className="rounded-lg border border-line bg-surface p-2.5 text-left transition hover:border-accent active:scale-95"
              >
                <span className="block text-xs font-bold sm:text-sm">{dish}</span>
                <span className="text-[10px] text-muted">{fmtNumber(prices[i])}</span>
              </button>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-line bg-surface p-3">
            <div className="mb-2 flex justify-between text-xs font-bold">
              <span>
                {t.order} · {t.table} {table}
              </span>
              <span>{cart.length}</span>
            </div>
            <p className="min-h-8 text-xs text-muted">
              {cart.length ? cart.map((i) => t.menu[i]).join(', ') : t.empty}
            </p>
            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="text-sm font-extrabold">
                {t.total}: {fmtNumber(total)} {currency[locale]}
              </span>
              <button
                type="button"
                onClick={send}
                disabled={!cart.length}
                className={`${smallBtn} disabled:opacity-50`}
              >
                {t.send}
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-control bg-[#0d1520] p-3 text-[#eef2f7]" aria-live="polite">
          <p className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#a3b0c2] uppercase">
            <Icon name="restaurant" className="size-3.5" /> {t.kitchen}
          </p>
          {tickets.length === 0 && (
            <p className="py-8 text-center text-xs text-[#a3b0c2]">{t.waiting}</p>
          )}
          <ul className="space-y-2">
            {tickets.map((ticket) => (
              <li
                key={ticket.id}
                className={`animate-fade-up rounded-lg border p-2.5 text-xs ${
                  ticket.ready
                    ? 'border-[#4ade80]/40 bg-[#4ade80]/10'
                    : 'border-[#f5b521]/40 bg-[#f5b521]/10'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span>
                    {t.table} {ticket.table}
                  </span>
                  <span className="text-[10px] font-semibold text-[#f5b521]">
                    {t.sent} {ticket.latency} s
                  </span>
                </div>
                <p className="mt-1 text-[#c9d4e3]">{ticket.items.join(' · ')}</p>
                {!ticket.ready && (
                  <button
                    type="button"
                    onClick={() =>
                      setTickets((ts) =>
                        ts.map((x) => (x.id === ticket.id ? { ...x, ready: true } : x)),
                      )
                    }
                    className="mt-2 rounded-md bg-[#4ade80] px-2 py-1 text-[10px] font-bold text-[#0d1520]"
                  >
                    {t.ready}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DemoFrame>
  )
}
