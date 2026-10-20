import type { Metadata } from 'next'
import { NotFoundContent } from '@/components/pages/NotFoundContent'
import { themeInitScript } from '@/components/layout/ThemeToggle'
import { manrope, unbounded } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: '404 — Sahifa topilmadi | ZOLVI',
  description: "Bu manzilda sahifa yo'q. ZOLVI xizmatlari, sohalar va keyslar bo'limlariga o'ting.",
}

export default function GlobalNotFound() {
  return (
    <html
      lang="uz"
      className={`${manrope.variable} ${unbounded.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <NotFoundContent />
      </body>
    </html>
  )
}
