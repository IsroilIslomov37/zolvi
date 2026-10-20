'use client'

import { useEffect, useId, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/ui/Icon'

export function MobileMenu({
  labels,
  children,
}: {
  labels: { open: string; close: string; label: string }
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const panelId = useId()

  // Close after navigation and on Escape.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((o) => !o)}
        className="grid size-10 place-items-center rounded-xl border border-line"
      >
        <Icon name={open ? 'close' : 'menu'} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        onClick={(e) => (e.target as Element).closest('a') && setOpen(false)}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg px-4 pt-6 pb-28"
      >
        <nav aria-label={labels.label}>{children}</nav>
      </div>
    </div>
  )
}
