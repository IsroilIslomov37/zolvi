import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { breadcrumbLd, graph } from '@/lib/seo'
import { CaseCards } from '@/components/sections/CaseCards'
import { PageHero } from '@/components/sections/PageHero'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import { Todo } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

const copy: L10n<{ meta: PageMeta; h1: string; lead: string; more: string }> = {
  uz: {
    meta: {
      title: 'Keyslar: CRM, ERP va avtomatlashtirish natijalari | ZOLVI',
      description:
        "ZOLVI keyslari: mehmonxona tarmog'i, restoran oshxonasi, chakana savdo tahlili va dala xizmati platformasi. Vazifa, yechim va raqamlardagi natija.",
      heading: 'Keyslar: raqamlardagi natijalar',
      eyebrow: 'Keyslar',
    },
    h1: 'Keyslar: raqamlardagi natijalar',
    lead: "Har bir keys — vazifa, yechim va o'lchanadigan natija. Biz va'dalar emas, ishlaydigan tizimlar va raqamlar haqida gapiramiz.",
    more: "qo'shimcha keyslar (mijoz nomi va ruxsati bilan)",
  },
  ru: {
    meta: {
      title: 'Кейсы: результаты внедрения CRM, ERP и автоматизации | ZOLVI',
      description:
        'Кейсы ZOLVI: гостиничная сеть, кухня ресторана, аналитика розницы и платформа выездного сервиса. Задача, решение и результат в цифрах.',
      heading: 'Кейсы: результаты в цифрах',
      eyebrow: 'Кейсы',
    },
    h1: 'Кейсы: результаты в цифрах',
    lead: 'Каждый кейс — задача, решение и измеримый результат. Мы говорим не об обещаниях, а о работающих системах и цифрах.',
    more: 'дополнительные кейсы (с названием и согласием клиента)',
  },
  en: {
    meta: {
      title: 'Case Studies: CRM, ERP and Automation Results | ZOLVI',
      description:
        'ZOLVI case studies: a hotel network, a restaurant kitchen, retail analytics and a field service platform. Task, solution and measurable result.',
      heading: 'Case studies: results in numbers',
      eyebrow: 'Case studies',
    },
    h1: 'Case studies: results in numbers',
    lead: 'Every case is a task, a solution and a measurable result. We talk about working systems and numbers, not promises.',
    more: 'more case studies (with client names and approval)',
  },
}

export const nav = 'cases'

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.cases, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={d.nav.cases}
        title={c.h1}
        lead={c.lead}
      />
      <Section id="list" className="bg-bg-soft">
        <CaseCards locale={locale} />
        <p className="mt-8">
          <Todo>{c.more}</Todo>
        </p>
      </Section>
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
