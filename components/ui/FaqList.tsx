import type { Faq } from '@/lib/types'
import { Icon } from './Icon'

/** Native <details>: readable without JS, keyboard accessible, indexable. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-line border-line bg-surface divide-y overflow-hidden rounded-2xl border">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-5 text-left font-semibold sm:px-7 [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-base leading-snug font-bold tracking-normal sm:text-lg">
              {item.q}
            </h3>
            <span className="border-line-strong mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-transform group-open:rotate-45">
              <Icon name="plus" className="size-4" />
            </span>
          </summary>
          <p className="text-muted px-5 pb-6 sm:px-7">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
