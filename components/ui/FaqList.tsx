import type { Faq } from '@/lib/types'
import { Icon } from './Icon'
import { Rich } from './Todo'

/** Native <details>: readable without JS, keyboard accessible, indexable. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-5 text-left font-semibold sm:px-7 [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-base leading-snug font-bold tracking-normal sm:text-lg">
              {item.q}
            </h3>
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line-strong transition-transform group-open:rotate-45">
              <Icon name="plus" className="size-4" />
            </span>
          </summary>
          <p className="px-5 pb-6 text-muted sm:px-7">
            <Rich text={item.a} />
          </p>
        </details>
      ))}
    </div>
  )
}
