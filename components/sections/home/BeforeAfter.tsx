'use client'

import { useState } from 'react'

export function BeforeAfter({
  labels,
  pains,
  metrics,
  confirm,
}: {
  labels: { before: string; after: string; slider: string }
  pains: string[]
  metrics: { value: string; label: string }[]
  confirm: string
}) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-accent">
      {/* Before */}
      <div className="grid min-h-[26rem] bg-[linear-gradient(135deg,#2a1b16,#1a1412)] p-6 text-[#ffd6c2] sm:p-10">
        <div className="max-w-md">
          <p className="mb-6 text-xs font-bold tracking-[0.16em] text-[#ff9a85] uppercase">
            {labels.before}
          </p>
          <ul className="space-y-3">
            {pains.map((p, i) => (
              <li
                key={p}
                style={{ transform: `rotate(${[-1.5, 1, -0.5, 1.5, -1][i % 5]}deg)` }}
                className="flex items-start gap-3 rounded-xl border border-[#ff8a5b]/25 bg-black/20 px-4 py-3 text-sm font-semibold sm:text-base"
              >
                <span className="mt-0.5 text-[#ff6b5b]">✕</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* After, revealed from the right */}
      <div
        className="absolute inset-0 flex justify-end bg-[linear-gradient(135deg,#132238,#0f1a2a)] p-6 text-[#eef2f7] sm:p-10"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <div className="w-full max-w-md">
          <p className="mb-6 text-right text-xs font-bold tracking-[0.16em] text-brand-yellow uppercase">
            {labels.after}
          </p>
          <div className="grid gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-baseline justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="font-display text-3xl font-bold text-brand-yellow sm:text-4xl">
                  {m.value}
                </span>
                <span className="text-right text-sm font-semibold text-[#c9d4e3]">{m.label}</span>
              </div>
            ))}
            <p className="text-right">
              <span className="todo">TODO: {confirm}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Handle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-brand-yellow"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-yellow text-brand-ink shadow-lg">
          <span className="text-base font-black tracking-tighter">‹ ›</span>
        </span>
      </div>
      <label className="sr-only" htmlFor="before-after-range">
        {labels.slider}
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
