import type { Service } from '@/lib/types'

const service: Service = {
  id: 'ecommerce',
  kind: 'service',
  category: 'products',
  icon: 'cart',
  demo: 'erp',
  caseId: 'retail-analytics',
  plan: 'business',
  relatedServices: ['telegram-bot', 'erp', 'mobile-apps', 'api'],
  relatedIndustries: ['e-commerce', 'retail', 'manufacturing', 'restaurants'],
  locales: {
    uz: {
      slug: 'internet-dokon',
      name: "Internet-do'kon",
      summary:
        "Tez ishlaydigan internet-do'kon: katalog, to'lov, yetkazib berish, ombor va 1C bilan integratsiya.",
      metaTitle: "Internet-do'kon yaratish Toshkentda | ZOLVI",
      metaDescription:
        "Internet-do'kon yaratish: tez katalog, Click/Payme/Uzum to'lovlari, yetkazib berish, 1C va ombor integratsiyasi, SEO. Toshkentda ishlab chiqamiz.",
      h1: "Internet-do'kon yaratish — savdo, to'lov va ombor bitta tizimda",
      lead: "Internet-do'kon faqat chiroyli vitrina emas: u omborda nima borligini biladi, to'lovni qabul qiladi, buyurtmani yetkazib berishga uzatadi va Google'dan mijozlarni olib keladi. ZOLVI internet-do'konni ombor, 1C va yetkazib berish bilan bog'langan holda quradi — sotuv qo'lda ishlov berishsiz ishlashi uchun.",
      audience: [
        "Oflayn do'koni bor va onlayn savdoni boshlamoqchi bo'lgan bizneslar",
        "Instagram va Telegram orqali sotib, buyurtmalar ko'payib ketgan sotuvchilar",
        "Eski saytdan tezroq va qulayroq do'konga o'tmoqchi bo'lgan kompaniyalar",
        "B2B mijozlarga onlayn buyurtma berish imkonini bermoqchi bo'lgan distribyutorlar",
      ],
      pains: [
        {
          title: "Sayt va ombor bog'lanmagan",
          text: "Saytda «bor» deb turgan tovar omborda yo'q, buyurtma bekor qilinadi, mijoz ketadi.",
        },
        {
          title: "Buyurtmalar qo'lda ishlanadi",
          text: "Har bir buyurtma 1C'ga qayta kiritiladi, kuryerga telefonda aytiladi, to'lov alohida tekshiriladi.",
        },
        {
          title: "Do'kon qidiruvda yo'q",
          text: "Sahifalar sekin, mahsulot kartochkalari bir xil, Google va Yandex do'konni ko'rsatmaydi.",
        },
      ],
      includes: [
        {
          title: 'Katalog va qidiruv',
          text: "Filtrlar, variantlar (o'lcham, rang), tez qidiruv va mahsulot tavsiyalari.",
        },
        {
          title: "To'lovlar",
          text: "Click, Payme, Uzum, bank kartalari va muddatli to'lov — avtomatik tekshiruv bilan.",
        },
        {
          title: 'Yetkazib berish',
          text: 'Zonalar va narxlar, kuryer xizmatlari bilan integratsiya, mijozga SMS va Telegram orqali holat.',
        },
        {
          title: 'Ombor va 1C integratsiyasi',
          text: "Qoldiqlar va narxlar real vaqtda, buyurtmalar avtomatik 1C yoki ERP'ga tushadi.",
        },
        {
          title: 'SEO va tezlik',
          text: 'Har bir mahsulot va kategoriya uchun alohida sahifa va meta-teglar, mikrorazmetka, tez yuklanish.',
        },
        {
          title: 'Marketing vositalari',
          text: 'Promokodlar, aksiyalar, tashlab ketilgan savatcha eslatmalari va sodiqlik bonuslari.',
        },
      ],
      sections: [
        {
          h2: "Platforma yoki maxsus do'kon",
          paragraphs: [
            "Kichik katalog uchun tayyor platforma yoki marketpleys yetarli bo'lishi mumkin. Lekin minglab mahsulot, 1C bilan sinxronizatsiya, B2B narxlar yoki o'z yetkazib berish logikangiz bo'lsa, maxsus do'kon tezroq ishlaydi va komissiyalarsiz bo'ladi.",
            "Biz ko'pincha gibrid yo'lni taklif qilamiz: o'z do'koningiz asosiy kanal bo'ladi, marketpleyslar va Telegram-bot esa qo'shimcha kanallar sifatida bitta ombor va buyurtmalar tizimiga ulanadi.",
          ],
        },
        {
          h2: "Do'kon Google'dan mijoz olib kelishi uchun",
          paragraphs: [
            "Do'konni boshidan SEO uchun quramiz: sahifalar serverda tayyorlanadi, har bir kategoriya va mahsulotning o'z manzili, sarlavhasi va tavsifi bor, narx va mavjudlik mikrorazmetkada ko'rsatiladi.",
            "Bu reklama to'xtaganda ham savdo davom etishini ta'minlaydi: qidiruvdan kelgan mijozlar uchun pul to'lamaysiz.",
          ],
        },
        {
          h2: "Internet-do'kon narxi nimaga bog'liq",
          paragraphs: [
            "Do'kon narxini katalog hajmi va murakkabligi (variantlar, B2B narxlar), to'lov va yetkazib berish usullari hamda 1C yoki ERP bilan integratsiya belgilaydi. Dizayn individual yoki shablon asosida bo'lishi ham ta'sir qiladi.",
            "Ko'p hollarda avval asosiy funksiyalar bilan do'konni ishga tushirib, savdo boshlanganidan keyin marketing vositalari va qo'shimcha integratsiyalarni qo'shishni tavsiya qilamiz.",
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: "Internet-do'kon yaratish narxi qancha?",
          a: "Do'kon «Biznes» paketiga kiradi — boshlang'ich narx «Narxlar» sahifasida. Yakuniy narx mahsulotlar soni va integratsiyalarga bog'liq.",
        },
        {
          q: '1C bilan sinxronizatsiya qilasizmi?',
          a: 'Ha, mahsulotlar, qoldiqlar, narxlar va buyurtmalar 1C bilan avtomatik almashinadi.',
        },
        {
          q: 'Mahsulotlarni kim yuklaydi?',
          a: "1C yoki Excel'dan avtomatik import qilamiz; keyin mahsulotlarni admin panelda o'zingiz boshqarasiz.",
        },
        {
          q: "Muddatli to'lovni ulasa bo'ladimi?",
          a: "Ha, muddatli to'lov xizmatlari bilan integratsiya qilish mumkin. TODO: qaysi muddatli to'lov provayderlari bilan ishlashingizni tasdiqlang.",
        },
        {
          q: "Do'kon Telegram-bot bilan birga ishlaydimi?",
          a: 'Ha, sayt va bot bitta katalog, ombor va buyurtmalar tizimidan foydalanadi.',
        },
      ],
    },
    ru: {
      slug: 'internet-magazin',
      name: 'Интернет-магазин',
      summary: 'Быстрый интернет-магазин: каталог, оплата, доставка, склад и интеграция с 1С.',
      metaTitle: 'Разработка интернет-магазина в Ташкенте | ZOLVI',
      metaDescription:
        'Создание интернет-магазина: быстрый каталог, оплата Click/Payme/Uzum, доставка, интеграция с 1С и складом, SEO. Разработка в Ташкенте.',
      h1: 'Разработка интернет-магазина — продажи, оплата и склад в одной системе',
      lead: 'Интернет-магазин — это не просто красивая витрина: он знает, что есть на складе, принимает оплату, передаёт заказ в доставку и приводит клиентов из Google. ZOLVI строит интернет-магазин в связке со складом, 1С и доставкой — чтобы продажи шли без ручной обработки.',
      audience: [
        'Бизнес с офлайн-магазином, который хочет начать продавать онлайн',
        'Продавцы в Instagram и Telegram, у которых заказов стало слишком много',
        'Компании, которые хотят перейти со старого сайта на быстрый и удобный магазин',
        'Дистрибьюторы, которые хотят принимать онлайн-заказы от B2B-клиентов',
      ],
      pains: [
        {
          title: 'Сайт и склад не связаны',
          text: 'Товар «в наличии» на сайте отсутствует на складе, заказ отменяется, клиент уходит.',
        },
        {
          title: 'Заказы обрабатываются вручную',
          text: 'Каждый заказ заново вносится в 1С, курьеру передаётся по телефону, оплата проверяется отдельно.',
        },
        {
          title: 'Магазина нет в поиске',
          text: 'Страницы медленные, карточки товаров одинаковые, Google и Яндекс магазин не показывают.',
        },
      ],
      includes: [
        {
          title: 'Каталог и поиск',
          text: 'Фильтры, варианты (размер, цвет), быстрый поиск и рекомендации товаров.',
        },
        {
          title: 'Оплата',
          text: 'Click, Payme, Uzum, банковские карты и рассрочка — с автоматической проверкой.',
        },
        {
          title: 'Доставка',
          text: 'Зоны и тарифы, интеграция с курьерскими службами, статус клиенту по SMS и в Telegram.',
        },
        {
          title: 'Интеграция со складом и 1С',
          text: 'Остатки и цены в реальном времени, заказы автоматически попадают в 1С или ERP.',
        },
        {
          title: 'SEO и скорость',
          text: 'Отдельная страница и мета-теги для каждого товара и категории, микроразметка, быстрая загрузка.',
        },
        {
          title: 'Маркетинговые инструменты',
          text: 'Промокоды, акции, напоминания о брошенной корзине и бонусы лояльности.',
        },
      ],
      sections: [
        {
          h2: 'Платформа или собственный магазин',
          paragraphs: [
            'Для небольшого каталога может хватить готовой платформы или маркетплейса. Но если товаров тысячи, нужна синхронизация с 1С, B2B-цены или своя логика доставки, собственный магазин работает быстрее и без комиссий.',
            'Часто предлагаем гибридный путь: собственный магазин — основной канал, а маркетплейсы и Telegram-бот подключены как дополнительные каналы к одному складу и системе заказов.',
          ],
        },
        {
          h2: 'Чтобы магазин приводил клиентов из Google',
          paragraphs: [
            'Строим магазин под SEO с самого начала: страницы рендерятся на сервере, у каждой категории и товара свой адрес, заголовок и описание, цена и наличие указаны в микроразметке.',
            'Это обеспечивает продажи даже когда реклама остановлена: за клиентов из поиска вы не платите.',
          ],
        },
        {
          h2: 'От чего зависит стоимость интернет-магазина',
          paragraphs: [
            'Цену определяют объём и сложность каталога (варианты, B2B-цены), способы оплаты и доставки и интеграция с 1С или ERP. Влияет и дизайн — индивидуальный или на основе шаблона.',
            'Часто советуем сначала запустить магазин с базовыми функциями, а маркетинговые инструменты и дополнительные интеграции добавить, когда пойдут продажи.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит создание интернет-магазина?',
          a: 'Магазин входит в пакет «Бизнес» — стартовая цена на странице «Цены». Итоговая стоимость зависит от числа товаров и интеграций.',
        },
        {
          q: 'Синхронизируете с 1С?',
          a: 'Да, товары, остатки, цены и заказы автоматически обмениваются с 1С.',
        },
        {
          q: 'Кто загрузит товары?',
          a: 'Автоматически импортируем из 1С или Excel; дальше вы управляете товарами в админ-панели сами.',
        },
        {
          q: 'Можно подключить рассрочку?',
          a: 'Да, возможна интеграция с сервисами рассрочки. TODO: подтвердить, с какими провайдерами рассрочки работаете.',
        },
        {
          q: 'Магазин работает вместе с Telegram-ботом?',
          a: 'Да, сайт и бот используют один каталог, склад и систему заказов.',
        },
      ],
    },
    en: {
      slug: 'online-store',
      name: 'Online store',
      summary: 'A fast online store: catalog, payments, delivery, inventory and 1C integration.',
      metaTitle: 'Online Store Development in Tashkent | ZOLVI',
      metaDescription:
        'Online store development: fast catalog, Click/Payme/Uzum payments, delivery, 1C and inventory integration, SEO. Built in Tashkent, Uzbekistan.',
      h1: 'Online store development — sales, payments and inventory in one system',
      lead: 'An online store is more than a pretty storefront: it knows what is in stock, takes payment, passes the order to delivery and brings customers from Google. ZOLVI builds online stores connected to your warehouse, 1C and delivery so sales run without manual handling.',
      audience: [
        'Businesses with a physical shop that want to start selling online',
        'Sellers on Instagram and Telegram who now have too many orders to handle',
        'Companies moving from an old website to a fast, convenient store',
        'Distributors that want B2B customers to order online',
      ],
      pains: [
        {
          title: "Website and warehouse aren't connected",
          text: 'An item shown as in stock online is missing from the warehouse, the order is cancelled and the customer leaves.',
        },
        {
          title: 'Orders are processed by hand',
          text: 'Each order is retyped into 1C, passed to the courier by phone and payment is checked separately.',
        },
        {
          title: 'The store is invisible in search',
          text: 'Pages are slow, product cards are identical and Google and Yandex do not show the store.',
        },
      ],
      includes: [
        {
          title: 'Catalog and search',
          text: 'Filters, variants (size, color), fast search and product recommendations.',
        },
        {
          title: 'Payments',
          text: 'Click, Payme, Uzum, bank cards and installments — with automatic verification.',
        },
        {
          title: 'Delivery',
          text: 'Zones and rates, courier service integration, status updates via SMS and Telegram.',
        },
        {
          title: 'Inventory and 1C integration',
          text: 'Real-time stock and prices; orders flow automatically into 1C or your ERP.',
        },
        {
          title: 'SEO and speed',
          text: 'A dedicated page and meta tags for every product and category, structured data and fast loading.',
        },
        {
          title: 'Marketing tools',
          text: 'Promo codes, campaigns, abandoned-cart reminders and loyalty bonuses.',
        },
      ],
      sections: [
        {
          h2: 'Platform or custom store',
          paragraphs: [
            'For a small catalog a ready-made platform or marketplace may be enough. With thousands of products, 1C sync, B2B pricing or your own delivery logic, a custom store is faster and commission-free.',
            'We often suggest a hybrid: your own store is the main channel, while marketplaces and a Telegram bot connect as extra channels to the same inventory and order system.',
          ],
        },
        {
          h2: 'So the store brings customers from Google',
          paragraphs: [
            'We build the store for SEO from the start: pages are rendered on the server, every category and product has its own URL, title and description, and price and availability are in structured data.',
            'That keeps sales coming even when ads are paused — you do not pay for customers who arrive from search.',
          ],
        },
        {
          h2: 'What drives the cost of an online store',
          paragraphs: [
            'The price depends on catalog size and complexity (variants, B2B pricing), payment and delivery methods and integration with 1C or an ERP. Whether the design is bespoke or template-based also matters.',
            'We often suggest launching with core features first and adding marketing tools and extra integrations once sales are under way.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does an online store cost?',
          a: 'An online store is part of the Business package — see the starting price on the Pricing page. The final price depends on catalog size and integrations.',
        },
        {
          q: 'Do you sync with 1C?',
          a: 'Yes, products, stock, prices and orders are exchanged with 1C automatically.',
        },
        {
          q: 'Who uploads the products?',
          a: 'We import them automatically from 1C or Excel; after that you manage products in the admin panel yourself.',
        },
        {
          q: 'Can we offer installments?',
          a: 'Yes, installment services can be integrated. TODO: confirm which installment providers you work with.',
        },
        {
          q: 'Does the store work alongside a Telegram bot?',
          a: 'Yes, the website and the bot share one catalog, inventory and order system.',
        },
      ],
    },
  },
}

export default service
