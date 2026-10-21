import { Inter, Unbounded } from 'next/font/google'

// `subsets` only controls preloading: the generated CSS still contains every
// unicode-range, so Cyrillic files load on demand on /ru pages and are never
// downloaded on uz/en pages.
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// One static weight keeps the preloaded file small; headings only use bold.
export const unbounded = Unbounded({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-unbounded',
})
