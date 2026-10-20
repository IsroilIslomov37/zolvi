import type { Service } from '@/lib/types'
import ai from './ai'
import aiAutomation from './ai-automation'
import api from './api'
import automation from './automation'
import crm from './crm'
import customSoftware from './custom-software'
import ecommerce from './ecommerce'
import erp from './erp'
import mobileApps from './mobile-apps'
import pos from './pos'
import saas from './saas'
import support from './support'
import telegramBot from './telegram-bot'
import webApps from './web-apps'

/** Order here = order in menus, the footer and the services grid. */
export const services: Service[] = [
  crm,
  erp,
  automation,
  ai,
  aiAutomation,
  telegramBot,
  pos,
  webApps,
  mobileApps,
  saas,
  ecommerce,
  api,
  customSoftware,
  support,
]
