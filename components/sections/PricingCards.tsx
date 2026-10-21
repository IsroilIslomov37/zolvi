import { formatPrice, plans } from '@/content/pricing'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import type { PlanId } from '@/lib/types'
import { Icon } from '@/components/ui/Icon'
import { Rich, Todo } from '@/components/ui/Todo'

export function PriceTag({
  value,
  locale,
  unit,
}: {
  value: number | null
  locale: Locale
  unit?: string
}) {
  const d = getDictionary(locale)
  if (value === null) return <Todo>{d.landing.price.toLowerCase()}</Todo>
  const price = formatPrice(value, locale)
  return (
    <span>
      {locale === 'uz' ? `${price} ${d.landing.priceFrom}` : `${d.landing.priceFrom} ${price}`}
      {unit && <span className="text-base font-semibold text-muted"> {unit}</span>}
    </span>
  )
}

export function PricingCards({
  locale,
  ctaLabel,
  only,
  highlight,
}: {
  locale: Locale
  ctaLabel: string
  only?: PlanId[]
  highlight?: PlanId
}) {
  const list = only ? plans.filter((p) => only.includes(p.id)) : plans
  return (
    <ul
      className={`grid gap-4 ${list.length >= 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'}`}
    >
      {list.map((plan) => {
        const copy = plan.locales[locale]
        const featured = highlight ? plan.id === highlight : plan.featured
        return (
          <li
            key={plan.id}
            className={`card flex flex-col p-6 sm:p-7 ${featured ? 'border-accent shadow-[0_0_0_1px_var(--accent)]' : ''}`}
          >
            <h3 className="font-sans text-xl font-bold tracking-normal">{copy.name}</h3>
            <p className="mt-2 min-h-12 text-sm text-muted">{copy.for}</p>
            <p className="mt-6 font-display text-2xl font-bold">
              <PriceTag value={plan.priceFrom} locale={locale} unit={copy.unit} />
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <Icon name="clock" className="size-4" /> {copy.timeline}
            </p>
            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6 text-sm">
              {copy.includes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-text" />
                  <span>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#audit"
              data-track="cta"
              data-track-label={`plan-${plan.id}`}
              data-plan={plan.id}
              className={`btn mt-7 ${featured ? 'btn-primary' : 'btn-secondary'}`}
            >
              {ctaLabel}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
