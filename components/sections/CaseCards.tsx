import Link from 'next/link'
import { cases } from '@/content/cases'
import { industries } from '@/content/industries'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { Icon } from '@/components/ui/Icon'

export function CaseCards({ locale, ids }: { locale: Locale; ids?: string[] }) {
  const d = getDictionary(locale)
  const list = ids ? cases.filter((c) => ids.includes(c.id)) : cases
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {list.map((c) => {
        const copy = c.locales[locale]
        const industry = industries.find((i) => i.id === c.industryId)
        return (
          <li key={c.id} className="card group relative flex flex-col overflow-hidden p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <p className="eyebrow">{industry?.locales[locale].name}</p>
              <span className="font-display text-3xl font-bold text-accent-text sm:text-4xl">
                {c.metric}
              </span>
            </div>
            <h3 className="mt-6 font-sans text-xl font-bold tracking-normal sm:text-2xl">
              <Link
                href={pathFor({ type: 'case', id: c.id }, locale)}
                className="after:absolute after:inset-0"
              >
                {copy.name}
              </Link>
            </h3>
            <p className="mt-3 flex-1 text-muted">{copy.summary}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent-text">
              {d.cta.more}
              <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
            </span>
          </li>
        )
      })}
    </ul>
  )
}
