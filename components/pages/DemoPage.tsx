import Link from 'next/link'
import { demos } from '@/content/demos'
import { services } from '@/content/services'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { pathFor, type RouteKey } from '@/lib/routes'
import { breadcrumbLd, graph } from '@/lib/seo'
import { LazyDemo } from '@/components/demos/LazyDemo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import type { PageMeta, PageProps } from './types'

function find(key: RouteKey) {
  const item = 'id' in key ? demos.find((s) => s.id === key.id) : undefined
  if (!item) throw new Error(`Unknown demo ${JSON.stringify(key)}`)
  return item
}

export function getMeta(locale: Locale, key: RouteKey): PageMeta {
  const c = find(key).locales[locale]
  return { title: c.metaTitle, description: c.metaDescription, heading: c.h1, eyebrow: 'Demo' }
}

export function Page({ locale, routeKey }: PageProps) {
  const demo = find(routeKey)
  const c = demo.locales[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: c.name, path: pathFor(routeKey, locale) },
  ]
  const related = demo.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter((s) => s !== undefined)
  return (
    <>
      <section className="pt-8 pb-16 sm:pt-12">
        <div className="container-page">
          <Breadcrumbs items={crumbs} label={d.breadcrumbsLabel} />
          <div className="mt-10 max-w-3xl">
            <p className="eyebrow mb-4">{d.landing.demo}</p>
            <h1 className="text-title font-bold">{c.h1}</h1>
            <p className="mt-5 text-lg text-muted">{c.lead}</p>
          </div>
          <div className="mt-10">
            <LazyDemo id={demo.id} locale={locale} />
          </div>
          {related.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2">
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
          )}
        </div>
      </section>
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
