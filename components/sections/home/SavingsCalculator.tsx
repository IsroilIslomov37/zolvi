'use client'

import { useId, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { Rich } from '@/components/ui/Todo'
import type { ProblemId } from '@/content/home'

type Copy = {
  business: string
  businesses: { id: string; label: string; href: string; solution: string }[]
  problem: string
  problems: { id: ProblemId; label: string; effect: string; range: [number, number] }[]
  people: string
  hours: string
  resultTitle: string
  resultHours: string
  resultFte: string
  recommended: string
  disclaimer: string
  cta: string
}

const WEEKS_PER_MONTH = 4.33
const HOURS_PER_FTE = 168
/** Round to a "human" number so the result never pretends to be precise. */
const roughly = (n: number) => (n < 20 ? Math.round(n) : Math.round(n / 10) * 10)

export function SavingsCalculator({ copy }: { copy: Copy }) {
  const id = useId()
  const [business, setBusiness] = useState(copy.businesses[0].id)
  const [problem, setProblem] = useState<ProblemId>(copy.problems[0].id)
  const [people, setPeople] = useState(5)
  const [hours, setHours] = useState(10)

  const selectedProblem = copy.problems.find((p) => p.id === problem)!
  const selectedBusiness = copy.businesses.find((b) => b.id === business)!
  const base = people * hours * WEEKS_PER_MONTH
  const [lo, hi] = selectedProblem.range.map((k) => roughly(base * k))
  const fte = ((base * selectedProblem.range[1]) / HOURS_PER_FTE).toFixed(1)

  const field =
    'w-full rounded-control border border-line-strong bg-bg px-4 py-3 text-base text-text focus:border-accent focus:outline-none'
  const label = 'mb-2 block text-sm font-semibold'

  return (
    <div className="reveal-group grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="card space-y-6 p-6 sm:p-8">
        <div>
          <label htmlFor={`${id}-b`} className={label}>
            {copy.business}
          </label>
          <select
            id={`${id}-b`}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className={field}
          >
            {copy.businesses.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
        <fieldset>
          <legend className={label}>{copy.problem}</legend>
          <div className="grid gap-2">
            {copy.problems.map((p) => (
              <label
                key={p.id}
                className={`flex cursor-pointer items-center gap-3 rounded-control border px-4 py-3 text-sm font-semibold transition ${
                  problem === p.id
                    ? 'border-accent bg-accent/10'
                    : 'border-line hover:border-line-strong'
                }`}
              >
                <input
                  type="radio"
                  name={`${id}-p`}
                  value={p.id}
                  checked={problem === p.id}
                  onChange={() => setProblem(p.id)}
                  className="accent-[var(--accent)]"
                />
                {p.label}
              </label>
            ))}
          </div>
        </fieldset>
        <Range
          id={`${id}-people`}
          label={copy.people}
          value={people}
          min={1}
          max={50}
          onChange={setPeople}
        />
        <Range
          id={`${id}-hours`}
          label={copy.hours}
          value={hours}
          min={2}
          max={30}
          onChange={setHours}
        />
      </div>

      <div className="panel flex flex-col bg-surface-2 p-6 sm:p-8" aria-live="polite">
        <p className="eyebrow">{copy.resultTitle}</p>
        <p className="text-figure mt-5 font-display font-bold">
          {lo}–{hi}
        </p>
        <p className="mt-2 text-muted">{copy.resultHours}</p>
        <p className="mt-4 text-sm text-muted">
          {fte} {copy.resultFte}
        </p>
        <div className="mt-6 flex gap-3 rounded-control border border-line bg-bg p-4 text-sm">
          <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-text" />
          {selectedProblem.effect}
        </div>
        <p className="mt-6 text-sm text-muted">{copy.recommended}:</p>
        <a
          href={selectedBusiness.href}
          className="mt-1 inline-flex items-center gap-1.5 font-bold text-accent-text"
        >
          {selectedBusiness.solution}
          <Icon name="arrow" className="size-4" />
        </a>
        <p className="mt-6 flex-1 text-xs text-muted">
          <Rich text={copy.disclaimer} />
        </p>
        <a
          href="#audit"
          data-track="cta"
          data-track-label="calculator"
          className="btn btn-primary mt-6"
        >
          {copy.cta}
        </a>
      </div>
    </div>
  )
}

function Range({
  id,
  label,
  value,
  min,
  max,
  onChange,
}: {
  id: string
  label: string
  value: number
  min: number
  max: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
        <output htmlFor={id} className="font-display text-lg font-bold text-accent-text">
          {value}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--accent)]"
      />
    </div>
  )
}
