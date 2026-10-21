import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { site } from '@/lib/site'
import { Icon } from '@/components/ui/Icon'
import { LangSwitcher } from './LangSwitcher'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'

export type NavSection =
  'services' | 'industries' | 'cases' | 'pricing' | 'blog' | 'about' | 'contact'

export function navItems(locale: Locale) {
  const d = getDictionary(locale)
  return (['services', 'industries', 'cases', 'pricing', 'blog', 'about', 'contact'] as const).map(
    (type) => ({ type, label: d.nav[type], href: pathFor({ type }, locale) }),
  )
}

export function Header({
  locale,
  paths,
  active,
}: {
  locale: Locale
  paths: L10n<string>
  active?: NavSection
}) {
  const d = getDictionary(locale)
  const items = navItems(locale)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo
          href={pathFor({ type: 'home' }, locale)}
          label={`${site.name} — ${d.breadcrumbsHome}`}
        />

        <nav aria-label={d.menu.label} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-semibold">
            {items
              .filter((i) => i.type !== 'about')
              .map((item) => (
                <li key={item.type}>
                  <Link
                    href={item.href}
                    aria-current={active === item.type ? 'page' : undefined}
                    className={`rounded-lg px-3 py-2 transition hover:text-text ${
                      active === item.type ? 'text-text' : 'text-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangSwitcher locale={locale} paths={paths} label={d.language} />
          </div>
          <ThemeToggle labels={d.theme} />
          <a
            href="#audit"
            data-track="cta"
            data-track-label="header"
            className="btn btn-primary hidden min-h-10 px-4 py-2 text-sm md:inline-flex"
          >
            {d.cta.auditShort}
          </a>
          <MobileMenu labels={d.menu}>
            <ul className="space-y-1 text-lg font-semibold">
              {items.map((item) => (
                <li key={item.type}>
                  <Link
                    href={item.href}
                    aria-current={active === item.type ? 'page' : undefined}
                    className="flex items-center justify-between rounded-control px-3 py-3 hover:bg-surface"
                  >
                    {item.label}
                    <Icon name="arrow" className="size-4 text-muted" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-6">
              <LangSwitcher locale={locale} paths={paths} label={d.language} />
              <a href={site.telegram.url} className="btn btn-secondary min-h-10 py-2 text-sm">
                <Icon name="telegram" className="size-4" /> Telegram
              </a>
            </div>
          </MobileMenu>
        </div>
      </div>
    </header>
  )
}
