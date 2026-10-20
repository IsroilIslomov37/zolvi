'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'

/**
 * One delegated listener instead of client components on every button:
 * tracks [data-track="cta"], Telegram links and tel: links.
 */
export function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest('a, button')
      if (!el) return
      const href = el.getAttribute('href') ?? ''
      const label = el.getAttribute('data-track-label') ?? el.textContent?.trim().slice(0, 60)
      const params = { label, page: location.pathname }
      if (href.startsWith('tel:')) track('phone_click', params)
      else if (href.includes('t.me/')) track('telegram_click', params)
      else if (el.getAttribute('data-track') === 'cta') track('cta_click', params)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
