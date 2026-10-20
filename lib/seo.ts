import type { Metadata } from 'next'
import { defaultLocale, localeMeta, locales, type Locale } from './i18n'
import { absoluteUrl, alternatePaths, ogImagePath, pathFor, type RouteKey } from './routes'
import { site } from './site'
import type { Faq } from './types'

type MetaInput = {
  key: RouteKey
  locale: Locale
  /** Full <title>, ≤ 60 chars, brand included. */
  title: string
  /** ≤ 160 chars. */
  description: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
}

export function buildMetadata({
  key,
  locale,
  title,
  description,
  type = 'website',
  publishedTime,
  modifiedTime,
  noindex,
}: MetaInput): Metadata {
  const paths = alternatePaths(key)
  const url = absoluteUrl(paths[locale])
  const image = absoluteUrl(ogImagePath(key, locale))
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, absoluteUrl(paths[l])])),
        'x-default': absoluteUrl(paths[defaultLocale]),
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].ogLocale),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(type === 'article' ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    robots: noindex ? { index: false, follow: true } : undefined,
  }
}

/* ---------- JSON-LD ---------- */

const orgId = `${site.url}/#organization`

/** Organization + ProfessionalService. Unknown facts are omitted, never invented. */
export function organizationLd(locale: Locale, description: string) {
  const { address, geo, openingHours, phone } = site
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': orgId,
    name: site.name,
    ...(site.legalName ? { legalName: site.legalName } : {}),
    url: site.url,
    logo: `${site.url}/zolvi-logo.svg`,
    image: `${site.url}/icon-512.png`,
    description,
    email: site.email,
    ...(phone ? { telephone: phone } : {}),
    ...(site.foundingYear ? { foundingDate: String(site.foundingYear) } : {}),
    ...(address
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: address.street,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.country,
          },
        }
      : {}),
    ...(geo ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } } : {}),
    ...(openingHours
      ? {
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: openingHours.days,
            opens: openingHours.opens,
            closes: openingHours.closes,
          },
        }
      : {}),
    areaServed: [
      { '@type': 'City', name: 'Tashkent' },
      { '@type': 'Country', name: 'Uzbekistan' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      ...(phone ? { telephone: phone } : {}),
      availableLanguage: ['uz', 'ru', 'en'],
    },
    sameAs: site.sameAs,
    inLanguage: localeMeta[locale].htmlLang,
  }
}

export function websiteLd(locale: Locale) {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: absoluteUrl(pathFor({ type: 'home' }, locale)),
    name: site.name,
    inLanguage: localeMeta[locale].htmlLang,
    publisher: { '@id': orgId },
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqLd(faq: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function serviceLd(opts: {
  name: string
  description: string
  path: string
  serviceType: string
  /** Lowest price in UZS; omitted until real prices exist. */
  priceFrom: number | null
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.serviceType,
    provider: { '@id': orgId },
    areaServed: [
      { '@type': 'City', name: 'Tashkent' },
      { '@type': 'Country', name: 'Uzbekistan' },
    ],
    ...(opts.priceFrom
      ? {
          offers: {
            '@type': 'Offer',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: opts.priceFrom,
              priceCurrency: 'UZS',
            },
          },
        }
      : {}),
  }
}

export function articleLd(opts: {
  title: string
  description: string
  path: string
  image: string
  published: Date
  modified?: Date
  author: string
  locale: Locale
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.path),
    image: absoluteUrl(opts.image),
    datePublished: opts.published.toISOString(),
    dateModified: (opts.modified ?? opts.published).toISOString(),
    author: { '@type': 'Person', name: opts.author },
    publisher: { '@id': orgId },
    inLanguage: localeMeta[opts.locale].htmlLang,
  }
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
