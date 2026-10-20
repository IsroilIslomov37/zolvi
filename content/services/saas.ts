import type { Service } from '@/lib/types'

const service: Service = {
  id: 'saas',
  kind: 'service',
  category: 'products',
  icon: 'saas',
  demo: 'crm',
  caseId: 'hospitality-platform',
  plan: 'enterprise',
  relatedServices: ['web-apps', 'mobile-apps', 'api', 'support'],
  relatedIndustries: ['hotels', 'education', 'clinics', 'field-service'],
  locales: {
    uz: {
      slug: 'saas-platformalar',
      name: 'SaaS platformalar',
      summary: "O'z dasturiy mahsulotingiz: obuna, ko'p mijozli arxitektura, billing va kengayish.",
      metaTitle: 'SaaS platforma ishlab chiqish: MVP dan mahsulotga | ZOLVI',
      metaDescription:
        "SaaS platforma ishlab chiqish: MVP, ko'p mijozli (multi-tenant) arxitektura, obuna va billing, admin panel, kengayish. O'zbekiston bozori uchun.",
      h1: "SaaS platforma ishlab chiqish — g'oyadan ishlaydigan mahsulotgacha",
      lead: "SaaS — bu ko'plab kompaniyalar obuna asosida foydalanadigan dasturiy mahsulot. Agar sizda sohaviy tajriba va bozorda bo'sh joy bor bo'lsa — masalan, o'quv markazlari, klinikalar yoki mehmonxonalar uchun tizim — ZOLVI uni MVP'dan to'liq platformagacha ishlab chiqadi: ko'p mijozli arxitektura, billing va mijozlarni ulash jarayoni bilan.",
      audience: [
        "Sohaviy tajribasini mahsulotga aylantirmoqchi bo'lgan tadbirkorlar",
        "O'z ichki tizimini boshqa kompaniyalarga sotmoqchi bo'lgan bizneslar",
        "MVP'ni tez ishga tushirib, bozorni sinamoqchi bo'lgan startaplar",
        "Mavjud mahsulotini kengaytirish va qayta yozish kerak bo'lgan jamoalar",
      ],
      pains: [
        {
          title: 'Mahsulot yillab «deyarli tayyor»',
          text: "Funksiyalar ro'yxati o'sib boradi, lekin birinchi pullik mijoz hali ham yo'q.",
        },
        {
          title: 'Har bir mijoz uchun alohida nusxa',
          text: "Har bir yangi mijozga tizimning alohida nusxasi o'rnatiladi — yangilash va qo'llab-quvvatlash qimmatlashib boradi.",
        },
        {
          title: "To'lovlar qo'lda",
          text: "Obunalar, tariflar va to'lov muddatlari jadvalda yuritiladi, qarzdorlik nazorat qilinmaydi.",
        },
      ],
      includes: [
        {
          title: 'MVP va mahsulot strategiyasi',
          text: "Eng muhim funksiyalarni ajratamiz va birinchi pullik mijozlarni olish uchun MVP'ni 8–12 haftada ishga tushiramiz.",
        },
        {
          title: "Ko'p mijozli arxitektura",
          text: "Barcha mijozlar bitta platformada, ma'lumotlari esa bir-biridan ishonchli ajratilgan.",
        },
        {
          title: 'Obuna va billing',
          text: "Tariflar, sinov davri, Click/Payme/karta orqali avtomatik to'lov va hisob-fakturalar.",
        },
        {
          title: 'Mijozni ulash (onboarding)',
          text: "Ro'yxatdan o'tish, sozlash ustasi, ma'lumot import qilish va interaktiv yo'riqnoma.",
        },
        {
          title: 'Platforma admin paneli',
          text: "Mijozlar, tariflar, foydalanish statistikasi va qo'llab-quvvatlash murojaatlari.",
        },
        {
          title: 'Kengayish va ishonchlilik',
          text: 'Monitoring, zaxira nusxalar, avtomatik testlar va yuklama oshganda kengayadigan infratuzilma.',
        },
      ],
      sections: [
        {
          h2: "MVP: kichik boshlang, tez o'rganing",
          paragraphs: [
            "Eng katta xavf — hech kimga kerak bo'lmagan mahsulotni yillab qurish. Shuning uchun birinchi navbatda asosiy muammoni hal qiladigan minimal versiyani ishga tushiramiz va real mijozlardan fikr olamiz.",
            "MVP arxitekturasini esa boshidan to'g'ri quramiz: ko'p mijozlilik, xavfsizlik va billing keyin «qayta yozish»ni talab qilmasligi uchun.",
          ],
        },
        {
          h2: 'Mahalliy bozor uchun SaaS',
          paragraphs: [
            "O'zbekiston bozorida SaaS uchun muhim narsalar: o'zbek va rus tillari, mahalliy to'lov tizimlari, Telegram orqali bildirishnomalar va soliq talablariga mos hujjatlar. Biz bularni dastlabki versiyadan hisobga olamiz.",
            "Mahsulot o'sgani sari biz texnik hamkor sifatida qolamiz: yangi modullar, integratsiyalar va infratuzilmani kengaytirish.",
          ],
        },
        {
          h2: "SaaS uchun texnik asos: nimani boshidan to'g'ri qilish kerak",
          paragraphs: [
            "SaaS'da keyinchalik o'zgartirish eng qimmat bo'lgan narsalar: mijozlar ma'lumotlarini ajratish usuli, rollar va huquqlar modeli, billing va audit jurnali. Ularni MVP bosqichidayoq to'g'ri loyihalaymiz.",
            "Qolgan hamma narsa — interfeys, hisobotlar, qo'shimcha modullar — mijozlardan kelgan fikrlarga qarab bosqichma-bosqich qo'shiladi. Bu MVP'ni tez chiqarish va keyinchalik «qayta yozish»dan qochish imkonini beradi.",
          ],
        },
      ],
      timeline: 'MVP 8–12 hafta',
      faq: [
        {
          q: 'SaaS platforma ishlab chiqish qancha turadi?',
          a: "MVP «Korporativ» paketi doirasida baholanadi. Aniq narx funksiyalar ro'yxatiga bog'liq — avval birgalikda MVP chegaralarini belgilaymiz.",
        },
        {
          q: "MVP qancha vaqtda tayyor bo'ladi?",
          a: "Odatda 8–12 hafta. Birinchi oyning oxirida bosiladigan prototipni potentsial mijozlarga ko'rsatishingiz mumkin.",
        },
        {
          q: "Kod kimga tegishli bo'ladi?",
          a: "Manba kodi va barcha huquqlar to'liq sizga tegishli bo'ladi — bu sizning mahsulotingiz.",
        },
        {
          q: 'Investorlar uchun texnik hujjatlar tayyorlaysizmi?',
          a: "Ha, arxitektura tavsifi, xavfsizlik va kengayish rejasi bo'yicha hujjatlarni tayyorlaymiz.",
        },
        {
          q: "Ishga tushgandan keyin qo'llab-quvvatlaysizmi?",
          a: "Ha. Ko'p SaaS mijozlarimiz bilan uzoq muddatli texnik hamkor sifatida ishlaymiz: yangi funksiyalar va infratuzilma.",
        },
      ],
    },
    ru: {
      slug: 'saas-platformy',
      name: 'SaaS-платформы',
      summary:
        'Собственный программный продукт: подписка, мультитенантная архитектура, биллинг и масштабирование.',
      metaTitle: 'Разработка SaaS-платформы: от MVP до продукта | ZOLVI',
      metaDescription:
        'Разработка SaaS-платформ: MVP, мультитенантная архитектура, подписки и биллинг, админ-панель, масштабирование. Для рынка Узбекистана и СНГ.',
      h1: 'Разработка SaaS-платформы — от идеи до работающего продукта',
      lead: 'SaaS — это программный продукт, которым многие компании пользуются по подписке. Если у вас есть отраслевая экспертиза и свободная ниша — например, система для учебных центров, клиник или гостиниц, — ZOLVI разработает её от MVP до полноценной платформы: с мультитенантной архитектурой, биллингом и процессом подключения клиентов.',
      audience: [
        'Предприниматели, которые хотят превратить отраслевой опыт в продукт',
        'Бизнес, который хочет продавать свою внутреннюю систему другим компаниям',
        'Стартапы, которым нужно быстро запустить MVP и проверить рынок',
        'Команды, которым нужно масштабировать или переписать существующий продукт',
      ],
      pains: [
        {
          title: 'Продукт годами «почти готов»',
          text: 'Список функций растёт, а первого платящего клиента всё нет.',
        },
        {
          title: 'Отдельная копия для каждого клиента',
          text: 'Каждому новому клиенту ставят свою копию системы — обновления и поддержка дорожают.',
        },
        {
          title: 'Платежи вручную',
          text: 'Подписки, тарифы и сроки оплаты ведутся в таблице, долги не контролируются.',
        },
      ],
      includes: [
        {
          title: 'MVP и продуктовая стратегия',
          text: 'Выделяем ключевые функции и запускаем MVP за 8–12 недель, чтобы получить первых платящих клиентов.',
        },
        {
          title: 'Мультитенантная архитектура',
          text: 'Все клиенты на одной платформе, а их данные надёжно изолированы друг от друга.',
        },
        {
          title: 'Подписки и биллинг',
          text: 'Тарифы, пробный период, автоматическая оплата через Click/Payme/карту и счета.',
        },
        {
          title: 'Онбординг клиентов',
          text: 'Регистрация, мастер настройки, импорт данных и интерактивные подсказки.',
        },
        {
          title: 'Админ-панель платформы',
          text: 'Клиенты, тарифы, статистика использования и обращения в поддержку.',
        },
        {
          title: 'Масштабирование и надёжность',
          text: 'Мониторинг, резервные копии, автотесты и инфраструктура, которая растёт вместе с нагрузкой.',
        },
      ],
      sections: [
        {
          h2: 'MVP: начните с малого, учитесь быстро',
          paragraphs: [
            'Главный риск — годами строить продукт, который никому не нужен. Поэтому сначала запускаем минимальную версию, решающую основную проблему, и собираем обратную связь от реальных клиентов.',
            'При этом архитектуру MVP закладываем правильно с самого начала: чтобы мультитенантность, безопасность и биллинг потом не потребовали «переписать всё».',
          ],
        },
        {
          h2: 'SaaS для локального рынка',
          paragraphs: [
            'Для SaaS на рынке Узбекистана важны: узбекский и русский языки, местные платёжные системы, уведомления через Telegram и документы под налоговые требования. Мы учитываем это с первой версии.',
            'По мере роста продукта остаёмся технологическим партнёром: новые модули, интеграции и масштабирование инфраструктуры.',
          ],
        },
        {
          h2: 'Технический фундамент SaaS: что сделать правильно с самого начала',
          paragraphs: [
            'В SaaS дороже всего менять потом: способ изоляции данных клиентов, модель ролей и прав, биллинг и журнал аудита. Их мы правильно проектируем ещё на этапе MVP.',
            'Всё остальное — интерфейс, отчёты, дополнительные модули — добавляется поэтапно по отзывам клиентов. Это позволяет быстро выпустить MVP и не переписывать продукт позже.',
          ],
        },
      ],
      timeline: 'MVP 8–12 недель',
      faq: [
        {
          q: 'Сколько стоит разработка SaaS-платформы?',
          a: 'MVP оценивается в рамках пакета «Корпоративный». Точная цена зависит от списка функций — сначала вместе определяем границы MVP.',
        },
        {
          q: 'За какой срок будет готов MVP?',
          a: 'Обычно 8–12 недель. В конце первого месяца кликабельный прототип можно показывать потенциальным клиентам.',
        },
        {
          q: 'Кому принадлежит код?',
          a: 'Исходный код и все права полностью принадлежат вам — это ваш продукт.',
        },
        {
          q: 'Подготовите техническую документацию для инвесторов?',
          a: 'Да, готовим описание архитектуры, безопасности и плана масштабирования.',
        },
        {
          q: 'Поддерживаете после запуска?',
          a: 'Да. С SaaS-клиентами мы обычно работаем как долгосрочный технологический партнёр: новые функции и инфраструктура.',
        },
      ],
    },
    en: {
      slug: 'saas-development',
      name: 'SaaS platforms',
      summary:
        'Your own software product: subscriptions, multi-tenant architecture, billing and scale.',
      metaTitle: 'SaaS Platform Development: From MVP to Product | ZOLVI',
      metaDescription:
        'SaaS platform development: MVP, multi-tenant architecture, subscriptions and billing, admin panel, scaling. Built for Uzbekistan and Central Asia.',
      h1: 'SaaS platform development — from idea to working product',
      lead: 'SaaS is software that many companies use on a subscription. If you have industry expertise and an open niche — say, a system for training centers, clinics or hotels — ZOLVI builds it from MVP to a full platform, with multi-tenant architecture, billing and a customer onboarding flow.',
      audience: [
        'Entrepreneurs turning industry expertise into a product',
        'Businesses that want to sell their internal system to other companies',
        'Startups that need to launch an MVP fast and test the market',
        'Teams that need to scale or rewrite an existing product',
      ],
      pains: [
        {
          title: 'A product that has been “almost ready” for years',
          text: 'The feature list keeps growing, but there is still no first paying customer.',
        },
        {
          title: 'A separate copy for every customer',
          text: 'Each new customer gets their own installation, so updates and support get more expensive every time.',
        },
        {
          title: 'Manual payments',
          text: 'Subscriptions, plans and due dates live in a spreadsheet and overdue accounts slip through.',
        },
      ],
      includes: [
        {
          title: 'MVP and product strategy',
          text: 'We isolate the key features and launch an MVP in 8–12 weeks to win the first paying customers.',
        },
        {
          title: 'Multi-tenant architecture',
          text: 'Every customer on one platform, with their data reliably isolated from each other.',
        },
        {
          title: 'Subscriptions and billing',
          text: 'Plans, free trials, automatic payments via Click, Payme or card, and invoices.',
        },
        {
          title: 'Customer onboarding',
          text: 'Sign-up, a setup wizard, data import and interactive guidance.',
        },
        {
          title: 'Platform admin panel',
          text: 'Customers, plans, usage statistics and support requests.',
        },
        {
          title: 'Scale and reliability',
          text: 'Monitoring, backups, automated tests and infrastructure that grows with the load.',
        },
      ],
      sections: [
        {
          h2: 'MVP: start small, learn fast',
          paragraphs: [
            'The biggest risk is spending years building a product nobody needs. So we first launch a minimal version that solves the core problem and collect feedback from real customers.',
            'At the same time we get the MVP architecture right from the start, so multi-tenancy, security and billing never force a full rewrite later.',
          ],
        },
        {
          h2: 'SaaS for the local market',
          paragraphs: [
            'For SaaS in Uzbekistan, a few things matter: Uzbek and Russian languages, local payment systems, Telegram notifications and documents that meet tax requirements. We account for them from the first version.',
            'As the product grows, we stay on as your technology partner: new modules, integrations and infrastructure scaling.',
          ],
        },
        {
          h2: 'The technical foundation of SaaS: what to get right from day one',
          paragraphs: [
            'In SaaS the most expensive things to change later are how customer data is isolated, the roles and permissions model, billing and the audit log. We design these properly at the MVP stage.',
            'Everything else — the interface, reports, extra modules — is added step by step based on customer feedback. That lets you ship the MVP fast and avoid a rewrite later.',
          ],
        },
      ],
      timeline: 'MVP in 8–12 weeks',
      faq: [
        {
          q: 'How much does SaaS development cost?',
          a: 'An MVP is estimated within the Enterprise package. The exact price depends on the feature list — first we agree on the MVP scope together.',
        },
        {
          q: 'How long until the MVP is ready?',
          a: 'Usually 8–12 weeks. By the end of the first month you can show a clickable prototype to prospective customers.',
        },
        {
          q: 'Who owns the code?',
          a: 'The source code and all rights belong entirely to you — it is your product.',
        },
        {
          q: 'Can you prepare technical documentation for investors?',
          a: 'Yes, we document the architecture, security and scaling plan.',
        },
        {
          q: 'Do you support the product after launch?',
          a: 'Yes. With SaaS clients we usually stay on as a long-term technology partner for new features and infrastructure.',
        },
      ],
    },
  },
}

export default service
