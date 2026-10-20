import { Manrope, Unbounded } from 'next/font/google'

// `subsets` only controls preloading: the generated CSS still contains every
// unicode-range, so Cyrillic files load on demand on /ru pages and are never
// downloaded on uz/en pages.
export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

// One static weight keeps the preloaded file small; headings only use bold.
export const unbounded = Unbounded({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-unbounded',
})
