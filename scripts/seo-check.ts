/**
 * Checks every prerendered page in .next (run `npm run build` first).
 * Fails (exit 1) when a page is missing or breaks: h1, title, description,
 * canonical, hreflang, og tags, valid JSON-LD, html lang, internal links,
 * or when the sitemap and the built pages disagree.
 *
 * Usage: npm run seo-check
 */
import fs from 'node:fs'
import path from 'node:path'
import { parse, type HTMLElement } from 'node-html-parser'

const SITE = 'https://zolvi.uz'
const LOCALES = ['uz', 'ru', 'en'] as const
const appDir = path.join(process.cwd(), '.next', 'server', 'app')

if (!fs.existsSync(appDir)) {
  console.error('No build found. Run `npm run build` first.')
  process.exit(1)
}

type Page = { url: string; file: string; root: HTMLElement; locale: string }

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
  })
}

/** .next/server/app/uz/xizmatlar.html → /xizmatlar, ru.html → /ru */
function toUrl(file: string): { url: string; locale: string } | null {
  const rel = path
    .relative(appDir, file)
    .split(path.sep)
    .join('/')
    .replace(/\.html$/, '')
  const [locale, ...rest] = rel.split('/')
  if (!(LOCALES as readonly string[]).includes(locale)) return null
  const tail = rest.join('/')
  if (locale === 'uz') return { url: tail ? `/${tail}` : '/', locale }
  return { url: tail ? `/${locale}/${tail}` : `/${locale}`, locale }
}

const pages: Page[] = walk(appDir)
  .map((file) => {
    const info = toUrl(file)
    return info ? { ...info, file, root: parse(fs.readFileSync(file, 'utf8')) } : null
  })
  .filter((p): p is Page => p !== null)

const errors: string[] = []
const warnings: string[] = []
const fail = (url: string, msg: string) => errors.push(`${url} — ${msg}`)
const warn = (url: string, msg: string) => warnings.push(`${url} — ${msg}`)

const urls = new Set(pages.map((p) => p.url))
const titles = new Map<string, string>()
const descriptions = new Map<string, string>()
const meta = (root: HTMLElement, attr: 'name' | 'property', key: string) =>
  root.querySelector(`meta[${attr}="${key}"]`)?.getAttribute('content')?.trim() ?? ''

