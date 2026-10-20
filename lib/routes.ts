import { services } from '@/content/services'
import { industries } from '@/content/industries'
import { cases } from '@/content/cases'
import { comparisons } from '@/content/compare'
import { demos } from '@/content/demos'
import { getAllPosts } from './blog'
import { defaultLocale, locales, type L10n, type Locale } from './i18n'
import { site } from './site'

/** Section roots, translated per locale. Changing one changes every URL below it. */
export const sections = {
  services: { uz: 'xizmatlar', ru: 'uslugi', en: 'services' },
  industries: { uz: 'sohalar', ru: 'otrasli', en: 'industries' },
  cases: { uz: 'keyslar', ru: 'kejsy', en: 'case-studies' },
  pricing: { uz: 'narxlar', ru: 'ceny', en: 'pricing' },
  about: { uz: 'biz-haqimizda', ru: 'o-kompanii', en: 'about' },
  contact: { uz: 'aloqa', ru: 'kontakty', en: 'contact' },
  blog: { uz: 'blog', ru: 'blog', en: 'blog' },
  compare: { uz: 'taqqoslash', ru: 'sravnenie', en: 'compare' },
  demo: { uz: 'demo', ru: 'demo', en: 'demo' },
  privacy: {
    uz: 'maxfiylik-siyosati',
    ru: 'politika-konfidencialnosti',
    en: 'privacy-policy',
  },
} satisfies Record<string, L10n<string>>

type Section = keyof typeof sections
type ItemType = 'service' | 'industry' | 'case' | 'post' | 'compare' | 'demo'
type PageType = 'home' | Exclude<Section, 'compare' | 'demo'>

export type RouteKey = { type: PageType } | { type: ItemType; id: string }

const itemSection: Record<ItemType, Section> = {
  service: 'services',
  industry: 'industries',
  case: 'cases',
  post: 'blog',
  compare: 'compare',
  demo: 'demo',
}

function itemSlug(type: ItemType, id: string, locale: Locale): string {
  const find = <T extends { id: string }>(list: T[]) => {
    const item = list.find((i) => i.id === id)
    if (!item) throw new Error(`Unknown ${type} "${id}"`)
    return item
  }
  switch (type) {
    case 'service':
      return find(services).locales[locale].slug
    case 'industry':
      return find(industries).locales[locale].slug
    case 'case':
      return find(cases).locales[locale].slug
    case 'compare':
      return find(comparisons).locales[locale].slug
    case 'demo':
      return id
    case 'post': {
      const post = getAllPosts(locale).find((p) => p.id === id)
      if (!post) throw new Error(`Post "${id}" has no ${locale} version`)
      return post.slug
    }
  }
}

export function pathFor(key: RouteKey, locale: Locale): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`
  if (key.type === 'home') return prefix || '/'
  if ('id' in key) {
    return `${prefix}/${sections[itemSection[key.type]][locale]}/${itemSlug(key.type, key.id, locale)}`
  }
  return `${prefix}/${sections[key.type][locale]}`
}

export function absoluteUrl(path: string): string {
  return path === '/' ? site.url : `${site.url}${path}`
}

/** Every page of the site, used for static generation and the sitemap. */
export function allRouteKeys(): RouteKey[] {
  const pages: PageType[] = [
    'home',
    'services',
    'industries',
    'cases',
    'pricing',
    'about',
    'contact',
    'blog',
    'privacy',
  ]
  return [
    ...pages.map((type) => ({ type })),
    ...services.map((s) => ({ type: 'service' as const, id: s.id })),
    ...industries.map((s) => ({ type: 'industry' as const, id: s.id })),
    ...cases.map((c) => ({ type: 'case' as const, id: c.id })),
    ...getAllPosts(defaultLocale).map((p) => ({ type: 'post' as const, id: p.id })),
    ...comparisons.map((c) => ({ type: 'compare' as const, id: c.id })),
    ...demos.map((d) => ({ type: 'demo' as const, id: d.id })),
  ]
}

export function keyToString(key: RouteKey): string {
  return 'id' in key ? `${key.type}--${key.id}` : key.type
}

let pathIndex: Map<string, RouteKey> | null = null

/** Maps `/{locale-prefix}/a/b` back to a route key; null means 404. */
export function resolvePath(locale: Locale, segments: string[]): RouteKey | null {
  if (!pathIndex) {
    pathIndex = new Map()
    for (const key of allRouteKeys()) {
      for (const l of locales) pathIndex.set(`${l}:${pathFor(key, l)}`, key)
    }
  }
  const prefix = locale === defaultLocale ? '' : `/${locale}`
  const path = segments.length ? `${prefix}/${segments.join('/')}` : prefix || '/'
  return pathIndex.get(`${locale}:${path}`) ?? null
}

/** Segments for `[[...slug]]`, i.e. the path without the locale prefix. */
export function slugSegments(key: RouteKey, locale: Locale): string[] {
  const path = pathFor(key, locale)
  const withoutPrefix = locale === defaultLocale ? path : path.slice(locale.length + 1)
  return withoutPrefix.split('/').filter(Boolean)
}

export function alternatePaths(key: RouteKey): L10n<string> {
  return Object.fromEntries(locales.map((l) => [l, pathFor(key, l)])) as L10n<string>
}

export function ogImagePath(key: RouteKey, locale: Locale): string {
  return `/og/${locale}/${keyToString(key)}.png`
}
