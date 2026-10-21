import Link from 'next/link'
import type { ReactNode } from 'react'
import { services } from '@/content/services'
import { industries } from '@/content/industries'
import { comparisons } from '@/content/compare'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { phoneHref, site } from '@/lib/site'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Todo } from '@/components/ui/Todo'
import { LangSwitcher } from './LangSwitcher'
import { Logo } from './Logo'

export function Footer({ locale, paths }: { locale: Locale; paths: L10n<string> }) {
  const d = getDictionary(locale)
  const company = [
    { label: d.nav.cases, href: pathFor({ type: 'cases' }, locale) },
    { label: d.nav.pricing, href: pathFor({ type: 'pricing' }, locale) },
    { label: d.nav.blog, href: pathFor({ type: 'blog' }, locale) },
    { label: d.nav.about, href: pathFor({ type: 'about' }, locale) },
    { label: d.nav.contact, href: pathFor({ type: 'contact' }, locale) },
    ...comparisons.map((c) => ({
      label: c.locales[locale].name,
      href: pathFor({ type: 'compare', id: c.id }, locale),
    })),
  ]
  const socials: { name: string; icon: IconName; href: string | null }[] = [
    { name: 'Telegram', icon: 'telegram', href: site.telegram.url },
    { name: 'LinkedIn', icon: 'linkedin', href: site.linkedin },
  ]
  const linkClass = 'tap text-muted transition-colors hover:text-text'
  return (
    <footer className="overflow-hidden bg-bg-soft pb-24 md:pb-0">
      <div className="container-page grid gap-12 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:pt-24">
        <div className="space-y-6 sm:col-span-2 lg:col-span-4">
          <Logo href={pathFor({ type: 'home' }, locale)} label={site.name} />
          <p className="max-w-xs text-muted">{d.brandTagline}.</p>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className={`inline-flex items-center gap-2.5 ${linkClass}`}
              >
                <Icon name="mail" className="size-4 shrink-0" /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.telegram.url}
                className={`inline-flex items-center gap-2.5 ${linkClass}`}
              >
                <Icon name="telegram" className="size-4 shrink-0" /> {site.telegram.handle}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-muted">
              <Icon name="phone" className="size-4 shrink-0" />
              {site.phone ? (
                <a href={phoneHref(site.phone)} className={linkClass}>
                  {site.phone}
                </a>
              ) : (
                <Todo>telefon</Todo>
              )}
            </li>
            <li className="flex items-center gap-2.5 text-muted">
              <Icon name="pin" className="size-4 shrink-0" />
              {site.address ? `${site.address.street}, ${site.address.city}` : <Todo>manzil</Todo>}
            </li>
          </ul>
          <div>
            <h2 className="sr-only">{d.footer.socials}</h2>
            <ul className="flex gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  {s.href ? (
                    <a
                      href={s.href}
                      aria-label={s.name}
                      className="grid size-11 place-items-center rounded-control border border-line text-muted transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-text"
                    >
                      <Icon name={s.icon} className="size-5" />
                    </a>
                  ) : (
                    <Todo>{s.name} URL</Todo>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FooterColumn title={d.footer.services} className="lg:col-span-3">
          {services.map((s) => (
            <li key={s.id}>
              <Link href={pathFor({ type: 'service', id: s.id }, locale)} className={linkClass}>
                {s.locales[locale].name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={d.footer.industries} className="lg:col-span-3">
          {industries.map((s) => (
            <li key={s.id}>
              <Link href={pathFor({ type: 'industry', id: s.id }, locale)} className={linkClass}>
                {s.locales[locale].name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={d.footer.company} className="lg:col-span-2">
          {company.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className={linkClass}>
                {c.label}
              </Link>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-4 border-t border-line py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {site.name}. {d.footer.rights}
            </p>
            <p>
              {d.footer.legal}: {site.legalName ?? <Todo>MCHJ</Todo>} ·{' '}
              <Link href={pathFor({ type: 'privacy' }, locale)} className={linkClass}>
                {d.footer.privacy}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <LangSwitcher locale={locale} paths={paths} label={d.language} large />
            <p>{d.footer.city}</p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        data-word="ZOLVI"
        className="footer-wordmark container-page select-none"
      />
    </footer>
  )
}

function FooterColumn({
  title,
  className = '',
  children,
}: {
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={className}>
      <h2 className="mb-5 font-sans text-sm font-semibold text-text">{title}</h2>
      <ul className="space-y-3.5 text-sm lg:space-y-2.5">{children}</ul>
    </div>
  )
}
