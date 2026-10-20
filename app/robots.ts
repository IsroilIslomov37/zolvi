import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

/** Everyone may crawl, AI assistants included — being cited by them is a goal. */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'PerplexityBot',
    'Google-Extended',
    'YandexAdditional',
  ]
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/api/'] })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
