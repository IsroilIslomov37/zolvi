import type { Demo } from '@/lib/types'

/** Each demo has its own URL (/demo/<id>) so it can be sent to a client as a link. */
export const demos: Demo[] = [
  {
    id: 'crm',
    icon: 'crm',
    relatedServices: ['crm', 'automation', 'custom-software'],
    locales: {
      uz: {
        name: 'CRM demo',
        metaTitle: "CRM demo: savdo voronkasini sinab ko'ring | ZOLVI",
        metaDescription:
          "Interaktiv CRM demo: lidlarni bosqichdan bosqichga o'tkazing, yangi murojaat qo'shing va savdo summasini real vaqtda ko'ring.",
        h1: 'CRM demo: savdo voronkasi qanday ishlaydi',
        lead: "Lid kartochkasini bosing — u keyingi bosqichga o'tadi, summa va faollik jurnali darhol yangilanadi. Haqiqiy CRM sizning bosqichlaringiz va maydonlaringiz bilan quriladi.",
      },
      ru: {
        name: 'Демо CRM',
        metaTitle: 'Демо CRM: попробуйте воронку продаж | ZOLVI',
        metaDescription:
          'Интерактивное демо CRM: переводите лиды по этапам, добавляйте обращения и смотрите сумму продаж в реальном времени.',
        h1: 'Демо CRM: как работает воронка продаж',
        lead: 'Нажмите на карточку лида — он перейдёт на следующий этап, а сумма и журнал активности сразу обновятся. Настоящая CRM строится с вашими этапами и полями.',
      },
      en: {
        name: 'CRM demo',
        metaTitle: 'CRM Demo: Try a Sales Pipeline | ZOLVI',
        metaDescription:
          'Interactive CRM demo: move leads through the stages, add new requests and watch pipeline value update in real time.',
        h1: 'CRM demo: how a sales pipeline works',
        lead: 'Click a lead card to move it to the next stage; the totals and activity log update instantly. A real CRM is built with your own stages and fields.',
      },
    },
  },
  {
    id: 'pos',
    icon: 'pos',
    relatedServices: ['pos', 'mobile-apps'],
    locales: {
      uz: {
        name: 'POS demo',
        metaTitle: 'POS demo: kassadan oshxonagacha | ZOLVI',
        metaDescription:
          "Interaktiv POS demo: taom tanlang, buyurtmani oshxonaga yuboring va oshxona ekranida qanday paydo bo'lishini ko'ring.",
        h1: 'POS demo: buyurtma kassadan oshxonaga',
        lead: 'Menyudan taom tanlang va «Oshxonaga yuborish»ni bosing: buyurtma oshxona ekraniga bir zumda tushadi, oshpaz uni «Tayyor» deb belgilaydi.',
      },
      ru: {
        name: 'Демо POS',
        metaTitle: 'Демо POS: от кассы до кухни | ZOLVI',
        metaDescription:
          'Интерактивное демо POS: выберите блюда, отправьте заказ на кухню и посмотрите, как он появляется на экране повара.',
        h1: 'Демо POS: заказ с кассы на кухню',
        lead: 'Выберите блюда в меню и нажмите «Отправить на кухню»: заказ мгновенно появится на кухонном экране, а повар отметит его готовым.',
      },
      en: {
        name: 'POS demo',
        metaTitle: 'POS Demo: From Till to Kitchen | ZOLVI',
        metaDescription:
          'Interactive POS demo: pick dishes, send the order to the kitchen and see it appear on the kitchen display instantly.',
        h1: 'POS demo: an order from till to kitchen',
        lead: 'Pick dishes from the menu and press “Send to kitchen”: the order appears on the kitchen display instantly and the cook marks it ready.',
      },
    },
  },
  {
    id: 'telegram-bot',
    icon: 'bot',
    relatedServices: ['telegram-bot', 'ai-automation'],
    locales: {
      uz: {
        name: 'Telegram-bot demo',
        metaTitle: 'Telegram-bot demo: buyurtma va bron | ZOLVI',
        metaDescription:
          "Interaktiv Telegram-bot demo: menyu, buyurtma holati, stol bron qilish va operatorga ulash. Bot yaratishdan oldin sinab ko'ring.",
        h1: 'Telegram-bot demo: mijoz bilan suhbat',
        lead: "Tugmalarni bosing — bot menyuni ko'rsatadi, buyurtma holatini aytadi, stol bron qiladi yoki murojaatni CRM orqali operatorga uzatadi.",
      },
      ru: {
        name: 'Демо Telegram-бота',
        metaTitle: 'Демо Telegram-бота: заказы и брони | ZOLVI',
        metaDescription:
          'Интерактивное демо Telegram-бота: меню, статус заказа, бронь стола и связь с оператором. Попробуйте до разработки.',
        h1: 'Демо Telegram-бота: диалог с клиентом',
        lead: 'Нажимайте кнопки — бот покажет меню, сообщит статус заказа, забронирует стол или передаст обращение оператору через CRM.',
      },
      en: {
        name: 'Telegram bot demo',
        metaTitle: 'Telegram Bot Demo: Orders and Bookings | ZOLVI',
        metaDescription:
          'Interactive Telegram bot demo: menu, order status, table booking and handover to an operator. Try it before you build one.',
        h1: 'Telegram bot demo: a conversation with a customer',
        lead: 'Tap the buttons: the bot shows the menu, reports order status, books a table or hands the request to an operator via the CRM.',
      },
    },
  },
  {
    id: 'erp',
    icon: 'erp',
    relatedServices: ['erp', 'ecommerce', 'api'],
    locales: {
      uz: {
        name: 'ERP demo',
        metaTitle: 'ERP demo: ombor va qoldiqlar nazorati | ZOLVI',
        metaDescription:
          "Interaktiv ERP demo: tovar soting, qoldiq minimumdan tushganda ogohlantirish oling va ta'minotchiga bir tugma bilan buyurtma bering.",
        h1: 'ERP demo: ombor qoldiqlari real vaqtda',
        lead: "«Sotish»ni bosing — qoldiq kamayadi. Minimumdan tushganda tizim ogohlantiradi va ta'minotchiga buyurtma tayyorlaydi.",
      },
      ru: {
        name: 'Демо ERP',
        metaTitle: 'Демо ERP: склад и контроль остатков | ZOLVI',
        metaDescription:
          'Интерактивное демо ERP: продавайте товар, получайте уведомление о дефиците и заказывайте у поставщика одной кнопкой.',
        h1: 'Демо ERP: остатки склада в реальном времени',
        lead: 'Нажмите «Продать» — остаток уменьшится. Когда он упадёт ниже минимума, система предупредит и подготовит заказ поставщику.',
      },
      en: {
        name: 'ERP demo',
        metaTitle: 'ERP Demo: Inventory and Stock Control | ZOLVI',
        metaDescription:
          'Interactive ERP demo: sell items, get an alert when stock drops below minimum and reorder from the supplier in one click.',
        h1: 'ERP demo: real-time inventory',
        lead: 'Press “Sell” and stock goes down. When it drops below the minimum, the system raises an alert and prepares a supplier order.',
      },
    },
  },
  {
    id: 'ai',
    icon: 'ai',
    relatedServices: ['ai', 'ai-automation'],
    locales: {
      uz: {
        name: 'AI demo',
        metaTitle: 'AI demo: murojaatlarni avtomatik saralash | ZOLVI',
        metaDescription:
          "Interaktiv AI demo: sun'iy intellekt mijoz murojaatini tasniflaydi, muhimligini aniqlaydi, bo'limga yo'naltiradi va javob tayyorlaydi.",
        h1: "AI demo: sun'iy intellekt murojaatlarni saralaydi",
        lead: "Murojaatni tanlang va «AI bilan tahlil»ni bosing: AI maqsadni, muhimlikni va mas'ul bo'limni aniqlaydi, javob loyihasini yozadi. Yuborishdan oldin xodim tasdiqlaydi.",
      },
      ru: {
        name: 'Демо AI',
        metaTitle: 'Демо AI: автоматическая сортировка обращений | ZOLVI',
        metaDescription:
          'Интерактивное демо AI: искусственный интеллект классифицирует обращение, определяет приоритет, направляет в отдел и готовит ответ.',
        h1: 'Демо AI: искусственный интеллект сортирует обращения',
        lead: 'Выберите обращение и нажмите «Анализ AI»: AI определит намерение, приоритет и ответственный отдел и напишет черновик ответа. Перед отправкой сотрудник подтверждает.',
      },
      en: {
        name: 'AI demo',
        metaTitle: 'AI Demo: Automatic Request Triage | ZOLVI',
        metaDescription:
          'Interactive AI demo: the AI classifies a customer request, sets its priority, routes it to a team and drafts a reply.',
        h1: 'AI demo: artificial intelligence triages requests',
        lead: 'Pick a request and press “Analyze with AI”: it detects the intent, priority and owning team and drafts a reply. A person approves before sending.',
      },
    },
  },
]