for (const { url, root, locale } of pages) {
  // <html lang>
  const lang = root.querySelector('html')?.getAttribute('lang')
  if (lang !== locale) fail(url, `<html lang="${lang}"> should be "${locale}"`)

  // h1
  const h1s = root.querySelectorAll('h1')
  if (h1s.length !== 1) fail(url, `expected exactly 1 <h1>, found ${h1s.length}`)
  else if (!h1s[0].textContent.trim()) fail(url, '<h1> is empty')

  // title & description
  const title = root.querySelector('title')?.textContent.trim() ?? ''
  if (!title) fail(url, 'missing <title>')
  else if (title.length > 60) fail(url, `<title> is ${title.length} chars (max 60): ${title}`)
  const description = meta(root, 'name', 'description')
  if (!description) fail(url, 'missing meta description')
  else if (description.length > 160)
    fail(url, `description is ${description.length} chars (max 160)`)
  if (title && titles.has(title)) fail(url, `duplicate <title> with ${titles.get(title)}`)
  if (description && descriptions.has(description))
    fail(url, `duplicate description with ${descriptions.get(description)}`)
  titles.set(title, url)
  descriptions.set(description, url)

  // canonical
  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute('href')
  const expected = url === '/' ? SITE : `${SITE}${url}`
  if (!canonical) fail(url, 'missing canonical')
  else if (canonical !== expected) fail(url, `canonical ${canonical} ≠ ${expected}`)

  // hreflang
  const alternates = root.querySelectorAll('link[rel="alternate"][hreflang]')
  const langs = new Map(
    alternates.map((a) => [a.getAttribute('hreflang')!, a.getAttribute('href')!]),
  )
  for (const l of [...LOCALES, 'x-default']) {
    const href = langs.get(l)
    if (!href) fail(url, `missing hreflang="${l}"`)
    else if (!href.startsWith(SITE)) fail(url, `hreflang="${l}" is not absolute: ${href}`)
    else {
      const target = href.slice(SITE.length) || '/'
      if (!urls.has(target))
        fail(url, `hreflang="${l}" points to a page that was not built: ${target}`)
    }
  }
  if (langs.get(locale) !== expected) fail(url, `hreflang="${locale}" should point to itself`)

  // Open Graph / Twitter
  for (const key of ['og:title', 'og:description', 'og:url', 'og:image', 'og:locale', 'og:type']) {
    if (!meta(root, 'property', key)) fail(url, `missing ${key}`)
  }
  const ogImage = meta(root, 'property', 'og:image')
  if (ogImage) {
    const ogPath = ogImage.replace(SITE, '')
    const ogFile = path.join(appDir, ...ogPath.split('/').filter(Boolean)) + '.body'
    if (!fs.existsSync(ogFile)) fail(url, `og:image not generated: ${ogPath}`)
  }
  if (meta(root, 'property', 'og:url') !== expected) fail(url, 'og:url ≠ canonical')
  if (!meta(root, 'name', 'twitter:card')) fail(url, 'missing twitter:card')

  // JSON-LD
  const ldBlocks = root.querySelectorAll('script[type="application/ld+json"]')
  if (!ldBlocks.length) fail(url, 'no JSON-LD')
  const types = new Set<string>()
  for (const block of ldBlocks) {
    try {
      const data = JSON.parse(block.textContent)
      if (data['@context'] !== 'https://schema.org')
        fail(url, 'JSON-LD without @context schema.org')
      for (const node of data['@graph'] ?? [data]) {
        for (const t of [node['@type']].flat()) types.add(t)
        if (JSON.stringify(node).includes('TODO'))
          fail(url, `JSON-LD ${node['@type']} contains a TODO value`)
      }
    } catch (e) {
      fail(url, `invalid JSON-LD: ${(e as Error).message}`)
    }
  }
  if (!types.has('Organization')) fail(url, 'JSON-LD: Organization missing')
  if (url !== '/' && url !== '/ru' && url !== '/en' && !types.has('BreadcrumbList')) {
    fail(url, 'JSON-LD: BreadcrumbList missing')
  }
  if (
    root.querySelectorAll('details').length >= 5 &&
    !types.has('FAQPage') &&
    url.match(/(xizmatlar|uslugi|services|sohalar|otrasli|industries)\//)
  ) {
    fail(url, 'landing page has FAQ but no FAQPage JSON-LD')
  }

  // robots
  if (meta(root, 'name', 'robots').includes('noindex')) fail(url, 'page is noindex')

  // internal links
  for (const a of root.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href')!
    if (!href.startsWith('/') || href.startsWith('//')) continue
    const clean = href.split('#')[0].split('?')[0] || '/'
    if (!urls.has(clean)) fail(url, `broken internal link: ${href}`)
  }

  // accessibility basics
  if (!root.querySelector('a[href="#main"]')) warn(url, 'no skip link')
  for (const img of root.querySelectorAll('img')) {
    if (img.getAttribute('alt') === undefined)
      fail(url, `<img> without alt: ${img.getAttribute('src')}`)
  }
}

// sitemap ↔ pages
const sitemapFile = path.join(appDir, 'sitemap.xml.body')
if (!fs.existsSync(sitemapFile)) {
  errors.push('sitemap.xml was not generated')
} else {
  const xml = fs.readFileSync(sitemapFile, 'utf8')
  const inSitemap = new Set(
    [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(SITE.length) || '/'),
  )
  for (const u of urls) if (!inSitemap.has(u)) errors.push(`sitemap is missing ${u}`)
  for (const u of inSitemap)
    if (!urls.has(u)) errors.push(`sitemap lists ${u}, which was not built`)
  if (!xml.includes('hreflang="x-default"')) errors.push('sitemap has no x-default alternates')
}

// robots.txt
const robotsFile = path.join(appDir, 'robots.txt.body')
const robots = fs.existsSync(robotsFile) ? fs.readFileSync(robotsFile, 'utf8') : ''
for (const bot of ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
  if (!robots.includes(`User-Agent: ${bot}`)) errors.push(`robots.txt does not mention ${bot}`)
}
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) errors.push('robots.txt has no sitemap link')

// 404
const notFound = path.join(appDir, '_not-found.html')
if (fs.existsSync(notFound)) {
  const nf = parse(fs.readFileSync(notFound, 'utf8'))
  if (!meta(nf, 'name', 'robots').includes('noindex')) errors.push('404 page is not noindex')
}

const perLocale = LOCALES.map((l) => `${l}: ${pages.filter((p) => p.locale === l).length}`).join(
  ', ',
)
console.log(`Checked ${pages.length} pages (${perLocale}).`)
if (warnings.length)
  console.log(`\n${warnings.length} warning(s):\n  ${warnings.slice(0, 20).join('\n  ')}`)
if (errors.length) {
  console.error(`\n✗ ${errors.length} error(s):\n  ${errors.join('\n  ')}`)
  process.exit(1)
}
console.log('✓ SEO check passed')
