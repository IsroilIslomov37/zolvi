import Link from 'next/link'
import { Fragment } from 'react'
import { getPlan } from '@/content/pricing'
import { demos } from '@/content/demos'
import { industries } from '@/content/industries'
import { services } from '@/content/services'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { pathFor, type RouteKey } from '@/lib/routes'
import { breadcrumbLd, faqLd, graph, serviceLd } from '@/lib/seo'
import type { Landing } from '@/lib/types'
import { LazyDemo } from '@/components/demos/LazyDemo'
import { CaseCards } from '@/components/sections/CaseCards'
import { PriceTag } from '@/components/sections/PricingCards'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { FaqList } from '@/components/ui/FaqList'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import { Rich } from '@/components/ui/Todo'
import { site } from '@/lib/site'

/** Shared layout of every service and industry page. */
export function LandingTemplate({ item, locale }: { item: Landing; locale: Locale }) {
  const d = getDictionary(locale)
  const c = item.locales[locale]
  const key: RouteKey = { type: item.kind, id: item.id }
  const path = pathFor(key, locale)
  const parentKey: RouteKey = { type: item.kind === 'service' ? 'services' : 'industries' }
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    {
      name: item.kind === 'service' ? d.nav.services : d.nav.industries,
      path: pathFor(parentKey, locale),
    },
    { name: c.name, path },
  ]
  const plan = getPlan(item.plan)
  const relatedServices = item.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter((s) => s !== undefined)
  const relatedIndustries = item.relatedIndustries
    .map((id) => industries.find((s) => s.id === id))
    .filter((s) => s !== undefined)
  const demo = item.demo && demos.find((x) => x.id === item.demo)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative">
          <Breadcrumbs items={crumbs} label={d.breadcrumbsLabel} />
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="mb-6 grid size-14 place-items-center rounded-card bg-accent/12 text-accent-text">
                <Icon name={item.icon} className="size-7" />
              </span>
              <h1 className="text-title font-bold">{c.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg text-muted">{c.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#audit"
                  data-track="cta"
                  data-track-label={`landing-${item.id}`}
                  className="btn btn-primary"
                >
                  {d.cta.audit} <Icon name="arrow" className="size-4" />
                </a>
                <a href={site.telegram.url} className="btn btn-secondary">
                  <Icon name="telegram" className="size-4" /> {d.cta.telegram}
                </a>
              </div>
            </div>
            <dl className="card grid grid-cols-2 divide-x divide-line">
              <div className="p-5 sm:p-6">
                <dt className="text-sm text-muted">{d.landing.timeline}</dt>
                <dd className="mt-2 font-display text-xl font-bold sm:text-2xl">{c.timeline}</dd>
              </div>
              <div className="p-5 sm:p-6">
                <dt className="text-sm text-muted">{d.landing.price}</dt>
                <dd className="mt-2 font-display text-xl font-bold sm:text-2xl">
                  <PriceTag
                    value={plan.priceFrom}
                    locale={locale}
                    unit={plan.locales[locale].unit}
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Who it is for + pains */}
      <Section id="pains" title={d.landing.pains} className="bg-bg-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h3 className="font-sans text-sm font-semibold text-accent-text">
              {d.landing.audience}
            </h3>
            <ul className="mt-5 space-y-3">
              {c.audience.map((a) => (
                <li key={a} className="flex gap-3">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-accent-text" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {c.pains.map((p) => (
              <li key={p.title} className="card p-6">
                <h3 className="font-sans text-lg font-bold tracking-normal">{p.title}</h3>
                <p className="mt-2 text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What's included */}
      <Section id="includes" title={d.landing.includes}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.includes.map((inc, i) => (
            <li key={inc.title} className="card p-6">
              <span className="font-display text-sm font-bold text-accent-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-sans text-lg font-bold tracking-normal">{inc.title}</h3>
              <p className="mt-2 text-muted">{inc.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Demo */}
      {item.demo && (
        <Section id="demo" title={d.landing.demo} intro={d.landing.demoHint} className="bg-bg-soft">
          <LazyDemo id={item.demo} locale={locale} />
          {demo && (
            <Link
              href={pathFor({ type: 'demo', id: demo.id }, locale)}
              className="mt-6 inline-flex items-center gap-1.5 font-bold text-accent-text"
            >
              {d.cta.demoFull} <Icon name="external" className="size-4" />
            </Link>
          )}
        </Section>
      )}

      {/* Long-form copy */}
      <section className="section-y">
        <div className="container-page">
          <div className="prose-zolvi max-w-3xl">
            {c.sections.map((s) => (
              <Fragment key={s.h2}>
                <h2>{s.h2}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>
                    <Rich text={p} />
                  </p>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Process + price */}
      <Section id="process" title={d.landing.process} className="bg-bg-soft">
        <ProcessSteps locale={locale} />
        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_1.4fr]">
          <div className="card flex flex-col justify-between gap-6 p-6 sm:p-8">
            <div>
              <p className="text-sm text-muted">{d.landing.timeline}</p>
              <p className="mt-2 font-display text-3xl font-bold">{c.timeline}</p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {d.landing.price} · {plan.locales[locale].name}
              </p>
              <p className="mt-2 font-display text-3xl font-bold">
                <PriceTag value={plan.priceFrom} locale={locale} unit={plan.locales[locale].unit} />
              </p>
            </div>
          </div>
          <div className="card p-6 sm:p-8">
            <p className="text-muted">{d.landing.priceNote}</p>
            <ul className="mt-5 space-y-2.5">
              {plan.locales[locale].includes.map((inc) => (
                <li key={inc} className="flex gap-2.5">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-accent-text" />
                  <span>
                    <Rich text={inc} />
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={pathFor({ type: 'pricing' }, locale)}
              className="mt-6 inline-flex items-center gap-1.5 font-bold text-accent-text"
            >
              {d.nav.pricing} <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section id="why" title={d.why.title}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {d.why.items.map((w) => (
            <li key={w.title} className="border-t-2 border-accent pt-5">
              <h3 className="font-sans text-lg font-bold tracking-normal">{w.title}</h3>
              <p className="mt-2 text-muted">{w.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {item.caseId && (
        <Section id="case" title={d.landing.case} className="bg-bg-soft">
          <CaseCards locale={locale} ids={[item.caseId]} />
        </Section>
      )}

      <Section id="faq" title={d.landing.faq} className={item.caseId ? '' : 'bg-bg-soft'}>
        <div className="max-w-4xl">
          <FaqList items={c.faq} />
        </div>
      </Section>

      {/* Internal links: related services as cards (with summaries), industries as chips */}
      {relatedServices.length > 0 && (
        <Section id="related" title={d.landing.relatedServices} className="border-t border-line">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => (
              <li
                key={s.id}
                className="card group relative flex flex-col p-5 transition hover:border-line-strong"
              >
                <Icon name={s.icon} className="size-5 text-accent-text" />
                <h3 className="mt-4 font-sans text-base font-bold tracking-normal">
                  <Link
                    href={pathFor({ type: 'service', id: s.id }, locale)}
                    className="after:absolute after:inset-0"
                  >
                    {s.locales[locale].name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted">{s.locales[locale].summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
      <section className="border-t border-line py-12">
        <div className="container-page">
          {relatedIndustries.length > 0 && (
            <nav aria-labelledby="rel-industries">
              <h2 id="rel-industries" className="font-sans text-sm font-semibold text-muted">
                {item.kind === 'service' ? d.landing.relatedIndustries : d.nav.industries}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {relatedIndustries.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={pathFor({ type: 'industry', id: s.id }, locale)}
                      className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-semibold transition hover:border-accent"
                    >
                      <Icon name={s.icon} className="size-4 text-accent-text" />
                      {s.locales[locale].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </section>

      <JsonLd
        data={graph(
          serviceLd({
            name: c.name,
            description: c.metaDescription,
            path,
            serviceType: c.name,
            priceFrom: plan.priceFrom,
          }),
          faqLd(c.faq),
          breadcrumbLd(crumbs),
        )}
      />
    </>
  )
}
