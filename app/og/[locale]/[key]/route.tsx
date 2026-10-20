import fs from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { pageModule } from '@/components/pages'
import { getDictionary } from '@/lib/dictionary'
import { isLocale, locales } from '@/lib/i18n'
import { allRouteKeys, keyToString, type RouteKey } from '@/lib/routes'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    allRouteKeys().map((key) => ({ locale, key: `${keyToString(key)}.png` })),
  )
}

const assets = Promise.all([
  fs.readFile(path.join(process.cwd(), 'assets/fonts/Unbounded-Bold.ttf')),
  fs.readFile(path.join(process.cwd(), 'assets/fonts/Manrope-Medium.ttf')),
  fs.readFile(path.join(process.cwd(), 'public/zolvi-logo.svg')),
])

function parseKey(raw: string): RouteKey | null {
  const [type, id] = raw.replace(/\.png$/, '').split('--')
  return allRouteKeys().find((k) => k.type === type && (!('id' in k) || k.id === id)) ?? null
}

export async function GET(_req: Request, ctx: RouteContext<'/og/[locale]/[key]'>) {
  const { locale, key: rawKey } = await ctx.params
  const key = parseKey(rawKey)
  if (!isLocale(locale) || !key) return new Response('Not found', { status: 404 })

  const meta = pageModule(key).getMeta(locale, key)
  const d = getDictionary(locale)
  const [display, body, logo] = await assets
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`
  const size = meta.heading.length > 70 ? 54 : meta.heading.length > 40 ? 64 : 76

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: '#0b1119',
        backgroundImage:
          'radial-gradient(circle at 85% 15%, rgba(245,181,33,0.22), transparent 45%), radial-gradient(circle at 10% 100%, rgba(30,58,95,0.9), transparent 55%)',
        color: '#eef2f7',
        fontFamily: 'Manrope',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={72} height={72} alt="" />
        <div style={{ display: 'flex', fontFamily: 'Unbounded', fontSize: 34 }}>ZOLVI</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {meta.eyebrow && (
          <div
            style={{
              display: 'flex',
              color: '#f5b521',
              fontSize: 26,
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            {meta.eyebrow}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            fontFamily: 'Unbounded',
            fontSize: size,
            lineHeight: 1.1,
            maxWidth: 1040,
          }}
        >
          {meta.heading}
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#a3b0c2' }}
      >
        <div style={{ display: 'flex' }}>{d.brandTagline}</div>
        <div style={{ display: 'flex', color: '#f5b521' }}>zolvi.uz</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Unbounded', data: display, weight: 700, style: 'normal' },
        { name: 'Manrope', data: body, weight: 500, style: 'normal' },
      ],
    },
  )
}
