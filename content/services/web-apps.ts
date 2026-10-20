import type { Service } from '@/lib/types'

const service: Service = {
  id: 'web-apps',
  kind: 'service',
  category: 'products',
  icon: 'web',
  demo: 'crm',
  caseId: 'hospitality-platform',
  plan: 'business',
  relatedServices: ['saas', 'mobile-apps', 'api', 'custom-software'],
  relatedIndustries: ['school-websites', 'tourism', 'logistics', 'education'],
  locales: {
    uz: {
      slug: 'veb-ilovalar',
      name: 'Veb-ilovalar',
      summary:
        'Shaxsiy kabinetlar, portallar, ichki tizimlar va tez ishlaydigan saytlar — brauzerda, har qanday qurilmada.',
      metaTitle: 'Veb-ilovalar va portallar ishlab chiqish | ZOLVI',
      metaDescription:
        "Veb-ilovalar ishlab chiqish: mijozlar kabineti, portallar, ichki tizimlar va korporativ saytlar. Tez, xavfsiz, SEO'ga tayyor. Toshkent.",
      h1: 'Veb-ilovalar ishlab chiqish — kabinetlar, portallar va ichki tizimlar',
      lead: "Veb-ilova o'rnatishni talab qilmaydi: mijoz yoki xodim brauzerni ochadi va ishlaydi — kompyuterda ham, telefonda ham. ZOLVI mijozlar kabinetlari, hamkorlar portallari, ichki boshqaruv tizimlari va tez ishlaydigan korporativ saytlarni ishlab chiqadi — zamonaviy texnologiyalarda, xavfsiz va kengaytiriladigan qilib.",
      audience: [
        "Mijozlarga buyurtma, to'lov va hujjatlarni o'zi ko'rish imkonini bermoqchi bo'lgan kompaniyalar",
        'Dilerlar, agentlar yoki filiallar bilan portal orqali ishlaydigan bizneslar',
        "Excel va qog'ozdan ichki veb-tizimga o'tmoqchi bo'lgan jamoalar",
        "Eski, sekin saytini zamonaviy va SEO'ga tayyor saytga almashtirmoqchi bo'lgan kompaniyalar",
      ],
      pains: [
        {
          title: "Mijozlar hamma narsani telefonda so'raydi",
          text: "Buyurtma holati, hisob-faktura, shartnoma — har biri uchun menejerga qo'ng'iroq qilinadi.",
        },
        {
          title: 'Eski sayt sekin va topilmaydi',
          text: "Sayt telefonda sekin ochiladi, Google va Yandex'da ko'rinmaydi, o'zgartirish uchun har safar dasturchi kerak.",
        },
        {
          title: 'Ichki ishlar jadvallarda tarqoq',
          text: "Har bir bo'lim o'z faylida ishlaydi, versiyalar chalkashadi, ma'lumot yo'qoladi.",
        },
      ],
      includes: [
        {
          title: 'Mijozlar kabineti',
          text: "Buyurtmalar, to'lovlar, hujjatlar va murojaatlar — mijoz hammasini o'zi ko'radi va boshqaradi.",
        },
        {
          title: 'Hamkorlar va dilerlar portali',
          text: 'Narxlar, qoldiqlar, buyurtmalar va bonuslar — har bir hamkor uchun alohida huquqlar bilan.',
        },
        {
          title: 'Ichki boshqaruv tizimlari',
          text: "Arizalar, tasdiqlash jarayonlari, hisobotlar va ma'lumotnomalar — bo'limlar uchun yagona veb-tizim.",
        },
        {
          title: 'Korporativ saytlar',
          text: "Tez yuklanadigan, ko'p tilli, SEO'ga tayyor saytlar va landinglar, qulay kontent boshqaruvi bilan.",
        },
        {
          title: 'Xavfsizlik',
          text: 'Rollar, ikki bosqichli kirish, harakatlar jurnali, shifrlangan ulanish va muntazam zaxira nusxalar.',
        },
        {
          title: 'Integratsiyalar',
          text: "CRM, ERP, 1C, to'lov tizimlari va Telegram bilan bog'langan holda.",
        },
      ],
      sections: [
        {
          h2: 'Nega veb-ilova, mobil ilova emas?',
          paragraphs: [
            "Veb-ilovani App Store yoki Google Play orqali tarqatish shart emas, yangilanishlar darhol hamma foydalanuvchiga yetadi va bitta kod barcha qurilmalarda ishlaydi. Ko'p B2B va ichki vazifalar uchun bu eng tez va tejamkor yo'l.",
            "Agar sizga push-bildirishnomalar, kamera yoki oflayn rejim kerak bo'lsa, veb-ilovani keyinchalik mobil ilova bilan to'ldirish mumkin — backend va ma'lumotlar bir xil qoladi.",
          ],
        },
        {
          h2: 'Tezlik va SEO boshidan',
          paragraphs: [
            "Saytlar va ochiq sahifalarni Google Core Web Vitals talablariga mos qilib quramiz: sahifa telefonda ham tez ochiladi, matn qidiruv tizimlariga to'liq ko'rinadi, har bir tilda alohida manzil va meta-teglar bo'ladi.",
            "Bu reklama byudjetini tejaydi: sayt Google va Yandex'dan organik mijozlarni olib kela boshlaydi.",
          ],
        },
        {
          h2: "Veb-ilova narxi nimaga bog'liq",
          paragraphs: [
            "Narxni asosan ekranlar va foydalanuvchi rollari soni, integratsiyalar hamda xavfsizlik talablari belgilaydi. Oddiy korporativ sayt bir necha haftada tayyor bo'ladi, mijozlar kabineti yoki dilerlar portali esa ko'proq vaqt va byudjet talab qiladi.",
            "Biz loyihani bosiladigan prototipdan boshlaymiz: ekranlarni oldindan ko'rib, keraksiz funksiyalarni olib tashlaysiz va faqat haqiqatan kerak bo'lgan narsaga pul to'laysiz.",
          ],
        },
      ],
      timeline: '4–10 hafta',
      faq: [
        {
          q: 'Veb-ilova ishlab chiqish qancha turadi?',
          a: "Korporativ sayt yoki landing «Start» paketiga, kabinet yoki portal «Biznes» paketiga kiradi. Aniq narx funksiyalar ro'yxatiga bog'liq.",
        },
        {
          q: 'Qaysi texnologiyalardan foydalanasiz?',
          a: "Odatda zamonaviy TypeScript stekidan: React/Next.js frontend uchun, Node.js yoki boshqa ishonchli backend, PostgreSQL ma'lumotlar bazasi. Tanlov loyiha vazifasiga bog'liq.",
        },
        {
          q: "Saytni keyin o'zimiz tahrirlay olamizmi?",
          a: "Ha, matnlar, rasmlar, yangiliklar va sahifalarni qulay admin paneldan o'zgartirasiz.",
        },
        {
          q: 'Hosting va domen masalasida yordam berasizmi?',
          a: 'Ha, server tanlash, domen, SSL va monitoringni sozlaymiz.',
        },
        {
          q: "Eski saytdan ma'lumotlarni ko'chirasizmi?",
          a: "Ha, sahifalar, mahsulotlar va maqolalarni ko'chiramiz va eski manzillardan 301-yo'naltirish qo'yamiz, shunda qidiruvdagi pozitsiyalar yo'qolmaydi.",
        },
      ],
    },
    ru: {
      slug: 'veb-prilozheniya',
      name: 'Веб-приложения',
      summary:
        'Личные кабинеты, порталы, внутренние системы и быстрые сайты — в браузере, на любом устройстве.',
      metaTitle: 'Разработка веб-приложений и порталов | ZOLVI',
      metaDescription:
        'Разработка веб-приложений: личные кабинеты клиентов, порталы, внутренние системы и корпоративные сайты. Быстро, безопасно, готово к SEO. Ташкент.',
      h1: 'Разработка веб-приложений — кабинеты, порталы и внутренние системы',
      lead: 'Веб-приложение не нужно устанавливать: клиент или сотрудник открывает браузер и работает — на компьютере и на телефоне. ZOLVI разрабатывает личные кабинеты клиентов, партнёрские порталы, внутренние системы управления и быстрые корпоративные сайты — на современных технологиях, безопасно и с запасом на рост.',
      audience: [
        'Компании, которые хотят дать клиентам самим видеть заказы, оплаты и документы',
        'Бизнес, работающий с дилерами, агентами или филиалами через портал',
        'Команды, которые переходят с Excel и бумаг на внутреннюю веб-систему',
        'Компании, которым нужно заменить старый медленный сайт на современный и готовый к SEO',
      ],
      pains: [
        {
          title: 'Клиенты всё спрашивают по телефону',
          text: 'Статус заказа, счёт, договор — за каждым звонят менеджеру.',
        },
        {
          title: 'Старый сайт медленный и его не находят',
          text: 'Сайт долго грузится на телефоне, не виден в Google и Яндексе, а для каждого изменения нужен программист.',
        },
        {
          title: 'Внутренняя работа разбросана по таблицам',
          text: 'Каждый отдел работает в своём файле, версии путаются, данные теряются.',
        },
      ],
      includes: [
        {
          title: 'Личный кабинет клиента',
          text: 'Заказы, оплаты, документы и обращения — клиент видит и управляет всем сам.',
        },
        {
          title: 'Портал для партнёров и дилеров',
          text: 'Цены, остатки, заказы и бонусы — с отдельными правами для каждого партнёра.',
        },
        {
          title: 'Внутренние системы управления',
          text: 'Заявки, согласования, отчёты и справочники — единая веб-система для отделов.',
        },
        {
          title: 'Корпоративные сайты',
          text: 'Быстрые многоязычные сайты и лендинги, готовые к SEO, с удобным управлением контентом.',
        },
        {
          title: 'Безопасность',
          text: 'Роли, двухфакторный вход, журнал действий, шифрование и регулярные резервные копии.',
        },
        {
          title: 'Интеграции',
          text: 'Связка с CRM, ERP, 1С, платёжными системами и Telegram.',
        },
      ],
      sections: [
        {
          h2: 'Почему веб-приложение, а не мобильное',
          paragraphs: [
            'Веб-приложение не нужно публиковать в App Store или Google Play, обновления сразу доходят до всех пользователей, а один код работает на всех устройствах. Для многих B2B- и внутренних задач это самый быстрый и экономичный путь.',
            'Если понадобятся push-уведомления, камера или офлайн-режим, веб-приложение можно позже дополнить мобильным — бэкенд и данные останутся теми же.',
          ],
        },
        {
          h2: 'Скорость и SEO с самого начала',
          paragraphs: [
            'Сайты и публичные страницы строим под требования Google Core Web Vitals: страница быстро открывается на телефоне, текст полностью виден поисковикам, у каждого языка свой адрес и мета-теги.',
            'Это экономит рекламный бюджет: сайт начинает приводить органических клиентов из Google и Яндекса.',
          ],
        },
        {
          h2: 'От чего зависит стоимость веб-приложения',
          paragraphs: [
            'Цену в основном определяют количество экранов и ролей пользователей, интеграции и требования к безопасности. Простой корпоративный сайт готов за несколько недель, а личный кабинет клиента или дилерский портал требуют больше времени и бюджета.',
            'Мы начинаем проект с кликабельного прототипа: вы заранее видите экраны, убираете лишние функции и платите только за то, что действительно нужно.',
          ],
        },
      ],
      timeline: '4–10 недель',
      faq: [
        {
          q: 'Сколько стоит разработка веб-приложения?',
          a: 'Корпоративный сайт или лендинг входят в пакет «Старт», кабинет или портал — в пакет «Бизнес». Точная цена зависит от списка функций.',
        },
        {
          q: 'Какие технологии используете?',
          a: 'Обычно современный стек на TypeScript: React/Next.js на фронтенде, Node.js или другой надёжный бэкенд, база данных PostgreSQL. Выбор зависит от задачи.',
        },
        {
          q: 'Сможем сами редактировать сайт?',
          a: 'Да, тексты, картинки, новости и страницы меняются в удобной админ-панели.',
        },
        {
          q: 'Поможете с хостингом и доменом?',
          a: 'Да, настроим сервер, домен, SSL и мониторинг.',
        },
        {
          q: 'Перенесёте данные со старого сайта?',
          a: 'Да, переносим страницы, товары и статьи и ставим 301-редиректы со старых адресов, чтобы не потерять позиции в поиске.',
        },
      ],
    },
    en: {
      slug: 'web-applications',
      name: 'Web applications',
      summary:
        'Customer portals, partner portals, internal systems and fast websites — in the browser, on any device.',
      metaTitle: 'Web Application and Portal Development | ZOLVI',
      metaDescription:
        'Web application development: customer portals, partner portals, internal systems and corporate websites. Fast, secure and SEO-ready. Tashkent, Uzbekistan.',
      h1: 'Web application development — portals, dashboards and internal systems',
      lead: 'A web application needs no installation: a customer or employee opens a browser and gets to work, on a computer or a phone. ZOLVI builds customer portals, partner portals, internal management systems and fast corporate websites on a modern stack — secure and ready to scale.',
      audience: [
        'Companies that want customers to see orders, payments and documents themselves',
        'Businesses working with dealers, agents or branches through a portal',
        'Teams moving from spreadsheets and paper to an internal web system',
        'Companies replacing an old, slow website with a modern, SEO-ready one',
      ],
      pains: [
        {
          title: 'Customers ask everything by phone',
          text: 'Order status, an invoice, a contract — each one means a call to a manager.',
        },
        {
          title: 'The old website is slow and invisible',
          text: 'It loads slowly on phones, does not show up in Google or Yandex, and every change needs a developer.',
        },
        {
          title: 'Internal work scattered across spreadsheets',
          text: 'Each department works in its own file, versions get mixed up and data gets lost.',
        },
      ],
      includes: [
        {
          title: 'Customer portal',
          text: 'Orders, payments, documents and requests — customers see and manage everything themselves.',
        },
        {
          title: 'Partner and dealer portal',
          text: 'Prices, stock, orders and bonuses, with separate permissions for every partner.',
        },
        {
          title: 'Internal management systems',
          text: 'Requests, approvals, reports and reference data — one web system for every department.',
        },
        {
          title: 'Corporate websites',
          text: 'Fast, multilingual, SEO-ready websites and landing pages with easy content management.',
        },
        {
          title: 'Security',
          text: 'Roles, two-factor login, an audit log, encryption and regular backups.',
        },
        {
          title: 'Integrations',
          text: 'Connected to your CRM, ERP, 1C, payment systems and Telegram.',
        },
      ],
      sections: [
        {
          h2: 'Why a web app rather than a mobile app?',
          paragraphs: [
            'A web app needs no App Store or Google Play release, updates reach every user immediately and one codebase runs on every device. For many B2B and internal tasks it is the fastest and most economical route.',
            'If you later need push notifications, the camera or offline mode, a mobile app can be added on top — the backend and data stay the same.',
          ],
        },
        {
          h2: 'Speed and SEO from day one',
          paragraphs: [
            'We build websites and public pages to meet Google Core Web Vitals: pages open fast on phones, text is fully visible to search engines, and every language gets its own URL and meta tags.',
            'That saves ad budget: the site starts bringing organic customers from Google and Yandex.',
          ],
        },
        {
          h2: 'What drives the cost of a web app',
          paragraphs: [
            'Price mostly depends on the number of screens and user roles, the integrations and the security requirements. A simple corporate website takes a few weeks, while a customer or dealer portal needs more time and budget.',
            'We start every project with a clickable prototype: you see the screens up front, cut features you do not need and pay only for what really matters.',
          ],
        },
      ],
      timeline: '4–10 weeks',
      faq: [
        {
          q: 'How much does a web application cost?',
          a: 'A corporate website or landing page falls under the Start package, a portal under Business. The exact price depends on the feature list.',
        },
        {
          q: 'Which technologies do you use?',
          a: 'Usually a modern TypeScript stack: React/Next.js on the front end, Node.js or another proven backend, and PostgreSQL. The choice depends on the task.',
        },
        {
          q: 'Can we edit the website ourselves?',
          a: 'Yes, texts, images, news and pages are edited in a convenient admin panel.',
        },
        {
          q: 'Do you help with hosting and the domain?',
          a: 'Yes, we set up the server, domain, SSL and monitoring.',
        },
        {
          q: 'Will you migrate data from our old site?',
          a: 'Yes, we migrate pages, products and articles and set up 301 redirects from old URLs so search rankings are not lost.',
        },
      ],
    },
  },
}

export default service
