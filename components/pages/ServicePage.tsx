import { services } from '@/content/services'
import type { Locale } from '@/lib/i18n'
import type { RouteKey } from '@/lib/routes'
import { LandingTemplate } from './LandingTemplate'
import type { PageMeta, PageProps } from './types'

function find(key: RouteKey) {
  const item = 'id' in key ? services.find((s) => s.id === key.id) : undefined
  if (!item) throw new Error(`Unknown service ${JSON.stringify(key)}`)
  return item
}

export const nav = 'services'

export function getMeta(locale: Locale, key: RouteKey): PageMeta {
  const c = find(key).locales[locale]
  return { title: c.metaTitle, description: c.metaDescription, heading: c.h1, eyebrow: c.name }
}

export function Page({ locale, routeKey }: PageProps) {
  return <LandingTemplate item={find(routeKey)} locale={locale} />
}
