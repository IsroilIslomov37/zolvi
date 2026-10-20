/**
 * Fast content lint (no build needed): title/description lengths, duplicates and
 * word counts for every landing page in every locale.
 * Usage: npx tsx scripts/check-content.ts
 */
import { cases } from '../content/cases'
import { comparisons } from '../content/compare'
import { demos } from '../content/demos'
import { industries } from '../content/industries'
import { services } from '../content/services'
import { locales } from '../lib/i18n'
import type { LandingCopy } from '../lib/types'

let problems = 0
const seen = new Map<string, string>()
const words = (s: string) => s.split(/\s+/).filter(Boolean).length

function landingWords(c: LandingCopy) {
  return [
    c.h1,
    c.lead,
    ...c.audience,
    ...c.pains.flatMap((p) => [p.title, p.text]),
    ...c.includes.flatMap((p) => [p.title, p.text]),
    ...c.sections.flatMap((s) => [s.h2, ...s.paragraphs]),
    ...c.faq.flatMap((f) => [f.q, f.a]),
  ].reduce((n, s) => n + words(s), 0)
}

for (const item of [...services, ...industries]) {
  for (const l of locales) {
    const c = item.locales[l]
    const where = `${item.kind}:${item.id}:${l}`
    const report = (msg: string) => {
      problems++
      console.log(`✗ ${where} — ${msg}`)
    }
    if (c.metaTitle.length > 60) report(`title ${c.metaTitle.length} chars: ${c.metaTitle}`)
    if (c.metaDescription.length > 160) report(`description ${c.metaDescription.length} chars`)
    if (c.metaDescription.length < 70) report(`description too short (${c.metaDescription.length})`)
    for (const [kind, value] of [
      ['title', c.metaTitle],
      ['description', c.metaDescription],
      ['slug', `${l}/${c.slug}`],
    ]) {
      const prev = seen.get(`${kind}:${value}`)
      if (prev) report(`duplicate ${kind} with ${prev}`)
      seen.set(`${kind}:${value}`, where)
    }
    const n = landingWords(c)
    if (n < 380) report(`only ${n} words of unique copy`)
    if (c.faq.length < 5 || c.faq.length > 7) report(`${c.faq.length} FAQ items (need 5–7)`)
  }
}
// Other pages with per-locale meta
for (const [kind, list] of [
  ['case', cases],
  ['demo', demos],
  ['compare', comparisons],
] as const) {
  for (const item of list) {
    for (const l of locales) {
      const c = item.locales[l]
      const where = `${kind}:${item.id}:${l}`
      if (c.metaTitle.length > 60) {
        problems++
        console.log(`✗ ${where} — title ${c.metaTitle.length} chars: ${c.metaTitle}`)
      }
      if (c.metaDescription.length > 160) {
        problems++
        console.log(`✗ ${where} — description ${c.metaDescription.length} chars`)
      }
    }
  }
}

console.log(problems ? `\n${problems} problem(s)` : '✓ content OK')
process.exit(problems ? 1 : 0)
