import Link from 'next/link'
import { services } from '@/content/services'
import { industries } from '@/content/industries'
import { comparisons } from '@/content/compare'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { phoneHref, site } from '@/lib/site'
import { Icon } from '@/components/ui/Icon'
import { Todo } from '@/components/ui/Todo'
import { Logo } from './Logo'

export function Footer({ locale }: { locale: Locale }) {
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
    { label: d.footer.privacy, href: pathFor({ type: 'privacy' }, locale) },
  ]
  const linkClass = 'text-muted transition hover:text-text'
  return (
    <footer className="border-line bg-bg-soft border-t pb-28 md:pb-0">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo href={pathFor({ type: 'home' }, locale)} label={site.name} />
          <p className="text-muted max-w-xs">{d.brandTagline}.</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className={`inline-flex items-center gap-2 ${linkClass}`}
              >
                <Icon name="mail" className="size-4" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.telegram.url} className={`inline-flex items-center gap-2 ${linkClass}`}>
                <Icon name="telegram" className="size-4" /> {site.telegram.handle}
              </a>
            </li>
            <li className="text-muted flex items-center gap-2">
              <Icon name="phone" className="size-4" />
              {site.phone ? (
                <a href={phoneHref(site.phone)} className={linkClass}>
                  {site.phone}
                </a>
              ) : (
                <Todo>telefon</Todo>
              )}
            </li>
            <li className="text-muted flex items-center gap-2">
              <Icon name="pin" className="size-4" />
              {site.address ? `${site.address.street}, ${site.address.city}` : <Todo>manzil</Todo>}
            </li>
            <li className="text-muted flex items-center gap-2">
              <Icon name="linkedin" className="size-4" />
              {site.linkedin ? (
                <a href={site.linkedin} className={linkClass}>
                  LinkedIn
                </a>
              ) : (
                <Todo>LinkedIn URL</Todo>
              )}
            </li>
          </ul>
        </div>

        <FooterColumn title={d.footer.services}>
          {services.map((s) => (
            <li key={s.id}>
              <Link href={pathFor({ type: 'service', id: s.id }, locale)} className={linkClass}>
                {s.locales[locale].name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={d.footer.industries}>
          {industries.map((s) => (
            <li key={s.id}>
              <Link href={pathFor({ type: 'industry', id: s.id }, locale)} className={linkClass}>
                {s.locales[locale].name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={d.footer.company}>
          {company.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className={linkClass}>
                {c.label}
              </Link>
            </li>
          ))}
        </FooterColumn>
      </div>
      <div className="border-line border-t">
        <div className="container-page text-muted flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {d.footer.rights}
          </p>
          <p>{d.footer.city}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-text mb-5 font-sans text-sm font-bold tracking-[0.14em] uppercase">
        {title}
      </h2>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  )
}
