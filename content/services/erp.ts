import type { Service } from '@/lib/types'

const service: Service = {
  id: 'erp',
  kind: 'service',
  category: 'business',
  icon: 'erp',
  demo: 'erp',
  caseId: 'retail-analytics',
  plan: 'enterprise',
  relatedServices: ['crm', 'automation', 'api', 'ai'],
  relatedIndustries: ['manufacturing', 'retail', 'logistics', 'e-commerce'],
  locales: {
    uz: {
      slug: 'erp-tizimi',
      name: 'ERP tizimi',
      summary:
        "Ombor, moliya, xaridlar, ishlab chiqarish va kadrlar — bitta tizimda, real vaqt ma'lumotlari bilan.",
      metaTitle: 'ERP tizimi ishlab chiqish va joriy etish | ZOLVI',
      metaDescription:
        'Biznesingiz uchun ERP tizimi: ombor, xaridlar, moliya, ishlab chiqarish va filiallar bitta tizimda. 1C bilan integratsiya. Toshkentda ishlab chiqamiz.',
      h1: 'ERP tizimi — butun biznes bitta tizimda',
      lead: "ERP tizimi ombor, xaridlar, sotuv, moliya, ishlab chiqarish va kadrlarni bitta ma'lumotlar bazasiga birlashtiradi. Har bir bo'lim o'z jadvalida emas, umumiy tizimda ishlaydi — rahbar esa qoldiqlar, tannarx va foydani real vaqtda ko'radi. ZOLVI ERP'ni biznesingiz tuzilmasiga moslab, modulma-modul joriy etadi.",
      audience: [
        'Bir nechta ombor yoki filialga ega savdo va distribyutsiya kompaniyalari',
        "Xomashyo, tannarx va ishlab chiqarish rejasini nazorat qilishi kerak bo'lgan ishlab chiqaruvchilar",
        "1C'dan tashqari yana o'nlab Excel jadvallar bilan ishlaydigan kompaniyalar",
        "Tez o'sayotgan va jarayonlari endi «qo'lda» boshqarilmaydigan bizneslar",
      ],
      pains: [
        {
          title: "Qoldiqlar hech qachon to'g'ri emas",
          text: "Ombordagi tovar hisobdagidan farq qiladi, inventarizatsiya bir necha kun oladi, «yo'qolgan» tovar esa foydani yeb qo'yadi.",
        },
        {
          title: "Bo'limlar bir-birini ko'rmaydi",
          text: "Sotuv bo'limi omborda nima borligini bilmaydi, xarid bo'limi nimani buyurtma qilishni taxmin qiladi, buxgalteriya hammasini qo'lda yig'adi.",
        },
        {
          title: "Tannarx va foyda noma'lum",
          text: 'Qaysi mahsulot yoki filial haqiqatan foyda keltirayotganini bilish uchun hisobot oyning oxirida, kechikib tayyorlanadi.',
        },
      ],
      includes: [
        {
          title: 'Ombor va logistika',
          text: "Bir nechta ombor, partiyalar, shtrix-kodlar, ko'chirishlar va inventarizatsiya. Kam qolgan tovar haqida avtomatik ogohlantirish.",
        },
        {
          title: "Xaridlar va ta'minotchilar",
          text: "Ta'minotchilar bazasi, buyurtmalar, narxlar tarixi va qoldiqqa qarab avtomatik buyurtma tavsiyalari.",
        },
        {
          title: 'Sotuv va buyurtmalar',
          text: 'Ulgurji va chakana sotuv, narx turlari, chegirmalar, qarzdorlik nazorati va savdo agentlari.',
        },
        {
          title: 'Moliya va tannarx',
          text: "Kassa, bank, to'lovlar kalendari, xarajatlar moddasi va har bir mahsulot tannarxi. Foyda va zarar hisoboti.",
        },
        {
          title: 'Ishlab chiqarish',
          text: 'Retseptlar (spetsifikatsiyalar), ishlab chiqarish rejasi, xomashyo sarfi va brak hisobi.',
        },
        {
          title: '1C va boshqa tizimlar bilan integratsiya',
          text: "1C buxgalteriya, onlayn-kassalar, marketpleyslar va bank bilan ma'lumot almashinuvi — ikki marta kiritish yo'q.",
        },
      ],
      sections: [
        {
          h2: "Tayyor ERP o'rniga maxsus ERP: qachon bu to'g'ri qaror",
          paragraphs: [
            "Yirik tayyor ERP tizimlari kuchli, lekin ularni joriy etish oylab davom etadi, litsenziyalar qimmat va biznesni ularning standart jarayonlariga moslashga to'g'ri keladi. Ko'pincha kompaniya funksiyalarning kichik qismidan foydalanadi, qolganiga esa pul to'laydi.",
            "Maxsus ERP sizga kerakli modullardan boshlanadi — odatda ombor va sotuvdan — va biznes o'sgani sari kengayadi. Mavjud 1C buxgalteriyasini almashtirish shart emas: ERP u bilan integratsiya qilinadi va operatsion ishni o'z zimmasiga oladi.",
          ],
        },
        {
          h2: 'ERP modulma-modul qanday joriy etiladi',
          paragraphs: [
            "Bitta katta «ishga tushirish kuni» o'rniga ERP'ni bosqichma-bosqich joriy etamiz. Birinchi bo'lib eng og'riqli jarayon — masalan, ombor hisobini — avtomatlashtiramiz, xodimlar unga ko'nikadi, keyin xaridlar, moliya va ishlab chiqarish qo'shiladi.",
            "Har bir bosqichda eski ma'lumotlar ko'chiriladi va solishtiriladi, shuning uchun hisob uzilib qolmaydi. Rahbar birinchi oydan boshlab qoldiqlar va savdo bo'yicha real vaqtdagi dashboardni ko'radi.",
          ],
        },
        {
          h2: "ERP narxi nimaga bog'liq",
          paragraphs: [
            "ERP narxini asosan uchta omil belgilaydi: modullar soni (ombor, sotuv, moliya, ishlab chiqarish, kadrlar), integratsiyalar (1C, onlayn-kassalar, bank, marketpleyslar) va filiallar hamda foydalanuvchilar soni. Eski tizimlardan ma'lumot ko'chirish hajmi ham muhim.",
            "Byudjetni nazorat qilish uchun ERP'ni bosqichlarga bo'lamiz: har bir modul alohida baholanadi va alohida topshiriladi. Shunday qilib, birinchi modul o'zini oqlay boshlagandan keyingina keyingisiga sarmoya kiritasiz.",
          ],
        },
      ],
      timeline: '3 oydan',
      faq: [
        {
          q: 'ERP tizimi narxi qancha?',
          a: "Narx modullar soni va integratsiyalarga bog'liq. ERP «Korporativ» paketiga kiradi — boshlang'ich narxi «Narxlar» sahifasida. Aniq smeta auditdan keyin modullar bo'yicha beriladi.",
        },
        {
          q: "1C'ni almashtirish kerakmi?",
          a: "Yo'q. Ko'pincha 1C buxgalteriya uchun qoladi, ERP esa ombor, sotuv va ishlab chiqarishni boshqaradi va ma'lumotlarni 1C'ga avtomatik uzatadi.",
        },
        {
          q: 'ERP qancha vaqtda ishga tushadi?',
          a: "Birinchi modul odatda 6–8 haftada ishga tushadi, to'liq ERP esa modullar soniga qarab 3 oydan boshlab. Har hafta yangi versiya chiqadi.",
        },
        {
          q: "Bir nechta filial va omborni qo'llab-quvvatlaydimi?",
          a: "Ha. Har bir filial va ombor alohida hisoblanadi, rahbar esa umumiy va har bir filial bo'yicha alohida hisobotlarni ko'radi.",
        },
        {
          q: 'Shtrix-kod skanerlari va onlayn-kassalar bilan ishlaydimi?',
          a: 'Ha, skanerlar, yorliq printerlari, terminallar va onlayn-kassalar bilan integratsiya qilamiz.',
        },
      ],
    },
    ru: {
      slug: 'razrabotka-erp',
      name: 'ERP-система',
      summary:
        'Склад, финансы, закупки, производство и кадры — в одной системе, с данными в реальном времени.',
      metaTitle: 'Разработка и внедрение ERP-системы | ZOLVI',
      metaDescription:
        'ERP-система под ваш бизнес: склад, закупки, финансы, производство и филиалы в одной системе. Интеграция с 1С. Разработка ERP в Ташкенте.',
      h1: 'ERP-система — весь бизнес в одной системе',
      lead: 'ERP-система объединяет склад, закупки, продажи, финансы, производство и кадры в одной базе данных. Каждый отдел работает не в своей таблице, а в общей системе, а руководитель видит остатки, себестоимость и прибыль в реальном времени. ZOLVI разрабатывает ERP под структуру вашего бизнеса и внедряет её по модулям.',
      audience: [
        'Торговые и дистрибьюторские компании с несколькими складами или филиалами',
        'Производители, которым нужен контроль сырья, себестоимости и плана производства',
        'Компании, у которых кроме 1С ещё десятки Excel-таблиц',
        'Быстрорастущий бизнес, которым уже невозможно управлять «вручную»',
      ],
      pains: [
        {
          title: 'Остатки никогда не сходятся',
          text: 'Товар на складе расходится с учётом, инвентаризация занимает дни, а «пропавший» товар съедает прибыль.',
        },
        {
          title: 'Отделы не видят друг друга',
          text: 'Продажи не знают, что есть на складе, закупки угадывают, что заказывать, бухгалтерия сводит всё вручную.',
        },
        {
          title: 'Себестоимость и прибыль неизвестны',
          text: 'Чтобы понять, какой товар или филиал реально приносит прибыль, отчёт готовят в конце месяца — с опозданием.',
        },
      ],
      includes: [
        {
          title: 'Склад и логистика',
          text: 'Несколько складов, партии, штрихкоды, перемещения и инвентаризация. Автоматические уведомления о дефиците.',
        },
        {
          title: 'Закупки и поставщики',
          text: 'База поставщиков, заказы, история цен и автоматические рекомендации по закупке на основе остатков.',
        },
        {
          title: 'Продажи и заказы',
          text: 'Опт и розница, типы цен, скидки, контроль дебиторки и торговые агенты.',
        },
        {
          title: 'Финансы и себестоимость',
          text: 'Касса, банк, платёжный календарь, статьи расходов и себестоимость каждого товара. Отчёт о прибылях и убытках.',
        },
        {
          title: 'Производство',
          text: 'Рецептуры (спецификации), план производства, расход сырья и учёт брака.',
        },
        {
          title: 'Интеграция с 1С и другими системами',
          text: 'Обмен данными с 1С: Бухгалтерия, онлайн-кассами, маркетплейсами и банком — без двойного ввода.',
        },
      ],
      sections: [
        {
          h2: 'Заказная ERP вместо готовой: когда это правильное решение',
          paragraphs: [
            'Крупные готовые ERP-системы мощные, но их внедрение длится месяцами, лицензии дорогие, а бизнес приходится подстраивать под их стандартные процессы. Часто компания использует малую часть функций, а платит за все.',
            'Заказная ERP начинается с нужных вам модулей — обычно склада и продаж — и растёт вместе с бизнесом. Существующую 1С: Бухгалтерию менять не обязательно: ERP интегрируется с ней и берёт на себя операционную работу.',
          ],
        },
        {
          h2: 'Как ERP внедряется по модулям',
          paragraphs: [
            'Вместо одного большого «дня запуска» внедряем ERP поэтапно. Сначала автоматизируем самый болезненный процесс — например, складской учёт, — сотрудники привыкают к нему, затем подключаем закупки, финансы и производство.',
            'На каждом этапе старые данные переносятся и сверяются, поэтому учёт не прерывается. Руководитель с первого месяца видит дашборд по остаткам и продажам в реальном времени.',
          ],
        },
        {
          h2: 'От чего зависит стоимость ERP',
          paragraphs: [
            'Стоимость ERP определяют три фактора: число модулей (склад, продажи, финансы, производство, кадры), интеграции (1С, онлайн-кассы, банк, маркетплейсы) и количество филиалов и пользователей. Важен и объём переноса данных из старых систем.',
            'Чтобы держать бюджет под контролем, делим ERP на этапы: каждый модуль оценивается и сдаётся отдельно. Так вы инвестируете в следующий модуль только после того, как предыдущий начал окупаться.',
          ],
        },
      ],
      timeline: 'от 3 месяцев',
      faq: [
        {
          q: 'Сколько стоит ERP-система?',
          a: 'Стоимость зависит от числа модулей и интеграций. ERP входит в пакет «Корпоративный» — стартовая цена на странице «Цены». Точная смета по модулям — после аудита.',
        },
        {
          q: 'Нужно ли отказываться от 1С?',
          a: 'Нет. Чаще всего 1С остаётся для бухгалтерии, а ERP управляет складом, продажами и производством и автоматически передаёт данные в 1С.',
        },
        {
          q: 'За какой срок запускается ERP?',
          a: 'Первый модуль обычно запускается за 6–8 недель, полная ERP — от 3 месяцев в зависимости от числа модулей. Новая версия выходит каждую неделю.',
        },
        {
          q: 'Поддерживаются несколько филиалов и складов?',
          a: 'Да. Каждый филиал и склад учитывается отдельно, а руководитель видит общие отчёты и отчёты по каждому филиалу.',
        },
        {
          q: 'Работает со сканерами штрихкодов и онлайн-кассами?',
          a: 'Да, интегрируем сканеры, принтеры этикеток, терминалы и онлайн-кассы.',
        },
      ],
    },
    en: {
      slug: 'erp-development',
      name: 'ERP system',
      summary:
        'Inventory, finance, purchasing, production and HR in one system, with real-time data.',
      metaTitle: 'Custom ERP Development and Implementation | ZOLVI',
      metaDescription:
        'An ERP system built for your business: inventory, purchasing, finance, production and branches in one place. 1C integration. ERP development in Tashkent.',
      h1: 'ERP system — your whole business in one place',
      lead: 'An ERP system brings inventory, purchasing, sales, finance, production and HR into a single database. Every department works in one shared system instead of its own spreadsheet, and the owner sees stock, unit costs and profit in real time. ZOLVI builds ERP around your company structure and rolls it out module by module.',
      audience: [
        'Trading and distribution companies with several warehouses or branches',
        'Manufacturers that need control over raw materials, costs and the production plan',
        'Companies running dozens of spreadsheets on top of 1C',
        'Fast-growing businesses that can no longer be run by hand',
      ],
      pains: [
        {
          title: 'Stock never adds up',
          text: 'Warehouse stock differs from the books, stocktakes take days, and “missing” goods eat into profit.',
        },
        {
          title: "Departments can't see each other",
          text: 'Sales does not know what is in stock, purchasing guesses what to order, and accounting reconciles everything by hand.',
        },
        {
          title: 'Unit costs and profit are unknown',
          text: 'Knowing which product or branch really makes money requires a report that arrives at the end of the month — too late.',
        },
      ],
      includes: [
        {
          title: 'Inventory and logistics',
          text: 'Multiple warehouses, batches, barcodes, transfers and stocktakes. Automatic low-stock alerts.',
        },
        {
          title: 'Purchasing and suppliers',
          text: 'Supplier base, purchase orders, price history and automatic reorder suggestions based on stock levels.',
        },
        {
          title: 'Sales and orders',
          text: 'Wholesale and retail, price lists, discounts, receivables control and sales agents.',
        },
        {
          title: 'Finance and costing',
          text: 'Cash, bank, payment calendar, expense categories and the cost of every product. Profit and loss report.',
        },
        {
          title: 'Production',
          text: 'Bills of materials, production planning, raw material usage and scrap tracking.',
        },
        {
          title: 'Integration with 1C and other systems',
          text: 'Data exchange with 1C Accounting, online cash registers, marketplaces and banks — no double entry.',
        },
      ],
      sections: [
        {
          h2: 'Custom ERP instead of off-the-shelf: when it is the right call',
          paragraphs: [
            'Large off-the-shelf ERP suites are powerful, but implementation takes months, licenses are expensive and the business has to adapt to their standard processes. Companies often use a small share of the features while paying for all of them.',
            'A custom ERP starts with the modules you need — usually inventory and sales — and grows with the business. You do not have to replace 1C Accounting: the ERP integrates with it and takes over the operational work.',
          ],
        },
        {
          h2: 'How ERP is rolled out module by module',
          paragraphs: [
            'Instead of one big launch day we implement ERP in stages. We automate the most painful process first — for example, inventory — let the team get used to it, then add purchasing, finance and production.',
            'At every stage old data is migrated and reconciled, so the books never break. From the first month the owner sees a real-time dashboard of stock and sales.',
          ],
        },
        {
          h2: 'What drives the cost of an ERP',
          paragraphs: [
            'Three factors drive ERP cost: the number of modules (inventory, sales, finance, production, HR), the integrations (1C, online cash registers, banks, marketplaces) and the number of branches and users. The volume of data migrated from old systems matters too.',
            'To keep the budget under control we split the ERP into stages, each module estimated and delivered separately. You invest in the next module only once the previous one has started paying back.',
          ],
        },
      ],
      timeline: 'from 3 months',
      faq: [
        {
          q: 'How much does an ERP system cost?',
          a: 'It depends on the number of modules and integrations. ERP is part of the Enterprise package — see the starting price on the Pricing page. The exact per-module estimate follows the audit.',
        },
        {
          q: 'Do we have to replace 1C?',
          a: 'No. Usually 1C stays for accounting, while the ERP runs inventory, sales and production and pushes data to 1C automatically.',
        },
        {
          q: 'How long does ERP take to launch?',
          a: 'The first module usually goes live in 6–8 weeks; a full ERP takes from 3 months depending on the number of modules. A new version ships every week.',
        },
        {
          q: 'Does it support multiple branches and warehouses?',
          a: 'Yes. Each branch and warehouse is tracked separately, and the owner sees both consolidated and per-branch reports.',
        },
        {
          q: 'Does it work with barcode scanners and online cash registers?',
          a: 'Yes, we integrate scanners, label printers, payment terminals and online cash registers.',
        },
      ],
    },
  },
}

export default service
