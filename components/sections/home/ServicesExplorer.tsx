'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { DemoHost } from '@/components/demos/DemoHost'
import { Icon, type IconName } from '@/components/ui/Icon'
import { track } from '@/lib/analytics'
import type { Locale } from '@/lib/i18n'
import type { DemoId } from '@/lib/types'
import type { FilterId } from '@/content/home'

export type ExplorerCard = {
  id: string
  filter: Exclude<FilterId, 'all'>
  name: string
  summary: string
  href: string
  icon: IconName
  demo?: DemoId
}

export function ServicesExplorer({
  locale,
  cards,
  labels,
}: {
  locale: Locale
  cards: ExplorerCard[]
  labels: {
    filterLabel: string
    filters: Record<FilterId, string>
    demo: string
    close: string
    more: string
  }
}) {
  const [filter, setFilter] = useState<FilterId>('all')
  const [demo, setDemo] = useState<{ id: DemoId; title: string } | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const filters = (Object.keys(labels.filters) as FilterId[]).filter(
    (f) => f === 'all' || cards.some((c) => c.filter === f),
  )
  const visible = filter === 'all' ? cards : cards.filter((c) => c.filter === filter)

  function openDemo(id: DemoId, title: string) {
    setDemo({ id, title })
    dialogRef.current?.showModal()
    track('demo_open', { demo: id, page: location.pathname })
  }

  return (
    <>
      <div
        role="group"
        aria-label={labels.filterLabel}
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              filter === f
                ? 'border-accent bg-accent text-accent-ink'
                : 'border-line-strong text-muted hover:text-text'
            }`}
          >
            {labels.filters[f]}
          </button>
        ))}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((card) => (
          <li
            key={card.id}
            className="card group relative flex flex-col p-6 transition hover:border-line-strong"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-control bg-accent/12 text-accent-text">
                <Icon name={card.icon} />
              </span>
              {card.demo && (
                <button
                  type="button"
                  onClick={() => openDemo(card.demo!, card.name)}
                  className="relative z-10 rounded-full border border-line-strong px-3 py-1 text-xs font-bold text-muted transition hover:border-accent hover:text-text"
                >
                  ▶ {labels.demo}
                </button>
              )}
            </div>
            <h3 className="font-sans text-lg font-bold tracking-normal">
              <Link href={card.href} className="after:absolute after:inset-0 after:content-['']">
                {card.name}
              </Link>
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted">{card.summary}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent-text">
              {labels.more}
              <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
            </span>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setDemo(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        aria-label={demo?.title}
        className="m-auto w-[min(64rem,calc(100vw-2rem))] max-w-none rounded-panel border border-line bg-bg p-0 text-text backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="font-bold">{demo?.title}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={labels.close}
            className="grid size-9 place-items-center rounded-lg border border-line"
          >
            <Icon name="close" className="size-4" />
          </button>
        </div>
        <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-6">
          {demo && <DemoHost id={demo.id} locale={locale} />}
        </div>
      </dialog>
    </>
  )
}
