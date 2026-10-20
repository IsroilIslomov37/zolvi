import Link from 'next/link'
import { getPlan, paymentFaq } from '@/content/pricing'
import { services } from '@/content/services'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { breadcrumbLd, faqLd, graph } from '@/lib/seo'
import { PageHero } from '@/components/sections/PageHero'
import { PriceTag, PricingCards } from '@/components/sections/PricingCards'
import { FaqList } from '@/components/ui/FaqList'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import type { PageMeta, PageProps } from './types'

const copy: L10n<{
  meta: PageMeta
  h1: string
  lead: string
  plansTitle: string
  cta: string
  factorsTitle: string
  factors: { title: string; text: string }[]
  tableTitle: string
  table: { service: string; plan: string; timeline: string; price: string }
  faqTitle: string
}> = {
  uz: {
    meta: {
      title: 'Narxlar: CRM, ERP va avtomatlashtirish narxi | ZOLVI',
      description:
        "CRM, ERP, Telegram-bot, POS va avtomatlashtirish narxlari: paketlar «…dan», nimalar kiradi, muddatlar va to'lov shartlari. Toshkent, O'zbekiston.",
      heading: 'Ochiq narxlar: paketlar va muddatlar',
      eyebrow: 'Narxlar',
    },
    h1: 'Narxlar: CRM, ERP va biznesni avtomatlashtirish',
    lead: "Biz narxlarni yashirmaymiz. Quyida paketlarning boshlang'ich narxlari, nimalar kirishi va odatiy muddatlar. Aniq smetani bepul auditdan keyin modullar bo'yicha beramiz — har bir modulning narxi va muddati alohida ko'rsatiladi.",
    plansTitle: 'Paketlar',
    cta: 'Paketni muhokama qilish',
    factorsTitle: "Narxga nima ta'sir qiladi",
    factors: [
      {
        title: 'Modullar soni',
        text: "Har bir modul (masalan, ombor yoki savdo voronkasi) alohida baholanadi — keraksiziga pul to'lamaysiz.",
      },
      {
        title: 'Integratsiyalar',
        text: "1C, telefoniya, to'lov tizimlari va marketpleyslar bilan bog'lanish ishning muhim qismi.",
      },
      {
        title: 'Foydalanuvchilar va filiallar',
        text: "Rollar, huquqlar va filiallar soni arxitekturaga va sinov hajmiga ta'sir qiladi.",
      },
      {
        title: "Ma'lumotlarni ko'chirish",
        text: "Eski tizim va jadvallardan ma'lumotlarni tozalab ko'chirish alohida ish sifatida baholanadi.",
      },
    ],
    tableTitle: "Xizmatlar bo'yicha narx va muddatlar",
    table: { service: 'Xizmat', plan: 'Paket', timeline: 'Muddat', price: 'Narx' },
    faqTitle: "To'lov va narx bo'yicha savollar",
  },
  ru: {
    meta: {
      title: 'Цены: стоимость CRM, ERP и автоматизации | ZOLVI',
      description:
        'Стоимость CRM, ERP, Telegram-бота, POS и автоматизации: пакеты «от …», что входит, сроки и условия оплаты. Ташкент, Узбекистан.',
      heading: 'Открытые цены: пакеты и сроки',
      eyebrow: 'Цены',
    },
    h1: 'Цены на CRM, ERP и автоматизацию бизнеса',
    lead: 'Мы не скрываем цены. Ниже — стартовые цены пакетов, что в них входит и типичные сроки. Точную смету даём после бесплатного аудита по модулям — с отдельной ценой и сроком для каждого модуля.',
    plansTitle: 'Пакеты',
    cta: 'Обсудить пакет',
    factorsTitle: 'Что влияет на стоимость',
    factors: [
      {
        title: 'Количество модулей',
        text: 'Каждый модуль (например, склад или воронка продаж) оценивается отдельно — вы не платите за лишнее.',
      },
      {
        title: 'Интеграции',
        text: 'Связка с 1С, телефонией, платёжными системами и маркетплейсами — значимая часть работы.',
      },
      {
        title: 'Пользователи и филиалы',
        text: 'Роли, права и число филиалов влияют на архитектуру и объём тестирования.',
      },
      {
        title: 'Перенос данных',
        text: 'Очистка и перенос данных из старых систем и таблиц оцениваются отдельно.',
      },
    ],
    tableTitle: 'Стоимость и сроки по услугам',
    table: { service: 'Услуга', plan: 'Пакет', timeline: 'Срок', price: 'Цена' },
    faqTitle: 'Вопросы об оплате и стоимости',
  },
  en: {
    meta: {
      title: 'Pricing: CRM, ERP and Automation Costs | ZOLVI',
      description:
        'Pricing for CRM, ERP, Telegram bots, POS and automation: packages “from …”, what is included, timelines and payment terms. Tashkent, Uzbekistan.',
      heading: 'Open pricing: packages and timelines',
      eyebrow: 'Pricing',
    },
    h1: 'Pricing for CRM, ERP and business automation',
    lead: 'We do not hide our prices. Below are the starting prices of each package, what is included and typical timelines. After the free audit we give an exact per-module estimate, with a separate price and timeline for every module.',
    plansTitle: 'Packages',
    cta: 'Discuss this package',
    factorsTitle: 'What affects the price',
    factors: [
      {
        title: 'Number of modules',
        text: 'Each module (for example, inventory or a sales pipeline) is estimated separately — you never pay for what you do not need.',
      },
      {
        title: 'Integrations',
        text: 'Connecting 1C, telephony, payment systems and marketplaces is a significant part of the work.',
      },
      {
        title: 'Users and branches',
        text: 'Roles, permissions and the number of branches affect the architecture and the testing effort.',
      },
      {
        title: 'Data migration',
        text: 'Cleaning and migrating data from old systems and spreadsheets is estimated separately.',
      },
    ],
    tableTitle: 'Price and timeline by service',
    table: { service: 'Service', plan: 'Package', timeline: 'Timeline', price: 'Price' },
    faqTitle: 'Questions about pricing and payment',
  },
}

