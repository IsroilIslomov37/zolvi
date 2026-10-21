'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Slides the phone CTA bar in once the first screen is scrolled past, and out again
 * while the #audit form itself is on screen, so it never doubles the hero buttons.
 */
export function StickyCtaFrame({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    let past = false
    let atForm = false
    const update = () => setShow(past && !atForm)
    const onScroll = () => {
      past = scrollY > innerHeight * 0.8
      update()
    }
    const audit = document.getElementById('audit')
    const io = new IntersectionObserver(([entry]) => {
      atForm = entry.isIntersecting
      update()
    })
    if (audit) io.observe(audit)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [pathname])
  return (
    <div
      inert={!show}
      data-show={show || undefined}
      className="fixed inset-x-0 bottom-0 z-40 translate-y-full border-t border-line bg-bg/90 p-3 backdrop-blur-xl transition-transform duration-300 ease-out data-show:translate-y-0 md:hidden"
    >
      {children}
    </div>
  )
}
