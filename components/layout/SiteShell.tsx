import type { ReactNode } from 'react'
import { AuditCta } from '@/components/sections/AuditCta'
import { JsonLd } from '@/components/ui/JsonLd'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { alternatePaths, type RouteKey } from '@/lib/routes'
import { graph, organizationLd, websiteLd } from '@/lib/seo'
import { Footer } from './Footer'
import { Header, type NavSection } from './Header'
import { StickyCta } from './StickyCta'

export function SiteShell({
  locale,
  routeKey,
  nav,
  formBusiness,
  children,
}: {
  locale: Locale
  routeKey: RouteKey
  nav?: NavSection
  formBusiness?: string
  children: ReactNode
}) {
  const d = getDictionary(locale)
  return (
    <>
      <Header locale={locale} paths={alternatePaths(routeKey)} active={nav} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
        <AuditCta locale={locale} defaultBusiness={formBusiness} />
      </main>
      <Footer locale={locale} paths={alternatePaths(routeKey)} />
      <StickyCta locale={locale} />
      <JsonLd data={graph(organizationLd(locale, d.brandTagline), websiteLd(locale))} />
    </>
  )
}