export const nav = 'pricing'

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.pricing, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={d.nav.pricing}
        title={c.h1}
        lead={c.lead}
      />

      <Section id="plans" title={c.plansTitle} className="bg-bg-soft">
        <PricingCards locale={locale} ctaLabel={c.cta} />
      </Section>

      <Section id="factors" title={c.factorsTitle}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.factors.map((f) => (
            <li key={f.title} className="border-t-2 border-accent pt-5">
              <h3 className="font-sans text-lg font-bold tracking-normal">{f.title}</h3>
              <p className="mt-2 text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="by-service" title={c.tableTitle} className="bg-bg-soft">
        <div className="overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="w-full min-w-[40rem] text-left">
            <thead className="border-b border-line text-sm text-muted">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">
                  {c.table.service}
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  {c.table.plan}
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  {c.table.timeline}
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  {c.table.price}
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => {
                const plan = getPlan(s.plan)
                return (
                  <tr key={s.id} className="border-t border-line">
                    <th scope="row" className="px-5 py-4 font-semibold">
                      <Link
                        href={pathFor({ type: 'service', id: s.id }, locale)}
                        className="inline-flex items-center gap-2 hover:text-accent-text"
                      >
                        <Icon name={s.icon} className="size-4 text-accent-text" />
                        {s.locales[locale].name}
                      </Link>
                    </th>
                    <td className="px-5 py-4 text-muted">{plan.locales[locale].name}</td>
                    <td className="px-5 py-4 text-muted">{s.locales[locale].timeline}</td>
                    <td className="px-5 py-4 font-semibold">
                      <PriceTag
                        value={plan.priceFrom}
                        locale={locale}
                        unit={plan.locales[locale].unit}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="faq" title={c.faqTitle}>
        <div className="max-w-4xl">
          <FaqList items={paymentFaq[locale]} />
        </div>
      </Section>

      <JsonLd data={graph(faqLd(paymentFaq[locale]), breadcrumbLd(crumbs))} />
    </>
  )
}
