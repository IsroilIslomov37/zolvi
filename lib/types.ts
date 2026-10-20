import type { L10n } from './i18n'
import type { IconName } from '@/components/ui/Icon'

export type DemoId = 'crm' | 'pos' | 'telegram-bot' | 'erp' | 'ai'

export type ServiceCategory = 'ai' | 'business' | 'products' | 'consulting'

export type Faq = { q: string; a: string }
export type Point = { title: string; text: string }
export type TextBlock = { h2: string; paragraphs: string[] }

/** Locale-specific copy shared by service and industry landing pages. */
export type LandingCopy = {
  slug: string
  /** Short name for menus, cards and breadcrumbs. */
  name: string
  /** One or two sentences for cards. */
  summary: string
  /** <title>, ≤ 60 chars, including the brand. */
  metaTitle: string
  /** <meta description>, ≤ 160 chars. */
  metaDescription: string
  h1: string
  /** First paragraph: carries the main keyword. */
  lead: string
  audience: string[]
  pains: Point[]
  includes: Point[]
  /** Free-form SEO copy rendered between "what's included" and the process. */
  sections: TextBlock[]
  /** Typical delivery time, e.g. "4–8 hafta". */
  timeline: string
  faq: Faq[]
}

type LandingBase = {
  id: string
  icon: IconName
  demo?: DemoId
  caseId?: string
  /** Pricing package this landing maps to on /narxlar. */
  plan: PlanId
  relatedServices: string[]
  relatedIndustries: string[]
  locales: L10n<LandingCopy>
}

export type Service = LandingBase & { kind: 'service'; category: ServiceCategory }
export type Industry = LandingBase & { kind: 'industry' }
export type Landing = Service | Industry

export type PlanId = 'start' | 'business' | 'enterprise' | 'support'

export type CaseCopy = {
  slug: string
  name: string
  summary: string
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
  task: string[]
  solution: string[]
  results: { value: string; label: string }[]
  quote: null | { text: string; author: string; role: string }
}

export type CaseStudy = {
  id: string
  industryId: string
  serviceIds: string[]
  /** Headline metric for cards, e.g. "−24%". */
  metric: string
  /** TODO marker when the client hasn't approved being named. */
  client: string | null
  stack: string[] | null
  locales: L10n<CaseCopy>
}

export type ComparisonCopy = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
  optionA: string
  optionB: string
  rows: { criterion: string; a: string; b: string }[]
  chooseA: { title: string; points: string[] }
  chooseB: { title: string; points: string[] }
  sections: TextBlock[]
  faq: Faq[]
}

export type Comparison = {
  id: string
  relatedServices: string[]
  locales: L10n<ComparisonCopy>
}

export type DemoCopy = {
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
}

export type Demo = {
  id: DemoId
  icon: IconName
  relatedServices: string[]
  locales: L10n<DemoCopy>
}
