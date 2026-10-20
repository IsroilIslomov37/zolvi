import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { slug } from 'github-slugger'
import { z } from 'zod'
import type { Locale } from './i18n'

const frontmatterSchema = z.object({
  /** Shared across translations of the same article. */
  id: z.string(),
  title: z.string().max(60, 'title must be ≤ 60 chars (it is the <title>)'),
  description: z.string().max(160),
  h1: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  author: z.string(),
  authorRole: z.string().optional(),
  /** Service ids this article links to. */
  services: z.array(z.string()).default([]),
  industries: z.array(z.string()).default([]),
  /** Drafts are published but show a review notice. */
  draft: z.boolean().default(false),
})

export type PostMeta = z.infer<typeof frontmatterSchema> & {
  slug: string
  locale: Locale
  readingMinutes: number
  headings: { id: string; text: string; level: 2 | 3 }[]
}
export type Post = PostMeta & { body: string }

const root = path.join(process.cwd(), 'content', 'blog')
const cache = new Map<Locale, Post[]>()

/** Same ids rehype-slug puts on rendered headings, so the table of contents links match. */
export const headingId = (text: string) => slug(text)

function readPosts(locale: Locale): Post[] {
  const dir = path.join(root, locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data, content } = matter(raw)
      const parsed = frontmatterSchema.safeParse(data)
      if (!parsed.success) {
        throw new Error(`content/blog/${locale}/${file}: ${parsed.error.message}`)
      }
      const headings = [...content.matchAll(/^(##|###) (.+)$/gm)].map((m) => ({
        level: m[1].length as 2 | 3,
        text: m[2].trim(),
        id: headingId(m[2]),
      }))
      const words = content.split(/\s+/).filter(Boolean).length
      return {
        ...parsed.data,
        slug: file.replace(/\.mdx$/, ''),
        locale,
        body: content,
        headings,
        readingMinutes: Math.max(1, Math.round(words / 200)),
      }
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())
}

export function getAllPosts(locale: Locale): Post[] {
  if (!cache.has(locale)) cache.set(locale, readPosts(locale))
  return cache.get(locale)!
}

export function getPost(locale: Locale, id: string): Post | undefined {
  return getAllPosts(locale).find((p) => p.id === id)
}
