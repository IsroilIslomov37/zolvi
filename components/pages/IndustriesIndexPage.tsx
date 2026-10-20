import Link from 'next/link'
import { industries } from '@/content/industries'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { breadcrumbLd, graph } from '@/lib/seo'
import { PageHero } from '@/components/sections/PageHero'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import type { PageMeta, PageProps } from './types'

const copy: L10n<{ meta: PageMeta; h1: string; lead: string; listTitle: string }> = {
  uz: {
    meta: {
      title: 'Sohalar uchun yechimlar: restoran, klinika, savdo | ZOLVI',
      description:
        "Restoranlar, mehmonxonalar, o'quv markazlari, klinikalar, chakana savdo, logistika va ishlab chiqarish uchun tayyor sohaviy tizimlar. Toshkent.",
      heading: 'Sohalar uchun tizimlar',
      eyebrow: 'Sohalar',
    },
    h1: 'Sohalar uchun yechimlar',
    lead: "Har bir sohaning o'z jarayonlari va og'riqlari bor. Biz ularni bilamiz va tizimni noldan emas, soha tajribasidan boshlaymiz — shu sababli joriy etish tezroq va arzonroq bo'ladi.",
    listTitle: 'Biz ishlaydigan sohalar',
  },
  ru: {
    meta: {
      title: 'Отраслевые решения: рестораны, клиники, розница | ZOLVI',
      description:
        'Отраслевые системы для ресторанов, гостиниц, учебных центров, клиник, розницы, логистики и производства. Разработка и внедрение в Ташкенте.',
      heading: 'Отраслевые системы',
      eyebrow: 'Отрасли',
    },
    h1: 'Отраслевые решения',
    lead: 'У каждой отрасли свои процессы и свои боли. Мы их знаем и начинаем систему не с нуля, а с отраслевого опыта — поэтому внедрение быстрее и дешевле.',
    listTitle: 'Отрасли, с которыми работаем',
  },
  en: {
    meta: {
      title: 'Industry Solutions: Restaurants, Clinics, Retail | ZOLVI',
      description:
        'Industry systems for restaurants, hotels, training centers, clinics, retail, logistics and manufacturing. Built and implemented in Tashkent.',
      heading: 'Systems for every industry',
      eyebrow: 'Industries',
    },
    h1: 'Industry solutions',
    lead: 'Every industry has its own processes and pain points. We know them, so we start from industry experience rather than from scratch — which makes implementation faster and cheaper.',
    listTitle: 'Industries we work with',
  },
}

export const nav = 'industries'

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.industries, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={d.nav.industries}
        title={c.h1}
        lead={c.lead}
      />
      <Section id="list" title={c.listTitle} className="bg-bg-soft">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((s) => {
            const l = s.locales[locale]
            return (
              <li
                key={s.id}
                className="card group relative flex flex-col p-6 transition hover:border-line-strong"
              >
                <span className="mb-5 grid size-11 place-items-center rounded-xl bg-accent/12 text-accent-text">
                  <Icon name={s.icon} />
                </span>
                <h3 className="font-sans text-lg font-bold tracking-normal">
                  <Link
                    href={pathFor({ type: 'industry', id: s.id }, locale)}
                    className="after:absolute after:inset-0"
                  >
                    {l.name}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{l.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {l.pains.slice(0, 2).map((p) => (
                    <li key={p.title} className="flex gap-2 text-muted">
                      <span className="text-accent-text" aria-hidden="true">
                        —
                      </span>
                      {p.title}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </Section>
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
