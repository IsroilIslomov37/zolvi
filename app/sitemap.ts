import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { defaultLocale, localeMeta, locales } from '@/lib/i18n'
import { absoluteUrl, allRouteKeys, alternatePaths, type RouteKey } from '@/lib/routes'

const priority: Partial<Record<RouteKey['type'], number>> = {
  home: 1,
  services: 0.9,
  service: 0.9,
  industries: 0.8,
  industry: 0.8,
  pricing: 0.8,
  cases: 0.7,
  case: 0.7,
  contact: 0.7,
  compare: 0.7,
  blog: 0.6,
  post: 0.6,
  about: 0.5,
  demo: 0.5,
  privacy: 0.2,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = new Map(getAllPosts(defaultLocale).map((p) => [p.id, p.updated ?? p.date]))
  return allRouteKeys().flatMap((key) => {
    const paths = alternatePaths(key)
    const languages = {
      ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, absoluteUrl(paths[l])])),
      'x-default': absoluteUrl(paths[defaultLocale]),
    }
    const lastModified = key.type === 'post' ? postDates.get(key.id) : undefined
    return locales.map((l) => ({
      url: absoluteUrl(paths[l]),
      lastModified,
      priority: priority[key.type],
      alternates: { languages },
    }))
  })
}
