import type { Faq } from '@/lib/types'
import { Icon } from './Icon'
import { Rich } from './Todo'

/**
 * Native <details>: readable without JS, keyboard accessible, indexable. Browsers that
 * support ::details-content animate the height (see .faq in globals.css).
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq reveal-group divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-control py-6 text-left transition-colors hover:text-accent-text [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-lg leading-snug font-semibold tracking-tight sm:text-xl">
              {item.q}
            </h3>
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong text-text transition-[transform,background-color,border-color] duration-300 ease-out group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-accent-ink">
              <Icon name="plus" className="size-4" />
            </span>
          </summary>
          <p className="measure pb-7 text-muted">
            <Rich text={item.a} />
          </p>
        </details>
      ))}
    </div>
  )
}
