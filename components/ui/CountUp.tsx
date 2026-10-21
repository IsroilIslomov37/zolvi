'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Counts the number inside a value like "180+", "99.98%" or "−38%" up from zero the
 * first time it scrolls into view. The server renders the final value, so it is
 * correct without JS; values already on screen at load are left as they are.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/)
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const [, prefix, num, suffix] = match
    const sep = num.includes(',') ? ',' : '.'
    const decimals = num.split(/[.,]/)[1]?.length ?? 0
    const target = Number(num.replace(',', '.'))
    const format = (n: number) => prefix + n.toFixed(decimals).replace('.', sep) + suffix
    const rect = el.getBoundingClientRect()
    if (rect.top < innerHeight && rect.bottom > 0) return

    let raf = 0
    setShown(format(0))
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setShown(t < 1 ? format(target * eased) : value)
          if (t < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  )
}
