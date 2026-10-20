import { Manrope, Unbounded } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
})

export const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-unbounded',
})
