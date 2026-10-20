/** Prints visible word count of <main> for built pages: npx tsx scripts/word-count.ts [filter] */
import fs from 'node:fs'
import path from 'node:path'
import { parse } from 'node-html-parser'

const root = path.join(process.cwd(), '.next', 'server', 'app')
const filter = process.argv[2] ?? ''
function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
  })
}
for (const file of walk(root).filter((f) => f.includes(filter))) {
  const main = parse(fs.readFileSync(file, 'utf8')).querySelector('main')
  if (!main) continue
  main.querySelectorAll('script, style, #audit').forEach((n) => n.remove())
  const words = main.textContent.split(/\s+/).filter(Boolean).length
  console.log(String(words).padStart(5), path.relative(root, file).split(path.sep).join('/'))
}
