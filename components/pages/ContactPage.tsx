import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { phoneHref, site } from '@/lib/site'
import { breadcrumbLd, graph } from '@/lib/seo'
import { PageHero } from '@/components/sections/PageHero'
import { Icon, type IconName } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import { Todo } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

const copy: L10n<{
  meta: PageMeta
  h1: string
  lead: string
  channels: string
  phone: string
  telegram: string
  telegramNote: string
  email: string
  address: string
  hours: string
  mapTitle: string
  mapTodo: string
  formNote: string
}> = {
  uz: {
    meta: {
      title: "Aloqa: ZOLVI bilan bog'lanish, Toshkent | ZOLVI",
      description:
        "ZOLVI bilan bog'laning: Telegram, telefon, email va ofis manzili. Bepul 30 daqiqalik auditga yoziling — CRM, ERP va avtomatlashtirish bo'yicha.",
      heading: "Biz bilan bog'laning",
      eyebrow: 'Aloqa',
    },
    h1: "Aloqa: ZOLVI bilan bog'lanish",
    lead: "Bepul 30 daqiqalik auditga yoziling yoki savolingizni yozing — ish kuni davomida javob beramiz. Eng tez yo'l — Telegram.",
    channels: "Bog'lanish usullari",
    phone: 'Telefon',
    telegram: 'Telegram',
    telegramNote: 'Eng tez javob',
    email: 'Email',
    address: 'Manzil',
    hours: 'Ish vaqti',
    mapTitle: 'Xaritada',
    mapTodo: "ofis manzili va xarita (koordinatalar lib/site.ts'da)",
    formNote: "Quyidagi formani to'ldiring — ariza darhol jamoamizga Telegram orqali yetib boradi.",
  },
  ru: {
    meta: {
      title: 'Контакты ZOLVI в Ташкенте | ZOLVI',
      description:
        'Свяжитесь с ZOLVI: Telegram, телефон, email и адрес офиса. Запишитесь на бесплатный 30-минутный аудит по CRM, ERP и автоматизации.',
      heading: 'Свяжитесь с нами',
      eyebrow: 'Контакты',
    },
    h1: 'Контакты ZOLVI',
    lead: 'Запишитесь на бесплатный 30-минутный аудит или задайте вопрос — ответим в течение рабочего дня. Быстрее всего — в Telegram.',
    channels: 'Способы связи',
    phone: 'Телефон',
    telegram: 'Telegram',
    telegramNote: 'Самый быстрый ответ',
    email: 'Email',
    address: 'Адрес',
    hours: 'Часы работы',
    mapTitle: 'На карте',
    mapTodo: 'адрес офиса и карта (координаты в lib/site.ts)',
    formNote: 'Заполните форму ниже — заявка сразу придёт нашей команде в Telegram.',
  },
  en: {
    meta: {
      title: 'Contact ZOLVI in Tashkent | ZOLVI',
      description:
        'Get in touch with ZOLVI: Telegram, phone, email and office address. Book a free 30-minute audit for CRM, ERP and business automation.',
      heading: 'Get in touch',
      eyebrow: 'Contact',
    },
    h1: 'Contact ZOLVI',
    lead: 'Book a free 30-minute audit or ask a question — we reply within one business day. Telegram is the fastest way to reach us.',
    channels: 'Ways to reach us',
    phone: 'Phone',
    telegram: 'Telegram',
    telegramNote: 'Fastest reply',
    email: 'Email',
    address: 'Address',
    hours: 'Working hours',
    mapTitle: 'On the map',
    mapTodo: 'office address and map (coordinates in lib/site.ts)',
    formNote: 'Fill in the form below — your request reaches our team in Telegram instantly.',
  },
}

export const nav = 'contact'

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

function Channel({
  icon,
  label,
  children,
}: {
  icon: IconName
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-4 border-t border-line py-6">
      <span className="grid size-11 shrink-0 place-items-center rounded-control bg-surface-2 text-accent-text">
        <Icon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-muted">{label}</p>
        <div className="mt-1 text-lg font-semibold">{children}</div>
      </div>
    </li>
  )
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.contact, path: pathFor(routeKey, locale) },
  ]
  const { geo } = site
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={d.nav.contact}
        title={c.h1}
        lead={c.lead}
        aside={
          <div className="panel bg-surface-2 p-6 sm:p-8">
            <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-ink">
              <Icon name="telegram" className="size-6" />
            </span>
            <p className="mt-6 text-sm text-muted">
              {c.telegram} · {c.telegramNote}
            </p>
            <p className="mt-1 font-display text-2xl font-bold tracking-tight">
              {site.telegram.handle}
            </p>
            <a href={site.telegram.url} className="btn btn-primary mt-6 w-full">
              <Icon name="telegram" className="size-4" /> {d.cta.telegram}
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost mt-2 w-full">
              <Icon name="mail" className="size-4" /> {site.email}
            </a>
          </div>
        }
      />

      <Section id="channels" title={c.channels} className="bg-bg-soft">
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          <Channel icon="telegram" label={`${c.telegram} · ${c.telegramNote}`}>
            <a href={site.telegram.url} className="hover:text-accent-text">
              {site.telegram.handle}
            </a>
          </Channel>
          <Channel icon="phone" label={c.phone}>
            {site.phone ? (
              <a href={phoneHref(site.phone)} className="hover:text-accent-text">
                {site.phone}
              </a>
            ) : (
              <Todo>telefon</Todo>
            )}
          </Channel>
          <Channel icon="mail" label={c.email}>
            <a href={`mailto:${site.email}`} className="break-all hover:text-accent-text">
              {site.email}
            </a>
          </Channel>
          <Channel icon="pin" label={c.address}>
            {site.address ? (
              <address className="not-italic">
                {site.address.street}, {site.address.city}
              </address>
            ) : (
              <Todo>{c.address.toLowerCase()}</Todo>
            )}
          </Channel>
          <Channel icon="clock" label={c.hours}>
            {site.openingHours ? (
              `${site.openingHours.days.join(', ')} · ${site.openingHours.opens}–${site.openingHours.closes}`
            ) : (
              <Todo>{c.hours.toLowerCase()}</Todo>
            )}
          </Channel>
          <Channel icon="linkedin" label="LinkedIn">
            {site.linkedin ? (
              <a href={site.linkedin} className="hover:text-accent-text">
                Akmaljon Mordayev
              </a>
            ) : (
              <Todo>LinkedIn URL</Todo>
            )}
          </Channel>
        </ul>
        <p className="measure mt-10 text-muted">{c.formNote}</p>
      </Section>

      <Section id="map" title={c.mapTitle}>
        {geo ? (
          <iframe
            title={c.mapTitle}
            loading="lazy"
            className="aspect-[16/9] w-full rounded-panel border border-line"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${geo.lng - 0.01},${geo.lat - 0.006},${geo.lng + 0.01},${geo.lat + 0.006}&layer=mapnik&marker=${geo.lat},${geo.lng}`}
          />
        ) : (
          <div className="relative grid h-72 w-full place-items-center overflow-hidden rounded-panel border border-line bg-surface">
            <div className="grid-bg absolute inset-0" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-4 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-accent text-accent-ink shadow-float">
                <Icon name="pin" className="size-6" />
              </span>
              <p className="text-muted">{d.footer.city}</p>
              <Todo>{c.mapTodo}</Todo>
            </div>
          </div>
        )}
      </Section>

      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
