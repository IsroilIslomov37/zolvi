import { industries } from '@/content/industries'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import type { RouteKey } from '@/lib/routes'
import { LandingTemplate } from './LandingTemplate'
import type { PageMeta, PageProps } from './types'

function find(key: RouteKey) {
  const item = 'id' in key ? industries.find((s) => s.id === key.id) : undefined
  if (!item) throw new Error(`Unknown industry ${JSON.stringify(key)}`)
  return item
}

export const nav = 'industries'

export function getMeta(locale: Locale, key: RouteKey): PageMeta {
  const c = find(key).locales[locale]
  return { title: c.metaTitle, description: c.metaDescription, heading: c.h1, eyebrow: c.name }
}

/** Preselects the matching business type in the audit form. */
export function formBusiness(locale: Locale, key: RouteKey) {
  const order = [
    'restaurants',
    'hotels',
    'education',
    'retail',
    'clinics',
    'logistics',
    'tourism',
    'e-commerce',
    'manufacturing',
    'field-service',
  ]
  const index = order.indexOf(find(key).id)
  return index >= 0 ? getDictionary(locale).form.businessTypes[index] : undefined
}

export function Page({ locale, routeKey }: PageProps) {
  return <LandingTemplate item={find(routeKey)} locale={locale} />
}
