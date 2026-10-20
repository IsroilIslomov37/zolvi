'use client'

import { useSyncExternalStore } from 'react'
import { Icon } from '@/components/ui/Icon'

type Theme = 'dark' | 'light'

const subscribe = (cb: () => void) => {
  const observer = new MutationObserver(cb)
  observer.observe(document.documentElement, { attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}
const getTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

export function ThemeToggle({ labels }: { labels: { toLight: string; toDark: string } }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark' as Theme)
  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next
        try {
          localStorage.setItem('theme', next)
        } catch {}
      }}
      aria-label={next === 'light' ? labels.toLight : labels.toDark}
      title={next === 'light' ? labels.toLight : labels.toDark}
      className="grid size-10 place-items-center rounded-xl border border-line text-muted transition hover:border-line-strong hover:text-text"
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  )
}

/** Runs before paint so a saved light theme never flashes dark. */
export const themeInitScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`
