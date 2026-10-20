import type { CaseStudy } from '@/lib/types'

/**
 * Headline metrics come from the brief. Client names, stacks, screenshots and quotes
 * stay null/TODO until the client approves publishing them — never invent them.
 */
export const cases: CaseStudy[] = [
  {
    id: 'hospitality-platform',
    industryId: 'hotels',
    serviceIds: ['crm', 'saas', 'web-apps'],
    metric: '−38%',
    client: null, // TODO: название клиента (с его согласия)
    stack: null, // TODO: стек проекта
    locales: {
      uz: {
        slug: 'mehmonqabul-platformasi',
        name: 'Mehmonqabul platformasi',
        summary:
          "40 ta obyektdan iborat mehmonxona tarmog'i uchun yagona platforma: ro'yxatga olish 38% tezlashdi.",
        metaTitle: "Keys: mehmonxona tarmog'i uchun platforma | ZOLVI",
        metaDescription:
          "40 obyektli mehmonxona tarmog'i uchun yagona boshqaruv platformasi: bronlar, ro'yxatga olish va hisobotlar. Natija: ro'yxatga olish 38% tezroq.",
        h1: 'Mehmonqabul platformasi: 40 obyekt — bitta tizim',
        lead: "40 ta obyektdan iborat mehmonxona tarmog'i bronlar va mehmonlarni ro'yxatga olishni turli dasturlar va jadvallarda yuritardi. Biz barcha obyektlarni bitta platformaga birlashtirdik va ro'yxatga olish jarayonini 38% tezlashtirdik.",
        task: [
          "Har bir obyekt o'z usulida ishlardi: bronlar jadvallarda, mehmon ma'lumotlari qo'lda yozilardi, boshqaruv kompaniyasi esa umumiy manzarani ko'ra olmasdi.",
          "Mehmonlarni ro'yxatga olish uzoq davom etar, ayniqsa guruhlar kelganda qabulxonada navbat paydo bo'lardi.",
        ],
        solution: [
          "Barcha obyektlar uchun yagona platforma: bronlar shaxmatkasi, mehmonlar bazasi va obyektlar bo'yicha hisobotlar.",
          "Ro'yxatga olish jarayoni qayta loyihalandi: mehmon ma'lumotlari oldindan to'ldiriladi, administrator faqat tekshiradi.",
          'Boshqaruv kompaniyasi uchun barcha obyektlar bandligi va daromadi bitta panelda.',
        ],
        results: [{ value: '−38%', label: "ro'yxatga olish vaqti" }],
        quote: null,
      },
      ru: {
        slug: 'platforma-dlya-gostinichnoj-seti',
        name: 'Платформа для гостиничной сети',
        summary:
          'Единая платформа для сети из 40 объектов размещения: регистрация гостей ускорилась на 38%.',
        metaTitle: 'Кейс: платформа для гостиничной сети | ZOLVI',
        metaDescription:
          'Единая платформа управления для сети из 40 объектов: брони, регистрация гостей и отчёты. Результат: регистрация на 38% быстрее.',
        h1: 'Платформа для гостиничной сети: 40 объектов — одна система',
        lead: 'Сеть из 40 объектов размещения вела брони и регистрацию гостей в разных программах и таблицах. Мы объединили все объекты в одну платформу и ускорили регистрацию гостей на 38%.',
        task: [
          'Каждый объект работал по-своему: брони в таблицах, данные гостей вручную, а управляющая компания не видела общей картины.',
          'Регистрация гостей занимала много времени, особенно при заезде групп — на ресепшене возникали очереди.',
        ],
        solution: [
          'Единая платформа для всех объектов: шахматка броней, база гостей и отчёты по объектам.',
          'Процесс регистрации перепроектирован: данные гостя заполняются заранее, администратор только проверяет.',
          'Для управляющей компании — загрузка и доход всех объектов на одной панели.',
        ],
        results: [{ value: '−38%', label: 'времени на регистрацию' }],
        quote: null,
      },
      en: {
        slug: 'hospitality-platform',
        name: 'Hospitality platform',
        summary:
          'One platform for a 40-property hospitality network: guest check-in became 38% faster.',
        metaTitle: 'Case Study: Platform for a Hotel Network | ZOLVI',
        metaDescription:
          'A single management platform for a 40-property network: bookings, guest registration and reporting. Result: check-in 38% faster.',
        h1: 'Hospitality platform: 40 properties, one system',
        lead: 'A network of 40 properties ran bookings and guest registration across different programs and spreadsheets. We brought every property onto one platform and made guest check-in 38% faster.',
        task: [
          'Every property worked its own way: bookings in spreadsheets, guest details typed by hand, and the management company had no overall picture.',
          'Check-in took a long time, and queues formed at reception whenever groups arrived.',
        ],
        solution: [
          'One platform for every property: a booking grid, a guest database and per-property reporting.',
          'The check-in process was redesigned: guests pre-fill their details and the front desk only verifies them.',
          'For the management company — occupancy and revenue for every property on one dashboard.',
        ],
        results: [{ value: '−38%', label: 'check-in time' }],
        quote: null,
      },
    },
  },
  {
    id: 'kitchen-operations',
    industryId: 'restaurants',
    serviceIds: ['pos', 'telegram-bot'],
    metric: '2,1 s',
    client: null, // TODO: название клиента (с его согласия)
    stack: null, // TODO: стек проекта
    locales: {
      uz: {
        slug: 'oshxona-operatsiyalari',
        name: 'Oshxona operatsiyalari',
        summary:
          "Buyurtma kassadan oshxonaga o'rtacha 2,1 soniyada yetib boradi — qog'oz cheklar va yo'qolgan buyurtmalarsiz.",
        metaTitle: 'Keys: restoran oshxonasi uchun POS va KDS | ZOLVI',
        metaDescription:
          "Restoran uchun POS va oshxona ekrani: buyurtma kassadan oshxonaga o'rtacha 2,1 soniyada yetadi. Vazifa, yechim va natija.",
        h1: 'Oshxona operatsiyalari: buyurtma oshxonaga 2,1 soniyada',
        lead: "Restoranda buyurtmalar qog'oz orqali oshxonaga uzatilar, ba'zilari kechikar yoki chalkashardi. Biz kassa va oshxona ekranini bitta tizimga bog'ladik: endi buyurtma kassadan oshxonaga o'rtacha 2,1 soniyada yetib boradi.",
        task: [
          "Ofitsiantlar buyurtmani yozib, oshxonaga olib borardi — tig'iz soatlarda buyurtmalar kechikar va noto'g'ri stolga ketardi.",
          "Oshxonada qaysi buyurtma qachon tushgani va qancha vaqtdan beri tayyorlanayotgani ko'rinmasdi.",
        ],
        solution: [
          "POS-kassa va oshxona ekrani (KDS): buyurtma sexlar bo'yicha avtomatik taqsimlanadi.",
          "Har bir buyurtma uchun tayyorlanish taymeri va kechikayotganlarni ajratib ko'rsatish.",
          'Yetkazib berish buyurtmalari ham xuddi shu oqimga tushadi.',
        ],
        results: [{ value: '2,1 s', label: "buyurtma kassadan oshxonagacha (o'rtacha)" }],
        quote: null,
      },
      ru: {
        slug: 'kuhnya-i-kassa',
        name: 'Кухня и касса',
        summary:
          'Заказ доходит с кассы на кухню в среднем за 2,1 секунды — без бумажных чеков и потерянных заказов.',
        metaTitle: 'Кейс: POS и кухонный экран для ресторана | ZOLVI',
        metaDescription:
          'POS и кухонный экран для ресторана: заказ доходит с кассы на кухню в среднем за 2,1 секунды. Задача, решение и результат.',
        h1: 'Кухня и касса: заказ на кухне за 2,1 секунды',
        lead: 'В ресторане заказы передавались на кухню на бумаге, часть из них опаздывала или путалась. Мы связали кассу и кухонный экран в одну систему: теперь заказ доходит с кассы на кухню в среднем за 2,1 секунды.',
        task: [
          'Официанты записывали заказ и несли его на кухню — в часы пик заказы опаздывали и уходили не на тот стол.',
          'На кухне не было видно, когда пришёл заказ и сколько он уже готовится.',
        ],
        solution: [
          'POS-касса и кухонный экран (KDS): заказ автоматически распределяется по цехам.',
          'Таймер приготовления для каждого заказа и подсветка задерживающихся.',
          'Заказы на доставку попадают в тот же поток.',
        ],
        results: [{ value: '2,1 с', label: 'от кассы до кухни (в среднем)' }],
        quote: null,
      },
      en: {
        slug: 'kitchen-operations',
        name: 'Kitchen operations',
        summary:
          'Orders travel from till to kitchen in 2.1 seconds on average — no paper tickets, no lost orders.',
        metaTitle: 'Case Study: POS and Kitchen Display | ZOLVI',
        metaDescription:
          'A POS and kitchen display for a restaurant: orders reach the kitchen from the till in 2.1 seconds on average. Task, solution and result.',
        h1: 'Kitchen operations: orders in the kitchen in 2.1 seconds',
        lead: 'In this restaurant orders went to the kitchen on paper, and some were late or mixed up. We connected the till and a kitchen display into one system: an order now reaches the kitchen in 2.1 seconds on average.',
        task: [
          'Waiters wrote orders down and walked them to the kitchen — at peak hours orders were late and went to the wrong table.',
          'The kitchen could not see when an order arrived or how long it had been cooking.',
        ],
        solution: [
          'A POS till and kitchen display system (KDS) that routes orders to stations automatically.',
          'A preparation timer for every order, with late orders highlighted.',
          'Delivery orders flow into the same queue.',
        ],
        results: [{ value: '2.1 s', label: 'till to kitchen (average)' }],
        quote: null,
      },
    },
  },
  {
    id: 'retail-analytics',
    industryId: 'retail',
    serviceIds: ['erp', 'ai', 'ecommerce'],
    metric: '−24%',
    client: null, // TODO: название клиента (с его согласия)
    stack: null, // TODO: стек проекта
    locales: {
      uz: {
        slug: 'chakana-savdo-tahlili',
        name: 'Chakana savdo tahlili',
        summary: "Savdo va ombor ma'lumotlari tahlili asosida o'lik qoldiqlar 24% ga kamaydi.",
        metaTitle: "Keys: chakana savdo tahlili, o'lik qoldiq −24% | ZOLVI",
        metaDescription:
          "Chakana savdo tarmog'i uchun savdo va ombor tahlili: o'lik qoldiqlar 24% ga kamaydi. Vazifa, yechim va natija.",
        h1: "Chakana savdo tahlili: o'lik qoldiqlar −24%",
        lead: "Chakana savdo kompaniyasida omborda sotilmay yotgan tovarlar aylanma mablag'ni muzlatib qo'ygan edi. Savdo va ombor ma'lumotlarini bitta tahliliy tizimga yig'ib, o'lik qoldiqlarni 24% ga kamaytirdik.",
        task: [
          "Xaridlar menejerlar tajribasiga qarab qilinardi, qaysi tovar qancha vaqtdan beri sotilmayotgani ko'rinmasdi.",
          "Savdo va ombor ma'lumotlari turli tizimlarda edi, hisobotlar qo'lda yig'ilardi.",
        ],
        solution: [
          "Savdo va ombor ma'lumotlari bitta tizimga yig'ildi va har kuni yangilanadi.",
          "Harakatlanmayotgan tovarlar ro'yxati, ABC/XYZ-tahlil va chegirma tavsiyalari.",
          'Sotuv tezligiga asoslangan xarid tavsiyalari.',
        ],
        results: [{ value: '−24%', label: "o'lik qoldiqlar" }],
        quote: null,
      },
      ru: {
        slug: 'analitika-roznicy',
        name: 'Аналитика розницы',
        summary: 'Мёртвые остатки сократились на 24% благодаря анализу данных о продажах и складе.',
        metaTitle: 'Кейс: аналитика розницы, мёртвые остатки −24% | ZOLVI',
        metaDescription:
          'Аналитика продаж и склада для розничной сети: мёртвые остатки сократились на 24%. Задача, решение и результат.',
        h1: 'Аналитика розницы: мёртвые остатки −24%',
        lead: 'В розничной компании непроданный товар на складе замораживал оборотные средства. Мы собрали данные о продажах и складе в одну аналитическую систему и сократили мёртвые остатки на 24%.',
        task: [
          'Закупки делались по опыту менеджеров, не было видно, какой товар и как долго не продаётся.',
          'Данные о продажах и складе были в разных системах, отчёты собирались вручную.',
        ],
        solution: [
          'Данные о продажах и складе собраны в одной системе и обновляются ежедневно.',
          'Список товаров без движения, ABC/XYZ-анализ и рекомендации по скидкам.',
          'Рекомендации по закупке на основе скорости продаж.',
        ],
        results: [{ value: '−24%', label: 'мёртвых остатков' }],
        quote: null,
      },
      en: {
        slug: 'retail-analytics',
        name: 'Retail analytics',
        summary: 'Dead stock fell by 24% thanks to analysis of sales and inventory data.',
        metaTitle: 'Case Study: Retail Analytics, Dead Stock −24% | ZOLVI',
        metaDescription:
          'Sales and inventory analytics for a retail chain: dead stock fell by 24%. Task, solution and result.',
        h1: 'Retail analytics: dead stock down 24%',
        lead: 'At this retail company, unsold goods in the warehouse were freezing working capital. We brought sales and inventory data into one analytics system and cut dead stock by 24%.',
        task: [
          'Purchasing relied on managers’ experience; nobody could see which items had not sold, or for how long.',
          'Sales and inventory data lived in different systems and reports were built by hand.',
        ],
        solution: [
          'Sales and inventory data consolidated in one system and refreshed daily.',
          'A list of non-moving items, ABC/XYZ analysis and discount suggestions.',
          'Purchase recommendations based on sales velocity.',
        ],
        results: [{ value: '−24%', label: 'dead stock' }],
        quote: null,
      },
    },
  },
  {
    id: 'field-service-platform',
    industryId: 'field-service',
    serviceIds: ['mobile-apps', 'automation', 'custom-software'],
    metric: '200+',
    client: null, // TODO: название клиента (с его согласия)
    stack: null, // TODO: стек проекта
    locales: {
      uz: {
        slug: 'dala-xizmati-platformasi',
        name: 'Dala xizmati platformasi',
        summary:
          '200 dan ortiq texnik bitta tizimda: arizalar, rejalashtirish, mobil ilova va hisobotlar.',
        metaTitle: 'Keys: 200+ texnik uchun dala xizmati platformasi | ZOLVI',
        metaDescription:
          'Servis kompaniyasi uchun dala xizmati platformasi: 200 dan ortiq texnik bitta tizimda — arizalar, rejalashtirish, mobil ilova va hisobotlar.',
        h1: 'Dala xizmati platformasi: 200+ texnik bitta tizimda',
        lead: "Servis kompaniyasi texniklar ishini telefon va jadvallar orqali boshqarardi. Biz arizalar, rejalashtirish, texniklar mobil ilovasi va hisobotlarni bitta platformaga yig'dik — endi unda 200 dan ortiq texnik ishlaydi.",
        task: [
          "Dispetcherlar texniklarni telefon orqali qidirar, arizalar holati va bajarilgan ishlar haqida ma'lumot kech kelardi.",
          'Bajarilgan ish isbotlanmas, ehtiyot qismlar sarfi nazorat qilinmasdi.',
        ],
        solution: [
          'Arizalarni qabul qilish va texniklarni xaritada rejalashtirish.',
          'Texniklar uchun oflayn ishlaydigan mobil ilova: cheklist, fotohisobot, mijoz imzosi.',
          "Texniklar va SLA bajarilishi bo'yicha hisobotlar.",
        ],
        results: [{ value: '200+', label: 'texnik bitta tizimda' }],
        quote: null,
      },
      ru: {
        slug: 'platforma-vyezdnogo-servisa',
        name: 'Платформа выездного сервиса',
        summary:
          'Более 200 техников в одной системе: заявки, планирование, мобильное приложение и отчёты.',
        metaTitle: 'Кейс: платформа выездного сервиса на 200+ техников | ZOLVI',
        metaDescription:
          'Платформа выездного сервиса для сервисной компании: более 200 техников в одной системе — заявки, планирование, мобильное приложение и отчёты.',
        h1: 'Платформа выездного сервиса: 200+ техников в одной системе',
        lead: 'Сервисная компания управляла работой техников по телефону и в таблицах. Мы собрали заявки, планирование, мобильное приложение для техников и отчёты в одну платформу — сейчас в ней работает более 200 техников.',
        task: [
          'Диспетчеры искали техников по телефону, информация о статусе заявок и выполненных работах приходила с опозданием.',
          'Выполненную работу нельзя было подтвердить, расход запчастей не контролировался.',
        ],
        solution: [
          'Приём заявок и планирование техников на карте.',
          'Мобильное приложение для техников с офлайн-режимом: чек-лист, фотоотчёт, подпись клиента.',
          'Отчёты по техникам и выполнению SLA.',
        ],
        results: [{ value: '200+', label: 'техников в одной системе' }],
        quote: null,
      },
      en: {
        slug: 'field-service-platform',
        name: 'Field service platform',
        summary:
          'Over 200 technicians in one system: work orders, scheduling, a mobile app and reporting.',
        metaTitle: 'Case Study: Field Service Platform for 200+ Techs | ZOLVI',
        metaDescription:
          'A field service platform for a service company: more than 200 technicians in one system — work orders, scheduling, a mobile app and reporting.',
        h1: 'Field service platform: 200+ technicians in one system',
        lead: 'A service company managed its technicians by phone and spreadsheets. We brought work orders, scheduling, a technician mobile app and reporting onto one platform — more than 200 technicians now work in it.',
        task: [
          'Dispatchers tracked technicians down by phone, and job status and completed work were reported late.',
          'Completed work could not be proven and spare-part usage was not controlled.',
        ],
        solution: [
          'Work order intake and map-based technician scheduling.',
          'An offline-capable mobile app for technicians: checklist, photo report, customer signature.',
          'Reports on technicians and SLA compliance.',
        ],
        results: [{ value: '200+', label: 'technicians in one system' }],
        quote: null,
      },
    },
  },
]
