import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'e-commerce',
  kind: 'industry',
  icon: 'cart',
  demo: 'erp',
  caseId: 'retail-analytics',
  plan: 'business',
  relatedServices: ['ecommerce', 'telegram-bot', 'api', 'erp'],
  relatedIndustries: ['retail', 'logistics'],
  locales: {
    uz: {
      slug: 'e-tijorat',
      name: 'E-tijorat',
      summary:
        'Sayt, Telegram, Instagram va marketpleyslardagi savdo — bitta ombor va buyurtmalar tizimida.',
      metaTitle: 'E-tijorat va onlayn savdoni avtomatlashtirish | ZOLVI',
      metaDescription:
        "Onlayn savdo uchun tizim: sayt, Telegram-bot, Instagram va marketpleyslar buyurtmalari bitta joyda, ombor, yetkazib berish va to'lovlar. Toshkent.",
      h1: "E-tijorat: onlayn savdoni bitta tizimga yig'ish",
      lead: "Onlayn savdo bitta kanal bilan cheklanmaydi: buyurtmalar sayt, Telegram, Instagram va marketpleyslardan keladi. Har bir kanal alohida yuritilsa, qoldiqlar chalkashadi va buyurtmalar yo'qoladi. ZOLVI barcha kanallarni bitta ombor, buyurtmalar va yetkazib berish tizimiga ulaydi.",
      audience: [
        'Instagram va Telegram orqali sotadigan brendlar',
        'Bir nechta marketpleysda sotadigan sotuvchilar',
        "O'z internet-do'koniga ega kompaniyalar",
        'Kunlik yuzlab buyurtmaga ishlov beradigan omborlar',
      ],
      pains: [
        {
          title: 'Bitta tovar ikki marta sotiladi',
          text: "Marketpleys va Instagram'da bir vaqtda sotilgan oxirgi tovar — bekor qilingan buyurtma va norozi mijoz.",
        },
        {
          title: "Buyurtmalar ko'chirib yoziladi",
          text: "Direct va Telegram'dagi buyurtmalar jadvalga qo'lda yoziladi, manzil va telefonlarda xatolar paydo bo'ladi.",
        },
        {
          title: "Qaysi kanal foyda keltiradi — noma'lum",
          text: 'Komissiyalar, reklama va yetkazib berish xarajatlari hisobga olinganda qaysi kanal foydali ekanini hech kim bilmaydi.',
        },
      ],
      includes: [
        {
          title: 'Barcha kanallar bitta joyda',
          text: "Sayt, Telegram-bot, Instagram va marketpleyslardan buyurtmalar bitta ro'yxatda.",
        },
        {
          title: "Yagona ombor qoldig'i",
          text: 'Tovar sotilishi bilan qoldiq barcha kanallarda avtomatik yangilanadi.',
        },
        {
          title: "Buyurtmalarni yig'ish va jo'natish",
          text: 'Terish varaqlari, shtrix-kod bilan tekshirish, yorliqlar va kuryer xizmatlariga uzatish.',
        },
        {
          title: "To'lovlar va qaytarishlar",
          text: "Click, Payme, Uzum va naqd to'lovlar, qaytarishlar va almashtirishlar hisobi.",
        },
        {
          title: 'Mijozlar bazasi',
          text: 'Barcha kanallardagi xaridlar tarixi bitta mijoz kartochkasida, qayta xaridlar uchun takliflar.',
        },
        {
          title: "Kanallar bo'yicha tahlil",
          text: 'Komissiya, reklama va yetkazib berishni hisobga olgan holda har bir kanal marjasi.',
        },
      ],
      sections: [
        {
          h2: "Ko'p kanalli savdo: qoldiqlar bitta",
          paragraphs: [
            "Ko'p kanalli savdoning asosiy qoidasi — bitta haqiqiy ombor qoldig'i. Tizim marketpleyslar va o'z kanallaringizga qoldiqni API orqali yuboradi va har bir sotuvdan keyin uni yangilaydi.",
            "Buning natijasida «oxirgi tovar» muammosi yo'qoladi, bekor qilingan buyurtmalar kamayadi va marketpleyslardagi reyting saqlanadi.",
          ],
        },
        {
          h2: 'Instagram va Telegram buyurtmalarini tartibga solish',
          paragraphs: [
            "Instagram va Telegram'dan keladigan buyurtmalarni Telegram-bot yoki chat-integratsiya orqali tuzilgan holda qabul qilamiz: mahsulot, o'lcham, manzil va to'lov usuli darhol tizimga tushadi.",
            "Operator xabarlarni ko'chirib yozish o'rniga faqat tasdiqlaydi — bu ishlov berish vaqtini qisqartiradi va xatolarni kamaytiradi.",
          ],
        },
        {
          h2: "Haqiqiy foydani ko'rish",
          paragraphs: [
            "Har bir kanalning tushumi emas, foydasi muhim. Tizim komissiyalar, yetkazib berish, qaytarishlar va reklama xarajatlarini buyurtmalarga bog'laydi va har bir kanal hamda mahsulotning haqiqiy marjasini ko'rsatadi.",
            "Shu asosda qaysi kanalga ko'proq tovar va byudjet ajratishni raqamlar bilan hal qilasiz.",
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: 'E-tijorat tizimi narxi qancha?',
          a: "Narx kanallar soni va integratsiyalarga bog'liq; odatda «Biznes» paketi doirasida. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: 'Qaysi marketpleyslar bilan integratsiya qilasiz?',
          a: 'Marketpleys API taqdim etgan holatlarda. TODO: qaysi marketpleyslar bilan integratsiya tayyor ekanini tasdiqlang.',
        },
        {
          q: 'Instagram buyurtmalari avtomatik tushadimi?',
          a: "Instagram rasmiy API imkoniyatlari doirasida xabarlar bitta oynaga yig'iladi; buyurtmani rasmiylashtirish uchun bot yoki forma ishlatiladi.",
        },
        {
          q: 'Kuryer xizmatlari bilan ishlaydimi?',
          a: "Ha, API'si bor kuryer xizmatlariga buyurtmalar avtomatik uzatiladi, o'z kuryerlaringiz uchun ilova ham bor.",
        },
        {
          q: '1C bilan ishlaydimi?',
          a: "Ha, tovarlar, qoldiqlar va savdo ma'lumotlari 1C bilan almashinadi.",
        },
      ],
    },
    ru: {
      slug: 'elektronnaya-kommerciya',
      name: 'Электронная коммерция',
      summary:
        'Продажи на сайте, в Telegram, Instagram и на маркетплейсах — в одной системе склада и заказов.',
      metaTitle: 'Автоматизация e-commerce и онлайн-продаж | ZOLVI',
      metaDescription:
        'Система для онлайн-продаж: заказы с сайта, из Telegram-бота, Instagram и маркетплейсов в одном месте, склад, доставка и оплаты. Ташкент.',
      h1: 'E-commerce: онлайн-продажи в одной системе',
      lead: 'Онлайн-продажи не ограничиваются одним каналом: заказы приходят с сайта, из Telegram, Instagram и с маркетплейсов. Если каждый канал ведётся отдельно, остатки путаются, а заказы теряются. ZOLVI подключает все каналы к единой системе склада, заказов и доставки.',
      audience: [
        'Бренды, продающие через Instagram и Telegram',
        'Продавцы на нескольких маркетплейсах',
        'Компании с собственным интернет-магазином',
        'Склады, обрабатывающие сотни заказов в день',
      ],
      pains: [
        {
          title: 'Один товар продан дважды',
          text: 'Последний товар одновременно продали на маркетплейсе и в Instagram — отменённый заказ и недовольный клиент.',
        },
        {
          title: 'Заказы переписываются',
          text: 'Заказы из директа и Telegram вручную переносят в таблицу, в адресах и телефонах появляются ошибки.',
        },
        {
          title: 'Неизвестно, какой канал прибыльный',
          text: 'С учётом комиссий, рекламы и доставки никто не знает, какой канал реально приносит прибыль.',
        },
      ],
      includes: [
        {
          title: 'Все каналы в одном месте',
          text: 'Заказы с сайта, из Telegram-бота, Instagram и маркетплейсов в одном списке.',
        },
        {
          title: 'Единый остаток склада',
          text: 'При продаже остаток автоматически обновляется во всех каналах.',
        },
        {
          title: 'Сборка и отгрузка',
          text: 'Листы сборки, проверка по штрихкоду, этикетки и передача курьерским службам.',
        },
        {
          title: 'Оплаты и возвраты',
          text: 'Click, Payme, Uzum и наличные, учёт возвратов и обменов.',
        },
        {
          title: 'База клиентов',
          text: 'История покупок во всех каналах в одной карточке клиента, предложения для повторных покупок.',
        },
        {
          title: 'Аналитика по каналам',
          text: 'Маржа каждого канала с учётом комиссий, рекламы и доставки.',
        },
      ],
      sections: [
        {
          h2: 'Многоканальные продажи: остаток один',
          paragraphs: [
            'Главное правило многоканальных продаж — один реальный остаток склада. Система передаёт остатки на маркетплейсы и в ваши каналы через API и обновляет их после каждой продажи.',
            'В результате исчезает проблема «последнего товара», отмен становится меньше, а рейтинг на маркетплейсах сохраняется.',
          ],
        },
        {
          h2: 'Порядок с заказами из Instagram и Telegram',
          paragraphs: [
            'Заказы из Instagram и Telegram принимаем в структурированном виде через Telegram-бота или интеграцию чатов: товар, размер, адрес и способ оплаты сразу попадают в систему.',
            'Оператор не переписывает сообщения, а только подтверждает — это сокращает время обработки и количество ошибок.',
          ],
        },
        {
          h2: 'Видеть реальную прибыль',
          paragraphs: [
            'Важна не выручка канала, а его прибыль. Система привязывает к заказам комиссии, доставку, возвраты и рекламные расходы и показывает реальную маржу каждого канала и товара.',
            'На этой основе вы по цифрам решаете, в какой канал вкладывать больше товара и бюджета.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит система для e-commerce?',
          a: 'Стоимость зависит от числа каналов и интеграций; обычно в рамках пакета «Бизнес». Точную смету даём после аудита.',
        },
        {
          q: 'С какими маркетплейсами интегрируетесь?',
          a: 'С теми, кто предоставляет API. TODO: подтвердить, с какими маркетплейсами интеграция готова.',
        },
        {
          q: 'Заказы из Instagram попадают автоматически?',
          a: 'В рамках возможностей официального API Instagram сообщения собираются в одно окно; для оформления заказа используется бот или форма.',
        },
        {
          q: 'Работаете с курьерскими службами?',
          a: 'Да, заказы автоматически передаются курьерским службам с API, для своих курьеров есть приложение.',
        },
        {
          q: 'Работает с 1С?',
          a: 'Да, товары, остатки и продажи обмениваются с 1С.',
        },
      ],
    },
    en: {
      slug: 'e-commerce',
      name: 'E-commerce',
      summary:
        'Sales on your website, Telegram, Instagram and marketplaces — one inventory and order system.',
      metaTitle: 'E-commerce and Online Sales Automation | ZOLVI',
      metaDescription:
        'A system for online sales: orders from your website, Telegram bot, Instagram and marketplaces in one place, plus inventory, delivery and payments.',
      h1: 'E-commerce: all your online sales in one system',
      lead: 'Online sales rarely come through one channel: orders arrive from your website, Telegram, Instagram and marketplaces. Run each channel separately and stock gets mixed up and orders get lost. ZOLVI connects every channel to one inventory, order and delivery system.',
      audience: [
        'Brands selling through Instagram and Telegram',
        'Sellers on several marketplaces',
        'Companies with their own online store',
        'Warehouses handling hundreds of orders a day',
      ],
      pains: [
        {
          title: 'The same item sold twice',
          text: 'The last unit sells on a marketplace and on Instagram at the same time — a cancelled order and an unhappy customer.',
        },
        {
          title: 'Orders copied by hand',
          text: 'Orders from DMs and Telegram are typed into a spreadsheet, and addresses and phone numbers get garbled.',
        },
        {
          title: 'No idea which channel is profitable',
          text: 'Once commissions, ads and delivery are counted, nobody knows which channel actually makes money.',
        },
      ],
      includes: [
        {
          title: 'Every channel in one place',
          text: 'Orders from the website, Telegram bot, Instagram and marketplaces in a single list.',
        },
        {
          title: 'One stock figure',
          text: 'When an item sells, stock updates automatically across every channel.',
        },
        {
          title: 'Picking and dispatch',
          text: 'Pick lists, barcode checks, labels and hand-off to courier services.',
        },
        {
          title: 'Payments and returns',
          text: 'Click, Payme, Uzum and cash, plus returns and exchanges.',
        },
        {
          title: 'Customer base',
          text: 'Purchase history from every channel on one customer card, with repeat-purchase offers.',
        },
        {
          title: 'Channel analytics',
          text: 'Margin per channel after commissions, advertising and delivery.',
        },
      ],
      sections: [
        {
          h2: 'Multichannel selling: one stock figure',
          paragraphs: [
            'The core rule of multichannel selling is one true stock figure. The system pushes stock to marketplaces and your own channels via API and updates it after every sale.',
            'The “last unit” problem disappears, cancellations drop and your marketplace ratings stay intact.',
          ],
        },
        {
          h2: 'Bringing order to Instagram and Telegram sales',
          paragraphs: [
            'We capture Instagram and Telegram orders in a structured way through a Telegram bot or chat integration: product, size, address and payment method go straight into the system.',
            'Operators confirm instead of retyping messages, which shortens handling time and cuts errors.',
          ],
        },
        {
          h2: 'Seeing real profit',
          paragraphs: [
            'What matters is a channel’s profit, not its revenue. The system attaches commissions, delivery, returns and ad spend to orders and shows the true margin of every channel and product.',
            'That lets you decide with numbers where to put more stock and budget.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does an e-commerce system cost?',
          a: 'It depends on the number of channels and integrations; usually within the Business package. We give an exact estimate after the audit.',
        },
        {
          q: 'Which marketplaces do you integrate with?',
          a: 'Those that offer an API. TODO: confirm which marketplace integrations are ready.',
        },
        {
          q: 'Do Instagram orders arrive automatically?',
          a: 'Within the limits of Instagram’s official API, messages are collected in one inbox; a bot or form is used to place the order.',
        },
        {
          q: 'Do you work with courier services?',
          a: 'Yes, orders go automatically to couriers that have an API, and there is an app for your own couriers.',
        },
        {
          q: 'Does it work with 1C?',
          a: 'Yes, products, stock and sales data are exchanged with 1C.',
        },
      ],
    },
  },
}

export default industry
