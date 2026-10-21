'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { DemoHost } from '@/components/demos/DemoHost'
import { Icon, type IconName } from '@/components/ui/Icon'
import { track } from '@/lib/analytics'
import type { Locale } from '@/lib/i18n'
import type { DemoId } from '@/lib/types'
import type { FilterId } from '@/content/home'
import { MiniPreview, type PreviewKind } from '@/components/ui/MiniPreview'

export type ExplorerCard = {
  id: string
  filter: Exclude<FilterId, 'all'>
  name: string
  summary: string
  href: string
  icon: IconName
  demo?: DemoId
}

/** Services shown as bento tiles in the "all" view, in tile order, with their mock-up. */
const featured: { id: string; preview: PreviewKind }[] = [
  { id: 'crm', preview: 'crm' },
  { id: 'erp', preview: 'erp' },
  { id: 'ai', preview: 'ai' },
  { id: 'telegram-bot', preview: 'bot' },
  { id: 'pos', preview: 'pos' },
  { id: 'automation', preview: 'flow' },
]
/** Bento placement: one large tile, one wide, two small, two half-width (4-column grid). */
const tileLayout = [
  'md:col-span-2 lg:row-span-2',
  'lg:col-span-2',
  '',
  '',
  'lg:col-span-2',
  'md:col-span-2',
]

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
  const tiles =
    filter === 'all'
      ? featured.flatMap((f) => {
          const card = cards.find((c) => c.id === f.id)
          return card ? [{ card, preview: f.preview }] : []
        })
      : []
  const rows = visible.filter((c) => !tiles.some((t) => t.card.id === c.id))

  function openDemo(id: DemoId, title: string) {
    setDemo({ id, title })
    dialogRef.current?.showModal()
    track('demo_open', { demo: id, page: location.pathname })
  }

  const demoButton = (card: ExplorerCard) =>
    card.demo && (
      <button
        type="button"
        onClick={() => openDemo(card.demo!, card.name)}
        className="relative z-10 inline-flex min-h-8 items-center gap-1.5 rounded-full border border-line-strong px-3 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-text"
      >
        <Icon name="play" className="size-3" />
        {labels.demo}
      </button>
    )

  return (
    <>
      <div role="group" aria-label={labels.filterLabel} className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors ${
              filter === f
                ? 'border-text bg-text text-bg'
                : 'border-line-strong text-muted hover:bg-surface-2 hover:text-text'
            }`}
          >
            {labels.filters[f]}
          </button>
        ))}
      </div>

      {tiles.length > 0 && (
        <ul className="grid gap-4 md:grid-cols-2 lg:auto-rows-[minmax(15rem,auto)] lg:grid-cols-4">
          {tiles.map(({ card, preview }, i) => (
            <li
              key={card.id}
              className={`card card-interactive group relative flex flex-col overflow-hidden p-6 ${tileLayout[i]}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-control bg-accent/12 text-accent-text">
                  <Icon name={card.icon} />
                </span>
                {demoButton(card)}
              </div>
              <h3
                className={`mt-6 font-sans font-bold tracking-tight ${i === 0 ? 'text-2xl' : 'text-xl'}`}
              >
                <Link href={card.href} className="after:absolute after:inset-0 after:content-['']">
                  {card.name}
                </Link>
              </h3>
              <p className="mt-2 text-muted">{card.summary}</p>
              <div
                className={`mt-6 ${i === 0 ? 'min-h-48 flex-1' : i === 1 || i === 4 ? 'h-28' : 'h-24'}`}
              >
                <MiniPreview kind={preview} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {rows.length > 0 && (
        <ul
          className={`grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 ${tiles.length ? 'mt-10' : ''}`}
        >
          {rows.map((card) => (
            <li
              key={card.id}
              className="group relative flex items-center gap-4 rounded-card px-3 py-3 transition-colors hover:bg-surface-2"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-control bg-surface-2 text-accent-text transition-colors group-hover:bg-surface-3">
                <Icon name={card.icon} className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <Link
                  href={card.href}
                  className="font-semibold after:absolute after:inset-0 after:content-['']"
                >
                  {card.name}
                </Link>
                <span className="mt-0.5 line-clamp-2 text-sm text-muted lg:line-clamp-1">
                  {card.summary}
                </span>
              </span>
              <Icon
                name="arrow"
                className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-text"
              />
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setDemo(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        aria-label={demo?.title}
        className="m-auto w-[min(64rem,calc(100vw-2rem))] max-w-none rounded-panel border border-line bg-bg p-0 text-text shadow-float backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="font-bold">{demo?.title}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={labels.close}
            className="grid size-10 place-items-center rounded-control border border-line transition-colors hover:bg-surface-2"
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
