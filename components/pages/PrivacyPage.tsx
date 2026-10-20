import { getDictionary } from '@/lib/dictionary'
import type { L10n, Locale } from '@/lib/i18n'
import { pathFor } from '@/lib/routes'
import { site } from '@/lib/site'
import { breadcrumbLd, graph } from '@/lib/seo'
import type { TextBlock } from '@/lib/types'
import { PageHero } from '@/components/sections/PageHero'
import { JsonLd } from '@/components/ui/JsonLd'
import { Rich } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

const updated = '2026-10-21'

const copy: L10n<{
  meta: PageMeta
  h1: string
  lead: string
  updatedLabel: string
  sections: TextBlock[]
}> = {
  uz: {
    meta: {
      title: 'Maxfiylik siyosati | ZOLVI',
      description:
        "ZOLVI maxfiylik siyosati: zolvi.uz saytida qanday shaxsiy ma'lumotlar yig'iladi, qanday maqsadda ishlatiladi va qanday himoya qilinadi.",
      heading: 'Maxfiylik siyosati',
    },
    h1: 'Maxfiylik siyosati',
    lead: "Ushbu siyosat zolvi.uz saytidan foydalanganingizda qanday ma'lumotlar yig'ilishini va ular bilan nima qilinishini tushuntiradi.",
    updatedLabel: 'Yangilangan',
    sections: [
      {
        h2: "1. Ma'lumotlar operatori",
        paragraphs: [
          `Shaxsiy ma'lumotlar operatori — ZOLVI (TODO: yuridik nom, STIR va yuridik manzil). Murojaatlar uchun: ${site.email}.`,
        ],
      },
      {
        h2: "2. Qanday ma'lumotlarni yig'amiz",
        paragraphs: [
          'Ariza formasi orqali: ismingiz, telefon raqamingiz, biznes turi va siz yozgan izoh.',
          "Avtomatik ravishda: sahifalarga tashriflar, qurilma va brauzer turi, taxminiy joylashuv (shahar darajasida) — Google Analytics va Yandex Metrika orqali, agar ular yoqilgan bo'lsa.",
        ],
      },
      {
        h2: "3. Ma'lumotlardan foydalanish maqsadi",
        paragraphs: [
          "Arizangizga javob berish, bepul auditni tashkil qilish va xizmatlarimiz bo'yicha siz bilan bog'lanish.",
          'Saytni yaxshilash: qaysi sahifalar foydali ekanini anonim statistika asosida tushunish.',
          "Biz ma'lumotlaringizni sotmaymiz va reklama uchun uchinchi shaxslarga bermaymiz.",
        ],
      },
      {
        h2: "4. Ma'lumotlarni uzatish va saqlash",
        paragraphs: [
          "Ariza ma'lumotlari jamoamizga Telegram Bot API orqali yuboriladi. Sayt Vercel platformasida joylashgan. Analitika ma'lumotlari Google va Yandex tomonidan ularning siyosatlariga muvofiq qayta ishlanadi.",
          "Ariza ma'lumotlari siz bilan hamkorlik uchun zarur bo'lgan muddat davomida saqlanadi (TODO: aniq saqlash muddatini belgilang).",
          "Shaxsga doir ma'lumotlarni qayta ishlashda O'zbekiston Respublikasining «Shaxsga doir ma'lumotlar to'g'risida»gi Qonuni talablariga amal qilamiz. TODO: yurist tomonidan tekshirilsin, jumladan ma'lumotlarni lokalizatsiya qilish talablari.",
        ],
      },
      {
        h2: '5. Cookie fayllar',
        paragraphs: [
          "Sayt mavzuni (yorug' yoki qorong'i) eslab qolish uchun brauzer xotirasidan, statistika uchun esa analitika tizimlarining cookie fayllaridan foydalanadi. Ularni brauzer sozlamalarida o'chirib qo'yishingiz mumkin.",
        ],
      },
      {
        h2: '6. Sizning huquqlaringiz',
        paragraphs: [
          `Siz ma'lumotlaringiz haqida ma'lumot olish, ularni tuzatish yoki o'chirishni so'rash huquqiga egasiz. Buning uchun ${site.email} manziliga yozing — 10 ish kuni ichida javob beramiz.`,
        ],
      },
    ],
  },
  ru: {
    meta: {
      title: 'Политика конфиденциальности | ZOLVI',
      description:
        'Политика конфиденциальности ZOLVI: какие персональные данные собираются на сайте zolvi.uz, для чего используются и как защищаются.',
      heading: 'Политика конфиденциальности',
    },
    h1: 'Политика конфиденциальности',
    lead: 'Эта политика объясняет, какие данные собираются при использовании сайта zolvi.uz и что с ними происходит.',
    updatedLabel: 'Обновлено',
    sections: [
      {
        h2: '1. Оператор данных',
        paragraphs: [
          `Оператор персональных данных — ZOLVI (TODO: юридическое название, ИНН и юридический адрес). Для обращений: ${site.email}.`,
        ],
      },
      {
        h2: '2. Какие данные мы собираем',
        paragraphs: [
          'Через форму заявки: ваше имя, номер телефона, тип бизнеса и комментарий.',
          'Автоматически: посещения страниц, тип устройства и браузера, примерное местоположение (на уровне города) — через Google Analytics и Яндекс Метрику, если они включены.',
        ],
      },
      {
        h2: '3. Цели использования данных',
        paragraphs: [
          'Ответить на вашу заявку, организовать бесплатный аудит и связаться с вами по нашим услугам.',
          'Улучшать сайт: понимать по анонимной статистике, какие страницы полезны.',
          'Мы не продаём ваши данные и не передаём их третьим лицам для рекламы.',
        ],
      },
      {
        h2: '4. Передача и хранение данных',
        paragraphs: [
          'Данные заявки отправляются нашей команде через Telegram Bot API. Сайт размещён на платформе Vercel. Данные аналитики обрабатываются Google и Яндексом в соответствии с их политиками.',
          'Данные заявок хранятся в течение срока, необходимого для сотрудничества с вами (TODO: указать точный срок хранения).',
          'При обработке персональных данных соблюдаем требования Закона Республики Узбекистан «О персональных данных». TODO: проверить юристом, включая требования о локализации данных.',
        ],
      },
      {
        h2: '5. Cookie',
        paragraphs: [
          'Сайт использует хранилище браузера, чтобы запомнить тему (светлую или тёмную), и cookie систем аналитики для статистики. Их можно отключить в настройках браузера.',
        ],
      },
      {
        h2: '6. Ваши права',
        paragraphs: [
          `Вы вправе запросить информацию о своих данных, их исправление или удаление. Напишите на ${site.email} — ответим в течение 10 рабочих дней.`,
        ],
      },
    ],
  },
  en: {
    meta: {
      title: 'Privacy Policy | ZOLVI',
      description:
        'ZOLVI privacy policy: which personal data is collected on zolvi.uz, what it is used for and how it is protected.',
      heading: 'Privacy policy',
    },
    h1: 'Privacy policy',
    lead: 'This policy explains what data is collected when you use zolvi.uz and what happens to it.',
    updatedLabel: 'Updated',
    sections: [
      {
        h2: '1. Data controller',
        paragraphs: [
          `The personal data controller is ZOLVI (TODO: legal name, tax ID and registered address). Contact: ${site.email}.`,
        ],
      },
      {
        h2: '2. What we collect',
        paragraphs: [
          'Through the enquiry form: your name, phone number, business type and comment.',
          'Automatically: page visits, device and browser type and approximate location (city level) — via Google Analytics and Yandex Metrica, when enabled.',
        ],
      },
      {
        h2: '3. Why we use it',
        paragraphs: [
          'To answer your enquiry, arrange the free audit and contact you about our services.',
          'To improve the website by understanding from anonymous statistics which pages are useful.',
          'We do not sell your data or share it with third parties for advertising.',
        ],
      },
      {
        h2: '4. Transfer and storage',
        paragraphs: [
          'Enquiry data is sent to our team via the Telegram Bot API. The website is hosted on Vercel. Analytics data is processed by Google and Yandex under their own policies.',
          'Enquiry data is kept for as long as needed to work with you (TODO: specify the exact retention period).',
          'We process personal data in line with the Law of the Republic of Uzbekistan “On Personal Data”. TODO: legal review, including data localization requirements.',
        ],
      },
      {
        h2: '5. Cookies',
        paragraphs: [
          'The site uses browser storage to remember your theme (light or dark) and analytics cookies for statistics. You can disable them in your browser settings.',
        ],
      },
      {
        h2: '6. Your rights',
        paragraphs: [
          `You may ask what data we hold about you and have it corrected or deleted. Write to ${site.email} and we will reply within 10 business days.`,
        ],
      },
    ],
  },
}

export function getMeta(locale: Locale): PageMeta {
  return copy[locale].meta
}

export function Page({ locale, routeKey }: PageProps) {
  const c = copy[locale]
  const d = getDictionary(locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: c.h1, path: pathFor(routeKey, locale) },
  ]
  return (
    <>
      <PageHero crumbs={crumbs} label={d.breadcrumbsLabel} title={c.h1} lead={c.lead}>
        <p className="mt-4 text-sm text-muted">
          {c.updatedLabel}: <time dateTime={updated}>{updated}</time>
        </p>
      </PageHero>
      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <div className="prose-zolvi max-w-3xl">
            {c.sections.flatMap((s) => [
              <h2 key={s.h2}>{s.h2}</h2>,
              ...s.paragraphs.map((p) => (
                <p key={p.slice(0, 50)}>
                  <Rich text={p} />
                </p>
              )),
            ])}
          </div>
        </div>
      </section>
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
    </>
  )
}
