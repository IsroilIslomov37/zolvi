import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'tourism',
  kind: 'industry',
  icon: 'plane',
  demo: 'telegram-bot',
  caseId: 'hospitality-platform',
  plan: 'business',
  relatedServices: ['crm', 'web-apps', 'telegram-bot', 'api'],
  relatedIndustries: ['hotels', 'restaurants'],
  locales: {
    uz: {
      slug: 'turizm',
      name: 'Turizm',
      summary:
        "Turlar, bronlar, guruhlar, gidlar va to'lovlar — turoperator va agentliklar uchun tizim.",
      metaTitle: 'Turoperator va turagentlik uchun CRM tizimi | ZOLVI',
      metaDescription:
        "Turizm biznesi uchun tizim: tur katalogi, onlayn bron, guruhlar, gid va transport jadvali, to'lovlar va turistlar CRM'i. O'zbekiston bo'ylab.",
      h1: 'Turoperator va turagentliklar uchun tizim',
      lead: "O'zbekistonga kelayotgan turistlar soni o'smoqda, turoperatorlar esa hali ham bronlar, guruhlar va gidlarni Excel va messenjerlarda yuritadi. ZOLVI tur katalogi, onlayn bron, guruhlar, gid va transport jadvali hamda to'lovlarni bitta tizimga yig'adi — xorijiy va mahalliy turistlar uchun bir necha tilda.",
      audience: [
        'Kiruvchi turizm bilan ishlaydigan turoperatorlar',
        'Chiquvchi turlar bilan ishlaydigan turagentliklar',
        'Ekskursiya va gid xizmatlari',
        "Mehmonxonalar va transport kompaniyalari bilan ishlaydigan DMC'lar",
      ],
      pains: [
        {
          title: 'Bronlar turli joyda',
          text: 'Arizalar email, WhatsApp, Telegram va hamkorlardan keladi, guruhlar jadvali bir necha faylda.',
        },
        {
          title: 'Gid va transport chalkashligi',
          text: "Qaysi gid qaysi guruhda, qaysi avtobus qayerda — har kuni qo'ng'iroqlar va kelishmovchiliklar.",
        },
        {
          title: "To'lovlar va valyutalar",
          text: "Turli valyutadagi oldindan to'lovlar, hamkorlarga to'lovlar va komissiyalar qo'lda hisoblanadi.",
        },
      ],
      includes: [
        {
          title: 'Tur katalogi va sayt',
          text: "Ko'p tilli tur sahifalari, sanalar, narxlar va onlayn bron — qidiruvga tayyor.",
        },
        {
          title: "Bronlar va turistlar CRM'i",
          text: "Barcha kanallardan arizalar, turistlar ma'lumotlari, hujjatlar va yozishmalar tarixi.",
        },
        {
          title: 'Guruhlar va jadval',
          text: 'Guruhlar, marshrutlar, gidlar, transport va mehmonxonalar — bitta kalendarda.',
        },
        {
          title: "To'lovlar va valyutalar",
          text: "Oldindan to'lovlar, bir necha valyuta, hamkorlar va gidlar bilan hisob-kitoblar.",
        },
        {
          title: 'Turistlar uchun Telegram-bot',
          text: 'Dastur, uchrashuv vaqti va joyi, gid kontakti va eslatmalar — turist telefonida.',
        },
        {
          title: 'Hisobotlar',
          text: "Turlar bo'yicha daromad va marja, bandlik, hamkorlar va mavsumiylik.",
        },
      ],
      sections: [
        {
          h2: 'Bitta kalendarda: guruh, gid, transport, mehmonxona',
          paragraphs: [
            "Turoperatorning asosiy murakkabligi — resurslarni muvofiqlashtirish. Tizimda har bir guruh uchun marshrut, gid, transport va mehmonxonalar bitta kalendarda ko'rinadi va to'qnashuvlar haqida ogohlantiradi.",
            "Gid va haydovchi o'z jadvalini telefonda ko'radi, o'zgarishlar haqida darhol xabar oladi.",
          ],
        },
        {
          h2: 'Xorijiy turistlar uchun sayt',
          paragraphs: [
            "Xorijiy turist turni Google'da ingliz, rus yoki boshqa tilda qidiradi. Har bir tur uchun alohida, tez yuklanadigan va qidiruvga moslashgan sahifa to'g'ridan-to'g'ri bronlarni olib keladi va agregatorlar komissiyasini kamaytiradi.",
            "Sayt tizim bilan bog'langan: bo'sh joylar va narxlar avtomatik yangilanadi, bron esa darhol CRM'ga tushadi.",
          ],
        },
        {
          h2: 'Hamkorlar bilan ishlash',
          paragraphs: [
            "Xorijiy agentliklar uchun hamkorlar kabineti yaratish mumkin: ular bo'sh joylarni ko'radi, bron qiladi va o'z komissiyalarini kuzatadi.",
            "Mehmonxonalar va transport kompaniyalari bilan hisob-kitoblar ham tizimda yuritiladi, shuning uchun har bir turning haqiqiy marjasi ko'rinadi.",
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: 'Turizm uchun tizim narxi qancha?',
          a: "Narx modullar, tillar va integratsiyalarga bog'liq; odatda «Biznes» paketi doirasida. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: "Sayt qaysi tillarda bo'ladi?",
          a: "O'zbek, rus va ingliz tillari standart; kerak bo'lsa boshqa tillarni ham qo'shamiz.",
        },
        {
          q: "Xorijiy kartalar orqali to'lov qabul qilsa bo'ladimi?",
          a: "Ha, xalqaro to'lov provayderlari bilan integratsiya mumkin. TODO: qaysi xalqaro to'lov provayderlari kerakligini tasdiqlang.",
        },
        {
          q: 'Gidlar ilovadan foydalanadimi?',
          a: "Ha, gidlar jadval, guruh ro'yxati va turistlar kontaktlarini telefonda ko'radi.",
        },
        {
          q: 'Hamkor agentliklar uchun kabinet bormi?',
          a: "Ha, hamkorlar bo'sh joylarni ko'radi, bron qiladi va komissiyalarni kuzatadi.",
        },
        {
          q: "Mavsumiy narxlar va guruh chegirmalari qo'llab-quvvatlanadimi?",
          a: "Ha, har bir tur uchun sanalar bo'yicha narxlar, guruh hajmiga qarab chegirmalar va hamkorlar uchun alohida narxlar belgilanadi. Narx o'zgarsa, sayt va hamkorlar kabineti avtomatik yangilanadi.",
        },
      ],
    },
    ru: {
      slug: 'turizm',
      name: 'Туризм',
      summary: 'Туры, брони, группы, гиды и оплаты — система для туроператоров и агентств.',
      metaTitle: 'CRM для туроператора и турагентства | ZOLVI',
      metaDescription:
        'Система для туристического бизнеса: каталог туров, онлайн-бронь, группы, расписание гидов и транспорта, оплаты и CRM туристов. Узбекистан.',
      h1: 'Система для туроператоров и турагентств',
      lead: 'Поток туристов в Узбекистан растёт, а туроператоры всё ещё ведут брони, группы и гидов в Excel и мессенджерах. ZOLVI собирает каталог туров, онлайн-бронь, группы, расписание гидов и транспорта и оплаты в одной системе — на нескольких языках для иностранных и местных туристов.',
      audience: [
        'Туроператоры въездного туризма',
        'Турагентства выездного туризма',
        'Экскурсионные и гидовые службы',
        'DMC, работающие с гостиницами и транспортом',
      ],
      pains: [
        {
          title: 'Брони в разных местах',
          text: 'Заявки приходят по почте, в WhatsApp, Telegram и от партнёров, расписание групп — в нескольких файлах.',
        },
        {
          title: 'Путаница с гидами и транспортом',
          text: 'Какой гид с какой группой, где какой автобус — каждый день звонки и накладки.',
        },
        {
          title: 'Оплаты и валюты',
          text: 'Предоплаты в разных валютах, выплаты партнёрам и комиссии считаются вручную.',
        },
      ],
      includes: [
        {
          title: 'Каталог туров и сайт',
          text: 'Многоязычные страницы туров, даты, цены и онлайн-бронь — готово к поиску.',
        },
        {
          title: 'Брони и CRM туристов',
          text: 'Заявки из всех каналов, данные туристов, документы и история переписки.',
        },
        {
          title: 'Группы и расписание',
          text: 'Группы, маршруты, гиды, транспорт и гостиницы — в одном календаре.',
        },
        {
          title: 'Оплаты и валюты',
          text: 'Предоплаты, несколько валют, расчёты с партнёрами и гидами.',
        },
        {
          title: 'Telegram-бот для туристов',
          text: 'Программа, время и место встречи, контакт гида и напоминания — в телефоне туриста.',
        },
        {
          title: 'Отчёты',
          text: 'Доход и маржа по турам, загрузка, партнёры и сезонность.',
        },
      ],
      sections: [
        {
          h2: 'В одном календаре: группа, гид, транспорт, гостиница',
          paragraphs: [
            'Главная сложность туроператора — координация ресурсов. В системе для каждой группы маршрут, гид, транспорт и гостиницы видны в одном календаре, а накладки подсвечиваются.',
            'Гид и водитель видят своё расписание в телефоне и сразу получают уведомления об изменениях.',
          ],
        },
        {
          h2: 'Сайт для иностранных туристов',
          paragraphs: [
            'Иностранный турист ищет тур в Google на английском, русском или другом языке. Отдельная быстрая и оптимизированная страница для каждого тура приводит прямые брони и снижает комиссии агрегаторов.',
            'Сайт связан с системой: свободные места и цены обновляются автоматически, а бронь сразу попадает в CRM.',
          ],
        },
        {
          h2: 'Работа с партнёрами',
          paragraphs: [
            'Для зарубежных агентств можно сделать партнёрский кабинет: они видят свободные места, бронируют и отслеживают свои комиссии.',
            'Расчёты с гостиницами и транспортными компаниями тоже ведутся в системе, поэтому видна реальная маржа каждого тура.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит система для туризма?',
          a: 'Стоимость зависит от модулей, языков и интеграций; обычно в рамках пакета «Бизнес». Точную смету даём после аудита.',
        },
        {
          q: 'На каких языках будет сайт?',
          a: 'Узбекский, русский и английский стандартно; при необходимости добавим другие.',
        },
        {
          q: 'Можно принимать оплату иностранными картами?',
          a: 'Да, возможна интеграция с международными платёжными провайдерами. TODO: подтвердить, какие провайдеры нужны.',
        },
        {
          q: 'Гиды пользуются приложением?',
          a: 'Да, гиды видят расписание, список группы и контакты туристов в телефоне.',
        },
        {
          q: 'Есть кабинет для агентств-партнёров?',
          a: 'Да, партнёры видят свободные места, бронируют и отслеживают комиссии.',
        },
        {
          q: 'Поддерживаются сезонные цены и групповые скидки?',
          a: 'Да, для каждого тура задаются цены по датам, скидки в зависимости от размера группы и отдельные цены для партнёров. При изменении цены сайт и кабинет партнёров обновляются автоматически.',
        },
      ],
    },
    en: {
      slug: 'tourism',
      name: 'Tourism',
      summary:
        'Tours, bookings, groups, guides and payments — a system for tour operators and agencies.',
      metaTitle: 'CRM for Tour Operators and Travel Agencies | ZOLVI',
      metaDescription:
        'A system for tourism businesses: tour catalog, online booking, groups, guide and transport scheduling, payments and a traveler CRM. Uzbekistan.',
      h1: 'A system for tour operators and travel agencies',
      lead: 'Visitor numbers to Uzbekistan keep growing, yet tour operators still run bookings, groups and guides in spreadsheets and messengers. ZOLVI brings the tour catalog, online booking, groups, guide and transport schedules and payments into one multilingual system for foreign and local travelers.',
      audience: [
        'Inbound tour operators',
        'Outbound travel agencies',
        'Excursion and guide services',
        'DMCs working with hotels and transport companies',
      ],
      pains: [
        {
          title: 'Bookings everywhere',
          text: 'Requests arrive by email, WhatsApp, Telegram and from partners, and the group schedule lives in several files.',
        },
        {
          title: 'Guide and transport mix-ups',
          text: 'Which guide is with which group, where each bus is — daily calls and clashes.',
        },
        {
          title: 'Payments and currencies',
          text: 'Deposits in several currencies, partner payouts and commissions are calculated by hand.',
        },
      ],
      includes: [
        {
          title: 'Tour catalog and website',
          text: 'Multilingual tour pages, dates, prices and online booking — ready for search.',
        },
        {
          title: 'Bookings and traveler CRM',
          text: 'Requests from every channel, traveler data, documents and message history.',
        },
        {
          title: 'Groups and scheduling',
          text: 'Groups, itineraries, guides, transport and hotels in one calendar.',
        },
        {
          title: 'Payments and currencies',
          text: 'Deposits, multiple currencies and settlements with partners and guides.',
        },
        {
          title: 'Telegram bot for travelers',
          text: 'Itinerary, meeting time and place, guide contact and reminders on the traveler’s phone.',
        },
        {
          title: 'Reports',
          text: 'Revenue and margin by tour, capacity, partners and seasonality.',
        },
      ],
      sections: [
        {
          h2: 'One calendar for group, guide, transport and hotel',
          paragraphs: [
            'A tour operator’s main challenge is coordinating resources. The system shows each group’s itinerary, guide, transport and hotels in one calendar and flags any clashes.',
            'Guides and drivers see their schedules on their phones and are notified of changes instantly.',
          ],
        },
        {
          h2: 'A website for international travelers',
          paragraphs: [
            'International travelers search for tours on Google in English, Russian and other languages. A fast, search-optimized page for each tour brings direct bookings and cuts aggregator commissions.',
            'The site is connected to the system: availability and prices update automatically, and bookings land in the CRM immediately.',
          ],
        },
        {
          h2: 'Working with partners',
          paragraphs: [
            'Foreign agencies can get a partner portal where they see availability, make bookings and track their commissions.',
            'Settlements with hotels and transport companies are kept in the system too, so the true margin of every tour is visible.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does a tourism system cost?',
          a: 'It depends on modules, languages and integrations; usually within the Business package. We give an exact estimate after the audit.',
        },
        {
          q: 'Which languages will the website support?',
          a: 'Uzbek, Russian and English by default; we can add others if needed.',
        },
        {
          q: 'Can we accept foreign cards?',
          a: 'Yes, international payment providers can be integrated. TODO: confirm which providers are needed.',
        },
        {
          q: 'Do guides use an app?',
          a: 'Yes, guides see their schedule, group list and traveler contacts on their phones.',
        },
        {
          q: 'Is there a portal for partner agencies?',
          a: 'Yes, partners see availability, make bookings and track commissions.',
        },
        {
          q: 'Are seasonal pricing and group discounts supported?',
          a: 'Yes, each tour can have date-based prices, group-size discounts and separate partner rates. When prices change, the website and partner portal update automatically.',
        },
      ],
    },
  },
}

export default industry
