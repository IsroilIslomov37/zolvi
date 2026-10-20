import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'logistics',
  kind: 'industry',
  icon: 'truck',
  demo: 'erp',
  caseId: 'field-service-platform',
  plan: 'business',
  relatedServices: ['erp', 'mobile-apps', 'api', 'automation'],
  relatedIndustries: ['field-service', 'e-commerce', 'manufacturing'],
  locales: {
    uz: {
      slug: 'logistika',
      name: 'Logistika',
      summary:
        'Buyurtmalar, marshrutlar, haydovchilar, ombor va mijozlarga holat xabarlari — logistika uchun tizim.',
      metaTitle: 'Logistika va yetkazib berishni avtomatlashtirish | ZOLVI',
      metaDescription:
        'Logistika kompaniyalari uchun tizim: buyurtmalar, marshrutlar, haydovchilar ilovasi, GPS, ombor, mijozga holat xabarlari va hisob-kitoblar. Toshkent.',
      h1: 'Logistika va yetkazib berishni avtomatlashtirish',
      lead: "Logistikada har bir daqiqa va har bir kilometr pul turadi. ZOLVI buyurtmalarni qabul qilish, marshrutlarni rejalashtirish, haydovchilar va kuryerlar ishini kuzatish, ombor va mijozlar bilan hisob-kitoblarni bitta tizimga yig'adi. Dispetcher jadval va telefon o'rniga xarita va real vaqtdagi holatlar bilan ishlaydi.",
      audience: [
        'Shahar ichida yetkazib berish va kuryerlik xizmatlari',
        'Yuk tashish va ekspeditorlik kompaniyalari',
        "O'z avtoparkiga ega distribyutorlar",
        'Fulfilment va ombor xizmatlari',
      ],
      pains: [
        {
          title: 'Dispetcher telefonda «yashaydi»',
          text: "Haydovchi qayerda, yuk yetkazildimi, qachon qaytadi — hammasi qo'ng'iroq orqali aniqlanadi.",
        },
        {
          title: "Marshrutlar qo'lda tuziladi",
          text: 'Har kuni ertalab buyurtmalar haydovchilarga tajriba asosida taqsimlanadi — ortiqcha yurish va kechikishlar.',
        },
        {
          title: "Mijoz «yukim qayerda?» deb so'raydi",
          text: "Mijozlar holatni bilish uchun qayta-qayta qo'ng'iroq qiladi, operatorlar vaqti shunga ketadi.",
        },
      ],
      includes: [
        {
          title: 'Buyurtmalar va dispetcherlik',
          text: "Barcha kanallardan buyurtmalar, xaritada ko'rinish, haydovchilarga taqsimlash va holatlar.",
        },
        {
          title: 'Haydovchi ilovasi',
          text: "Marshrut, manzillar ro'yxati, fotohisobot, elektron imzo va to'lov qabul qilish — oflayn rejim bilan.",
        },
        {
          title: 'Marshrutlarni rejalashtirish',
          text: "Manzillar, vaqt oynalari va mashina sig'imiga qarab marshrutlarni avtomatik tuzish.",
        },
        {
          title: 'Mijozga xabarlar',
          text: "SMS va Telegram orqali yuk holati, kuryer kelish vaqti va yetkazib berish tasdig'i.",
        },
        {
          title: 'Ombor va yuklar',
          text: "Qabul qilish, saqlash, terish va jo'natish, shtrix-kodlar bilan.",
        },
        {
          title: 'Hisob-kitoblar va hisobotlar',
          text: "Mijozlar va haydovchilar bilan hisob-kitob, yoqilg'i va reys tannarxi, KPI.",
        },
      ],
      sections: [
        {
          h2: 'Dispetcherdan xaritaga',
          paragraphs: [
            "Tizimda har bir buyurtma va haydovchi xaritada ko'rinadi. Dispetcher yangi buyurtmani eng yaqin yoki eng kam yuklangan haydovchiga bir bosishda beradi, haydovchi esa uni darhol ilovada ko'radi.",
            "Holatlar (qabul qilindi, yo'lda, yetkazildi) haydovchi ilovasidan avtomatik yangilanadi, shuning uchun qo'ng'iroqlar soni keskin kamayadi.",
          ],
        },
        {
          h2: 'Isbotlangan yetkazib berish',
          paragraphs: [
            'Haydovchi yetkazib berishni fotosurat, mijoz imzosi yoki SMS-kod bilan tasdiqlaydi. Bu nizolarni kamaytiradi va mijoz bilan hisob-kitobni tezlashtiradi.',
            "Naqd yoki karta orqali olingan to'lovlar ham ilovada qayd etiladi va kun oxirida haydovchi bilan solishtiriladi.",
          ],
        },
        {
          h2: 'Mijozlaringiz tizimlari bilan integratsiya',
          paragraphs: [
            "Katta mijozlar — internet-do'konlar va distribyutorlar — buyurtmalarni API orqali to'g'ridan-to'g'ri yuborishi va holatlarni o'z tizimida ko'rishi mumkin. Bu ularni sizga uzoq muddat bog'laydi.",
            "Integratsiya 1C, marketpleyslar va internet-do'kon platformalari bilan ham qilinadi.",
          ],
        },
      ],
      timeline: '8–12 hafta',
      faq: [
        {
          q: 'Logistika tizimi narxi qancha?',
          a: "Narx haydovchilar soni, modullar va integratsiyalarga bog'liq. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: 'Haydovchilar qanday telefondan foydalanadi?',
          a: "Oddiy Android yoki iPhone yetarli; ilova oflayn ishlaydi va internet paydo bo'lganda sinxronlanadi.",
        },
        {
          q: 'GPS-trekerlar bilan integratsiya bormi?',
          a: "Ha, telefon GPS'idan foydalanamiz yoki mavjud GPS-trekerlaringiz API'si bilan bog'laymiz.",
        },
        {
          q: "Mijozlar holatni o'zi kuzata oladimi?",
          a: "Ha, mijoz SMS yoki Telegram'da havola oladi va yuk holatini ko'radi.",
        },
        {
          q: 'Marshrutlash qanchalik avtomatik?',
          a: "Tizim marshrut taklif qiladi, dispetcher uni tasdiqlaydi yoki o'zgartiradi — yakuniy qaror insonda qoladi.",
        },
        {
          q: "Haydovchilar ilovadan foydalanishni qanday o'rganadi?",
          a: "Ilova oddiy: bugungi manzillar ro'yxati, «Yetkazildi» tugmasi va fotosurat. Ishga tushirishda haydovchilar uchun qisqa o'qitish o'tkazamiz va birinchi kunlarda dispetcher bilan birga qo'llab-quvvatlaymiz.",
        },
      ],
    },
    ru: {
      slug: 'logistika',
      name: 'Логистика',
      summary: 'Заказы, маршруты, водители, склад и уведомления клиентам — система для логистики.',
      metaTitle: 'Автоматизация логистики и доставки | ZOLVI',
      metaDescription:
        'Система для логистических компаний: заказы, маршруты, приложение для водителей, GPS, склад, уведомления клиентам и взаиморасчёты. Ташкент.',
      h1: 'Автоматизация логистики и доставки',
      lead: 'В логистике каждая минута и каждый километр стоят денег. ZOLVI собирает в одной системе приём заказов, планирование маршрутов, контроль водителей и курьеров, склад и расчёты с клиентами. Диспетчер работает не с таблицей и телефоном, а с картой и статусами в реальном времени.',
      audience: [
        'Городская доставка и курьерские службы',
        'Грузоперевозчики и экспедиторы',
        'Дистрибьюторы с собственным автопарком',
        'Фулфилмент и складские услуги',
      ],
      pains: [
        {
          title: 'Диспетчер «живёт» в телефоне',
          text: 'Где водитель, доставлен ли груз, когда вернётся — всё выясняется звонками.',
        },
        {
          title: 'Маршруты строятся вручную',
          text: 'Каждое утро заказы распределяются по водителям «на опыте» — лишние километры и опоздания.',
        },
        {
          title: 'Клиент спрашивает «где мой груз?»',
          text: 'Клиенты звонят снова и снова, чтобы узнать статус, и на это уходит время операторов.',
        },
      ],
      includes: [
        {
          title: 'Заказы и диспетчеризация',
          text: 'Заказы из всех каналов, отображение на карте, распределение по водителям и статусы.',
        },
        {
          title: 'Приложение водителя',
          text: 'Маршрут, список адресов, фотоотчёт, электронная подпись и приём оплаты — с офлайн-режимом.',
        },
        {
          title: 'Планирование маршрутов',
          text: 'Автоматическое построение маршрутов с учётом адресов, временных окон и вместимости машин.',
        },
        {
          title: 'Уведомления клиенту',
          text: 'Статус груза, время прибытия курьера и подтверждение доставки по SMS и в Telegram.',
        },
        {
          title: 'Склад и грузы',
          text: 'Приёмка, хранение, комплектация и отгрузка со штрихкодами.',
        },
        {
          title: 'Взаиморасчёты и отчёты',
          text: 'Расчёты с клиентами и водителями, топливо и себестоимость рейса, KPI.',
        },
      ],
      sections: [
        {
          h2: 'От диспетчера к карте',
          paragraphs: [
            'В системе каждый заказ и водитель видны на карте. Диспетчер одним кликом отдаёт новый заказ ближайшему или наименее загруженному водителю, а тот сразу видит его в приложении.',
            'Статусы (принят, в пути, доставлен) обновляются автоматически из приложения водителя, поэтому звонков становится намного меньше.',
          ],
        },
        {
          h2: 'Подтверждённая доставка',
          paragraphs: [
            'Водитель подтверждает доставку фото, подписью клиента или SMS-кодом. Это сокращает споры и ускоряет расчёты с клиентом.',
            'Оплаты наличными или картой тоже фиксируются в приложении и в конце дня сверяются с водителем.',
          ],
        },
        {
          h2: 'Интеграция с системами клиентов',
          paragraphs: [
            'Крупные клиенты — интернет-магазины и дистрибьюторы — могут передавать заказы напрямую через API и видеть статусы в своей системе. Это надолго привязывает их к вам.',
            'Интеграция возможна также с 1С, маркетплейсами и платформами интернет-магазинов.',
          ],
        },
      ],
      timeline: '8–12 недель',
      faq: [
        {
          q: 'Сколько стоит система для логистики?',
          a: 'Стоимость зависит от числа водителей, модулей и интеграций. Точную смету даём после аудита.',
        },
        {
          q: 'Какие телефоны нужны водителям?',
          a: 'Подойдёт обычный Android или iPhone; приложение работает офлайн и синхронизируется при появлении интернета.',
        },
        {
          q: 'Есть интеграция с GPS-трекерами?',
          a: 'Да, используем GPS телефона или подключаем API ваших GPS-трекеров.',
        },
        {
          q: 'Клиенты могут сами отслеживать статус?',
          a: 'Да, клиент получает ссылку по SMS или в Telegram и видит статус груза.',
        },
        {
          q: 'Насколько автоматическая маршрутизация?',
          a: 'Система предлагает маршрут, диспетчер подтверждает или меняет его — последнее слово за человеком.',
        },
        {
          q: 'Как водители осваивают приложение?',
          a: 'Приложение простое: список адресов на сегодня, кнопка «Доставлено» и фото. При запуске проводим короткое обучение для водителей и в первые дни поддерживаем их вместе с диспетчером.',
        },
      ],
    },
    en: {
      slug: 'logistics',
      name: 'Logistics',
      summary:
        'Orders, routes, drivers, warehouse and customer notifications — a system for logistics.',
      metaTitle: 'Logistics and Delivery Automation | ZOLVI',
      metaDescription:
        'A system for logistics companies: orders, routes, a driver app, GPS, warehouse, customer notifications and settlements. Tashkent, Uzbekistan.',
      h1: 'Logistics and delivery automation',
      lead: 'In logistics every minute and every kilometer costs money. ZOLVI brings order intake, route planning, driver and courier tracking, warehousing and customer billing into one system. Dispatchers work with a live map and real-time statuses instead of a spreadsheet and a phone.',
      audience: [
        'Urban delivery and courier services',
        'Freight carriers and forwarders',
        'Distributors with their own fleet',
        'Fulfillment and warehousing providers',
      ],
      pains: [
        {
          title: 'The dispatcher lives on the phone',
          text: 'Where the driver is, whether the cargo was delivered, when they will be back — all found out by calling.',
        },
        {
          title: 'Routes planned by hand',
          text: 'Every morning orders are split between drivers by experience — extra kilometers and late deliveries.',
        },
        {
          title: 'Customers asking “where is my cargo?”',
          text: 'Customers call again and again for status updates, eating up operators’ time.',
        },
      ],
      includes: [
        {
          title: 'Orders and dispatching',
          text: 'Orders from every channel, shown on a map, assigned to drivers and tracked by status.',
        },
        {
          title: 'Driver app',
          text: 'Route, address list, photo proof, e-signature and payment collection — with offline mode.',
        },
        {
          title: 'Route planning',
          text: 'Automatic route building based on addresses, time windows and vehicle capacity.',
        },
        {
          title: 'Customer notifications',
          text: 'Cargo status, courier ETA and delivery confirmation via SMS and Telegram.',
        },
        {
          title: 'Warehouse and cargo',
          text: 'Receiving, storage, picking and dispatch with barcodes.',
        },
        {
          title: 'Settlements and reports',
          text: 'Billing customers and paying drivers, fuel and trip cost, KPIs.',
        },
      ],
      sections: [
        {
          h2: 'From dispatcher to map',
          paragraphs: [
            'Every order and driver is visible on a map. The dispatcher assigns a new order to the nearest or least busy driver in one click, and the driver sees it in the app immediately.',
            'Statuses (accepted, en route, delivered) update automatically from the driver app, so the number of calls drops sharply.',
          ],
        },
        {
          h2: 'Proof of delivery',
          paragraphs: [
            'Drivers confirm delivery with a photo, the customer’s signature or an SMS code. That reduces disputes and speeds up billing.',
            'Cash and card payments collected on the road are recorded in the app and reconciled with the driver at the end of the day.',
          ],
        },
        {
          h2: 'Integration with your clients’ systems',
          paragraphs: [
            'Large clients — online stores and distributors — can send orders directly via API and see statuses in their own systems, which ties them to you for the long term.',
            'Integration with 1C, marketplaces and e-commerce platforms is possible too.',
          ],
        },
      ],
      timeline: '8–12 weeks',
      faq: [
        {
          q: 'How much does a logistics system cost?',
          a: 'It depends on the number of drivers, modules and integrations. We give an exact estimate after the audit.',
        },
        {
          q: 'What phones do drivers need?',
          a: 'Any ordinary Android or iPhone; the app works offline and syncs once the internet is back.',
        },
        {
          q: 'Do you integrate with GPS trackers?',
          a: 'Yes, we use the phone’s GPS or connect to your existing trackers’ API.',
        },
        {
          q: 'Can customers track their cargo themselves?',
          a: 'Yes, customers get a link by SMS or Telegram and see the status.',
        },
        {
          q: 'How automatic is the routing?',
          a: 'The system proposes a route and the dispatcher approves or changes it — a person has the final say.',
        },
        {
          q: 'How do drivers learn the app?',
          a: 'The app is simple: today’s address list, a “Delivered” button and a photo. At launch we run a short training for drivers and support them alongside the dispatcher during the first days.',
        },
      ],
    },
  },
}

export default industry
