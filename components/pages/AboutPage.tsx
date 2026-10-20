import { home } from '@/content/home'
import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { site } from '@/lib/site'
import { breadcrumbLd, graph } from '@/lib/seo'
import { PageHero } from '@/components/sections/PageHero'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Section } from '@/components/ui/Section'
import { Todo } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

const copy: L10n<{
  meta: PageMeta
  h1: string
  lead: string
  missionTitle: string
  mission: string[]
  differenceTitle: string
  difference: { title: string; text: string }[]
  principlesTitle: string
  principles: { title: string; text: string }[]
  teamTitle: string
  teamIntro: string
  founderRole: string
  memberTodo: string
  roleTodo: string
  photoTodo: string
  requisitesTitle: string
  requisites: { label: string; todo: string }[]
}> = {
  uz: {
    meta: {
      title: 'ZOLVI haqida — Toshkentdagi dasturlash studiyasi | ZOLVI',
      description:
        "ZOLVI — biznes uchun dasturiy ta'minot studiyasi: CRM, ERP, avtomatlashtirish va AI. Jamoa, tamoyillar, ish uslubi va kompaniya rekvizitlari.",
      heading: 'Shovqinni tizimga aylantiramiz',
      eyebrow: 'Biz haqimizda',
    },
    h1: 'ZOLVI haqida: biznes uchun dasturlash studiyasi, Toshkent',
    lead: "Biz biznesning operatsion qismini tartibga soladigan tizimlar quramiz: CRM, ERP, avtomatlashtirish va AI. Tarqoq jadvallar, yo'qolgan qo'ng'iroqlar va qog'ozdagi eslatmalar o'rniga — biznes qanday ishlasa, shunday ishlaydigan bitta tizim.",
    missionTitle: "Nima bilan shug'ullanamiz",
    mission: [
      "Ko'p kompaniyalar o'sib borgani sari bir xil muammoga duch keladi: jarayonlar odamlar xotirasida, Excel'da va messenjerlarda yashaydi. Rahbar hamma narsani shaxsan nazorat qiladi, xatolar esa mijozlarni yo'qotishga olib keladi.",
      "ZOLVI shu «shovqin»ni tizimga aylantiradi. Biz avval jarayonlarni tushunamiz, keyin ularni raqamlashtiramiz va natijani raqamlarda o'lchaymiz — bajarilgan ish hajmi bilan emas.",
    ],
    differenceTitle: 'Bizni nima ajratib turadi',
    difference: [
      {
        title: 'Tor fokus',
        text: "Biz «hamma narsani» qilmaymiz. Asosiy yo'nalishimiz — biznesning operatsion tartibi: savdo, ombor, xizmat ko'rsatish va boshqaruv.",
      },
      {
        title: 'Sohaviy yechimlar',
        text: "Restoranlar, mehmonxonalar, o'quv markazlari, klinikalar, savdo va logistika uchun tayyor tajriba va modullar.",
      },
      {
        title: 'Raqamlardagi natija',
        text: "Har bir loyihada «oldin» va «keyin» ko'rsatkichlarini qayd etamiz va natijani o'lchaymiz.",
      },
    ],
    principlesTitle: 'Tamoyillarimiz',
    principles: [
      {
        title: 'Halollik',
        text: "Agar sizga hozircha dastur kerak bo'lmasa yoki tayyor yechim yetarli bo'lsa, buni ochiq aytamiz.",
      },
      {
        title: 'Shaffoflik',
        text: "Haftalik relizlar, ochiq smeta va har oylik hisobot — loyihada nima bo'layotganini doim ko'rasiz.",
      },
      {
        title: 'Egalik sizda',
        text: "Kod, ma'lumotlar va hujjatlar sizga tegishli. Qaramlik emas, hamkorlik.",
      },
      {
        title: 'Oddiylik',
        text: "Xodimlar o'qitishsiz ham tushunadigan interfeyslar — murakkablik tizim ichida qoladi.",
      },
    ],
    teamTitle: 'Jamoa',
    teamIntro:
      "Loyihalarda dasturchilar, dizaynerlar va biznes-tahlilchilar ishlaydi. Har bir loyihaga bitta mas'ul menejer biriktiriladi.",
    founderRole: 'lavozimi',
    memberTodo: "jamoa a'zosi: ism, lavozim, surat",
    roleTodo: 'lavozim',
    photoTodo: 'surat',
    requisitesTitle: 'Rekvizitlar',
    requisites: [
      { label: 'Yuridik nomi', todo: 'yuridik nom' },
      { label: 'STIR (INN)', todo: 'STIR' },
      { label: 'Yuridik manzil', todo: 'yuridik manzil' },
      { label: 'Bank va hisob raqami', todo: 'bank rekvizitlari' },
      { label: 'Tashkil etilgan yil', todo: 'tashkil etilgan yil' },
    ],
  },
  ru: {
    meta: {
      title: 'О компании ZOLVI — студия разработки в Ташкенте | ZOLVI',
      description:
        'ZOLVI — студия разработки ПО для бизнеса: CRM, ERP, автоматизация и AI. Команда, принципы, подход к работе и реквизиты компании.',
      heading: 'Превращаем хаос в систему',
      eyebrow: 'О компании',
    },
    h1: 'О ZOLVI: студия разработки ПО для бизнеса, Ташкент',
    lead: 'Мы строим системы, которые наводят порядок в операционной части бизнеса: CRM, ERP, автоматизацию и AI. Вместо разрозненных таблиц, пропущенных звонков и бумажных заметок — одна система, которая работает так, как работает ваш бизнес.',
    missionTitle: 'Чем мы занимаемся',
    mission: [
      'Многие компании по мере роста сталкиваются с одной и той же проблемой: процессы живут в головах людей, в Excel и мессенджерах. Руководитель всё контролирует лично, а ошибки стоят потерянных клиентов.',
      'ZOLVI превращает этот «шум» в систему. Сначала понимаем процессы, затем оцифровываем их и измеряем результат в цифрах — а не в объёме сделанной работы.',
    ],
    differenceTitle: 'Чем мы отличаемся',
    difference: [
      {
        title: 'Узкий фокус',
        text: 'Мы не делаем «всё подряд». Наше направление — порядок в операционке бизнеса: продажи, склад, сервис и управление.',
      },
      {
        title: 'Отраслевые решения',
        text: 'Готовый опыт и модули для ресторанов, гостиниц, учебных центров, клиник, розницы и логистики.',
      },
      {
        title: 'Результат в цифрах',
        text: 'В каждом проекте фиксируем показатели «до» и «после» и измеряем результат.',
      },
    ],
    principlesTitle: 'Наши принципы',
    principles: [
      {
        title: 'Честность',
        text: 'Если программа вам пока не нужна или хватит готового решения, мы скажем об этом прямо.',
      },
      {
        title: 'Прозрачность',
        text: 'Еженедельные релизы, открытая смета и ежемесячный отчёт — вы всегда видите, что происходит в проекте.',
      },
      {
        title: 'Владение — у вас',
        text: 'Код, данные и документация принадлежат вам. Не зависимость, а партнёрство.',
      },
      {
        title: 'Простота',
        text: 'Интерфейсы, понятные сотрудникам без обучения, — сложность остаётся внутри системы.',
      },
    ],
    teamTitle: 'Команда',
    teamIntro:
      'В проектах работают разработчики, дизайнеры и бизнес-аналитики. За каждым проектом закреплён один ответственный менеджер.',
    founderRole: 'должность',
    memberTodo: 'участник команды: имя, должность, фото',
    roleTodo: 'должность',
    photoTodo: 'фото',
    requisitesTitle: 'Реквизиты',
    requisites: [
      { label: 'Юридическое название', todo: 'юридическое название' },
      { label: 'ИНН', todo: 'ИНН' },
      { label: 'Юридический адрес', todo: 'юридический адрес' },
      { label: 'Банк и расчётный счёт', todo: 'банковские реквизиты' },
      { label: 'Год основания', todo: 'год основания' },
    ],
  },
  en: {
    meta: {
      title: 'About ZOLVI — Software Studio in Tashkent | ZOLVI',
      description:
        'ZOLVI is a software studio for business: CRM, ERP, automation and AI. Our team, principles, way of working and company details.',
      heading: 'We turn noise into systems',
      eyebrow: 'About',
    },
    h1: 'About ZOLVI: a business software studio in Tashkent',
    lead: 'We build systems that bring order to the operational side of a business: CRM, ERP, automation and AI. Instead of scattered spreadsheets, missed calls and paper notes — one system that works the way your business works.',
    missionTitle: 'What we do',
    mission: [
      'As companies grow, many hit the same wall: processes live in people’s heads, in spreadsheets and in messengers. The owner controls everything personally, and mistakes cost customers.',
      'ZOLVI turns that noise into a system. We understand the processes first, then digitize them and measure the result in numbers — not in the amount of work done.',
    ],
    differenceTitle: 'What sets us apart',
    difference: [
      {
        title: 'A narrow focus',
        text: 'We do not do “everything”. Our focus is operational order: sales, inventory, service and management.',
      },
      {
        title: 'Industry solutions',
        text: 'Ready experience and modules for restaurants, hotels, training centers, clinics, retail and logistics.',
      },
      {
        title: 'Results in numbers',
        text: 'On every project we record “before” and “after” metrics and measure the outcome.',
      },
    ],
    principlesTitle: 'Our principles',
    principles: [
      {
        title: 'Honesty',
        text: 'If you do not need software yet, or an off-the-shelf tool will do, we say so.',
      },
      {
        title: 'Transparency',
        text: 'Weekly releases, an open estimate and a monthly report — you always see what is happening.',
      },
      {
        title: 'You own it',
        text: 'Code, data and documentation belong to you. Partnership, not lock-in.',
      },
      {
        title: 'Simplicity',
        text: 'Interfaces staff understand without training — the complexity stays inside the system.',
      },
    ],
    teamTitle: 'Team',
    teamIntro:
      'Our projects are staffed by developers, designers and business analysts, with one accountable manager per project.',
    founderRole: 'role',
    memberTodo: 'team member: name, role, photo',
    roleTodo: 'role',
    photoTodo: 'photo',
    requisitesTitle: 'Company details',
    requisites: [
      { label: 'Legal name', todo: 'legal name' },
      { label: 'Tax ID (INN)', todo: 'tax ID' },
      { label: 'Registered address', todo: 'registered address' },
      { label: 'Bank details', todo: 'bank details' },
      { label: 'Founded', todo: 'year founded' },
    ],
  },
}

