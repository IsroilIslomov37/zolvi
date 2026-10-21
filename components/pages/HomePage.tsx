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
        <dl className="grid gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {c.stats.items.map((s) => (
            <div key={s.label} className="card p-6">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="text-figure mt-3 font-display font-bold">{s.value}</dd>
              <dd className="mt-3">
                <Todo>{c.stats.confirm}</Todo>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20">
          <p className="eyebrow mb-4">{c.testimonials.eyebrow}</p>
          <h2 className="text-heading font-bold">{c.testimonials.title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{c.testimonials.intro}</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <li key={n} className="card flex flex-col gap-6 p-6">
                <Icon name="quote" className="size-8 text-accent-text" />
                <p className="flex-1">
                  <Todo>{c.testimonials.placeholder}</Todo>
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="size-11 rounded-full border border-dashed border-line-strong"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted">— · — · —</span>
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

      <Section id="faq" eyebrow={c.faq.eyebrow} title={c.faq.title} className="bg-bg-soft">
        <div className="max-w-4xl">
          <FaqList items={c.faq.items} />
        </div>
      </Section>

      <JsonLd data={graph(faqLd(c.faq.items))} />
    </>
  )
}
