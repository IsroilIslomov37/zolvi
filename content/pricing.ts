import type { L10n } from '@/lib/i18n'
import type { Faq, PlanId } from '@/lib/types'

export type Plan = {
  id: PlanId
  /** Starting price in UZS. null = not confirmed yet (shown as TODO). */
  priceFrom: number | null
  featured?: boolean
  locales: L10n<{
    name: string
    for: string
    timeline: string
    includes: string[]
    unit?: string
  }>
}

export const plans: Plan[] = [
  {
    id: 'start',
    priceFrom: null, // TODO: стартовая цена пакета Start (UZS)
    locales: {
      uz: {
        name: 'Start',
        for: 'Bitta jarayonni tartibga solish: Telegram-bot, sayt yoki kichik avtomatlashtirish',
        timeline: '2–4 hafta',
        includes: [
          'Jarayon auditi va texnik topshiriq',
          'Telegram-bot, landing yoki bitta modul',
          'Admin panel va bildirishnomalar',
          "TODO: bepul qo'llab-quvvatlash muddati",
        ],
      },
      ru: {
        name: 'Старт',
        for: 'Навести порядок в одном процессе: Telegram-бот, сайт или небольшая автоматизация',
        timeline: '2–4 недели',
        includes: [
          'Аудит процесса и техническое задание',
          'Telegram-бот, лендинг или один модуль',
          'Админ-панель и уведомления',
          'TODO: срок бесплатной поддержки',
        ],
      },
      en: {
        name: 'Start',
        for: 'Fix one process: a Telegram bot, a website or a small automation',
        timeline: '2–4 weeks',
        includes: [
          'Process audit and specification',
          'Telegram bot, landing page or one module',
          'Admin panel and notifications',
          'TODO: free support period',
        ],
      },
    },
  },
  {
    id: 'business',
    priceFrom: null, // TODO: стартовая цена пакета Biznes (UZS)
    featured: true,
    locales: {
      uz: {
        name: 'Biznes',
        for: 'CRM, POS yoki sohaviy tizim — butun jamoa bitta tizimda ishlaydi',
        timeline: '6–10 hafta',
        includes: [
          'Jarayonlar xaritasi va bosiladigan prototip',
          'CRM / POS / sohaviy tizim moslashtirilgan holda',
          "Telefoniya, Telegram, to'lov va 1C integratsiyalari",
          'Rollar, huquqlar va hisobotlar',
          "Xodimlarni o'qitish va ma'lumotlarni ko'chirish",
          "Kafolatli qo'llab-quvvatlash (TODO: muddati)",
        ],
      },
      ru: {
        name: 'Бизнес',
        for: 'CRM, POS или отраслевая система — вся команда работает в одной системе',
        timeline: '6–10 недель',
        includes: [
          'Карта процессов и кликабельный прототип',
          'CRM / POS / отраслевая система под ваши процессы',
          'Интеграции: телефония, Telegram, оплата, 1С',
          'Роли, права доступа и отчёты',
          'Обучение сотрудников и перенос данных',
          'Гарантийная поддержка (TODO: срок)',
        ],
      },
      en: {
        name: 'Business',
        for: 'CRM, POS or an industry system — the whole team works in one place',
        timeline: '6–10 weeks',
        includes: [
          'Process map and clickable prototype',
          'CRM / POS / industry system tailored to you',
          'Integrations: telephony, Telegram, payments, 1C',
          'Roles, permissions and reports',
          'Staff training and data migration',
          'Warranty support (TODO: period)',
        ],
      },
    },
  },
  {
    id: 'enterprise',
    priceFrom: null, // TODO: стартовая цена пакета Korporativ (UZS)
    locales: {
      uz: {
        name: 'Korporativ',
        for: "ERP, filiallar tarmog'i, SaaS yoki AI — murakkab, ko'p bo'limli tizimlar",
        timeline: '3 oydan',
        includes: [
          'Kashfiyot bosqichi va arxitektura',
          'ERP modullari: ombor, moliya, ishlab chiqarish, kadrlar',
          'AI-yordamchilar va prognozlash',
          "Filiallar va rollar bo'yicha boshqaruv",
          'Haftalik relizlar, avtomatik testlar',
          "SLA bilan qo'llab-quvvatlash",
        ],
      },
      ru: {
        name: 'Корпоративный',
        for: 'ERP, сеть филиалов, SaaS или AI — сложные системы для нескольких отделов',
        timeline: 'от 3 месяцев',
        includes: [
          'Этап исследования и архитектура',
          'Модули ERP: склад, финансы, производство, кадры',
          'AI-ассистенты и прогнозирование',
          'Управление филиалами и ролями',
          'Еженедельные релизы, автотесты',
          'Поддержка с SLA',
        ],
      },
      en: {
        name: 'Enterprise',
        for: 'ERP, branch networks, SaaS or AI — complex multi-department systems',
        timeline: 'from 3 months',
        includes: [
          'Discovery phase and architecture',
          'ERP modules: inventory, finance, production, HR',
          'AI assistants and forecasting',
          'Branch and role management',
          'Weekly releases, automated tests',
          'Support with an SLA',
        ],
      },
    },
  },
  {
    id: 'support',
    priceFrom: null, // TODO: цена поддержки в месяц (UZS)
    locales: {
      uz: {
        name: "Qo'llab-quvvatlash",
        for: 'Ishlab turgan tizim uchun: monitoring, tuzatishlar va yangi funksiyalar',
        timeline: 'oylik',
        unit: '/ oy',
        includes: [
          'Monitoring va zaxira nusxalar',
          'Xatolarni tuzatish SLA bilan',
          'Har oy yangi kichik funksiyalar',
          'Xodimlar uchun yordam',
        ],
      },
      ru: {
        name: 'Поддержка',
        for: 'Для работающей системы: мониторинг, исправления и новые функции',
        timeline: 'ежемесячно',
        unit: '/ мес',
        includes: [
          'Мониторинг и резервные копии',
          'Исправление ошибок по SLA',
          'Небольшие доработки каждый месяц',
          'Помощь сотрудникам',
        ],
      },
      en: {
        name: 'Support',
        for: 'For a live system: monitoring, fixes and new features',
        timeline: 'monthly',
        unit: '/ month',
        includes: [
          'Monitoring and backups',
          'Bug fixes under an SLA',
          'Small improvements every month',
          'Help for your staff',
        ],
      },
    },
  },
]

