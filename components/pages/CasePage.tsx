import Link from 'next/link'
import { cases } from '@/content/cases'
import { industries } from '@/content/industries'
import { services } from '@/content/services'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor, type RouteKey } from '@/lib/routes'
import { breadcrumbLd, graph } from '@/lib/seo'
import { CaseCards } from '@/components/sections/CaseCards'
import { PageHero } from '@/components/sections/PageHero'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import { Todo } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

const labels: L10n<{
  client: string
  clientTodo: string
  task: string
  solution: string
  results: string
  resultsTodo: string
  stack: string
  stackTodo: string
  screenshots: string
  screenshotTodo: string
  review: string
  reviewTodo: string
  services: string
  industry: string
  other: string
}> = {
  uz: {
    client: 'Mijoz',
    clientTodo: 'mijoz nomi (ruxsat bilan)',
    task: 'Vazifa',
    solution: 'Yechim',
    results: 'Natija',
    resultsTodo: "qo'shimcha natijalar raqamlarda",
    stack: 'Texnologiyalar',
    stackTodo: 'loyiha steki',
    screenshots: 'Skrinshotlar',
    screenshotTodo: 'skrinshot',
    review: 'Mijoz fikri',
    reviewTodo: 'mijoz fikri: matn, ism, lavozim, surat',
    services: 'Ishlatilgan xizmatlar',
    industry: 'Soha',
    other: 'Boshqa keyslar',
  },
  ru: {
    client: 'Клиент',
    clientTodo: 'название клиента (с согласия)',
    task: 'Задача',
    solution: 'Решение',
    results: 'Результат',
    resultsTodo: 'дополнительные результаты в цифрах',
    stack: 'Технологии',
    stackTodo: 'стек проекта',
    screenshots: 'Скриншоты',
    screenshotTodo: 'скриншот',
    review: 'Отзыв клиента',
    reviewTodo: 'отзыв клиента: текст, имя, должность, фото',
    services: 'Использованные услуги',
    industry: 'Отрасль',
    other: 'Другие кейсы',
  },
  en: {
    client: 'Client',
    clientTodo: 'client name (with approval)',
    task: 'Task',
    solution: 'Solution',
    results: 'Result',
    resultsTodo: 'more results in numbers',
    stack: 'Technology',
    stackTodo: 'project stack',
    screenshots: 'Screenshots',
    screenshotTodo: 'screenshot',
    review: 'Client review',
    reviewTodo: 'client review: text, name, role, photo',
    services: 'Services used',
    industry: 'Industry',
    other: 'Other case studies',
  },
}

function find(key: RouteKey) {
  const item = 'id' in key ? cases.find((s) => s.id === key.id) : undefined
  if (!item) throw new Error(`Unknown case ${JSON.stringify(key)}`)
  return item
}

export const nav = 'cases'

export function getMeta(locale: Locale, key: RouteKey): PageMeta {
  const c = find(key).locales[locale]
  return { title: c.metaTitle, description: c.metaDescription, heading: c.h1, eyebrow: c.name }
}

export function Page({ locale, routeKey }: PageProps) {
  const item = find(routeKey)
  const c = item.locales[locale]
  const t = labels[locale]
  const d = getDictionary(locale)
  const industry = industries.find((i) => i.id === item.industryId)
  const used = item.serviceIds
    .map((id) => services.find((s) => s.id === id))
    .filter((s) => s !== undefined)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.cases, path: pathFor({ type: 'cases' }, locale) },
    { name: c.name, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={industry?.locales[locale].name}
        title={c.h1}
        lead={c.lead}
      >
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="card p-5">
            <dt className="text-sm text-muted">{t.results}</dt>
            <dd className="mt-2 font-display text-3xl font-bold text-accent-text">{item.metric}</dd>
          </div>
          <div className="card p-5">
            <dt className="text-sm text-muted">{t.client}</dt>
            <dd className="mt-2 font-semibold">{item.client ?? <Todo>{t.clientTodo}</Todo>}</dd>
          </div>
          <div className="card p-5">
            <dt className="text-sm text-muted">{t.industry}</dt>
            <dd className="mt-2 font-semibold">
              {industry && (
                <Link
                  href={pathFor({ type: 'industry', id: industry.id }, locale)}
                  className="hover:text-accent-text"
                >
                  {industry.locales[locale].name}
                </Link>
              )}
            </dd>
          </div>
        </dl>
      </PageHero>

      <Section id="story" className="bg-bg-soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">{t.task}</h2>
            <div className="mt-5 space-y-4 text-lg text-muted">
              {c.task.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">{t.solution}</h2>
            <ul className="mt-5 space-y-3">
              {c.solution.map((p) => (
                <li key={p} className="flex gap-3 text-lg">
                  <Icon name="check" className="mt-1.5 size-5 shrink-0 text-accent-text" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="results" title={t.results}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.results.map((r) => (
            <li key={r.label} className="card p-6">
              <p className="text-figure font-display font-bold text-accent-text">{r.value}</p>
              <p className="mt-3 text-muted">{r.label}</p>
            </li>
          ))}
          <li className="card grid place-items-center border-dashed p-6">
            <Todo>{t.resultsTodo}</Todo>
          </li>
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">{t.stack}</h2>
            <div className="mt-5">
              {item.stack ? (
                <ul className="flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line-strong px-3 py-1.5 text-sm font-semibold"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <Todo>{t.stackTodo}</Todo>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{t.services}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {used.map((s) => (
                <li key={s.id}>
                  <Link
                    href={pathFor({ type: 'service', id: s.id }, locale)}
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-semibold transition hover:border-accent"
                  >
                    <Icon name={s.icon} className="size-4 text-accent-text" />
                    {s.locales[locale].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="screenshots" title={t.screenshots} className="bg-bg-soft">
        <ul className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((n) => (
            <li
              key={n}
              className="grid aspect-[16/10] place-items-center rounded-card border border-dashed border-line-strong bg-surface"
            >
              <Todo>
                {t.screenshotTodo} {n}
              </Todo>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="review" title={t.review}>
        {c.quote ? (
          <figure className="card max-w-3xl p-8">
            <blockquote className="text-xl">“{c.quote.text}”</blockquote>
            <figcaption className="mt-5 text-muted">
              {c.quote.author}, {c.quote.role}
            </figcaption>
          </figure>
        ) : (
          <div className="card max-w-3xl p-8">
            <Icon name="quote" className="size-8 text-accent-text" />
            <p className="mt-4">
              <Todo>{t.reviewTodo}</Todo>
            </p>
          </div>
        )}
      </Section>

      <Section id="other" title={t.other} className="bg-bg-soft">
        <CaseCards locale={locale} ids={cases.filter((x) => x.id !== item.id).map((x) => x.id)} />
      </Section>

      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
