'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Section headings and lists whose children rise in one after another (see [data-reveal] in globals.css). */
const TARGETS =
  'main .section-y > .container-page > header, main .section-y :is(ul, ol, dl, .reveal-group)'
const SKIP = 'nav, footer, dialog, [data-ui], .prose-zolvi, .faq details'

/**
 * Marks reveal groups and lets an IntersectionObserver play their entrance once.
 * Groups already on screen when it runs are shown as they are, so nothing above the
 * fold flickers; without JS (or with reduced motion) everything simply stays visible.
 */
export function RevealObserver() {
  const pathname = usePathname()
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const groups = [...document.querySelectorAll<HTMLElement>(TARGETS)].filter(
      (el) => !el.closest(SKIP),
    )
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-inview', '')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    for (const el of groups) {
      // Checked here, not in the filter: outer groups are marked earlier in this loop
      // (document order), so a list inside one is skipped instead of animating twice.
      if (el.hasAttribute('data-reveal') || el.parentElement?.closest('[data-reveal]')) continue
      el.setAttribute('data-reveal', '')
      ;[...el.children].forEach((child, i) =>
        (child as HTMLElement).style.setProperty('--i', String(Math.min(i, 8))),
      )
      const r = el.getBoundingClientRect()
      if (r.top < innerHeight && r.bottom > 0) el.setAttribute('data-inview', 'instant')
      else io.observe(el)
    }
    document.documentElement.classList.add('js-reveal')
    return () => io.disconnect()
  }, [pathname])
  return null
}
