import Link from 'next/link'
import { cases } from '@/content/cases'
import { industries } from '@/content/industries'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { Icon } from '@/components/ui/Icon'
import { MiniPreview, type PreviewKind } from '@/components/ui/MiniPreview'

/** Which mock-up best shows the system built in a case, by industry. */
const previewFor: Record<string, PreviewKind> = {
  hotels: 'crm',
  restaurants: 'pos',
  retail: 'erp',
  'field-service': 'flow',
}

export function CaseCards({ locale, ids }: { locale: Locale; ids?: string[] }) {
  const d = getDictionary(locale)
  const list = ids ? cases.filter((c) => ids.includes(c.id)) : cases
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {list.map((c) => {
        const copy = c.locales[locale]
        const industry = industries.find((i) => i.id === c.industryId)
        return (
          <li
            key={c.id}
            className="card card-interactive group relative flex flex-col overflow-hidden"
          >
            <div className="h-40 border-b border-line bg-surface-2/50 p-4 sm:h-44">
              <MiniPreview kind={previewFor[c.industryId] ?? 'crm'} />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <span className="self-start rounded-full bg-surface-2 px-3 py-1 text-sm font-medium text-muted">
                {industry?.locales[locale].name}
              </span>
              <p className="mt-6 font-display text-5xl leading-none font-bold tracking-tight text-accent-text">
                {c.metric}
              </p>
              <h3 className="mt-5 font-sans text-xl font-bold tracking-tight sm:text-2xl">
                <Link
                  href={pathFor({ type: 'case', id: c.id }, locale)}
                  className="after:absolute after:inset-0"
                >
                  {copy.name}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-muted">{copy.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text">
                {d.cta.more}
                <Icon
                  name="arrow"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
