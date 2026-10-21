import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { phoneHref, site } from '@/lib/site'
import { Icon } from '@/components/ui/Icon'
import { StickyCtaFrame } from './StickyCtaFrame'

/** Bottom bar on phones: the audit offer is always one tap away. */
export function StickyCta({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  return (
    <StickyCtaFrame>
      <div className="flex gap-2">
        <a
          href="#audit"
          data-track="cta"
          data-track-label="sticky"
          className="btn btn-primary flex-1"
        >
          {d.cta.audit}
        </a>
        <a
          href={site.telegram.url}
          aria-label={d.cta.telegram}
          className="btn btn-secondary w-12 bg-bg px-0"
        >
          <Icon name="telegram" />
        </a>
        {site.phone && (
          <a
            href={phoneHref(site.phone)}
            aria-label={d.cta.call}
            className="btn btn-secondary w-12 bg-bg px-0"
          >
            <Icon name="phone" />
          </a>
        )}
      </div>
    </StickyCtaFrame>
  )
}
