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
  const d = getDictionary(locale)
  const list = only ? plans.filter((p) => only.includes(p.id)) : plans
  return (
    <ul
      className={`grid items-stretch gap-4 ${list.length >= 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'lg:grid-cols-3'}`}
    >
      {list.map((plan) => {
        const copy = plan.locales[locale]
        const featured = highlight ? plan.id === highlight : plan.featured
        return (
          <li
            key={plan.id}
            className={`relative flex flex-col rounded-panel border p-6 sm:p-8 ${
              featured
                ? 'border-accent bg-surface-2 shadow-elev-2'
                : 'border-line bg-surface shadow-elev-1'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-sans text-xl font-bold tracking-tight">{copy.name}</h3>
              {featured && (
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                  {d.landing.recommended}
                </span>
              )}
            </div>
            <p className="mt-2 min-h-12 text-muted">{copy.for}</p>
            <p className="mt-8 font-display text-3xl font-bold tracking-tight">
              <PriceTag value={plan.priceFrom} locale={locale} unit={copy.unit} />
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Icon name="clock" className="size-4" /> {copy.timeline}
            </p>
            <a
              href="#audit"
              data-track="cta"
              data-track-label={`plan-${plan.id}`}
              data-plan={plan.id}
              className={`btn mt-8 ${featured ? 'btn-primary' : 'btn-secondary'}`}
            >
              {ctaLabel}
            </a>
            <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-8">
              {copy.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-text">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <span>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
