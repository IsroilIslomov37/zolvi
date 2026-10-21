'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'

type Props = {
  labels: { before: string; after: string; slider: string }
  pains: string[]
  metrics: { value: string; label: string }[]
  confirm: string
}

/** Wipe slider on wide screens; on phones the two states simply stack, nothing is cut. */
export function BeforeAfter(props: Props) {
  return (
    <>
      <div className="grid gap-4 md:hidden">
        <BeforePanel {...props} />
        <div className="tone-after rounded-panel p-6 sm:p-10">
          <AfterPanel {...props} />
        </div>
      </div>
      <Slider {...props} />
    </>
  )
}

function BeforePanel({ labels, pains }: Props) {
  return (
    <div className="tone-before rounded-panel p-6 sm:p-10">
      <div className="max-w-md">
        <p className="mb-6 text-sm font-semibold text-danger">{labels.before}</p>
        <ul className="space-y-3">
          {pains.map((p, i) => (
            <li
              key={p}
              style={{ transform: `rotate(${[-1.5, 1, -0.5, 1.5, -1][i % 5]}deg)` }}
              className="flex items-start gap-3 rounded-control border border-danger/25 bg-bg/40 px-4 py-3 font-medium"
            >
              <Icon name="close" className="mt-1 size-4 shrink-0 text-danger" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AfterPanel({
  labels,
  metrics,
  confirm,
  align = 'start',
}: Props & { align?: 'start' | 'end' }) {
  return (
    <div className={`w-full max-w-md ${align === 'end' ? 'ml-auto' : ''}`}>
      <p
        className={`mb-6 text-sm font-semibold text-accent-text ${align === 'end' ? 'text-right' : ''}`}
      >
        {labels.after}
      </p>
      <div className="grid gap-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex items-baseline justify-between gap-4 rounded-control border border-line bg-surface/60 px-5 py-4"
          >
            <span className="font-display text-3xl font-bold text-accent-text sm:text-4xl">
              {m.value}
            </span>
            <span className="text-right text-sm font-medium">{m.label}</span>
          </div>
        ))}
        <p className={align === 'end' ? 'text-right' : ''}>
          <span className="todo">TODO: {confirm}</span>
        </p>
      </div>
    </div>
  )
}

function Slider(props: Props) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative hidden overflow-hidden rounded-panel has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-accent md:block">
      <div className="min-h-[26rem]">
        <BeforePanel {...props} />
      </div>
      {/* After, revealed from the right */}
      <div
        className="tone-after absolute inset-0 flex p-10"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <AfterPanel {...props} align="end" />
      </div>
      {/* Handle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-ink shadow-float">
          <Icon name="prev" className="-mr-1 size-4" />
          <Icon name="next" className="-ml-1 size-4" />
        </span>
      </div>
      <label className="sr-only" htmlFor="before-after-range">
        {props.labels.slider}
      </label>
      <input
        id="before-after-range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}
