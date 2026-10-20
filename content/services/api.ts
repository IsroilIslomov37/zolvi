import type { Service } from '@/lib/types'

const service: Service = {
  id: 'api',
  kind: 'service',
  category: 'business',
  icon: 'api',
  demo: 'erp',
  plan: 'start',
  relatedServices: ['erp', 'crm', 'automation', 'ecommerce'],
  relatedIndustries: ['e-commerce', 'logistics', 'retail', 'manufacturing'],
  locales: {
    uz: {
      slug: 'api-integratsiya',
      name: 'API integratsiya',
      summary:
        "1C, CRM, sayt, to'lov tizimlari va marketpleyslarni bir-biri bilan bog'laymiz — ma'lumot ikki marta kiritilmaydi.",
      metaTitle: 'API integratsiya: 1C, CRM, Click, Payme | ZOLVI',
      metaDescription:
        "API integratsiya: 1C, CRM, sayt, Click, Payme, Uzum, marketpleyslar va bank bilan ma'lumot almashinuvi. Qo'lda kiritish va xatolarsiz. Toshkent.",
      h1: "API integratsiya — dasturlaringizni bitta tizimga bog'laymiz",
      lead: "Ko'p kompaniyalarda yaxshi dasturlar bor — 1C, CRM, sayt, kassa — lekin ular bir-biri bilan «gaplashmaydi», va xodimlar ma'lumotni qo'lda ko'chiradi. API integratsiya bu ko'prikni quradi: buyurtma saytdan CRM'ga, CRM'dan 1C'ga, to'lov holati bankdan tizimga avtomatik o'tadi.",
      audience: [
        "1C va CRM'ni bog'lamoqchi bo'lgan kompaniyalar",
        "Marketpleyslar va o'z saytida bir vaqtda sotadigan do'konlar",
        "To'lov tizimlari va bank bilan avtomatik solishtirish kerak bo'lgan bizneslar",
        "Hamkorlari va yetkazib beruvchilari bilan ma'lumot almashadigan kompaniyalar",
      ],
      pains: [
        {
          title: "Bir xil ma'lumot ikki-uch marta kiritiladi",
          text: "Buyurtma saytda, keyin CRM'da, keyin 1C'da qayta yoziladi — vaqt ketadi va xatolar paydo bo'ladi.",
        },
        {
          title: "Ma'lumotlar mos kelmaydi",
          text: "CRM'dagi summa 1C'dagidan farq qiladi, qoldiqlar saytda boshqacha — qaysi biri to'g'riligini hech kim bilmaydi.",
        },
        {
          title: "To'lovlar qo'lda tekshiriladi",
          text: "Buxgalter har kuni bank ko'chirmasini buyurtmalar bilan qo'lda solishtiradi.",
        },
      ],
      includes: [
        {
          title: 'Integratsiya auditi',
          text: "Qaysi tizimlar, qaysi ma'lumotlar, qaysi yo'nalishda va qanchalik tez almashinishi kerakligini xaritaga tushiramiz.",
        },
        {
          title: '1C integratsiyasi',
          text: "Mahsulotlar, narxlar, qoldiqlar, buyurtmalar va to'lovlar 1C bilan ikki tomonlama almashinadi.",
        },
        {
          title: "To'lov tizimlari",
          text: "Click, Payme, Uzum va bank API'lari — to'lov holati avtomatik ravishda buyurtmaga bog'lanadi.",
        },
        {
          title: 'Marketpleyslar va yetkazib berish',
          text: 'Mahsulotlar va buyurtmalar marketpleyslar hamda kuryer xizmatlari bilan sinxronlanadi.',
        },
        {
          title: "O'z API'ingiz",
          text: 'Hamkorlar va mobil ilovalar uchun hujjatlashtirilgan, xavfsiz API ishlab chiqamiz.',
        },
        {
          title: 'Monitoring va xatolar',
          text: "Har bir almashinuv jurnalga yoziladi, xato bo'lsa mas'ul shaxsga darhol xabar boradi va qayta urinish avtomatik.",
        },
      ],
      sections: [
        {
          h2: 'Integratsiya — eng tez qaytadigan investitsiya',
          paragraphs: [
            "Yangi tizim qurish shart emas bo'lgan holatlar ko'p: mavjud dasturlarni bog'lashning o'zi qo'l ishini keskin kamaytiradi. Integratsiya odatda bir necha haftada tayyor bo'ladi va birinchi oydan o'zini oqlay boshlaydi.",
            "Auditda biz har bir qo'lda ko'chirish nuqtasini topamiz va qaysi integratsiya eng ko'p vaqtni tejashini hisoblaymiz.",
          ],
        },
        {
          h2: "Ishonchli integratsiya qanday ko'rinadi",
          paragraphs: [
            "Yaxshi integratsiya «ishlaydi» degani emas, balki xato bo'lganda ham ma'lumot yo'qolmasligi demak: navbat, qayta urinish, dublikatlardan himoya va tushunarli jurnal.",
            'Biz integratsiyani alohida xizmat sifatida quramiz, shuning uchun bitta tizim yangilanganda boshqalari buzilmaydi.',
          ],
        },
        {
          h2: "Qaysi integratsiyalar eng ko'p so'raladi",
          paragraphs: [
            "Eng ko'p uchraydigan vazifalar: sayt yoki Telegram-bot buyurtmalarini 1C'ga uzatish, CRM'ni IP-telefoniya bilan bog'lash, Click va Payme to'lovlarini buyurtmalar bilan avtomatik solishtirish, marketpleyslardagi qoldiqlarni ombor bilan sinxronlash.",
            "Har bir integratsiya uchun ma'lumot formati, yangilanish tezligi va xato bo'lganda nima qilish kerakligini oldindan kelishib olamiz — shunda integratsiya «jimgina» buzilib qolmaydi.",
          ],
        },
      ],
      timeline: '2–6 hafta',
      faq: [
        {
          q: 'API integratsiya narxi qancha?',
          a: "Oddiy integratsiya «Start» paketiga kiradi. Narx tizimlar soni va ma'lumot almashinuvi murakkabligiga bog'liq.",
        },
        {
          q: "Dasturda API bo'lmasa-chi?",
          a: "Fayl almashinuvi, ma'lumotlar bazasi yoki boshqa usul bilan bog'lash yo'lini topamiz. Auditda imkoniyatlarni tekshiramiz.",
        },
        {
          q: "1C bilan qanday bog'lanadi?",
          a: "1C konfiguratsiyasiga qarab HTTP-servislar, OData yoki almashinuv fayllari orqali. Kerak bo'lsa, 1C dasturchisi bilan birga ishlaymiz.",
        },
        {
          q: "Integratsiya buzilsa nima bo'ladi?",
          a: "Xato jurnalga yoziladi, ma'lumot navbatda saqlanadi va mas'ul shaxsga xabar boradi. Qo'llab-quvvatlash paketida biz uni tuzatamiz.",
        },
        {
          q: "Mavjud CRM'imizni almashtirish kerakmi?",
          a: "Yo'q, integratsiya mavjud tizimlar bilan ishlaydi. Faqat ular vazifani bajara olmasa, almashtirishni taklif qilamiz.",
        },
      ],
    },
    ru: {
      slug: 'api-integraciya',
      name: 'API-интеграция',
      summary:
        'Связываем 1С, CRM, сайт, платёжные системы и маркетплейсы — данные не вводятся дважды.',
      metaTitle: 'API-интеграция: 1С, CRM, Click, Payme | ZOLVI',
      metaDescription:
        'API-интеграция: обмен данными между 1С, CRM, сайтом, Click, Payme, Uzum, маркетплейсами и банком. Без ручного ввода и ошибок. Ташкент.',
      h1: 'API-интеграция — связываем ваши программы в одну систему',
      lead: 'Во многих компаниях хорошие программы — 1С, CRM, сайт, касса — «не разговаривают» друг с другом, и сотрудники переносят данные руками. API-интеграция строит мост: заказ сам переходит с сайта в CRM, из CRM в 1С, статус оплаты — из банка в систему.',
      audience: [
        'Компании, которым нужно связать 1С и CRM',
        'Магазины, которые продают одновременно на маркетплейсах и на своём сайте',
        'Бизнес, которому нужна автоматическая сверка с платёжными системами и банком',
        'Компании, обменивающиеся данными с партнёрами и поставщиками',
      ],
      pains: [
        {
          title: 'Одни и те же данные вводятся дважды-трижды',
          text: 'Заказ записывается на сайте, потом в CRM, потом в 1С — уходит время и появляются ошибки.',
        },
        {
          title: 'Данные не сходятся',
          text: 'Сумма в CRM отличается от 1С, остатки на сайте другие — никто не знает, где правда.',
        },
        {
          title: 'Оплаты проверяются вручную',
          text: 'Бухгалтер каждый день вручную сверяет банковскую выписку с заказами.',
        },
      ],
      includes: [
        {
          title: 'Аудит интеграций',
          text: 'Картируем, какие системы, какие данные, в каком направлении и как быстро должны обмениваться.',
        },
        {
          title: 'Интеграция с 1С',
          text: 'Двусторонний обмен товарами, ценами, остатками, заказами и оплатами с 1С.',
        },
        {
          title: 'Платёжные системы',
          text: 'Click, Payme, Uzum и банковские API — статус оплаты автоматически привязывается к заказу.',
        },
        {
          title: 'Маркетплейсы и доставка',
          text: 'Товары и заказы синхронизируются с маркетплейсами и курьерскими службами.',
        },
        {
          title: 'Собственный API',
          text: 'Разрабатываем документированный и защищённый API для партнёров и мобильных приложений.',
        },
        {
          title: 'Мониторинг и ошибки',
          text: 'Каждый обмен пишется в журнал, при ошибке ответственный получает уведомление, повтор — автоматически.',
        },
      ],
      sections: [
        {
          h2: 'Интеграция — самая быстро окупаемая инвестиция',
          paragraphs: [
            'Часто новую систему строить не нужно: связка существующих программ сама по себе резко сокращает ручную работу. Интеграция обычно готова за несколько недель и начинает окупаться с первого месяца.',
            'На аудите находим каждую точку ручного переноса и считаем, какая интеграция сэкономит больше всего времени.',
          ],
        },
        {
          h2: 'Как выглядит надёжная интеграция',
          paragraphs: [
            'Хорошая интеграция — это не «работает», а «не теряет данные даже при сбое»: очередь, повторные попытки, защита от дублей и понятный журнал.',
            'Строим интеграцию как отдельный сервис, поэтому обновление одной системы не ломает остальные.',
          ],
        },
        {
          h2: 'Какие интеграции просят чаще всего',
          paragraphs: [
            'Самые частые задачи: передача заказов с сайта или из Telegram-бота в 1С, связка CRM с IP-телефонией, автоматическая сверка оплат Click и Payme с заказами, синхронизация остатков на маркетплейсах со складом.',
            'Для каждой интеграции заранее согласуем формат данных, частоту обновления и действия при ошибке — чтобы интеграция не ломалась «тихо».',
          ],
        },
      ],
      timeline: '2–6 недель',
      faq: [
        {
          q: 'Сколько стоит API-интеграция?',
          a: 'Простая интеграция входит в пакет «Старт». Стоимость зависит от числа систем и сложности обмена данными.',
        },
        {
          q: 'Что если у программы нет API?',
          a: 'Найдём другой способ — обмен файлами, через базу данных и т. п. На аудите проверим возможности.',
        },
        {
          q: 'Как подключаетесь к 1С?',
          a: 'В зависимости от конфигурации 1С — через HTTP-сервисы, OData или файлы обмена. При необходимости работаем вместе с вашим 1С-программистом.',
        },
        {
          q: 'Что будет, если интеграция сломается?',
          a: 'Ошибка пишется в журнал, данные сохраняются в очереди, ответственный получает уведомление. По пакету поддержки мы её исправляем.',
        },
        {
          q: 'Нужно менять нашу CRM?',
          a: 'Нет, интеграция работает с существующими системами. Замену предлагаем, только если они не справляются с задачей.',
        },
      ],
    },
    en: {
      slug: 'api-integration',
      name: 'API integration',
      summary:
        'We connect 1C, your CRM, website, payment systems and marketplaces so data is never entered twice.',
      metaTitle: 'API Integration: 1C, CRM, Click, Payme | ZOLVI',
      metaDescription:
        'API integration: data exchange between 1C, your CRM, website, Click, Payme, Uzum, marketplaces and banks. No manual entry, no mismatches. Tashkent.',
      h1: 'API integration — we connect your software into one system',
      lead: 'Many companies run good software — 1C, a CRM, a website, a till — that does not talk to each other, so staff copy data by hand. API integration builds the bridge: an order moves from the website to the CRM and on to 1C, and payment status flows from the bank into the system on its own.',
      audience: [
        'Companies that need to connect 1C and their CRM',
        'Stores selling on marketplaces and their own website at the same time',
        'Businesses needing automatic reconciliation with payment systems and banks',
        'Companies exchanging data with partners and suppliers',
      ],
      pains: [
        {
          title: 'The same data entered two or three times',
          text: 'An order is recorded on the website, then in the CRM, then in 1C — time is wasted and errors creep in.',
        },
        {
          title: "Data doesn't match",
          text: 'The CRM total differs from 1C and website stock is different again — nobody knows which is right.',
        },
        {
          title: 'Payments checked by hand',
          text: 'Every day the accountant matches the bank statement against orders manually.',
        },
      ],
      includes: [
        {
          title: 'Integration audit',
          text: 'We map which systems exchange which data, in which direction and how fast.',
        },
        {
          title: '1C integration',
          text: 'Two-way exchange of products, prices, stock, orders and payments with 1C.',
        },
        {
          title: 'Payment systems',
          text: 'Click, Payme, Uzum and bank APIs — payment status is linked to the order automatically.',
        },
        {
          title: 'Marketplaces and delivery',
          text: 'Products and orders stay in sync with marketplaces and courier services.',
        },
        {
          title: 'Your own API',
          text: 'We build a documented, secure API for partners and mobile apps.',
        },
        {
          title: 'Monitoring and errors',
          text: 'Every exchange is logged; on failure the owner is notified and retries happen automatically.',
        },
      ],
      sections: [
        {
          h2: 'Integration pays back faster than anything else',
          paragraphs: [
            'Often no new system is needed: connecting the software you already have cuts manual work dramatically. An integration is usually ready in a few weeks and starts paying for itself in the first month.',
            'During the audit we find every point of manual copying and calculate which integration saves the most time.',
          ],
        },
        {
          h2: 'What a reliable integration looks like',
          paragraphs: [
            'A good integration is not one that “works” but one that never loses data, even on failure: a queue, retries, duplicate protection and a readable log.',
            'We build integrations as a separate service, so updating one system never breaks the others.',
          ],
        },
        {
          h2: 'The integrations clients ask for most',
          paragraphs: [
            'The most common jobs: sending website or Telegram bot orders to 1C, connecting the CRM to IP telephony, matching Click and Payme payments to orders automatically, and syncing marketplace stock with the warehouse.',
            'For each integration we agree up front on the data format, update frequency and what happens on failure, so it never breaks silently.',
          ],
        },
      ],
      timeline: '2–6 weeks',
      faq: [
        {
          q: 'How much does an API integration cost?',
          a: 'A simple integration is part of the Start package. The price depends on the number of systems and the complexity of the exchange.',
        },
        {
          q: 'What if the software has no API?',
          a: 'We find another route — file exchange, database access and so on. The audit shows what is possible.',
        },
        {
          q: 'How do you connect to 1C?',
          a: 'Depending on the 1C configuration: HTTP services, OData or exchange files. Where needed we work alongside your 1C developer.',
        },
        {
          q: 'What happens if the integration breaks?',
          a: 'The error is logged, data waits in the queue and the owner is notified. Under a support plan we fix it.',
        },
        {
          q: 'Do we need to replace our CRM?',
          a: 'No, the integration works with your existing systems. We suggest replacing them only if they cannot do the job.',
        },
      ],
    },
  },
}

export default service
