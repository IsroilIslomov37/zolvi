import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { localeMeta, locales } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { Logo } from '@/components/layout/Logo'

/**
 * Shown for any unknown URL. The locale can't be known for an arbitrary path,
 * so the page speaks all three languages, Uzbek first.
 */
export function NotFoundContent() {
  const uz = getDictionary('uz')
  return (
    <main id="main" className="relative min-h-dvh overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-10">
        <Logo href="/" label="ZOLVI" />
        <div className="section-y">
          <p className="font-display text-6xl leading-none font-bold text-accent">404</p>
          <h1 className="text-title mt-6 font-bold">{uz.notFound.title}</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{uz.notFound.text}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {locales.map((l) => {
              const d = getDictionary(l)
              const links = (
                ['services', 'industries', 'cases', 'pricing', 'blog', 'contact'] as const
              ).map((type) => ({ label: d.nav[type], href: pathFor({ type }, l) }))
              return (
                <section key={l} lang={localeMeta[l].htmlLang} className="card p-6">
                  <h2 className="font-sans text-sm font-semibold text-muted">
                    {localeMeta[l].label}
                  </h2>
                  <Link href={pathFor({ type: 'home' }, l)} className="btn btn-primary mt-4 w-full">
                    {d.notFound.home}
                  </Link>
                  <ul className="mt-5 space-y-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="tap text-muted hover:text-text">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
