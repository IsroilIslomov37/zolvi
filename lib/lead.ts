import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  /** Normalized to +998XXXXXXXXX before validation. */
  phone: z.string().regex(/^\+998\d{9}$/),
  business: z.string().trim().max(80).optional().default(''),
  plan: z.string().trim().max(80).optional().default(''),
  comment: z.string().trim().max(1000).optional().default(''),
  locale: z.enum(['uz', 'ru', 'en']),
  page: z.string().max(300).optional().default(''),
  /** Honeypot: real people never fill it. */
  website: z.string().max(0).optional().default(''),
})

export type Lead = z.infer<typeof leadSchema>
