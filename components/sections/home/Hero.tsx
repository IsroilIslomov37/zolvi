import { home } from '@/content/home'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { site } from '@/lib/site'
import { Icon } from '@/components/ui/Icon'
import { ChaosToOrder } from './ChaosToOrder'

export function Hero({ locale }: { locale: Locale }) {
  const { hero, chaosCards } = home[locale]
  const d = getDictionary(locale)
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[38rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-5">
            <span
              className="animate-pulse-dot size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            {hero.eyebrow}
          </p>
          <h1 className="font-sans text-lg font-bold tracking-normal text-muted sm:text-xl">
            {hero.h1}
          </h1>
          <p className="mt-4 font-display text-[clamp(2.4rem,1.4rem+4.6vw,4.6rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance">
            {hero.display}
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted">{hero.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#audit" data-track="cta" data-track-label="hero" className="btn btn-primary">
              {d.cta.audit}
              <Icon name="arrow" className="size-4" />
            </a>
            <a href={site.telegram.url} className="btn btn-secondary">
              <Icon name="telegram" className="size-4" />
              {d.cta.telegram}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">{hero.note}</p>
        </div>
        <div className="px-3 sm:px-6 lg:px-0">
          <ChaosToOrder
            cards={chaosCards}
            labels={{ panel: hero.panelLabel, toOrder: hero.toOrder, toChaos: hero.toChaos }}
          />
        </div>
      </div>
    </section>
  )
}
