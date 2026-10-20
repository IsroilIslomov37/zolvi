'use client'

import { useEffect, useRef, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import type { DemoId } from '@/lib/types'
import { track } from '@/lib/analytics'
import { DemoHost } from './DemoHost'

/** Mounts the demo only when it scrolls near the viewport (keeps LCP and TBT low). */
export function LazyDemo({ id, locale }: { id: DemoId; locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          track('demo_open', { demo: id, page: location.pathname })
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [id])
  return (
    <div ref={ref} className="min-h-[26rem]">
      {visible ? (
        <DemoHost id={id} locale={locale} />
      ) : (
        <div className="h-[26rem] w-full rounded-2xl border border-line bg-surface-2" />
      )}
    </div>
  )
}
