import type { CSSProperties } from 'react'
import { home } from '@/content/home'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { site } from '@/lib/site'
import { Icon } from '@/components/ui/Icon'
import { Magnetic } from '@/components/ui/Magnetic'
import { ChaosToOrder } from './ChaosToOrder'

export function Hero({ locale }: { locale: Locale }) {
  const { hero, chaosCards } = home[locale]
  const d = getDictionary(locale)
  return (
    <section
      style={{ '--p': 0, '--mx': 0, '--my': 0 } as CSSProperties}
      className="relative overflow-hidden pt-10 pb-20 sm:pt-16 lg:pt-20 lg:pb-28"
    >
      {/* Dot grid tilted while the cards are in chaos; it straightens as they settle. */}
      <div className="hero-grid pointer-events-none absolute -inset-[10%]" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-muted">
            <span
              className="animate-pulse-dot size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-sans text-lg font-semibold tracking-normal text-muted sm:text-xl">
            {hero.h1}
          </h1>
          <p className="text-display mt-3 font-display font-bold text-balance">{hero.display}</p>
          <p className="measure text-lead mt-6 text-muted">{hero.lead}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic className="flex sm:inline-flex">
              <a
                href="#audit"
                data-track="cta"
                data-track-label="hero"
                className="btn btn-primary group w-full sm:w-auto"
              >
                {d.cta.audit}
                <Icon
                  name="arrow"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </Magnetic>
            <a href={site.telegram.url} className="btn btn-secondary">
              <Icon name="telegram" className="size-4" />
              {d.cta.telegram}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">{hero.note}</p>
        </div>
        <div className="px-3 sm:px-6 lg:col-span-6 lg:pr-0 lg:pl-6">
          <ChaosToOrder
            cards={chaosCards}
            labels={{ panel: hero.panelLabel, toOrder: hero.toOrder, toChaos: hero.toChaos }}
          />
        </div>
      </div>
    </section>
  )
}
