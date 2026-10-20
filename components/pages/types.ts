import type { ReactNode } from 'react'
import type { NavSection } from '@/components/layout/Header'
import type { Locale } from '@/lib/i18n'
import type { RouteKey } from '@/lib/routes'

export type PageMeta = {
  /** <title>, ≤ 60 chars, brand included. */
  title: string
  /** ≤ 160 chars. */
  description: string
  /** Large text on the OG image (usually the H1). */
  heading: string
  /** Small label above the heading on the OG image. */
  eyebrow?: string
  article?: { published: Date; modified?: Date }
}

export type PageProps = { locale: Locale; routeKey: RouteKey }

export type PageModule = {
  getMeta: (locale: Locale, key: RouteKey) => PageMeta
  Page: (props: PageProps) => ReactNode | Promise<ReactNode>
  nav?: NavSection
  /** Business type preselected in the audit form. */
  formBusiness?: (locale: Locale, key: RouteKey) => string | undefined
}