export const paymentFaq: L10n<Faq[]> = {
  uz: [
    {
      q: 'Narx qanday aniqlanadi?',
      a: "Bepul auditdan so'ng jarayonlaringiz xaritasini tuzamiz va modullar bo'yicha smeta beramiz. Smetada har bir modulning narxi va muddati alohida ko'rsatiladi, yashirin to'lovlar bo'lmaydi.",
    },
    {
      q: "To'lov qanday bosqichlarda amalga oshiriladi?",
      a: "TODO: to'lov bosqichlarini tasdiqlang (masalan, oldindan to'lov va har bir bosqich topshirilganda).",
    },
    {
      q: 'Shartnoma va hujjatlar rasmiylashtiriladimi?',
      a: "Ha. Ish shartnoma asosida olib boriladi: texnik topshiriq, muddatlar, kafolat va manba kodiga bo'lgan huquqlar shartnomada yoziladi.",
    },
    {
      q: "Manba kodi kimga tegishli bo'ladi?",
      a: "Maxsus ishlab chiqilgan tizimning manba kodi va ma'lumotlari to'liq to'lovdan keyin sizga tegishli bo'ladi. Siz boshqa jamoaga o'tishingiz ham mumkin — qaram bo'lib qolmaysiz.",
    },
    {
      q: 'Server va hosting xarajatlari narxga kiradimi?',
      a: "Server xarajatlari alohida, ular yuklamaga bog'liq. Auditda taxminiy oylik xarajatni hisoblab beramiz va eng tejamkor variantni tavsiya qilamiz.",
    },
  ],
  ru: [
    {
      q: 'Как определяется стоимость?',
      a: 'После бесплатного аудита мы составляем карту ваших процессов и даём смету по модулям. В смете отдельно указаны стоимость и срок каждого модуля, скрытых платежей нет.',
    },
    {
      q: 'Как проходит оплата?',
      a: 'TODO: подтвердите этапы оплаты (например, предоплата и оплата по сдаче каждого этапа).',
    },
    {
      q: 'Оформляется ли договор?',
      a: 'Да. Работаем по договору: техническое задание, сроки, гарантия и права на исходный код прописываются в договоре.',
    },
    {
      q: 'Кому принадлежит исходный код?',
      a: 'Исходный код и данные заказной системы после полной оплаты принадлежат вам. Вы можете перейти к другой команде — никакой зависимости от нас.',
    },
    {
      q: 'Входят ли в стоимость сервер и хостинг?',
      a: 'Серверные расходы оплачиваются отдельно и зависят от нагрузки. На аудите посчитаем примерный ежемесячный расход и предложим самый экономичный вариант.',
    },
  ],
  en: [
    {
      q: 'How is the price determined?',
      a: 'After the free audit we map your processes and give an estimate broken down by module, with the price and timeline of each module listed separately. No hidden fees.',
    },
    {
      q: 'How does payment work?',
      a: 'TODO: confirm the payment stages (e.g. an advance plus a payment on delivery of each stage).',
    },
    {
      q: 'Do you sign a contract?',
      a: 'Yes. We work under a contract that covers the specification, deadlines, warranty and source code ownership.',
    },
    {
      q: 'Who owns the source code?',
      a: 'Once paid in full, the source code and data of a custom system belong to you. You are free to move to another team — no lock-in.',
    },
    {
      q: 'Are servers and hosting included?',
      a: 'Server costs are separate and depend on load. During the audit we estimate the monthly cost and recommend the most economical setup.',
    },
  ],
}

export function getPlan(id: PlanId): Plan {
  return plans.find((p) => p.id === id)!
}

const currency = { uz: "so'm", ru: 'сум', en: 'UZS' } as const

export function formatPrice(value: number, locale: keyof typeof currency): string {
  return `${new Intl.NumberFormat('ru-RU').format(value)} ${currency[locale]}`
}
