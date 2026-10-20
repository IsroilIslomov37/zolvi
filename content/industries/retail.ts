import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'retail',
  kind: 'industry',
  icon: 'retail',
  demo: 'erp',
  caseId: 'retail-analytics',
  plan: 'business',
  relatedServices: ['pos', 'erp', 'ecommerce', 'ai'],
  relatedIndustries: ['e-commerce', 'manufacturing', 'logistics'],
  locales: {
    uz: {
      slug: 'chakana-savdo',
      name: 'Chakana savdo',
      summary:
        "Kassa, ombor, xaridlar, sodiqlik dasturi va tahlil — do'konlar va savdo tarmoqlari uchun.",
      metaTitle: "Chakana savdo va do'konni avtomatlashtirish | ZOLVI",
      metaDescription:
        "Do'kon va savdo tarmoqlari uchun avtomatlashtirish: POS-kassa, ombor, xaridlar, o'lik qoldiqlar tahlili, sodiqlik dasturi va filiallar. Toshkent.",
      h1: "Chakana savdo va do'konlarni avtomatlashtirish",
      lead: "Chakana savdoda foyda tafsilotlarda yashiringan: qaysi tovar sotilmay yotibdi, qaysi biri tez-tez tugab qoladi, qaysi do'kon rejani bajarmayapti. ZOLVI kassa, ombor, xaridlar va tahlilni bitta tizimga birlashtiradi — shunda qarorlar sezgi bilan emas, raqamlar asosida qabul qilinadi.",
      audience: [
        "Oziq-ovqat, kiyim, elektronika va qurilish mollari do'konlari",
        "Bir nechta do'konga ega savdo tarmoqlari",
        "Do'kon va internet-do'konni birga yuritadigan bizneslar",
        'Ulgurji va chakana savdoni birga olib boradigan kompaniyalar',
      ],
      pains: [
        {
          title: "O'lik qoldiqlar pulni muzlatadi",
          text: "Omborda oylab sotilmagan tovar turibdi, kerakli tovar esa tugab qolgan — aylanma mablag' noto'g'ri joyda.",
        },
        {
          title: 'Xaridlar taxminan qilinadi',
          text: "Nimani va qancha buyurtma qilishni menejer tajribasiga qarab hal qiladi, ma'lumotga emas.",
        },
        {
          title: "Do'konlar bir-biridan uzilgan",
          text: "Har bir do'konda o'z hisobi, tovarni bir do'kondan boshqasiga o'tkazish qog'oz orqali.",
        },
      ],
      includes: [
        {
          title: 'POS-kassa',
          text: 'Tez sotuv, shtrix-kod, tarozilar, chegirmalar, qaytarishlar va onlayn-kassa integratsiyasi.',
        },
        {
          title: "Ombor va do'konlar o'rtasida ko'chirish",
          text: "Har bir do'kon qoldig'i real vaqtda, ichki ko'chirishlar va inventarizatsiya.",
        },
        {
          title: 'Xaridlar va avtobuyurtma',
          text: "Sotuv tezligiga qarab buyurtma tavsiyalari, ta'minotchilar va narxlar tarixi.",
        },
        {
          title: "O'lik qoldiqlar tahlili",
          text: "Sotilmay yotgan tovarlar ro'yxati, ABC/XYZ-tahlil va chegirma tavsiyalari.",
        },
        {
          title: 'Sodiqlik dasturi',
          text: "Bonuslar, mijoz kartalari yoki telefon raqami bo'yicha hisob va shaxsiy takliflar.",
        },
        {
          title: "Tarmoq bo'yicha hisobotlar",
          text: "Har bir do'kon, kategoriya va sotuvchi bo'yicha savdo, marja va reja bajarilishi.",
        },
      ],
      sections: [
        {
          h2: "O'lik qoldiqlar bilan ishlash",
          paragraphs: [
            "O'lik qoldiq — bu sotilmay yotgan va pulni muzlatgan tovar. Tizim har bir mahsulotning sotilish tezligini kuzatadi va belgilangan muddatdan beri harakatlanmagan tovarlarni ajratib ko'rsatadi.",
            "Shu asosda qaror qabul qilinadi: chegirma berish, tovarni boshqa do'konga o'tkazish yoki keyingi xaridda buyurtma qilmaslik. Bu aylanma mablag'ni kerakli tovarlarga qaytaradi.",
          ],
        },
        {
          h2: "Ma'lumotga asoslangan xaridlar",
          paragraphs: [
            "Har bir tovar bo'yicha o'rtacha sotuv, mavsumiylik va ta'minotchidan yetkazib berish muddati hisobga olinib, tizim qancha buyurtma qilishni tavsiya qiladi. Menejer tavsiyani tasdiqlaydi yoki o'zgartiradi.",
            "Natijada tovar kamroq tugaydi va ortiqcha xarid kamayadi. Keyingi bosqichda sun'iy intellekt asosidagi prognozni ham qo'shish mumkin.",
          ],
        },
        {
          h2: 'Oflayn va onlayn savdo bitta tizimda',
          paragraphs: [
            "Agar do'koningiz internetda ham sotsa, sayt, Telegram-bot va marketpleyslar bitta ombor qoldig'idan foydalanadi. Mijoz saytda ko'rgan tovar haqiqatan mavjud bo'ladi.",
            "Mijoz bonuslari ham umumiy: do'konda yig'ilgan bonusni onlayn ishlatish mumkin va aksincha.",
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: "Do'konni avtomatlashtirish qancha turadi?",
          a: "Narx do'konlar soni, modullar va integratsiyalarga bog'liq; odatda «Biznes» paketi doirasida. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: '1C bilan ishlaydimi?',
          a: "Ha, 1C buxgalteriya uchun qolishi mumkin, tizim esa savdo va ombor ma'lumotlarini unga avtomatik uzatadi.",
        },
        {
          q: "Shtrix-kod va tarozilar qo'llab-quvvatlanadimi?",
          a: 'Ha, skanerlar, yorliq printerlari va tarozilar bilan integratsiya qilamiz.',
        },
        {
          q: 'Tovarlarni qanday kiritamiz?',
          a: "Mavjud bazadan (1C, Excel) import qilamiz, yangi tovarlar esa shtrix-kod orqali tez qo'shiladi.",
        },
        {
          q: "Sotuvchilar samaradorligini ko'rsa bo'ladimi?",
          a: "Ha, har bir sotuvchi bo'yicha savdo, o'rtacha chek va reja bajarilishi hisobotda ko'rinadi.",
        },
      ],
    },
    ru: {
      slug: 'roznichnaya-torgovlya',
      name: 'Розничная торговля',
      summary:
        'Касса, склад, закупки, программа лояльности и аналитика — для магазинов и торговых сетей.',
      metaTitle: 'Автоматизация розничной торговли и магазина | ZOLVI',
      metaDescription:
        'Автоматизация магазинов и торговых сетей: POS-касса, склад, закупки, анализ мёртвых остатков, программа лояльности и филиалы. Ташкент.',
      h1: 'Автоматизация розничной торговли и магазинов',
      lead: 'В рознице прибыль прячется в деталях: какой товар лежит без движения, какой постоянно заканчивается, какой магазин не выполняет план. ZOLVI объединяет кассу, склад, закупки и аналитику в одной системе — чтобы решения принимались по цифрам, а не по ощущениям.',
      audience: [
        'Магазины продуктов, одежды, электроники и стройматериалов',
        'Торговые сети с несколькими магазинами',
        'Бизнес, который ведёт магазин и интернет-магазин вместе',
        'Компании, совмещающие опт и розницу',
      ],
      pains: [
        {
          title: 'Мёртвые остатки замораживают деньги',
          text: 'На складе месяцами лежит непроданный товар, а нужного нет — оборотные средства не там, где нужно.',
        },
        {
          title: 'Закупки на глаз',
          text: 'Что и сколько заказывать, менеджер решает по опыту, а не по данным.',
        },
        {
          title: 'Магазины оторваны друг от друга',
          text: 'В каждом магазине свой учёт, перемещения товара между магазинами — на бумаге.',
        },
      ],
      includes: [
        {
          title: 'POS-касса',
          text: 'Быстрые продажи, штрихкоды, весы, скидки, возвраты и интеграция с онлайн-кассой.',
        },
        {
          title: 'Склад и перемещения между магазинами',
          text: 'Остатки каждого магазина в реальном времени, внутренние перемещения и инвентаризация.',
        },
        {
          title: 'Закупки и автозаказ',
          text: 'Рекомендации по закупке на основе скорости продаж, поставщики и история цен.',
        },
        {
          title: 'Анализ мёртвых остатков',
          text: 'Список товаров без движения, ABC/XYZ-анализ и рекомендации по скидкам.',
        },
        {
          title: 'Программа лояльности',
          text: 'Бонусы, учёт по карте или номеру телефона и персональные предложения.',
        },
        {
          title: 'Отчёты по сети',
          text: 'Продажи, маржа и выполнение плана по каждому магазину, категории и продавцу.',
        },
      ],
      sections: [
        {
          h2: 'Работа с мёртвыми остатками',
          paragraphs: [
            'Мёртвый остаток — это товар, который не продаётся и замораживает деньги. Система отслеживает скорость продаж каждого товара и выделяет позиции без движения дольше заданного срока.',
            'На этой основе принимается решение: дать скидку, переместить товар в другой магазин или не заказывать его в следующий раз. Так оборотные средства возвращаются к нужным товарам.',
          ],
        },
        {
          h2: 'Закупки на основе данных',
          paragraphs: [
            'Учитывая средние продажи, сезонность и срок поставки по каждому товару, система рекомендует объём заказа. Менеджер подтверждает или корректирует рекомендацию.',
            'В итоге товар реже заканчивается и меньше лишних закупок. На следующем этапе можно добавить прогноз на основе искусственного интеллекта.',
          ],
        },
        {
          h2: 'Офлайн и онлайн в одной системе',
          paragraphs: [
            'Если магазин продаёт и онлайн, сайт, Telegram-бот и маркетплейсы используют единый остаток склада. Товар, который клиент видит на сайте, действительно есть в наличии.',
            'Бонусы клиента тоже общие: накопленное в магазине можно потратить онлайн и наоборот.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит автоматизация магазина?',
          a: 'Стоимость зависит от числа магазинов, модулей и интеграций; обычно в рамках пакета «Бизнес». Точную смету даём после аудита.',
        },
        {
          q: 'Работает с 1С?',
          a: 'Да, 1С может остаться для бухгалтерии, а система автоматически передаёт в неё данные о продажах и складе.',
        },
        {
          q: 'Поддерживаются штрихкоды и весы?',
          a: 'Да, интегрируем сканеры, принтеры этикеток и весы.',
        },
        {
          q: 'Как внести товары?',
          a: 'Импортируем из существующей базы (1С, Excel), новые товары быстро добавляются по штрихкоду.',
        },
        {
          q: 'Видна эффективность продавцов?',
          a: 'Да, продажи, средний чек и выполнение плана по каждому продавцу видны в отчётах.',
        },
      ],
    },
    en: {
      slug: 'retail',
      name: 'Retail',
      summary: 'Till, inventory, purchasing, loyalty and analytics for shops and retail chains.',
      metaTitle: 'Retail and Store Automation in Uzbekistan | ZOLVI',
      metaDescription:
        'Automation for shops and retail chains: POS till, inventory, purchasing, dead-stock analysis, loyalty program and branch reporting. Tashkent.',
      h1: 'Retail and store automation',
      lead: 'In retail, profit hides in the details: which product sits unsold, which keeps running out, which store misses its plan. ZOLVI brings the till, inventory, purchasing and analytics into one system so decisions rest on numbers rather than gut feeling.',
      audience: [
        'Grocery, clothing, electronics and building supply stores',
        'Retail chains with several stores',
        'Businesses running a physical store and an online store together',
        'Companies doing both wholesale and retail',
      ],
      pains: [
        {
          title: 'Dead stock freezes cash',
          text: 'Unsold goods sit in the warehouse for months while the items you need are out of stock — working capital is in the wrong place.',
        },
        {
          title: 'Purchasing by gut feeling',
          text: 'What to order and how much is decided by a manager’s experience, not data.',
        },
        {
          title: 'Stores cut off from each other',
          text: 'Each store keeps its own books and transfers between stores happen on paper.',
        },
      ],
      includes: [
        {
          title: 'POS till',
          text: 'Fast checkout, barcodes, scales, discounts, returns and online cash register integration.',
        },
        {
          title: 'Inventory and transfers between stores',
          text: 'Real-time stock for every store, internal transfers and stocktakes.',
        },
        {
          title: 'Purchasing and auto-reorder',
          text: 'Order suggestions based on sales velocity, supplier records and price history.',
        },
        {
          title: 'Dead-stock analysis',
          text: 'A list of non-moving items, ABC/XYZ analysis and discount suggestions.',
        },
        {
          title: 'Loyalty program',
          text: 'Bonuses tracked by card or phone number, plus personal offers.',
        },
        {
          title: 'Chain reporting',
          text: 'Sales, margin and plan completion by store, category and salesperson.',
        },
      ],
      sections: [
        {
          h2: 'Dealing with dead stock',
          paragraphs: [
            'Dead stock is merchandise that does not sell and ties up cash. The system tracks how fast each item sells and highlights anything that has not moved for longer than a set period.',
            'That drives the decision: discount it, move it to another store or skip it on the next order. Working capital flows back to the products that sell.',
          ],
        },
        {
          h2: 'Data-driven purchasing',
          paragraphs: [
            'Taking average sales, seasonality and supplier lead time into account for each item, the system suggests order quantities. The manager approves or adjusts the suggestion.',
            'As a result items run out less often and overbuying drops. AI-based forecasting can be added at a later stage.',
          ],
        },
        {
          h2: 'Offline and online in one system',
          paragraphs: [
            'If your store also sells online, the website, Telegram bot and marketplaces all use the same warehouse stock. What a customer sees on the site is actually available.',
            'Customer bonuses are shared too: points earned in store can be spent online and the other way round.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does store automation cost?',
          a: 'It depends on the number of stores, modules and integrations; usually within the Business package. We give an exact estimate after the audit.',
        },
        {
          q: 'Does it work with 1C?',
          a: 'Yes, 1C can stay for accounting while the system pushes sales and inventory data to it automatically.',
        },
        {
          q: 'Are barcodes and scales supported?',
          a: 'Yes, we integrate scanners, label printers and scales.',
        },
        {
          q: 'How do we load our products?',
          a: 'We import them from your existing database (1C, Excel); new items are added quickly by barcode.',
        },
        {
          q: 'Can we see salesperson performance?',
          a: 'Yes, sales, average check and plan completion per salesperson are in the reports.',
        },
      ],
    },
  },
}

export default industry
