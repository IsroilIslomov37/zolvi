/**
 * Mobile Lighthouse audit (default Lighthouse mobile emulation + simulated throttling).
 * Start the production server first: `npm run build && npm run start`, then:
 *   npm run lighthouse                     → http://localhost:3000
 *   npm run lighthouse -- http://localhost:3100 /xizmatlar/crm-tizimi
 * Each page runs 3 times; the run with the median performance score is reported.
 * HTML reports are written to reports/lighthouse/.
 */
import fs from 'node:fs'
import path from 'node:path'
import * as chromeLauncher from 'chrome-launcher'
import lighthouse from 'lighthouse'

const [base = 'http://localhost:3000', ...paths] = process.argv.slice(2)
const targets = paths.length ? paths : ['/', '/xizmatlar/crm-tizimi']
const RUNS = 3
const thresholds = { performance: 90, accessibility: 95, 'best-practices': 95, seo: 100 }
const outDir = path.join(process.cwd(), 'reports', 'lighthouse')
fs.mkdirSync(outDir, { recursive: true })

type Scores = Record<keyof typeof thresholds, number>

const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-first-run'] })
let failed = false
const summary: string[] = []

try {
  for (const p of targets) {
    const url = new URL(p, base).href
    const runs: { scores: Scores; html: string; metrics: Record<string, string> }[] = []
    for (let i = 0; i < RUNS; i++) {
      const result = await lighthouse(url, { port: chrome.port, output: 'html', logLevel: 'error' })
      if (!result) throw new Error(`No Lighthouse result for ${url}`)
      const { categories, audits } = result.lhr
      runs.push({
        scores: Object.fromEntries(
          Object.keys(thresholds).map((k) => [k, Math.round((categories[k]?.score ?? 0) * 100)]),
        ) as Scores,
        html: result.report as string,
        metrics: Object.fromEntries(
          [
            'largest-contentful-paint',
            'cumulative-layout-shift',
            'total-blocking-time',
            'first-contentful-paint',
          ].map((id) => [id, audits[id]?.displayValue ?? '—']),
        ),
      })
    }
    runs.sort((a, b) => a.scores.performance - b.scores.performance)
    const median = runs[Math.floor(RUNS / 2)]
    const file = path.join(
      outDir,
      `${p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_/, '')}.html`,
    )
    fs.writeFileSync(file, median.html)

    const line = Object.entries(median.scores)
      .map(([k, v]) => {
        const ok = v >= thresholds[k as keyof Scores]
        if (!ok) failed = true
        return `${k} ${v}${ok ? '' : ` (< ${thresholds[k as keyof Scores]})`}`
      })
      .join(' · ')
    const metrics = `LCP ${median.metrics['largest-contentful-paint']} · CLS ${median.metrics['cumulative-layout-shift']} · TBT ${median.metrics['total-blocking-time']} · FCP ${median.metrics['first-contentful-paint']}`
    summary.push(
      `${p}\n  ${line}\n  ${metrics}\n  runs (perf): ${runs.map((r) => r.scores.performance).join(', ')}\n  report: ${path.relative(process.cwd(), file)}`,
    )
  }
} finally {
  chrome.kill()
}

console.log(summary.join('\n\n'))
fs.writeFileSync(path.join(outDir, 'summary.txt'), summary.join('\n\n') + '\n')
process.exit(failed ? 1 : 0)
