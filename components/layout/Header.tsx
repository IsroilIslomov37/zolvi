import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { site } from '@/lib/site'
import { Icon } from '@/components/ui/Icon'
import { HeaderFrame } from './HeaderFrame'
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
    <HeaderFrame>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo
          href={pathFor({ type: 'home' }, locale)}
          label={`${site.name} — ${d.breadcrumbsHome}`}
        />

        <nav aria-label={d.menu.label} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {items
              .filter((i) => i.type !== 'about')
              .map((item) => (
                <li key={item.type}>
                  <Link
                    href={item.href}
                    aria-current={active === item.type ? 'page' : undefined}
                    className="relative block rounded-lg px-3 py-2 text-muted transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent after:opacity-0 after:transition-opacity hover:bg-surface-2 hover:text-text aria-[current=page]:text-text aria-[current=page]:after:opacity-100"
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
            className="btn btn-primary btn-sm hidden md:inline-flex"
          >
            {d.cta.auditShort}
          </a>
          <MobileMenu labels={d.menu}>
            <ul className="space-y-1">
              {items.map((item, i) => (
                <li
                  key={item.type}
                  style={{ '--i': i } as React.CSSProperties}
                  className="menu-item"
                >
                  <Link
                    href={item.href}
                    aria-current={active === item.type ? 'page' : undefined}
                    className="group flex items-center justify-between rounded-control py-3 font-display text-2xl font-bold tracking-tight aria-[current=page]:text-accent-text"
                  >
                    {item.label}
                    <Icon
                      name="arrow"
                      className="size-5 text-muted transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div
              style={{ '--i': items.length } as React.CSSProperties}
              className="menu-item mt-10 space-y-4"
            >
              <a
                href="#audit"
                data-track="cta"
                data-track-label="menu"
                className="btn btn-primary w-full"
              >
                {d.cta.audit}
              </a>
              <div className="flex items-center justify-between gap-4">
                <LangSwitcher locale={locale} paths={paths} label={d.language} large />
                <a href={site.telegram.url} className="btn btn-secondary btn-sm">
                  <Icon name="telegram" className="size-4" /> Telegram
                </a>
              </div>
            </div>
          </MobileMenu>
        </div>
      </div>
    </HeaderFrame>
  )
}
