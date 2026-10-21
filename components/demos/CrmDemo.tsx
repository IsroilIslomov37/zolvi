'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { Icon } from '@/components/ui/Icon'
import { currency, DemoFrame, demoNote, fmtNumber, smallBtn } from './DemoFrame'

const copy = {
  uz: {
    title: 'CRM · Savdo voronkasi',
    stages: ['Yangi', "Bog'lanildi", 'Taklif', 'Yopildi'],
    add: 'Yangi lid',
    move: "keyingi bosqichga o'tkazish",
    done: 'bitim yopildi',
    log: 'Faollik',
    sources: ['Telegram', "Qo'ng'iroq", 'Sayt', 'Instagram'],
    hint: "Kartochkani bosing — lid keyingi bosqichga o'tadi.",
  },
  ru: {
    title: 'CRM · Воронка продаж',
    stages: ['Новые', 'Связались', 'Предложение', 'Закрыто'],
    add: 'Новый лид',
    move: 'перевести на следующий этап',
    done: 'сделка закрыта',
    log: 'Активность',
    sources: ['Telegram', 'Звонок', 'Сайт', 'Instagram'],
    hint: 'Нажмите на карточку — лид перейдёт на следующий этап.',
  },
  en: {
    title: 'CRM · Sales pipeline',
    stages: ['New', 'Contacted', 'Proposal', 'Won'],
    add: 'New lead',
    move: 'move to the next stage',
    done: 'deal won',
    log: 'Activity',
    sources: ['Telegram', 'Call', 'Website', 'Instagram'],
    hint: 'Click a card to move the lead to the next stage.',
  },
}

const names = ['Dilshod', 'Madina', 'Javohir', 'Nodira', 'Sardor', 'Kamola', 'Bekzod', 'Zarina']

type Lead = { id: number; name: string; source: number; amount: number; stage: number }

const initial: Lead[] = [
  { id: 1, name: names[0], source: 0, amount: 12_000_000, stage: 0 },
  { id: 2, name: names[1], source: 1, amount: 4_500_000, stage: 0 },
  { id: 3, name: names[2], source: 2, amount: 18_000_000, stage: 1 },
  { id: 4, name: names[3], source: 3, amount: 7_200_000, stage: 2 },
  { id: 5, name: names[4], source: 0, amount: 25_000_000, stage: 3 },
]

export default function CrmDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [leads, setLeads] = useState(initial)
  const [log, setLog] = useState<string[]>([])
  const [nextId, setNextId] = useState(6)

  const move = (lead: Lead) => {
    if (lead.stage >= 3) return
    setLeads((ls) => ls.map((l) => (l.id === lead.id ? { ...l, stage: l.stage + 1 } : l)))
    setLog((g) => [`${lead.name} → ${t.stages[lead.stage + 1]}`, ...g].slice(0, 4))
  }
  const add = () => {
    const lead = {
      id: nextId,
      name: names[nextId % names.length],
      source: nextId % 4,
      amount: (3 + (nextId % 7) * 2) * 1_000_000,
      stage: 0,
    }
    setLeads((ls) => [lead, ...ls])
    setLog((g) => [`+ ${lead.name} · ${t.sources[lead.source]}`, ...g].slice(0, 4))
    setNextId((n) => n + 1)
  }

  return (
    <DemoFrame
      title={t.title}
      note={demoNote[locale]}
      actions={
        <button type="button" onClick={add} className={smallBtn}>
          <Icon name="plus" className="size-3.5" /> {t.add}
        </button>
      }
    >
      <p className="mb-3 text-xs text-muted">{t.hint}</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {t.stages.map((stage, si) => {
          const items = leads.filter((l) => l.stage === si)
          const sum = items.reduce((s, l) => s + l.amount, 0)
          return (
            <div key={stage} className="min-h-40 rounded-control bg-bg p-2">
              <div className="mb-1 flex items-baseline justify-between px-1">
                <span className="text-xs font-bold">{stage}</span>
                <span className="text-[10px] text-muted">{items.length}</span>
              </div>
              <p className="mb-2 px-1 text-[10px] font-semibold text-accent-text">
                {fmtNumber(sum)} {currency[locale]}
              </p>
              <ul className="space-y-1.5">
                {items.map((l) => (
                  <li key={l.id}>
                    <button
                      type="button"
                      onClick={() => move(l)}
                      disabled={si === 3}
                      aria-label={`${l.name}: ${si === 3 ? t.done : t.move}`}
                      className="animate-fade-up w-full rounded-lg border border-line bg-surface p-2 text-left transition hover:border-accent disabled:cursor-default disabled:hover:border-line"
                    >
                      <span className="block text-xs font-bold">{l.name}</span>
                      <span className="mt-1 flex items-center justify-between text-[10px] text-muted">
                        {t.sources[l.source]}
                        {si === 3 ? (
                          <Icon name="check" className="size-3 text-success" />
                        ) : (
                          <span>{(l.amount / 1e6).toFixed(1)}M</span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="mt-3 rounded-control bg-bg p-3" aria-live="polite">
        <p className="mb-1 text-[10px] font-bold tracking-widest text-muted uppercase">{t.log}</p>
        <ul className="space-y-0.5 text-xs">
          {log.length === 0 ? (
            <li className="text-muted">—</li>
          ) : (
            log.map((entry, i) => <li key={`${entry}-${i}`}>{entry}</li>)
          )}
        </ul>
      </div>
    </DemoFrame>
  )
}
