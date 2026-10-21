import Link from 'next/link'
import { Fragment } from 'react'
import { comparisons } from '@/content/compare'
import { services } from '@/content/services'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor, type RouteKey } from '@/lib/routes'
import { breadcrumbLd, faqLd, graph } from '@/lib/seo'
import { PageHero } from '@/components/sections/PageHero'
import { FaqList } from '@/components/ui/FaqList'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import { Rich } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

const labels: L10n<{ table: string; criterion: string; when: string; compare: string }> = {
  uz: {
    table: 'Taqqoslash jadvali',
    criterion: 'Mezon',
    when: 'Qachon nimani tanlash kerak',
    compare: 'Taqqoslash',
  },
  ru: {
    table: 'Сравнительная таблица',
    criterion: 'Критерий',
    when: 'Когда что выбирать',
    compare: 'Сравнение',
  },
  en: {
    table: 'Comparison table',
    criterion: 'Criterion',
    when: 'When to choose which',
    compare: 'Comparison',
  },
}

function find(key: RouteKey) {
  const item = 'id' in key ? comparisons.find((s) => s.id === key.id) : undefined
  if (!item) throw new Error(`Unknown comparison ${JSON.stringify(key)}`)
  return item
}

export function getMeta(locale: Locale, key: RouteKey): PageMeta {
  const c = find(key).locales[locale]
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    heading: c.h1,
    eyebrow: labels[locale].compare,
  }
}

export function Page({ locale, routeKey }: PageProps) {
  const item = find(routeKey)
  const c = item.locales[locale]
  const t = labels[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: c.name, path: pathFor(routeKey, locale) },
  ]
  const related = item.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter((s) => s !== undefined)
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={t.compare}
        title={c.h1}
        lead={c.lead}
      />

      <Section id="table" title={t.table} className="bg-bg-soft">
        <div className="overflow-x-auto rounded-card border border-line bg-surface">
          <table className="w-full min-w-[40rem] text-left">
            <thead className="border-b border-line">
              <tr>
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-muted">
                  {t.criterion}
                </th>
                <th scope="col" className="px-5 py-4 font-bold">
                  {c.optionA}
                </th>
                <th scope="col" className="bg-accent/8 px-5 py-4 font-bold text-accent-text">
                  {c.optionB}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r.criterion} className="border-t border-line align-top">
                  <th scope="row" className="px-5 py-4 font-semibold">
                    {r.criterion}
                  </th>
                  <td className="px-5 py-4 text-muted">{r.a}</td>
                  <td className="bg-accent/8 px-5 py-4">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="when" title={t.when}>
        <div className="grid gap-4 md:grid-cols-2">
          {[c.chooseA, c.chooseB].map((block, i) => (
            <div key={block.title} className={`card p-6 sm:p-8 ${i === 1 ? 'border-accent' : ''}`}>
              <h3 className="font-sans text-xl font-bold tracking-normal">{block.title}</h3>
              <ul className="mt-5 space-y-3">
                {block.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Icon name="check" className="mt-1 size-4 shrink-0 text-accent-text" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="section-y bg-bg-soft">
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

      <Section id="faq" title={d.landing.faq}>
        <div className="max-w-4xl">
          <FaqList items={c.faq} />
        </div>
        <ul className="mt-12 flex flex-wrap gap-2">
          {related.map((s) => (
            <li key={s.id}>
              <Link
                href={pathFor({ type: 'service', id: s.id }, locale)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-semibold transition hover:border-accent"
              >
                <Icon name={s.icon} className="size-4 text-accent-text" />
                {s.locales[locale].name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <JsonLd data={graph(faqLd(c.faq), breadcrumbLd(crumbs))} />
    </>
  )
}
