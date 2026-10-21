import Link from 'next/link'
import { home } from '@/content/home'
import { industries } from '@/content/industries'
import { services } from '@/content/services'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { faqLd, graph } from '@/lib/seo'
import { CaseCards } from '@/components/sections/CaseCards'
import { PricingCards } from '@/components/sections/PricingCards'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { BeforeAfter } from '@/components/sections/home/BeforeAfter'
import { Hero } from '@/components/sections/home/Hero'
import { IndustryMarquee } from '@/components/sections/home/IndustryMarquee'
import { SavingsCalculator } from '@/components/sections/home/SavingsCalculator'
import { ServicesExplorer, type ExplorerCard } from '@/components/sections/home/ServicesExplorer'
import { FaqList } from '@/components/ui/FaqList'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import { CountUp } from '@/components/ui/CountUp'
import { Todo } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

export function getMeta(locale: Locale): PageMeta {
  const c = home[locale]
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    heading: c.hero.display,
    eyebrow: c.hero.h1,
  }
}

function explorerCards(locale: Locale): ExplorerCard[] {
  return [
    ...services.map((s) => ({
      id: s.id,
      filter: s.category,
      name: s.locales[locale].name,
      summary: s.locales[locale].summary,
      href: pathFor({ type: 'service', id: s.id }, locale),
      icon: s.icon,
      demo: s.demo,
    })),
    ...industries.map((s) => ({
      id: s.id,
      filter: 'industries' as const,
      name: s.locales[locale].name,
      summary: s.locales[locale].summary,
      href: pathFor({ type: 'industry', id: s.id }, locale),
      icon: s.icon,
      demo: s.demo,
    })),
  ]
}

export function Page({ locale }: PageProps) {
  const c = home[locale]
  const d = getDictionary(locale)
  const calcBusinesses = c.calculator.businesses.map((b) => {
    const industry = b.industryId && industries.find((i) => i.id === b.industryId)
    const service = services.find((s) => s.id === b.serviceId)
    return {
      id: b.id,
      label: b.label,
      href: industry
        ? pathFor({ type: 'industry', id: industry.id }, locale)
        : service
          ? pathFor({ type: 'service', id: service.id }, locale)
          : pathFor({ type: 'services' }, locale),
      solution: industry
        ? industry.locales[locale].name
        : (service?.locales[locale].name ?? d.nav.services),
    }
  })

  return (
    <>
      <Hero locale={locale} />
      <IndustryMarquee locale={locale} />

      <Section
        id="before-after"
        eyebrow={c.beforeAfter.eyebrow}
        title={c.beforeAfter.title}
        intro={c.beforeAfter.intro}
      >
        <BeforeAfter
          labels={{
            before: c.beforeAfter.before,
            after: c.beforeAfter.after,
            slider: c.beforeAfter.slider,
          }}
          pains={c.beforeAfter.pains}
          metrics={c.beforeAfter.metrics}
          confirm={c.stats.confirm}
        />
      </Section>

      <Section
        id="services"
        eyebrow={c.services.eyebrow}
        title={c.services.title}
        intro={c.services.intro}
        className="bg-bg-soft"
      >
        <ServicesExplorer
          locale={locale}
          cards={explorerCards(locale)}
          labels={{ ...c.services, more: d.cta.more }}
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={pathFor({ type: 'services' }, locale)} className="btn btn-secondary">
            {d.cta.allServices} <Icon name="arrow" className="size-4" />
          </Link>
          <Link href={pathFor({ type: 'industries' }, locale)} className="btn btn-secondary">
            {d.cta.allIndustries} <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </Section>

      <Section
        id="process"
        eyebrow={c.process.eyebrow}
        title={c.process.title}
        intro={c.process.intro}
      >
        <ProcessSteps locale={locale} />
      </Section>

      <Section
        id="cases"
        eyebrow={c.cases.eyebrow}
        title={c.cases.title}
        intro={c.cases.intro}
        className="bg-bg-soft"
      >
        <CaseCards locale={locale} />
        <Link href={pathFor({ type: 'cases' }, locale)} className="btn btn-secondary mt-10">
          {d.cta.allCases} <Icon name="arrow" className="size-4" />
        </Link>
      </Section>

      <Section id="numbers" eyebrow={c.stats.eyebrow} title={c.stats.title}>
        <dl className="grid gap-x-6 gap-y-12 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {c.stats.items.map((s) => (
            <div key={s.label} className="flex flex-col border-l-2 border-accent pl-5 sm:pl-6">
              <dt className="order-2 mt-3 text-muted">{s.label}</dt>
              <dd className="order-1 font-display text-4xl leading-none font-bold tracking-tight min-[420px]:text-3xl lg:text-4xl">
                <CountUp value={s.value} />
              </dd>
              <dd className="order-3 mt-3">
                <Todo>{c.stats.confirm}</Todo>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-24 lg:mt-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">{c.testimonials.eyebrow}</p>
              <h2 className="text-heading font-bold">{c.testimonials.title}</h2>
              <p className="measure text-lead mt-5 text-muted">{c.testimonials.intro}</p>
            </div>
          </div>
          {/* Swipeable row on phones, three columns from md up. */}
          <ul className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {[1, 2, 3].map((n) => (
              <li
                key={n}
                className="card flex w-[85%] shrink-0 snap-start flex-col gap-8 p-6 sm:p-8 md:w-auto"
              >
                <Icon name="quote" className="size-8 text-accent-text" />
                <blockquote className="flex-1 text-lg">
                  <Todo>{c.testimonials.placeholder}</Todo>
                </blockquote>
                <div className="flex items-center gap-4 border-t border-line pt-6">
                  <span
                    className="grid size-12 shrink-0 place-items-center rounded-full bg-surface-2 text-muted"
                    aria-hidden="true"
                  >
                    <Icon name="crm" className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1 space-y-1.5" aria-hidden="true">
                    <span className="block h-2.5 w-28 rounded-full bg-line-strong" />
                    <span className="block h-2 w-40 max-w-full rounded-full bg-line" />
                  </span>
                  <span
                    className="h-6 w-14 shrink-0 rounded-md border border-dashed border-line-strong"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="calculator"
        eyebrow={c.calculator.eyebrow}
        title={c.calculator.title}
        intro={c.calculator.intro}
        className="bg-bg-soft"
      >
        <SavingsCalculator copy={{ ...c.calculator, businesses: calcBusinesses }} />
      </Section>

      <Section
        id="pricing"
        eyebrow={c.pricing.eyebrow}
        title={c.pricing.title}
        intro={c.pricing.intro}
      >
        <PricingCards
          locale={locale}
          ctaLabel={c.pricing.cta}
          only={['start', 'business', 'enterprise']}
        />
        <Link href={pathFor({ type: 'pricing' }, locale)} className="btn btn-secondary mt-10">
          {c.pricing.all} <Icon name="arrow" className="size-4" />
        </Link>
      </Section>

      <Section
        id="faq"
        eyebrow={c.faq.eyebrow}
        title={c.faq.title}
        className="bg-bg-soft"
        layout="split"
      >
        <FaqList items={c.faq.items} />
      </Section>

      <JsonLd data={graph(faqLd(c.faq.items))} />
    </>
  )
}
