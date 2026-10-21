'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { Icon } from '@/components/ui/Icon'
import { DemoFrame, demoNote } from './DemoFrame'

const copy = {
  uz: {
    title: 'ERP · Ombor',
    product: 'Mahsulot',
    stock: 'Qoldiq',
    min: 'Minimum',
    sell: 'Sotish',
    reorder: "Ta'minotchiga buyurtma",
    ordered: 'Buyurtma berildi',
    low: 'Kam qoldi',
    ok: 'Yetarli',
    alerts: 'Ogohlantirishlar',
    noAlerts: "Hammasi joyida — kam qolgan tovar yo'q",
    alert: (name: string) => `${name}: qoldiq minimumdan past. Ta'minotchiga buyurtma tayyor.`,
    items: ['Un, 50 kg', "Paxta yog'i, 5 l", 'Guruch, 25 kg', 'Shakar, 50 kg', 'Choy, 1 kg'],
  },
  ru: {
    title: 'ERP · Склад',
    product: 'Товар',
    stock: 'Остаток',
    min: 'Минимум',
    sell: 'Продать',
    reorder: 'Заказ поставщику',
    ordered: 'Заказано',
    low: 'Мало',
    ok: 'Норма',
    alerts: 'Уведомления',
    noAlerts: 'Всё в порядке — дефицита нет',
    alert: (name: string) => `${name}: остаток ниже минимума. Заказ поставщику подготовлен.`,
    items: ['Мука, 50 кг', 'Хлопковое масло, 5 л', 'Рис, 25 кг', 'Сахар, 50 кг', 'Чай, 1 кг'],
  },
  en: {
    title: 'ERP · Inventory',
    product: 'Product',
    stock: 'Stock',
    min: 'Minimum',
    sell: 'Sell',
    reorder: 'Order from supplier',
    ordered: 'Ordered',
    low: 'Low',
    ok: 'OK',
    alerts: 'Alerts',
    noAlerts: 'All good — nothing is running low',
    alert: (name: string) => `${name}: stock below minimum. A supplier order is ready.`,
    items: ['Flour, 50 kg', 'Cotton oil, 5 l', 'Rice, 25 kg', 'Sugar, 50 kg', 'Tea, 1 kg'],
  },
}

const initial = [
  { stock: 42, min: 15, ordered: false },
  { stock: 18, min: 12, ordered: false },
  { stock: 9, min: 10, ordered: false },
  { stock: 30, min: 10, ordered: false },
  { stock: 64, min: 20, ordered: false },
]

export default function ErpDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [rows, setRows] = useState(initial)
  const update = (i: number, patch: Partial<(typeof initial)[number]>) =>
    setRows((rs) => rs.map((r, j) => (j === i ? { ...r, ...patch } : r)))
  const low = rows.map((r, i) => ({ ...r, i })).filter((r) => r.stock < r.min && !r.ordered)

  return (
    <DemoFrame title={t.title} note={demoNote[locale]}>
      <div className="overflow-x-auto rounded-control bg-bg">
        <table className="w-full min-w-[30rem] text-left text-xs sm:text-sm">
          <thead className="text-[10px] tracking-widest text-muted uppercase">
            <tr>
              <th className="px-3 py-2.5 font-bold">{t.product}</th>
              <th className="px-3 py-2.5 font-bold">{t.stock}</th>
              <th className="px-3 py-2.5 font-bold">{t.min}</th>
              <th className="px-3 py-2.5" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const isLow = r.stock < r.min
              return (
                <tr key={t.items[i]} className="border-t border-line">
                  <td className="px-3 py-2.5 font-semibold">{t.items[i]}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`font-extrabold ${isLow ? 'text-danger' : ''}`}>
                        {r.stock}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                          isLow ? 'bg-danger/15 text-danger' : 'bg-success/15 text-success'
                        }`}
                      >
                        {r.ordered ? t.ordered : isLow ? t.low : t.ok}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1 w-24 overflow-hidden rounded-full bg-line">
                      <div
                        className={`h-full rounded-full transition-all ${isLow ? 'bg-danger' : 'bg-accent'}`}
                        style={{ width: `${Math.min(100, (r.stock / (r.min * 4)) * 100)}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-muted">{r.min}</td>
                  <td className="px-3 py-2.5 text-right">
                    <button
                      type="button"
                      disabled={r.stock === 0}
                      onClick={() => update(i, { stock: Math.max(0, r.stock - 4) })}
                      className="rounded-md border border-line-strong px-2.5 py-1 text-[11px] font-bold transition hover:border-accent disabled:opacity-40"
                    >
                      −4 · {t.sell}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-3 rounded-control bg-bg p-3" aria-live="polite">
        <p className="mb-2 text-[10px] font-bold tracking-widest text-muted uppercase">
          {t.alerts}
        </p>
        {low.length === 0 ? (
          <p className="flex items-center gap-2 text-xs text-success">
            <Icon name="check" className="size-4" /> {t.noAlerts}
          </p>
        ) : (
          <ul className="space-y-2">
            {low.map((r) => (
              <li
                key={r.i}
                className="animate-fade-up flex flex-wrap items-center justify-between gap-2 rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-xs"
              >
                <span>{t.alert(t.items[r.i])}</span>
                <button
                  type="button"
                  onClick={() => update(r.i, { ordered: true, stock: r.stock + r.min * 3 })}
                  className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-ink"
                >
                  {t.reorder}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DemoFrame>
  )
}