export const nav = 'about'

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const stats = home[locale].stats
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.about, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={d.breadcrumbsLabel}
        eyebrow={d.nav.about}
        title={c.h1}
        lead={c.lead}
      />

      <Section id="mission" title={c.missionTitle} className="bg-bg-soft">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg">
            {c.mission.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="grid gap-4 min-[420px]:grid-cols-2">
            {stats.items.map((s) => (
              <div key={s.label} className="card p-5">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="mt-2 font-display text-3xl font-bold">{s.value}</dd>
                <dd className="mt-2">
                  <Todo>{stats.confirm}</Todo>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="difference" title={c.differenceTitle}>
        <ul className="grid gap-4 md:grid-cols-3">
          {c.difference.map((x) => (
            <li key={x.title} className="card p-6">
              <h3 className="font-sans text-lg font-bold tracking-normal">{x.title}</h3>
              <p className="mt-2 text-muted">{x.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="principles" title={c.principlesTitle} className="bg-bg-soft">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.principles.map((x) => (
            <li key={x.title} className="border-t-2 border-accent pt-5">
              <h3 className="font-sans text-lg font-bold tracking-normal">{x.title}</h3>
              <p className="mt-2 text-muted">{x.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="team" title={c.teamTitle} intro={c.teamIntro}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="card flex flex-col p-6">
            <span className="grid size-16 place-items-center rounded-full border border-dashed border-line-strong text-xs text-muted">
              <Todo>{c.photoTodo}</Todo>
            </span>
            <h3 className="mt-5 font-sans text-lg font-bold tracking-normal">Akmaljon Mordayev</h3>
            <p className="mt-1">
              <Todo>{c.roleTodo}</Todo>
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={site.telegram.url}
                aria-label="Telegram"
                className="grid size-9 place-items-center rounded-lg border border-line hover:border-accent"
              >
                <Icon name="telegram" className="size-4" />
              </a>
              {site.linkedin ? (
                <a
                  href={site.linkedin}
                  aria-label="LinkedIn"
                  className="grid size-9 place-items-center rounded-lg border border-line hover:border-accent"
                >
                  <Icon name="linkedin" className="size-4" />
                </a>
              ) : (
                <Todo>LinkedIn URL</Todo>
              )}
            </div>
          </li>
          {[1, 2, 3].map((n) => (
            <li key={n} className="card grid place-items-center border-dashed p-6 text-center">
              <Todo>{c.memberTodo}</Todo>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="requisites" title={c.requisitesTitle} className="bg-bg-soft">
        <dl className="card max-w-3xl divide-y divide-line">
          {c.requisites.map((r) => (
            <div key={r.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[14rem_1fr]">
              <dt className="text-muted">{r.label}</dt>
              <dd>
                <Todo>{r.todo}</Todo>
              </dd>
            </div>
          ))}
          <div className="grid gap-1 px-6 py-4 sm:grid-cols-[14rem_1fr]">
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="hover:text-accent-text">
                {site.email}
              </a>
            </dd>
          </div>
        </dl>
      </Section>

      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
