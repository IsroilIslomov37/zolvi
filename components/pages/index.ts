import type { RouteKey } from '@/lib/routes'
import type { PageModule } from './types'
import * as home from './HomePage'
import * as services from './ServicesIndexPage'
import * as service from './ServicePage'
import * as industries from './IndustriesIndexPage'
import * as industry from './IndustryPage'
import * as cases from './CasesIndexPage'
import * as caseStudy from './CasePage'
import * as pricing from './PricingPage'
import * as about from './AboutPage'
import * as contact from './ContactPage'
import * as blog from './BlogIndexPage'
import * as post from './PostPage'
import * as compare from './ComparePage'
import * as demo from './DemoPage'
import * as privacy from './PrivacyPage'

const modules: Record<RouteKey['type'], PageModule> = {
  home,
  services,
  service,
  industries,
  industry,
  cases,
  case: caseStudy,
  pricing,
  about,
  contact,
  blog,
  post,
  compare,
  demo,
  privacy,
}

export function pageModule(key: RouteKey): PageModule {
  return modules[key.type]
}
