import type { Service } from '@/lib/types'

const service: Service = {
  id: 'mobile-apps',
  kind: 'service',
  category: 'products',
  icon: 'mobile',
  demo: 'pos',
  caseId: 'field-service-platform',
  plan: 'business',
  relatedServices: ['web-apps', 'saas', 'api', 'pos'],
  relatedIndustries: ['field-service', 'logistics', 'e-commerce', 'restaurants'],
  locales: {
    uz: {
      slug: 'mobil-ilovalar',
      name: 'Mobil ilovalar',
      summary:
        'iOS va Android uchun ilovalar: mijozlar, kuryerlar, savdo agentlari va dala xodimlari uchun.',
      metaTitle: 'Mobil ilovalar ishlab chiqish: iOS va Android | ZOLVI',
      metaDescription:
        'iOS va Android uchun mobil ilovalar: mijozlar ilovasi, kuryer va savdo agenti ilovasi, oflayn rejim, push-bildirishnomalar. Toshkentda ishlab chiqamiz.',
      h1: 'Mobil ilovalar ishlab chiqish — iOS va Android',
      lead: "Mobil ilova mijozingizning telefonida doimiy joy oladi, xodimlaringizga esa ofisdan tashqarida ham tizim bilan ishlash imkonini beradi. ZOLVI mijozlar uchun ilovalar va ichki ilovalarni — kuryerlar, savdo agentlari, texniklar uchun — iOS va Android'da bitta kod bazasidan ishlab chiqadi.",
      audience: [
        "Doimiy mijozlari bor restoran, do'kon va xizmat ko'rsatish tarmoqlari",
        'Kuryerlar va yetkazib berish xizmatlari',
        'Savdo agentlari bilan ishlaydigan distribyutorlar',
        'Texniklar va montajchilar brigadalariga ega kompaniyalar',
      ],
      pains: [
        {
          title: "Dala xodimlari «ko'rinmaydi»",
          text: "Agent yoki texnik qayerda, nima qildi va qachon tugatdi — buni faqat qo'ng'iroq qilib bilish mumkin.",
        },
        {
          title: "Ma'lumot qog'ozda keladi",
          text: 'Buyurtmalar, dalolatnomalar va fotohisobotlar kechqurun ofisga olib kelinadi va qayta kiritiladi.',
        },
        {
          title: "Mijoz bilan aloqa yo'q",
          text: "Mijoz bir marta xarid qiladi va yo'qoladi: bonuslar, eslatmalar va shaxsiy takliflar yo'q.",
        },
      ],
      includes: [
        {
          title: 'Mijozlar ilovasi',
          text: "Katalog, buyurtma, to'lov, sodiqlik dasturi va buyurtma holatini kuzatish.",
        },
        {
          title: 'Kuryer va agent ilovasi',
          text: "Marshrutlar, buyurtmalar ro'yxati, to'lov qabul qilish, GPS va bajarilish holati real vaqtda.",
        },
        {
          title: 'Oflayn rejim',
          text: "Internet yo'q joyda ham ishlaydi, aloqa tiklanganda ma'lumotlar avtomatik sinxronlanadi.",
        },
        {
          title: 'Kamera va hujjatlar',
          text: 'Fotohisobot, shtrix-kod skanerlash, elektron imzo va dalolatnomalar telefonda.',
        },
        {
          title: 'Push-bildirishnomalar',
          text: 'Mijozga buyurtma holati va aksiyalar, xodimga yangi vazifa haqida darhol xabar.',
        },
        {
          title: "Do'konlarga joylash",
          text: "App Store va Google Play'ga nashr qilish, yangilanishlar va ilova analitikasi.",
        },
      ],
      sections: [
        {
          h2: 'Bitta kod — ikki platforma',
          paragraphs: [
            "Ko'pchilik biznes ilovalari uchun kross-platforma texnologiyalar (masalan, React Native yoki Flutter) eng yaxshi tanlov: ilova iOS va Android'da bir vaqtda chiqadi, ishlab chiqish va qo'llab-quvvatlash arzonroq bo'ladi.",
            "Ilova sizning CRM, ERP yoki POS tizimingiz bilan bitta backend orqali ishlaydi — mobil ilovada qilingan har bir harakat ofisdagi tizimda darhol ko'rinadi.",
          ],
        },
        {
          h2: 'Ilova kerakmi yoki Telegram-bot yetadimi?',
          paragraphs: [
            "Mijozlar uchun ko'p vazifalarni Telegram-bot ham bajaradi va uni o'rnatish shart emas. Mobil ilova sodiqlik dasturi, murakkab katalog yoki doimiy foydalanish kerak bo'lganda o'zini oqlaydi.",
            "Xodimlar uchun esa — oflayn rejim, GPS, kamera va skanerlash kerak bo'lsa — mobil ilova deyarli har doim to'g'ri tanlov. Auditda qaysi variant sizga mosligini ochiq aytamiz.",
          ],
        },
        {
          h2: "Mobil ilova narxi nimaga bog'liq",
          paragraphs: [
            "Mobil ilova narxiga ekranlar soni, oflayn rejim, kamera va GPS kabi qurilma imkoniyatlari, to'lovlar va backend bilan integratsiya ta'sir qiladi. Agar backend (CRM, ERP yoki POS) allaqachon mavjud bo'lsa, ilova arzonroq va tezroq tayyor bo'ladi.",
            "Do'konlarga nashr qilish, push-bildirishnomalar va analitika ham hisobga olinadi. Smetani bosiladigan prototipdan keyin beramiz — shunda har bir ekran nima uchun kerakligi aniq bo'ladi.",
          ],
        },
      ],
      timeline: '8–14 hafta',
      faq: [
        {
          q: 'Mobil ilova narxi qancha?',
          a: "Narx ekranlar soni, integratsiyalar va platformalarga bog'liq. Odatda «Biznes» paketi doirasida; aniq smetani prototipdan keyin beramiz.",
        },
        {
          q: 'iOS va Android uchun alohida ilova kerakmi?',
          a: "Yo'q, kross-platforma texnologiya bilan bitta kod ikkala platformada ishlaydi.",
        },
        {
          q: "Ilovani App Store va Google Play'ga siz joylaysizmi?",
          a: "Ha, nashr qilish va do'kon talablariga moslashni o'z zimmamizga olamiz. Dasturchi akkauntlari kompaniyangiz nomiga ochiladi.",
        },
        {
          q: "Internet bo'lmasa ilova ishlaydimi?",
          a: "Ha, xodimlar ilovalari oflayn rejimda ishlaydi va aloqa paydo bo'lganda ma'lumotlarni sinxronlaydi.",
        },
        {
          q: "Ilovani keyin kim qo'llab-quvvatlaydi?",
          a: "Qo'llab-quvvatlash paketi bo'yicha biz: OS yangilanishlariga moslash, xatolarni tuzatish va yangi funksiyalar.",
        },
      ],
    },
    ru: {
      slug: 'mobilnye-prilozheniya',
      name: 'Мобильные приложения',
      summary:
        'Приложения для iOS и Android: для клиентов, курьеров, торговых агентов и выездных сотрудников.',
      metaTitle: 'Разработка мобильных приложений iOS и Android | ZOLVI',
      metaDescription:
        'Мобильные приложения для iOS и Android: приложение для клиентов, курьеров и торговых агентов, офлайн-режим, push-уведомления. Разработка в Ташкенте.',
      h1: 'Разработка мобильных приложений для iOS и Android',
      lead: 'Мобильное приложение занимает постоянное место в телефоне клиента, а сотрудникам даёт работать с системой вне офиса. ZOLVI разрабатывает клиентские и внутренние приложения — для курьеров, торговых агентов, техников — для iOS и Android из одной кодовой базы.',
      audience: [
        'Сети ресторанов, магазинов и сервисов с постоянными клиентами',
        'Курьерские службы и доставка',
        'Дистрибьюторы с торговыми агентами',
        'Компании с бригадами техников и монтажников',
      ],
      pains: [
        {
          title: 'Выездных сотрудников «не видно»',
          text: 'Где агент или техник, что сделал и когда закончил — можно узнать только звонком.',
        },
        {
          title: 'Данные приходят на бумаге',
          text: 'Заказы, акты и фотоотчёты привозят в офис вечером и вносят заново.',
        },
        {
          title: 'Нет связи с клиентом',
          text: 'Клиент покупает один раз и пропадает: нет бонусов, напоминаний и персональных предложений.',
        },
      ],
      includes: [
        {
          title: 'Приложение для клиентов',
          text: 'Каталог, заказ, оплата, программа лояльности и отслеживание статуса заказа.',
        },
        {
          title: 'Приложение для курьеров и агентов',
          text: 'Маршруты, список заказов, приём оплаты, GPS и статус выполнения в реальном времени.',
        },
        {
          title: 'Офлайн-режим',
          text: 'Работает без интернета, данные синхронизируются автоматически при появлении связи.',
        },
        {
          title: 'Камера и документы',
          text: 'Фотоотчёт, сканирование штрихкодов, электронная подпись и акты прямо в телефоне.',
        },
        {
          title: 'Push-уведомления',
          text: 'Клиенту — статус заказа и акции, сотруднику — новая задача, мгновенно.',
        },
        {
          title: 'Публикация в сторах',
          text: 'Публикация в App Store и Google Play, обновления и аналитика приложения.',
        },
      ],
      sections: [
        {
          h2: 'Один код — две платформы',
          paragraphs: [
            'Для большинства бизнес-приложений лучший выбор — кроссплатформенные технологии (например, React Native или Flutter): приложение выходит на iOS и Android одновременно, разработка и поддержка обходятся дешевле.',
            'Приложение работает через общий бэкенд с вашей CRM, ERP или POS — каждое действие в мобильном приложении сразу видно в системе в офисе.',
          ],
        },
        {
          h2: 'Нужно приложение или хватит Telegram-бота?',
          paragraphs: [
            'Многие задачи для клиентов решает и Telegram-бот, который не нужно устанавливать. Мобильное приложение оправдано, когда нужны программа лояльности, сложный каталог или постоянное использование.',
            'Для сотрудников — если нужны офлайн-режим, GPS, камера и сканирование — мобильное приложение почти всегда правильный выбор. На аудите честно скажем, какой вариант подходит вам.',
          ],
        },
        {
          h2: 'От чего зависит стоимость мобильного приложения',
          paragraphs: [
            'На стоимость влияют число экранов, офлайн-режим, возможности устройства вроде камеры и GPS, оплата и интеграция с бэкендом. Если бэкенд (CRM, ERP или POS) уже есть, приложение выходит дешевле и быстрее.',
            'Учитываются также публикация в сторах, push-уведомления и аналитика. Смету даём после кликабельного прототипа — тогда понятно, зачем нужен каждый экран.',
          ],
        },
      ],
      timeline: '8–14 недель',
      faq: [
        {
          q: 'Сколько стоит мобильное приложение?',
          a: 'Стоимость зависит от числа экранов, интеграций и платформ. Обычно в рамках пакета «Бизнес»; точную смету даём после прототипа.',
        },
        {
          q: 'Нужны отдельные приложения для iOS и Android?',
          a: 'Нет, с кроссплатформенной технологией один код работает на обеих платформах.',
        },
        {
          q: 'Опубликуете приложение в App Store и Google Play?',
          a: 'Да, берём на себя публикацию и соответствие требованиям сторов. Аккаунты разработчика открываются на вашу компанию.',
        },
        {
          q: 'Приложение работает без интернета?',
          a: 'Да, приложения для сотрудников работают офлайн и синхронизируют данные при появлении связи.',
        },
        {
          q: 'Кто будет поддерживать приложение?',
          a: 'Мы — по пакету поддержки: адаптация к обновлениям ОС, исправление ошибок и новые функции.',
        },
      ],
    },
    en: {
      slug: 'mobile-apps',
      name: 'Mobile apps',
      summary: 'iOS and Android apps for customers, couriers, sales agents and field staff.',
      metaTitle: 'Mobile App Development for iOS and Android | ZOLVI',
      metaDescription:
        'Mobile apps for iOS and Android: customer apps, courier and sales agent apps, offline mode, push notifications. Built in Tashkent, Uzbekistan.',
      h1: 'Mobile app development for iOS and Android',
      lead: 'A mobile app earns a permanent spot on your customer’s phone and lets your staff work with the system outside the office. ZOLVI builds customer apps and internal apps — for couriers, sales agents and technicians — for iOS and Android from a single codebase.',
      audience: [
        'Restaurant, retail and service chains with regular customers',
        'Courier and delivery services',
        'Distributors working with sales agents',
        'Companies with crews of technicians and installers',
      ],
      pains: [
        {
          title: 'Field staff are invisible',
          text: 'Where the agent or technician is, what they did and when they finished — you only find out by calling.',
        },
        {
          title: 'Data arrives on paper',
          text: 'Orders, acts and photo reports come to the office in the evening and get typed in again.',
        },
        {
          title: 'No link with the customer',
          text: 'A customer buys once and disappears: no rewards, reminders or personal offers.',
        },
      ],
      includes: [
        {
          title: 'Customer app',
          text: 'Catalog, ordering, payment, loyalty program and order tracking.',
        },
        {
          title: 'Courier and agent app',
          text: 'Routes, order lists, payment collection, GPS and job status in real time.',
        },
        {
          title: 'Offline mode',
          text: 'Works without internet and syncs automatically when the connection returns.',
        },
        {
          title: 'Camera and documents',
          text: 'Photo reports, barcode scanning, e-signatures and acts right on the phone.',
        },
        {
          title: 'Push notifications',
          text: 'Order status and promotions for customers, new tasks for staff — instantly.',
        },
        {
          title: 'Store publishing',
          text: 'Publishing to the App Store and Google Play, updates and app analytics.',
        },
      ],
      sections: [
        {
          h2: 'One codebase, two platforms',
          paragraphs: [
            'For most business apps, cross-platform technology such as React Native or Flutter is the best choice: the app ships on iOS and Android at the same time, and development and support cost less.',
            'The app shares a backend with your CRM, ERP or POS, so every action taken in the app shows up in the office system immediately.',
          ],
        },
        {
          h2: 'An app, or is a Telegram bot enough?',
          paragraphs: [
            'Many customer tasks can be handled by a Telegram bot, which needs no installation. A mobile app pays off when you need a loyalty program, a complex catalog or frequent use.',
            'For staff who need offline mode, GPS, the camera and scanning, a mobile app is almost always the right choice. During the audit we tell you honestly which option fits.',
          ],
        },
        {
          h2: 'What drives the cost of a mobile app',
          paragraphs: [
            'Cost depends on the number of screens, offline mode, device features such as the camera and GPS, payments and backend integration. If a backend (CRM, ERP or POS) already exists, the app is cheaper and faster to build.',
            'Store publishing, push notifications and analytics are factored in too. We give the estimate after a clickable prototype, when the purpose of every screen is clear.',
          ],
        },
      ],
      timeline: '8–14 weeks',
      faq: [
        {
          q: 'How much does a mobile app cost?',
          a: 'It depends on the number of screens, integrations and platforms. Usually within the Business package; we give an exact estimate after the prototype.',
        },
        {
          q: 'Do we need separate iOS and Android apps?',
          a: 'No — with cross-platform technology one codebase runs on both.',
        },
        {
          q: 'Will you publish to the App Store and Google Play?',
          a: 'Yes, we handle publishing and store compliance. Developer accounts are opened in your company’s name.',
        },
        {
          q: 'Does the app work without internet?',
          a: 'Yes, staff apps work offline and sync data when a connection is available.',
        },
        {
          q: 'Who supports the app afterwards?',
          a: 'We do, under a support plan: OS update compatibility, bug fixes and new features.',
        },
      ],
    },
  },
}

export default service
