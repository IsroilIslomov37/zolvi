import Link from 'next/link'
import { services } from '@/content/services'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { breadcrumbLd, graph } from '@/lib/seo'
import type { ServiceCategory } from '@/lib/types'
import { PageHero } from '@/components/sections/PageHero'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import type { PageMeta, PageProps } from './types'

const copy: L10n<{
  meta: PageMeta
  h1: string
  lead: string
  groups: Record<ServiceCategory, { title: string; text: string }>
}> = {
  uz: {
    meta: {
      title: 'Xizmatlar: CRM, ERP, avtomatlashtirish va AI | ZOLVI',
      description:
        'ZOLVI xizmatlari: CRM va ERP tizimlari, biznesni avtomatlashtirish, AI, Telegram-botlar, POS, veb va mobil ilovalar. Toshkentda ishlab chiqamiz.',
      heading: 'CRM, ERP, avtomatlashtirish va AI xizmatlari',
      eyebrow: 'Xizmatlar',
    },
    h1: 'Xizmatlar: CRM, ERP, avtomatlashtirish va AI',
    lead: "Biznes jarayonlarini tartibga soladigan tizimlar: mijozlar bilan ishlashdan tortib ombor, ishlab chiqarish va sun'iy intellektgacha. Har bir xizmat bepul 30 daqiqalik auditdan boshlanadi.",
    groups: {
      business: {
        title: 'Biznes tizimlari',
        text: 'Savdo, ombor, moliya va jarayonlar bitta tizimda.',
      },
      ai: {
        title: "Sun'iy intellekt",
        text: 'Rutin ishni AI zimmasiga yuklang, xodimlar qaror qabul qiladi.',
      },
      products: {
        title: 'Mahsulotlar',
        text: "Botlar, kassalar, saytlar, ilovalar va o'z SaaS'ingiz.",
      },
      consulting: {
        title: "Konsalting va qo'llab-quvvatlash",
        text: 'Maxsus loyihalar va ishlab turgan tizimlarni rivojlantirish.',
      },
    },
  },
  ru: {
    meta: {
      title: 'Услуги: CRM, ERP, автоматизация и AI | ZOLVI',
      description:
        'Услуги ZOLVI: CRM и ERP-системы, автоматизация бизнеса, AI, Telegram-боты, POS, веб и мобильные приложения. Разработка в Ташкенте.',
      heading: 'Услуги: CRM, ERP, автоматизация и AI',
      eyebrow: 'Услуги',
    },
    h1: 'Услуги: CRM, ERP, автоматизация и AI',
    lead: 'Системы, которые наводят порядок в бизнес-процессах: от работы с клиентами до склада, производства и искусственного интеллекта. Каждая услуга начинается с бесплатного 30-минутного аудита.',
    groups: {
      business: {
        title: 'Бизнес-системы',
        text: 'Продажи, склад, финансы и процессы в одной системе.',
      },
      ai: { title: 'Искусственный интеллект', text: 'Рутину — AI, решения — людям.' },
      products: { title: 'Продукты', text: 'Боты, кассы, сайты, приложения и собственный SaaS.' },
      consulting: {
        title: 'Консалтинг и поддержка',
        text: 'Заказные проекты и развитие работающих систем.',
      },
    },
  },
  en: {
    meta: {
      title: 'Services: CRM, ERP, Automation and AI | ZOLVI',
      description:
        'ZOLVI services: CRM and ERP systems, business automation, AI, Telegram bots, POS, web and mobile apps. Built in Tashkent, Uzbekistan.',
      heading: 'Services: CRM, ERP, automation and AI',
      eyebrow: 'Services',
    },
    h1: 'Services: CRM, ERP, automation and AI',
    lead: 'Systems that bring order to business processes, from customer work to inventory, production and artificial intelligence. Every service starts with a free 30-minute audit.',
    groups: {
      business: {
        title: 'Business systems',
        text: 'Sales, inventory, finance and processes in one system.',
      },
      ai: {
        title: 'Artificial intelligence',
        text: 'Routine work goes to AI; decisions stay with people.',
      },
      products: { title: 'Products', text: 'Bots, tills, websites, apps and your own SaaS.' },
      consulting: {
        title: 'Consulting and support',
        text: 'Custom projects and evolving live systems.',
      },
    },
  },
}

const order: ServiceCategory[] = ['business', 'ai', 'products', 'consulting']

export const nav = 'services'

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.services, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={d.nav.services}
        title={c.h1}
        lead={c.lead}
      />
      {order.map((cat, i) => {
        const list = services.filter((s) => s.category === cat)
        if (!list.length) return null
        return (
          <Section
            key={cat}
            id={cat}
            title={c.groups[cat].title}
            intro={c.groups[cat].text}
            className={i % 2 === 0 ? 'bg-bg-soft' : ''}
          >
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((s) => (
                <li
                  key={s.id}
                  className="card group relative flex flex-col p-6 transition hover:border-line-strong"
                >
                  <span className="mb-5 grid size-11 place-items-center rounded-xl bg-accent/12 text-accent-text">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="font-sans text-lg font-bold tracking-normal">
                    <Link
                      href={pathFor({ type: 'service', id: s.id }, locale)}
                      className="after:absolute after:inset-0"
                    >
                      {s.locales[locale].name}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{s.locales[locale].summary}</p>
                  <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                    <Icon name="clock" className="size-3.5" /> {s.locales[locale].timeline}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        )
      })}
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
