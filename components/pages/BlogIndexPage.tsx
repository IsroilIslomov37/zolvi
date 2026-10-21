import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { getDictionary } from '@/lib/dictionary'
import { formatDate, type L10n, type Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { breadcrumbLd, graph } from '@/lib/seo'
import { PageHero } from '@/components/sections/PageHero'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import type { PageMeta, PageProps } from './types'

const copy: L10n<{ meta: PageMeta; h1: string; lead: string }> = {
  uz: {
    meta: {
      title: 'Blog: CRM, avtomatlashtirish va biznes tizimlari | ZOLVI',
      description:
        "CRM narxlari, restoranni avtomatlashtirish, amoCRM va maxsus CRM taqqoslash — O'zbekistondagi biznes uchun amaliy maqolalar.",
      heading: 'ZOLVI blogi',
      eyebrow: 'Blog',
    },
    h1: 'Blog: biznesni avtomatlashtirish haqida',
    lead: "Narxlar, tanlov mezonlari va real jarayonlar haqida amaliy maqolalar — O'zbekistondagi biznes uchun.",
  },
  ru: {
    meta: {
      title: 'Блог: CRM, автоматизация и бизнес-системы | ZOLVI',
      description:
        'Стоимость CRM, автоматизация ресторана, сравнение amoCRM и заказной CRM — практические статьи для бизнеса в Узбекистане.',
      heading: 'Блог ZOLVI',
      eyebrow: 'Блог',
    },
    h1: 'Блог об автоматизации бизнеса',
    lead: 'Практические статьи о ценах, критериях выбора и реальных процессах — для бизнеса в Узбекистане.',
  },
  en: {
    meta: {
      title: 'Blog: CRM, Automation and Business Systems | ZOLVI',
      description:
        'CRM pricing, restaurant automation, amoCRM vs custom CRM — practical articles for businesses in Uzbekistan.',
      heading: 'The ZOLVI blog',
      eyebrow: 'Blog',
    },
    h1: 'Blog: business automation in practice',
    lead: 'Practical articles on pricing, selection criteria and real processes — for businesses in Uzbekistan.',
  },
}

export const nav = 'blog'

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const posts = getAllPosts(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.blog, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={d.nav.blog}
        title={c.h1}
        lead={c.lead}
      />
      <Section id="posts" className="bg-bg-soft">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.id} className="card card-interactive group relative flex flex-col p-6">
              <p className="flex items-center gap-3 text-sm text-muted">
                <time dateTime={p.date.toISOString()}>
                  {formatDate(p.date.toISOString(), locale)}
                </time>
                <span aria-hidden="true">·</span>
                {p.readingMinutes} {d.blog.minutes}
              </p>
              <h2 className="mt-4 font-sans text-xl leading-snug font-bold tracking-normal">
                <Link
                  href={pathFor({ type: 'post', id: p.id }, locale)}
                  className="after:absolute after:inset-0"
                >
                  {p.h1}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-muted">{p.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent-text">
                {d.cta.readArticle}
                <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
              </span>
            </li>
          ))}
        </ul>
      </Section>
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
