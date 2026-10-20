import { z } from 'zod'

/** Digits after +998, formatted as "90 123 45 67". */
export function formatUzPhone(input: string): string {
  let digits = input.replace(/\D/g, '')
  if (digits.startsWith('998')) digits = digits.slice(3)
  digits = digits.slice(0, 9)
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)]
  return parts.filter(Boolean).join(' ')
}

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  /** Normalized to +998XXXXXXXXX before validation. */
  phone: z.string().regex(/^\+998\d{9}$/),
  business: z.string().trim().max(80).optional().default(''),
  comment: z.string().trim().max(1000).optional().default(''),
  locale: z.enum(['uz', 'ru', 'en']),
  page: z.string().max(300).optional().default(''),
  /** Honeypot: real people never fill it. */
  website: z.string().max(0).optional().default(''),
})

export type Lead = z.infer<typeof leadSchema>
