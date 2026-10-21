'use client'

import { useEffect, useState, type ReactNode } from 'react'

/** Transparent over the top of the page; a blurred bar with a hairline once the page scrolls. */
export function HeaderFrame({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 8)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      data-scrolled={scrolled || undefined}
      className="sticky top-0 z-50 border-b border-transparent transition-[background-color,border-color] duration-300 ease-out data-scrolled:border-line data-scrolled:bg-bg/75 data-scrolled:backdrop-blur-xl"
    >
      {children}
    </header>
  )
}
