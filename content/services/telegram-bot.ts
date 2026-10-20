import type { Service } from '@/lib/types'

const service: Service = {
  id: 'telegram-bot',
  kind: 'service',
  category: 'products',
  icon: 'bot',
  demo: 'telegram-bot',
  caseId: 'kitchen-operations',
  plan: 'start',
  relatedServices: ['crm', 'ai-automation', 'ecommerce', 'api'],
  relatedIndustries: ['restaurants', 'education', 'e-commerce', 'clinics'],
  locales: {
    uz: {
      slug: 'telegram-bot-yaratish',
      name: 'Telegram-bot yaratish',
      summary:
        "Buyurtma, bron, to'lov va mijozlarni qo'llab-quvvatlash — Telegram ichida, CRM bilan bog'langan holda.",
      metaTitle: 'Telegram bot yaratish Toshkentda — buyurtma | ZOLVI',
      metaDescription:
        "Biznes uchun Telegram bot yaratish: buyurtmalar, bron, Click/Payme to'lovlari, CRM va 1C integratsiyasi, admin panel. 2–4 haftada. Toshkent.",
      h1: 'Biznes uchun Telegram-bot yaratish',
      lead: "O'zbekistonda mijozlaringizning aksariyati har kuni Telegram'dan foydalanadi — demak, buyurtma, bron va savollar uchun eng qulay kanal ham shu. ZOLVI Telegram-botni oddiy «avtojavob» sifatida emas, biznes tizimining bir qismi sifatida yaratadi: bot CRM, ombor va to'lov tizimlari bilan bog'langan bo'ladi.",
      audience: [
        "Yetkazib berish bilan ishlaydigan restoran, kafe va do'konlar",
        "Yozilish va to'lovlarni avtomatlashtirmoqchi bo'lgan o'quv markazlari va klinikalar",
        "Xodimlar uchun ichki bot kerak bo'lgan kompaniyalar: hisobotlar, arizalar, vazifalar",
        "Telegram-kanali bor va obunachilarni mijozga aylantirmoqchi bo'lgan bizneslar",
      ],
      pains: [
        {
          title: "Buyurtmalar chatda yo'qoladi",
          text: "Menejer Telegram'da yuzlab xabarga javob beradi, buyurtmalar daftarga yoziladi va ba'zilari unutiladi.",
        },
        {
          title: "Bir xil savollar kun bo'yi",
          text: '«Narxi qancha?», «Qachon ochiqsiz?», «Buyurtmam qayerda?» — xodimlar vaqtining katta qismi shunga ketadi.',
        },
        {
          title: "Bot bor, lekin hech narsaga bog'lanmagan",
          text: "Konstruktorda yasalgan bot buyurtmani qabul qiladi, lekin uni baribir kimdir qo'lda tizimga ko'chirishi kerak.",
        },
      ],
      includes: [
        {
          title: 'Katalog va buyurtma',
          text: 'Mahsulotlar, kategoriyalar, savatcha, yetkazib berish manzili va vaqtini tanlash — qulay tugmalar bilan.',
        },
        {
          title: "Onlayn to'lov",
          text: "Click, Payme va Uzum orqali to'lov botning o'zida. To'lov holati avtomatik tekshiriladi.",
        },
        {
          title: 'Bron va yozilish',
          text: "Stol, xona yoki mutaxassisga yozilish, bo'sh vaqtlar real vaqtda, eslatmalar avtomatik.",
        },
        {
          title: 'Admin panel',
          text: 'Buyurtmalar, mijozlar, mahsulotlar va xabar tarqatish — brauzerdagi qulay panelda.',
        },
        {
          title: 'CRM va 1C bilan integratsiya',
          text: "Har bir buyurtma va murojaat CRM'ga tushadi, qoldiqlar va narxlar 1C yoki ERP'dan olinadi.",
        },
        {
          title: 'Ommaviy xabarlar va statistika',
          text: 'Aksiyalar haqida segmentlangan xabarlar, konversiya va buyurtmalar statistikasi.',
        },
      ],
      sections: [
        {
          h2: 'Konstruktor bot yoki maxsus bot',
          paragraphs: [
            "Konstruktorlar oddiy savol-javob uchun yaxshi. Lekin to'lov, ombordagi qoldiq, yetkazib berish zonalari, CRM bilan sinxronizatsiya kerak bo'lsa, ular cheklanib qoladi va oylik to'lovlar ham oshib boradi.",
            "Maxsus Telegram-bot sizning jarayoningizga yoziladi: menyu tuzilmasi, to'lov shartlari, chegirma qoidalari va hisobotlar aynan sizga kerak bo'lgandek ishlaydi. Kod va ma'lumotlar sizga tegishli.",
          ],
        },
        {
          h2: 'Bot qanday yaratiladi',
          paragraphs: [
            "Avval botning ssenariysini — mijoz qaysi tugmani bosadi va nima oladi — chizamiz va Telegram'da sinab ko'rish uchun prototip beramiz. Keyin admin panel va integratsiyalar bilan to'liq botni 2–4 haftada ishga tushiramiz.",
            "Ishga tushgandan keyin statistikaga qarab ssenariyni yaxshilaymiz: mijozlar qayerda to'xtab qolayotganini ko'rib, o'sha joyni soddalashtiramiz.",
          ],
        },
        {
          h2: "Telegram-bot narxi nimaga bog'liq",
          paragraphs: [
            "Bot narxini funksiyalar belgilaydi: oddiy katalog va ariza qabul qilish — eng arzon variant; onlayn to'lov, yetkazib berish zonalari va bron tizimi qo'shilsa narx oshadi; CRM, 1C yoki ERP bilan integratsiya alohida baholanadi.",
            "Shuningdek, admin panel imkoniyatlari, tillar soni va ommaviy xabarlar segmentatsiyasi ham ta'sir qiladi. Biz avval minimal ishlaydigan versiyani ishga tushirishni, keyin statistikaga qarab kengaytirishni tavsiya qilamiz.",
          ],
        },
      ],
      timeline: '2–4 hafta',
      faq: [
        {
          q: 'Telegram-bot yaratish narxi qancha?',
          a: "Oddiy bot «Start» paketiga kiradi — boshlang'ich narx «Narxlar» sahifasida. To'lovlar, CRM va 1C integratsiyasi qo'shilsa, narx funksiyalarga qarab aniqlanadi.",
        },
        {
          q: "Bot qancha vaqtda tayyor bo'ladi?",
          a: "Odatda 2–4 hafta. Birinchi hafta oxirida ssenariy prototipini Telegram'da sinab ko'rasiz.",
        },
        {
          q: "Click va Payme orqali to'lov qilsa bo'ladimi?",
          a: "Ha. Click, Payme va Uzum orqali to'lovni ulaymiz; buning uchun ushbu tizimlarda merchant sifatida ro'yxatdan o'tgan bo'lishingiz kerak — bunga ham yordam beramiz.",
        },
        {
          q: "Bot o'zbek va rus tillarida ishlaydimi?",
          a: "Ha, foydalanuvchi tilni o'zi tanlaydi. Kerak bo'lsa, ingliz tili ham qo'shiladi.",
        },
        {
          q: "Botni keyin o'zimiz o'zgartira olamizmi?",
          a: "Menyu, narxlar, matnlar va xabar tarqatish admin panel orqali o'zgartiriladi — dasturchisiz.",
        },
      ],
    },
    ru: {
      slug: 'razrabotka-telegram-bota',
      name: 'Разработка Telegram-бота',
      summary: 'Заказы, брони, оплата и поддержка клиентов — внутри Telegram и в связке с CRM.',
      metaTitle: 'Разработка Telegram-бота для бизнеса | ZOLVI',
      metaDescription:
        'Создание Telegram-бота для бизнеса: заказы, брони, оплата через Click/Payme, интеграция с CRM и 1С, админ-панель. За 2–4 недели. Ташкент.',
      h1: 'Разработка Telegram-бота для бизнеса',
      lead: 'Большинство ваших клиентов в Узбекистане каждый день пользуются Telegram — значит, это и самый удобный канал для заказов, броней и вопросов. ZOLVI создаёт Telegram-бота не как «автоответчик», а как часть бизнес-системы: бот связан с CRM, складом и платёжными системами.',
      audience: [
        'Рестораны, кафе и магазины с доставкой',
        'Учебные центры и клиники, которым нужна автоматическая запись и оплата',
        'Компании, которым нужен внутренний бот для сотрудников: отчёты, заявки, задачи',
        'Бизнес с Telegram-каналом, который хочет превращать подписчиков в клиентов',
      ],
      pains: [
        {
          title: 'Заказы теряются в чате',
          text: 'Менеджер отвечает на сотни сообщений в Telegram, заказы записываются в блокнот, а часть забывается.',
        },
        {
          title: 'Одни и те же вопросы весь день',
          text: '«Сколько стоит?», «Когда вы открыты?», «Где мой заказ?» — на это уходит большая часть времени сотрудников.',
        },
        {
          title: 'Бот есть, но ни с чем не связан',
          text: 'Бот из конструктора принимает заказ, но кто-то всё равно переносит его в систему вручную.',
        },
      ],
      includes: [
        {
          title: 'Каталог и заказ',
          text: 'Товары, категории, корзина, выбор адреса и времени доставки — на удобных кнопках.',
        },
        {
          title: 'Онлайн-оплата',
          text: 'Оплата через Click, Payme и Uzum прямо в боте. Статус оплаты проверяется автоматически.',
        },
        {
          title: 'Бронь и запись',
          text: 'Бронь стола, номера или запись к специалисту, свободные слоты в реальном времени, напоминания автоматически.',
        },
        {
          title: 'Админ-панель',
          text: 'Заказы, клиенты, товары и рассылки — в удобной панели в браузере.',
        },
        {
          title: 'Интеграция с CRM и 1С',
          text: 'Каждый заказ и обращение попадают в CRM, остатки и цены берутся из 1С или ERP.',
        },
        {
          title: 'Рассылки и статистика',
          text: 'Сегментированные рассылки об акциях, статистика конверсии и заказов.',
        },
      ],
      sections: [
        {
          h2: 'Бот из конструктора или заказной бот',
          paragraphs: [
            'Конструкторы хороши для простых вопросов и ответов. Но если нужны оплата, остатки на складе, зоны доставки, синхронизация с CRM — их возможностей не хватает, а ежемесячные платежи растут.',
            'Заказной Telegram-бот пишется под ваш процесс: структура меню, условия оплаты, правила скидок и отчёты работают ровно так, как нужно вам. Код и данные принадлежат вам.',
          ],
        },
        {
          h2: 'Как создаётся бот',
          paragraphs: [
            'Сначала рисуем сценарий бота — какую кнопку нажимает клиент и что получает — и даём прототип, который можно попробовать в Telegram. Затем за 2–4 недели запускаем полноценного бота с админ-панелью и интеграциями.',
            'После запуска улучшаем сценарий по статистике: смотрим, где клиенты «застревают», и упрощаем этот шаг.',
          ],
        },
        {
          h2: 'От чего зависит стоимость Telegram-бота',
          paragraphs: [
            'Стоимость бота определяют функции: простой каталог и приём заявок — самый недорогой вариант; онлайн-оплата, зоны доставки и система броней увеличивают цену; интеграция с CRM, 1С или ERP оценивается отдельно.',
            'Также влияют возможности админ-панели, число языков и сегментация рассылок. Мы советуем сначала запустить минимальную рабочую версию, а затем расширять её по статистике.',
          ],
        },
      ],
      timeline: '2–4 недели',
      faq: [
        {
          q: 'Сколько стоит разработка Telegram-бота?',
          a: 'Простой бот входит в пакет «Старт» — стартовая цена на странице «Цены». С оплатой, интеграцией с CRM и 1С стоимость определяется по функциям.',
        },
        {
          q: 'За какой срок бот будет готов?',
          a: 'Обычно 2–4 недели. В конце первой недели вы пробуете прототип сценария в Telegram.',
        },
        {
          q: 'Можно принимать оплату через Click и Payme?',
          a: 'Да. Подключаем оплату через Click, Payme и Uzum; для этого нужна регистрация мерчанта в этих системах — с ней тоже поможем.',
        },
        {
          q: 'Бот будет на узбекском и русском?',
          a: 'Да, пользователь сам выбирает язык. При необходимости добавим английский.',
        },
        {
          q: 'Сможем потом менять бота сами?',
          a: 'Меню, цены, тексты и рассылки меняются через админ-панель — без программиста.',
        },
      ],
    },
    en: {
      slug: 'telegram-bot-development',
      name: 'Telegram bot development',
      summary:
        'Orders, bookings, payments and customer support inside Telegram, connected to your CRM.',
      metaTitle: 'Telegram Bot Development for Business | ZOLVI',
      metaDescription:
        'Telegram bots for business: orders, bookings, Click/Payme payments, CRM and 1C integration, admin panel. Ready in 2–4 weeks. Tashkent, Uzbekistan.',
      h1: 'Telegram bot development for business',
      lead: 'Most of your customers in Uzbekistan use Telegram every day, which makes it the most convenient channel for orders, bookings and questions. ZOLVI builds a Telegram bot not as an auto-responder but as part of your business system, connected to the CRM, inventory and payment systems.',
      audience: [
        'Restaurants, cafes and shops that deliver',
        'Training centers and clinics that want automatic appointments and payments',
        'Companies needing an internal bot for staff: reports, requests, tasks',
        'Businesses with a Telegram channel that want to turn subscribers into customers',
      ],
      pains: [
        {
          title: 'Orders get lost in the chat',
          text: 'A manager answers hundreds of Telegram messages, orders go into a notebook and some are forgotten.',
        },
        {
          title: 'The same questions all day',
          text: '“How much is it?”, “When are you open?”, “Where is my order?” — this eats most of your staff’s time.',
        },
        {
          title: 'A bot that is connected to nothing',
          text: 'A no-code bot takes the order, but somebody still has to copy it into the system by hand.',
        },
      ],
      includes: [
        {
          title: 'Catalog and ordering',
          text: 'Products, categories, cart, delivery address and time slot — all with convenient buttons.',
        },
        {
          title: 'Online payment',
          text: 'Payment via Click, Payme and Uzum right in the bot, with payment status checked automatically.',
        },
        {
          title: 'Bookings and appointments',
          text: 'Book a table, a room or a specialist, with real-time availability and automatic reminders.',
        },
        {
          title: 'Admin panel',
          text: 'Orders, customers, products and broadcasts in a convenient browser panel.',
        },
        {
          title: 'CRM and 1C integration',
          text: 'Every order and request lands in the CRM; stock and prices come from 1C or your ERP.',
        },
        {
          title: 'Broadcasts and analytics',
          text: 'Segmented promo broadcasts plus conversion and order statistics.',
        },
      ],
      sections: [
        {
          h2: 'No-code bot or custom bot',
          paragraphs: [
            'No-code builders are fine for simple Q&A. But once you need payments, stock levels, delivery zones and CRM sync, they hit their limits — and monthly fees keep growing.',
            'A custom Telegram bot is written for your process: menu structure, payment terms, discount rules and reports work exactly the way you need. The code and data are yours.',
          ],
        },
        {
          h2: 'How the bot is built',
          paragraphs: [
            'First we draw the bot’s flow — which button the customer presses and what they get — and give you a prototype to try in Telegram. Then we launch the full bot with an admin panel and integrations in 2–4 weeks.',
            'After launch we improve the flow based on analytics: we see where customers drop off and simplify that step.',
          ],
        },
        {
          h2: 'What drives the cost of a Telegram bot',
          paragraphs: [
            'Features drive the price: a simple catalog with lead capture is the most affordable option; online payment, delivery zones and a booking system add to it; CRM, 1C or ERP integration is estimated separately.',
            'Admin panel capabilities, the number of languages and broadcast segmentation also matter. We recommend launching a minimal working version first and expanding it based on the analytics.',
          ],
        },
      ],
      timeline: '2–4 weeks',
      faq: [
        {
          q: 'How much does a Telegram bot cost?',
          a: 'A simple bot is part of the Start package — see the starting price on the Pricing page. With payments and CRM or 1C integration, the price depends on the features.',
        },
        {
          q: 'How long until the bot is ready?',
          a: 'Usually 2–4 weeks. At the end of the first week you try a prototype of the flow in Telegram.',
        },
        {
          q: 'Can it take payments via Click and Payme?',
          a: 'Yes. We connect Click, Payme and Uzum; you need a merchant account with these providers, and we help with that too.',
        },
        {
          q: 'Will the bot work in Uzbek and Russian?',
          a: 'Yes, users choose their language. English can be added if needed.',
        },
        {
          q: 'Can we change the bot ourselves later?',
          a: 'Menus, prices, texts and broadcasts are edited in the admin panel — no developer needed.',
        },
      ],
    },
  },
}

export default service
