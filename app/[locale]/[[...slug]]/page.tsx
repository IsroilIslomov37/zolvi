import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/layout/SiteShell'
import { pageModule } from '@/components/pages'
import { isLocale, type Locale } from '@/lib/i18n'
import { allRouteKeys, resolvePath, slugSegments } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'

export const dynamicParams = false

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  return allRouteKeys().map((key) => ({ slug: slugSegments(key, locale) }))
}

async function resolve(params: PageProps<'/[locale]/[[...slug]]'>['params']) {
  const { locale, slug } = await params
  if (!isLocale(locale)) return null
  const key = resolvePath(locale, slug ?? [])
  return key ? { locale, key } : null
}

export async function generateMetadata(
  props: PageProps<'/[locale]/[[...slug]]'>,
): Promise<Metadata> {
  const route = await resolve(props.params)
  if (!route) return {}
  const meta = pageModule(route.key).getMeta(route.locale, route.key)
  return buildMetadata({
    key: route.key,
    locale: route.locale,
    title: meta.title,
    description: meta.description,
    type: meta.article ? 'article' : 'website',
    publishedTime: meta.article?.published.toISOString(),
    modifiedTime: (meta.article?.modified ?? meta.article?.published)?.toISOString(),
  })
}

export default async function Page(props: PageProps<'/[locale]/[[...slug]]'>) {
  const route = await resolve(props.params)
  if (!route) notFound()
  const { locale, key } = route
  const mod = pageModule(key)
  const { Page: View } = mod
  return (
    <SiteShell
      locale={locale}
      routeKey={key}
      nav={mod.nav}
      formBusiness={mod.formBusiness?.(locale, key)}
    >
      <View locale={locale} routeKey={key} />
    </SiteShell>
  )
}
