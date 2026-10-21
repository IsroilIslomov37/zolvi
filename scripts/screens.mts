/**
 * Full-page screenshots for the design audit: key pages × 1440/390 × dark/light.
 * Start the production server first (`npm run build && npm run start`), then:
 *   npx tsx scripts/screens.mts before            → design-audit/before/
 *   npx tsx scripts/screens.mts after http://localhost:3100
 */
import fs from 'node:fs'
import path from 'node:path'
import { Launcher } from 'chrome-launcher'
import puppeteer from 'puppeteer-core'

const [label = 'before', base = 'http://localhost:3000'] = process.argv.slice(2)
const pages: Record<string, string> = {
  home: '/ru',
  service: '/ru/uslugi/razrabotka-crm',
  case: '/ru/kejsy/platforma-dlya-gostinichnoj-seti',
  pricing: '/ru/ceny',
  contact: '/ru/kontakty',
}
const widths = [1440, 390]
const themes = ['dark', 'light'] as const
const outDir = path.join(process.cwd(), 'design-audit', label)
fs.mkdirSync(outDir, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: Launcher.getInstallations()[0],
  headless: true,
})
try {
  for (const theme of themes) {
    for (const width of widths) {
      const page = await browser.newPage()
      await page.setViewport({ width, height: width > 600 ? 900 : 844, deviceScaleFactor: 1 })
      await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }])
      await page.evaluateOnNewDocument((t) => localStorage.setItem('theme', t), theme)
      for (const [name, p] of Object.entries(pages)) {
        await page.goto(new URL(p, base).href, { waitUntil: 'networkidle0' })
        // Walk down the page so lazy demos and reveal animations run, then return to the top.
        await page.evaluate(async () => {
          document.documentElement.style.scrollBehavior = 'auto'
          for (let y = 0; y < document.body.scrollHeight; y += innerHeight / 2) {
            scrollTo(0, y)
            await new Promise((r) => setTimeout(r, 150))
          }
          scrollTo(0, 0)
          await new Promise((r) => setTimeout(r, 600))
        })
        const file = path.join(outDir, `${name}-${width}-${theme}.jpg`)
        await page.screenshot({ path: file, fullPage: true, type: 'jpeg', quality: 72 })
        console.log(path.relative(process.cwd(), file))
      }
      await page.close()
    }
  }
} finally {
  await browser.close()
}
