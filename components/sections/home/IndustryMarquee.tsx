import Link from 'next/link'
import { home } from '@/content/home'
import { industries } from '@/content/industries'
import type { Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'

export function IndustryMarquee({ locale }: { locale: Locale }) {
  const { marquee } = home[locale]
  const items = marquee.items.filter((item) => industries.some((i) => i.id === item.id))
  const row = (hidden: boolean) =>
    items.map((item) => (
      <li key={`${item.id}-${hidden}`} aria-hidden={hidden || undefined}>
        <Link
          href={pathFor({ type: 'industry', id: item.id }, locale)}
          tabIndex={hidden ? -1 : undefined}
          className="flex items-center gap-6 px-6 font-display text-xl font-semibold whitespace-nowrap text-muted transition hover:text-text sm:text-2xl"
        >
          {item.label}
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        </Link>
      </li>
    ))
  return (
    <section
      aria-label={marquee.label}
      className="marquee overflow-hidden border-y border-line bg-bg-soft py-6"
    >
      <ul className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </ul>
    </section>
  )
}
