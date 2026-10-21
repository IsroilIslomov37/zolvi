import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { AnalyticsScripts } from '@/components/analytics/AnalyticsScripts'
import { themeInitScript } from '@/components/layout/ThemeToggle'
import { getDictionary } from '@/lib/dictionary'
import { isLocale, localeMeta, locales } from '@/lib/i18n'
import { env, site } from '@/lib/site'
import { manrope, unbounded } from '../fonts'
import '../globals.css'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: false },
  verification: {
    google: env.googleVerification || undefined,
    yandex: env.yandexVerification || undefined,
  },
}

export const viewport: Viewport = {
  themeColor: '#0b1119',
  width: 'device-width',
  initialScale: 1,
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const d = getDictionary(locale)
  return (
    <html
      lang={localeMeta[locale].htmlLang}
      className={`${manrope.variable} ${unbounded.variable}`}
      // Lets Next.js switch off smooth scrolling while it resets scroll on navigation.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-xl bg-accent px-4 py-3 font-bold text-accent-ink transition focus:translate-y-0"
        >
          {d.skipToContent}
        </a>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  )
}
