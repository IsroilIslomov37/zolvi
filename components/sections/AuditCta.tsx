import { LeadForm } from '@/components/forms/LeadForm'
import { Icon } from '@/components/ui/Icon'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { phoneHref, site } from '@/lib/site'

/** Final call to action with the lead form. Every page has exactly one, anchored at #audit. */
export function AuditCta({
  locale,
  title,
  text,
  defaultBusiness,
}: {
  locale: Locale
  title?: string
  text?: string
  defaultBusiness?: string
}) {
  const d = getDictionary(locale)
  return (
    <section
      id="audit"
      aria-labelledby="audit-title"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow mb-4">{d.form.title}</p>
          <h2 id="audit-title" className="text-[clamp(1.7rem,1.2rem+2.4vw,2.8rem)] font-bold">
            {title ?? d.landing.ctaTitle}
          </h2>
          <p className="text-muted mt-5 max-w-xl text-lg">{text ?? d.landing.ctaText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.telegram.url} className="btn btn-secondary">
              <Icon name="telegram" className="size-4" /> {d.cta.telegram}
            </a>
            {site.phone && (
              <a href={phoneHref(site.phone)} className="btn btn-secondary">
                <Icon name="phone" className="size-4" /> {site.phone}
              </a>
            )}
          </div>
        </div>
        <LeadForm
          locale={locale}
          t={d.form}
          privacyHref={pathFor({ type: 'privacy' }, locale)}
          telegramUrl={site.telegram.url}
          defaultBusiness={defaultBusiness}
        />
      </div>
    </section>
  )
}
