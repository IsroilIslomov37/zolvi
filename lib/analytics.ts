'use client'

type Params = Record<string, string | number | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    ym?: (id: number, method: string, ...args: unknown[]) => void
  }
}

export type AnalyticsEvent =
  'cta_click' | 'lead_submit' | 'telegram_click' | 'phone_click' | 'demo_open'

/** Sends one event to GA4 and Yandex Metrica (goal = event name). No-op when neither is configured. */
export function track(event: AnalyticsEvent, params: Params = {}) {
  window.gtag?.('event', event, params)
  const ymId = Number(process.env.NEXT_PUBLIC_YM_ID)
  if (ymId) window.ym?.(ymId, 'reachGoal', event, params)
}
