'use client'

import dynamic from 'next/dynamic'
import type { Locale } from '@/lib/i18n'
import type { DemoId } from '@/lib/types'

function Loading() {
  return <div className="h-[26rem] w-full animate-pulse rounded-2xl bg-surface-2" />
}

// Each demo is its own chunk, fetched only when it is about to be shown.
const demos = {
  crm: dynamic(() => import('./CrmDemo'), { ssr: false, loading: Loading }),
  pos: dynamic(() => import('./PosDemo'), { ssr: false, loading: Loading }),
  'telegram-bot': dynamic(() => import('./BotDemo'), { ssr: false, loading: Loading }),
  erp: dynamic(() => import('./ErpDemo'), { ssr: false, loading: Loading }),
  ai: dynamic(() => import('./AiDemo'), { ssr: false, loading: Loading }),
} satisfies Record<DemoId, unknown>

export function DemoHost({ id, locale }: { id: DemoId; locale: Locale }) {
  const Demo = demos[id]
  return <Demo locale={locale} />
}
