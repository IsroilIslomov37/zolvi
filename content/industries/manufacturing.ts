import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'manufacturing',
  kind: 'industry',
  icon: 'factory',
  demo: 'erp',
  plan: 'enterprise',
  relatedServices: ['erp', 'automation', 'api', 'ai'],
  relatedIndustries: ['retail', 'logistics', 'e-commerce'],
  locales: {
    uz: {
      slug: 'ishlab-chiqarish',
      name: 'Ishlab chiqarish',
      summary:
        'Xomashyo, retseptlar, ishlab chiqarish rejasi, tannarx va tayyor mahsulot ombori — bitta tizimda.',
      metaTitle: 'Ishlab chiqarishni avtomatlashtirish: ERP va MES | ZOLVI',
      metaDescription:
        'Ishlab chiqarish korxonalari uchun tizim: xomashyo ombori, retseptlar, ishlab chiqarish rejasi, tannarx, brak hisobi va dilerlar savdosi. Toshkent.',
      h1: 'Ishlab chiqarishni avtomatlashtirish',
      lead: "Ishlab chiqarishda foyda xomashyo sarfi, brak va uskunalarning bo'sh turishi bilan belgilanadi. Bularni Excel'da kuzatish qiyin va kech. ZOLVI xomashyo omboridan tortib tayyor mahsulot sotuvigacha bo'lgan zanjirni bitta tizimga bog'laydi — tannarx va ishlab chiqarish holati real vaqtda ko'rinadi.",
      audience: [
        'Oziq-ovqat va ichimliklar ishlab chiqaruvchilari',
        "To'qimachilik va tikuvchilik korxonalari",
        'Qurilish materiallari va mebel ishlab chiqarish',
        "Plastik, qadoqlash va boshqa kichik va o'rta ishlab chiqarishlar",
      ],
      pains: [
        {
          title: 'Xomashyo sarfi nazoratsiz',
          text: "Normadan ortiq sarf, yo'qotishlar va o'g'irlik oy oxirida inventarizatsiyada aniqlanadi — juda kech.",
        },
        {
          title: 'Tannarx taxminiy',
          text: "Xomashyo narxi o'zgaradi, lekin mahsulot tannarxi va sotuv narxi eski hisob-kitob bo'yicha qoladi.",
        },
        {
          title: 'Reja va haqiqat farq qiladi',
          text: "Ishlab chiqarish rejasi qog'ozda, smena qancha ishlab chiqargani esa kun oxirida ma'lum bo'ladi.",
        },
      ],
      includes: [
        {
          title: 'Xomashyo ombori',
          text: 'Qabul qilish, partiyalar, yaroqlilik muddati, sexlarga berish va qoldiqlar.',
        },
        {
          title: 'Retseptlar va spetsifikatsiyalar',
          text: 'Har bir mahsulot uchun xomashyo normalari, muqobil xomashyo va versiyalar.',
        },
        {
          title: 'Ishlab chiqarish rejasi',
          text: "Buyurtmalar asosida reja, smenalar va liniyalar bo'yicha topshiriqlar, bajarilish nazorati.",
        },
        {
          title: 'Tannarx hisobi',
          text: "Xomashyo, ish haqi va qo'shimcha xarajatlar asosida har bir partiya tannarxi.",
        },
        {
          title: 'Sifat va brak',
          text: "Sifat nazorati natijalari, brak sabablari va ular bo'yicha hisobotlar.",
        },
        {
          title: 'Dilerlar va sotuv',
          text: "Dilerlar buyurtmalari, narx turlari, qarzdorlik va tayyor mahsulot jo'natmalari.",
        },
      ],
      sections: [
        {
          h2: 'Norma va haqiqiy sarfni solishtirish',
          paragraphs: [
            "Har bir ishlab chiqarilgan partiya uchun tizim retsept bo'yicha normativ sarfni hisoblaydi va uni sexga berilgan haqiqiy xomashyo bilan solishtiradi. Farq belgilangan chegaradan oshsa, mas'ul shaxsga xabar boradi.",
            "Shu tariqa yo'qotishlar oy oxirida emas, xuddi o'sha smenada aniqlanadi va sababi tezda topiladi.",
          ],
        },
        {
          h2: 'Tannarx har doim dolzarb',
          paragraphs: [
            "Xomashyo narxi o'zgarganda tizim mahsulot tannarxini avtomatik qayta hisoblaydi. Rahbar qaysi mahsulot marjasi pasayganini ko'radi va narxlarni o'z vaqtida o'zgartiradi.",
            "Partiya bo'yicha tannarx esa qaysi liniya yoki smena samaraliroq ishlayotganini ko'rsatadi.",
          ],
        },
        {
          h2: "Sexdagi ma'lumotlarni yig'ish",
          paragraphs: [
            "Sexda ishchilar va ustalar planshet yoki terminal orqali bajarilgan ishni, brakni va uskunalar to'xtab qolishini qayd etadi. Bu qog'oz jurnallarni almashtiradi va ma'lumotni real vaqtda beradi.",
            "Uskunalardan to'g'ridan-to'g'ri ma'lumot olish (sensorlar, hisoblagichlar) uskunaning imkoniyatlariga bog'liq — buni auditda baholaymiz.",
          ],
        },
      ],
      timeline: '3 oydan',
      faq: [
        {
          q: 'Ishlab chiqarish tizimi narxi qancha?',
          a: "Narx modullar, sexlar soni va integratsiyalarga bog'liq; odatda «Korporativ» paketi doirasida. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: '1C bilan ishlaydimi?',
          a: "Ha, 1C buxgalteriya uchun qolishi mumkin, tizim esa ishlab chiqarish va ombor ma'lumotlarini unga uzatadi.",
        },
        {
          q: "Sexda internet bo'lmasa-chi?",
          a: 'Sex terminallari mahalliy tarmoqda yoki oflayn rejimda ishlashi mumkin va aloqa tiklanganda sinxronlanadi.',
        },
        {
          q: 'Bosqichma-bosqich joriy etish mumkinmi?',
          a: "Ha, odatda xomashyo ombori va retseptlardan boshlaymiz, keyin reja, tannarx va sotuvni qo'shamiz.",
        },
        {
          q: 'Yaroqlilik muddati va partiyalar hisobga olinadimi?',
          a: 'Ha, partiyalar, ishlab chiqarilgan va yaroqlilik sanalari kuzatiladi, muddati yaqinlashganlar haqida ogohlantirish beriladi.',
        },
        {
          q: 'Ishlab chiqarish tizimini joriy etish qancha vaqt oladi?',
          a: "Birinchi modul — odatda xomashyo ombori va retseptlar — 6–8 haftada ishga tushadi. To'liq tizim sexlar va integratsiyalar soniga qarab 3 oydan boshlab joriy etiladi, har bosqichda ishlab chiqarish to'xtamaydi.",
        },
      ],
    },
    ru: {
      slug: 'proizvodstvo',
      name: 'Производство',
      summary:
        'Сырьё, рецептуры, план производства, себестоимость и склад готовой продукции — в одной системе.',
      metaTitle: 'Автоматизация производства: ERP и учёт | ZOLVI',
      metaDescription:
        'Система для производственных предприятий: склад сырья, рецептуры, план производства, себестоимость, учёт брака и продажи дилерам. Ташкент.',
      h1: 'Автоматизация производства',
      lead: 'На производстве прибыль определяют расход сырья, брак и простои оборудования. Отслеживать это в Excel сложно и поздно. ZOLVI связывает в одной системе всю цепочку от склада сырья до продажи готовой продукции — себестоимость и состояние производства видны в реальном времени.',
      audience: [
        'Производители продуктов питания и напитков',
        'Текстильные и швейные предприятия',
        'Производство стройматериалов и мебели',
        'Производство пластика, упаковки и другие малые и средние предприятия',
      ],
      pains: [
        {
          title: 'Расход сырья без контроля',
          text: 'Перерасход, потери и хищения выявляются на инвентаризации в конце месяца — слишком поздно.',
        },
        {
          title: 'Себестоимость приблизительная',
          text: 'Цены на сырьё меняются, а себестоимость и цена продажи считаются по старой калькуляции.',
        },
        {
          title: 'План и факт расходятся',
          text: 'План производства на бумаге, а сколько выпустила смена, становится известно в конце дня.',
        },
      ],
      includes: [
        {
          title: 'Склад сырья',
          text: 'Приёмка, партии, сроки годности, выдача в цеха и остатки.',
        },
        {
          title: 'Рецептуры и спецификации',
          text: 'Нормы сырья для каждого продукта, замены и версии.',
        },
        {
          title: 'План производства',
          text: 'План на основе заказов, задания по сменам и линиям, контроль выполнения.',
        },
        {
          title: 'Расчёт себестоимости',
          text: 'Себестоимость каждой партии с учётом сырья, зарплаты и накладных расходов.',
        },
        {
          title: 'Качество и брак',
          text: 'Результаты контроля качества, причины брака и отчёты по ним.',
        },
        {
          title: 'Дилеры и продажи',
          text: 'Заказы дилеров, типы цен, задолженность и отгрузки готовой продукции.',
        },
      ],
      sections: [
        {
          h2: 'Сравнение нормы и факта',
          paragraphs: [
            'Для каждой выпущенной партии система рассчитывает нормативный расход по рецептуре и сравнивает его с фактически выданным в цех сырьём. Если отклонение превышает порог, ответственный получает уведомление.',
            'Так потери выявляются не в конце месяца, а в ту же смену, и причина находится быстро.',
          ],
        },
        {
          h2: 'Себестоимость всегда актуальна',
          paragraphs: [
            'При изменении цен на сырьё система автоматически пересчитывает себестоимость продукции. Руководитель видит, у какого продукта упала маржа, и вовремя меняет цены.',
            'Себестоимость по партиям показывает, какая линия или смена работает эффективнее.',
          ],
        },
        {
          h2: 'Сбор данных в цеху',
          paragraphs: [
            'В цеху рабочие и мастера фиксируют выполненную работу, брак и простои оборудования через планшет или терминал. Это заменяет бумажные журналы и даёт данные в реальном времени.',
            'Получение данных напрямую с оборудования (датчики, счётчики) зависит от его возможностей — оцениваем это на аудите.',
          ],
        },
      ],
      timeline: 'от 3 месяцев',
      faq: [
        {
          q: 'Сколько стоит система для производства?',
          a: 'Стоимость зависит от модулей, числа цехов и интеграций; обычно в рамках пакета «Корпоративный». Точную смету даём после аудита.',
        },
        {
          q: 'Работает с 1С?',
          a: 'Да, 1С может остаться для бухгалтерии, а система передаёт в неё данные о производстве и складе.',
        },
        {
          q: 'Что если в цеху нет интернета?',
          a: 'Цеховые терминалы могут работать в локальной сети или офлайн и синхронизироваться при восстановлении связи.',
        },
        {
          q: 'Можно внедрять поэтапно?',
          a: 'Да, обычно начинаем со склада сырья и рецептур, затем добавляем план, себестоимость и продажи.',
        },
        {
          q: 'Учитываются сроки годности и партии?',
          a: 'Да, отслеживаются партии, даты производства и сроки годности, с предупреждениями о приближении срока.',
        },
        {
          q: 'Сколько длится внедрение системы для производства?',
          a: 'Первый модуль — обычно склад сырья и рецептуры — запускается за 6–8 недель. Полная система внедряется от 3 месяцев в зависимости от числа цехов и интеграций, производство при этом не останавливается.',
        },
      ],
    },
    en: {
      slug: 'manufacturing',
      name: 'Manufacturing',
      summary:
        'Raw materials, recipes, production planning, costing and finished goods — in one system.',
      metaTitle: 'Manufacturing Automation: ERP and Shop Floor | ZOLVI',
      metaDescription:
        'A system for manufacturers: raw material inventory, recipes, production planning, costing, scrap tracking and dealer sales. Tashkent, Uzbekistan.',
      h1: 'Manufacturing automation',
      lead: 'In manufacturing, profit is decided by material usage, scrap and equipment downtime — all hard to track in spreadsheets, and always too late. ZOLVI connects the whole chain from raw material warehouse to finished goods sales in one system, with unit cost and production status visible in real time.',
      audience: [
        'Food and beverage producers',
        'Textile and garment factories',
        'Building materials and furniture production',
        'Plastics, packaging and other small and mid-size manufacturers',
      ],
      pains: [
        {
          title: 'Material usage out of control',
          text: 'Overuse, losses and theft only show up in the month-end stocktake — far too late.',
        },
        {
          title: 'Guesswork costing',
          text: 'Material prices change, yet unit costs and selling prices still follow last year’s calculation.',
        },
        {
          title: 'Plan and reality diverge',
          text: 'The production plan is on paper and output per shift is only known at the end of the day.',
        },
      ],
      includes: [
        {
          title: 'Raw material warehouse',
          text: 'Receiving, batches, expiry dates, issues to the shop floor and stock levels.',
        },
        {
          title: 'Recipes and bills of materials',
          text: 'Material norms for every product, substitutes and versions.',
        },
        {
          title: 'Production planning',
          text: 'Order-driven plans, tasks by shift and line, and execution tracking.',
        },
        {
          title: 'Costing',
          text: 'Cost of every batch from materials, labor and overheads.',
        },
        {
          title: 'Quality and scrap',
          text: 'Quality control results, scrap reasons and reports on them.',
        },
        {
          title: 'Dealers and sales',
          text: 'Dealer orders, price lists, receivables and finished goods shipments.',
        },
      ],
      sections: [
        {
          h2: 'Comparing norm and actual usage',
          paragraphs: [
            'For each batch produced, the system calculates standard usage from the recipe and compares it with the material actually issued to the floor. If the gap exceeds a threshold, the person responsible is notified.',
            'Losses surface in the same shift instead of at month-end, and the cause is found quickly.',
          ],
        },
        {
          h2: 'Always up-to-date unit costs',
          paragraphs: [
            'When material prices change, the system recalculates product costs automatically. Management sees which products have lost margin and adjusts prices in time.',
            'Batch-level costing also shows which line or shift is more efficient.',
          ],
        },
        {
          h2: 'Capturing data on the shop floor',
          paragraphs: [
            'Workers and supervisors record completed work, scrap and equipment downtime on a tablet or terminal. That replaces paper logs and provides data in real time.',
            'Reading data directly from equipment (sensors, counters) depends on the machinery’s capabilities — we assess this during the audit.',
          ],
        },
      ],
      timeline: 'from 3 months',
      faq: [
        {
          q: 'How much does a manufacturing system cost?',
          a: 'It depends on the modules, number of workshops and integrations; usually within the Enterprise package. We give an exact estimate after the audit.',
        },
        {
          q: 'Does it work with 1C?',
          a: 'Yes, 1C can stay for accounting while the system sends production and inventory data to it.',
        },
        {
          q: 'What if the shop floor has no internet?',
          a: 'Shop-floor terminals can run on a local network or offline and sync once the connection is back.',
        },
        {
          q: 'Can it be rolled out in stages?',
          a: 'Yes, we usually start with the raw material warehouse and recipes, then add planning, costing and sales.',
        },
        {
          q: 'Are batches and expiry dates tracked?',
          a: 'Yes, batches, production dates and expiry dates are tracked, with alerts as expiry approaches.',
        },
        {
          q: 'How long does a manufacturing rollout take?',
          a: 'The first module — usually the raw material warehouse and recipes — goes live in 6–8 weeks. The full system takes from 3 months depending on workshops and integrations, without stopping production.',
        },
      ],
    },
  },
}

export default industry
