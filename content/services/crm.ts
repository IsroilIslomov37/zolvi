import type { Service } from '@/lib/types'

const service: Service = {
  id: 'crm',
  kind: 'service',
  category: 'business',
  icon: 'crm',
  demo: 'crm',
  caseId: 'hospitality-platform',
  plan: 'business',
  relatedServices: ['automation', 'telegram-bot', 'api', 'ai-automation'],
  relatedIndustries: ['education', 'clinics', 'hotels', 'retail'],
  locales: {
    uz: {
      slug: 'crm-tizimi',
      name: 'CRM tizimi',
      summary:
        "Mijozlar, qo'ng'iroqlar va savdo bitta oynada. Biznesingizga moslab ishlab chiqilgan CRM.",
      metaTitle: 'CRM tizimi ishlab chiqish Toshkentda | ZOLVI',
      metaDescription:
        'Biznesingizga moslangan CRM tizimi: mijozlar bazasi, savdo voronkasi, telefoniya va Telegram integratsiyasi, hisobotlar. Toshkent. Bepul audit — 30 daqiqa.',
      h1: 'CRM tizimi — biznesingizga moslab ishlab chiqamiz',
      lead: "CRM tizimi mijozlar bilan ishlashni bitta joyga yig'adi: har bir qo'ng'iroq, Telegram xabari va bitim tarixi saqlanadi, menejerlar nima qilishi kerakligini biladi, rahbar esa savdoni real vaqtda ko'radi. ZOLVI CRM'ni tayyor shablon asosida emas, sizning savdo jarayoningiz asosida quradi — Toshkent va butun O'zbekiston bo'ylab.",
      audience: [
        'Murojaatlar Telegram, Instagram va telefon orasida tarqalib ketadigan kompaniyalar',
        "Menejeri ketganda mijozlar bazasini ham yo'qotadigan savdo bo'limlari",
        "O'quv markazlari, klinikalar, mehmonxonalar va xizmat ko'rsatuvchi bizneslar",
        "amoCRM yoki Bitrix24'dan «o'sib chiqqan» jamoalar",
      ],
      pains: [
        {
          title: "Murojaatlar yo'qoladi",
          text: "Qo'ng'iroqqa javob berilmadi, Instagram xabari o'qilmay qoldi — mijoz raqobatchiga ketdi. Hech kim buni bilmaydi ham.",
        },
        {
          title: 'Baza menejerning telefonida',
          text: 'Mijozlar tarixi shaxsiy telefon va daftarlarda. Xodim ketsa, bitimlar va kontaktlar u bilan birga ketadi.',
        },
        {
          title: "Rahbar savdoni ko'rmaydi",
          text: "Bu oy qancha sotildi, qaysi menejer yaxshi ishlayapti, qaysi kanal mijoz olib keladi — bularni bilish uchun kunlab Excel yig'iladi.",
        },
        {
          title: 'Tayyor CRM jarayonga mos emas',
          text: "Shablon CRM sizni o'z mantig'iga moslashga majbur qiladi, keraksiz maydonlar ko'p, kerakli funksiya esa yo'q, litsenziya narxi esa har yili oshadi.",
        },
      ],
      includes: [
        {
          title: 'Mijozlar bazasi va tarix',
          text: "Har bir mijoz kartochkasida qo'ng'iroqlar, xabarlar, buyurtmalar va to'lovlar. Dublikatlar avtomatik birlashtiriladi.",
        },
        {
          title: 'Savdo voronkasi',
          text: "Bosqichlar sizning jarayoningiz bo'yicha. Har bir bosqichda vazifalar, muddatlar va eslatmalar avtomatik yaratiladi.",
        },
        {
          title: 'Telefoniya va messenjerlar',
          text: "IP-telefoniya, Telegram, Instagram va sayt formalari — barcha murojaatlar CRM'ga avtomatik tushadi, qo'ng'iroqlar yozib olinadi.",
        },
        {
          title: 'Rollar va kirish huquqlari',
          text: "Menejer faqat o'z mijozlarini ko'radi, rahbar — hammasini. Eksport va o'chirish huquqlari nazorat ostida.",
        },
        {
          title: 'Hisobotlar va dashboard',
          text: "Savdo, konversiya, menejerlar samaradorligi va reklama kanallari bo'yicha hisobotlar. Har kuni ertalab Telegram'ga qisqa xulosa.",
        },
        {
          title: 'Integratsiyalar',
          text: "1C, Click, Payme, Uzum, SMS-xizmatlar, Google Sheets va boshqa dasturlar bilan ma'lumot almashinuvi.",
        },
      ],
      sections: [
        {
          h2: 'Maxsus CRM yoki tayyor CRM: qaysi biri sizga mos?',
          paragraphs: [
            "Tayyor CRM (amoCRM, Bitrix24) — tez boshlash uchun yaxshi variant: bir necha kunda ishga tushadi. Lekin jamoa o'sgani sari cheklovlar paydo bo'ladi: har bir foydalanuvchi uchun oylik to'lov, o'zbek tiliga moslashuvning cheklanganligi, mahalliy to'lov tizimlari bilan murakkab integratsiya va jarayonni shablonga moslashtirish.",
            "Maxsus CRM tizimi aynan sizning jarayoningizni raqamlashtiradi: o'quv markazi uchun guruhlar va to'lovlar, klinika uchun yozilish va shifokorlar jadvali, distribyutor uchun agentlar va marshrutlar. Litsenziya uchun har oy to'lov yo'q — kod va ma'lumotlar sizga tegishli.",
          ],
        },
        {
          h2: 'CRM qanday joriy etiladi',
          paragraphs: [
            "Avval bepul audit o'tkazamiz: murojaat qayerdan keladi, kim javob beradi, bitim qanday yopiladi. Keyin bosiladigan prototip chizamiz — jamoangiz CRM'ni kod yozilishidan oldin «ushlab ko'radi». Ishlab chiqish haftalik relizlar bilan boradi: 3–4-haftada birinchi modul ishlay boshlaydi.",
            "Ishga tushirishda eski ma'lumotlarni (Excel, telefon kontaktlari, eski CRM) ko'chiramiz va xodimlarni o'qitamiz. Birinchi hafta jamoangiz bilan yonma-yon ishlaymiz, keyin qo'llab-quvvatlash va yangi funksiyalarni qo'shishni davom ettiramiz.",
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: 'CRM tizimi narxi qancha?',
          a: "Narx modullar soni, integratsiyalar va foydalanuvchilar soniga bog'liq. «Biznes» paketining boshlang'ich narxi «Narxlar» sahifasida ko'rsatilgan; aniq smetani bepul auditdan keyin modullar bo'yicha beramiz.",
        },
        {
          q: 'CRM qancha vaqtda ishga tushadi?',
          a: "Odatda 6–10 hafta. Birinchi ishlaydigan modul — masalan, murojaatlar va mijozlar bazasi — 3–4-haftada ishga tushadi, qolganlari haftalik relizlar bilan qo'shiladi.",
        },
        {
          q: "amoCRM yoki Bitrix24'dan ma'lumotlarni ko'chirsa bo'ladimi?",
          a: "Ha. Mijozlar, bitimlar, izohlar va fayllarni eksport qilib, yangi tizimga ko'chiramiz. Ko'chirish paytida dublikatlar tozalanadi.",
        },
        {
          q: "CRM o'zbek tilida bo'ladimi?",
          a: "Ha, interfeys o'zbek (lotin), rus va ingliz tillarida bo'lishi mumkin. Har bir xodim o'ziga qulay tilni tanlaydi.",
        },
        {
          q: 'Telefoniya va Telegram bilan ishlaydimi?',
          a: "Ha. IP-telefoniya qo'ng'iroqlari yozib olinadi va mijoz kartochkasiga bog'lanadi, Telegram-bot va Instagram xabarlari esa CRM'ga avtomatik tushadi.",
        },
        {
          q: "Mobil telefondan foydalansa bo'ladimi?",
          a: "Ha. CRM brauzerda ishlaydi va telefonga moslashgan; kerak bo'lsa, savdo agentlari uchun alohida mobil ilova ham qilamiz.",
        },
      ],
    },
    ru: {
      slug: 'razrabotka-crm',
      name: 'CRM-система',
      summary: 'Клиенты, звонки и продажи в одном окне. CRM, разработанная под ваш бизнес.',
      metaTitle: 'Разработка CRM-системы в Ташкенте | ZOLVI',
      metaDescription:
        'CRM под ваш бизнес: база клиентов, воронка продаж, интеграция с телефонией и Telegram, отчёты. Разработка CRM в Ташкенте. Бесплатный аудит — 30 минут.',
      h1: 'Разработка CRM-системы под ваш бизнес',
      lead: 'CRM-система собирает работу с клиентами в одном месте: история каждого звонка, сообщения в Telegram и сделки сохраняется, менеджеры знают, что делать дальше, а руководитель видит продажи в реальном времени. ZOLVI разрабатывает CRM не на шаблоне, а по вашему процессу продаж — в Ташкенте и по всему Узбекистану.',
      audience: [
        'Компании, у которых обращения разбросаны между Telegram, Instagram и телефоном',
        'Отделы продаж, которые теряют базу клиентов вместе с ушедшим менеджером',
        'Учебные центры, клиники, гостиницы и сервисный бизнес',
        'Команды, которые «выросли» из amoCRM или Bitrix24',
      ],
      pains: [
        {
          title: 'Обращения теряются',
          text: 'На звонок не ответили, сообщение в Instagram не прочитали — клиент ушёл к конкуренту. И никто об этом даже не узнал.',
        },
        {
          title: 'База — в телефоне менеджера',
          text: 'История клиентов хранится в личных телефонах и блокнотах. Уходит сотрудник — уходят его сделки и контакты.',
        },
        {
          title: 'Руководитель не видит продажи',
          text: 'Сколько продали за месяц, кто из менеджеров работает лучше, какой канал приводит клиентов — чтобы это узнать, днями собирают Excel.',
        },
        {
          title: 'Готовая CRM не подходит процессу',
          text: 'Шаблонная CRM заставляет подстраиваться под её логику: лишних полей много, нужной функции нет, а стоимость лицензий растёт каждый год.',
        },
      ],
      includes: [
        {
          title: 'База клиентов и история',
          text: 'В карточке клиента — звонки, сообщения, заказы и оплаты. Дубликаты объединяются автоматически.',
        },
        {
          title: 'Воронка продаж',
          text: 'Этапы — по вашему процессу. На каждом этапе автоматически создаются задачи, сроки и напоминания.',
        },
        {
          title: 'Телефония и мессенджеры',
          text: 'IP-телефония, Telegram, Instagram и формы сайта — все обращения попадают в CRM автоматически, звонки записываются.',
        },
        {
          title: 'Роли и права доступа',
          text: 'Менеджер видит только своих клиентов, руководитель — всех. Экспорт и удаление под контролем.',
        },
        {
          title: 'Отчёты и дашборд',
          text: 'Продажи, конверсия, эффективность менеджеров и рекламных каналов. Каждое утро — короткая сводка в Telegram.',
        },
        {
          title: 'Интеграции',
          text: 'Обмен данными с 1С, Click, Payme, Uzum, SMS-сервисами, Google Sheets и другими программами.',
        },
      ],
      sections: [
        {
          h2: 'Заказная CRM или готовая: что выбрать',
          paragraphs: [
            'Готовая CRM (amoCRM, Bitrix24) — хороший вариант для быстрого старта: запускается за несколько дней. Но с ростом команды появляются ограничения: ежемесячная оплата за каждого пользователя, ограниченная локализация на узбекский, сложная интеграция с местными платёжными системами и необходимость подгонять процесс под шаблон.',
            'Заказная CRM-система оцифровывает именно ваш процесс: группы и оплаты для учебного центра, запись и расписание врачей для клиники, агенты и маршруты для дистрибьютора. Никаких ежемесячных платежей за лицензии — код и данные принадлежат вам.',
          ],
        },
        {
          h2: 'Как проходит внедрение CRM',
          paragraphs: [
            'Сначала проводим бесплатный аудит: откуда приходят обращения, кто отвечает, как закрывается сделка. Затем рисуем кликабельный прототип — команда «трогает» CRM ещё до начала разработки. Разработка идёт еженедельными релизами: первый модуль начинает работать на 3–4-й неделе.',
            'При запуске переносим старые данные (Excel, контакты из телефонов, прежняя CRM) и обучаем сотрудников. Первую неделю работаем рядом с вашей командой, дальше продолжаем поддержку и добавляем новые функции.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит разработка CRM?',
          a: 'Стоимость зависит от числа модулей, интеграций и пользователей. Стартовая цена пакета «Бизнес» указана на странице «Цены»; точную смету по модулям даём после бесплатного аудита.',
        },
        {
          q: 'За какой срок запускается CRM?',
          a: 'Обычно 6–10 недель. Первый рабочий модуль — например, обращения и база клиентов — запускается на 3–4-й неделе, остальное добавляется еженедельными релизами.',
        },
        {
          q: 'Можно перенести данные из amoCRM или Bitrix24?',
          a: 'Да. Выгружаем клиентов, сделки, комментарии и файлы и переносим в новую систему, по пути очищая дубликаты.',
        },
        {
          q: 'Будет ли CRM на узбекском языке?',
          a: 'Да, интерфейс может быть на узбекском (латиница), русском и английском. Каждый сотрудник выбирает удобный язык.',
        },
        {
          q: 'CRM работает с телефонией и Telegram?',
          a: 'Да. Звонки IP-телефонии записываются и привязываются к карточке клиента, а сообщения из Telegram-бота и Instagram автоматически попадают в CRM.',
        },
        {
          q: 'Можно работать с телефона?',
          a: 'Да. CRM работает в браузере и адаптирована под телефон; при необходимости делаем отдельное мобильное приложение для торговых агентов.',
        },
      ],
    },
    en: {
      slug: 'crm-development',
      name: 'CRM system',
      summary: 'Customers, calls and sales in one window. A CRM built around your business.',
      metaTitle: 'Custom CRM Development in Tashkent | ZOLVI',
      metaDescription:
        'A CRM built around your business: customer base, sales pipeline, telephony and Telegram integration, reports. CRM development in Tashkent. Free 30-minute audit.',
      h1: 'Custom CRM development for your business',
      lead: 'A CRM system brings all customer work into one place: every call, Telegram message and deal is on record, managers know their next step, and the owner sees sales in real time. ZOLVI builds CRM systems around your actual sales process rather than a template — in Tashkent and across Uzbekistan.',
      audience: [
        'Companies whose requests are scattered across Telegram, Instagram and phone',
        'Sales teams that lose the customer base when a manager leaves',
        'Training centers, clinics, hotels and service businesses',
        'Teams that have outgrown amoCRM or Bitrix24',
      ],
      pains: [
        {
          title: 'Requests get lost',
          text: 'A call goes unanswered, an Instagram message stays unread, and the customer goes to a competitor — and nobody even notices.',
        },
        {
          title: "The customer base lives in a manager's phone",
          text: 'Customer history sits in personal phones and notebooks. When an employee leaves, their deals and contacts leave too.',
        },
        {
          title: "The owner can't see sales",
          text: 'How much was sold this month, which manager performs best, which channel brings customers — answering that takes days of Excel.',
        },
        {
          title: "Off-the-shelf CRM doesn't fit",
          text: 'A template CRM forces you into its logic: too many useless fields, the one feature you need is missing, and license fees grow every year.',
        },
      ],
      includes: [
        {
          title: 'Customer base and history',
          text: 'Each customer card shows calls, messages, orders and payments. Duplicates are merged automatically.',
        },
        {
          title: 'Sales pipeline',
          text: 'Stages follow your process. Tasks, deadlines and reminders are created automatically at every stage.',
        },
        {
          title: 'Telephony and messengers',
          text: 'IP telephony, Telegram, Instagram and website forms — every request lands in the CRM automatically and calls are recorded.',
        },
        {
          title: 'Roles and permissions',
          text: 'Managers see only their customers; the owner sees everything. Export and deletion are controlled.',
        },
        {
          title: 'Reports and dashboard',
          text: 'Sales, conversion, manager performance and ad channels. A short summary arrives in Telegram every morning.',
        },
        {
          title: 'Integrations',
          text: 'Data exchange with 1C, Click, Payme, Uzum, SMS services, Google Sheets and other software.',
        },
      ],
      sections: [
        {
          h2: 'Custom CRM or off-the-shelf: which fits you?',
          paragraphs: [
            'An off-the-shelf CRM such as amoCRM or Bitrix24 is a good way to start fast — it is running within days. As the team grows, limits appear: a monthly fee per user, limited Uzbek localization, awkward integration with local payment systems, and processes bent to fit a template.',
            'A custom CRM digitizes exactly your process: groups and payments for a training center, appointments and doctor schedules for a clinic, agents and routes for a distributor. No monthly license fees — the code and data are yours.',
          ],
        },
        {
          h2: 'How CRM implementation works',
          paragraphs: [
            'We start with a free audit: where requests come from, who answers them, how a deal closes. Then we draw a clickable prototype so your team can try the CRM before any code is written. Development runs in weekly releases, and the first module goes live in week 3–4.',
            'At launch we migrate old data (spreadsheets, phone contacts, a previous CRM) and train your staff. For the first week we work side by side with your team, then continue with support and new features.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does CRM development cost?',
          a: 'It depends on the number of modules, integrations and users. The starting price of the Business package is on the Pricing page; we give an exact per-module estimate after the free audit.',
        },
        {
          q: 'How long until the CRM is live?',
          a: 'Usually 6–10 weeks. The first working module — for example, requests and the customer base — goes live in week 3–4, the rest arrives in weekly releases.',
        },
        {
          q: 'Can you migrate data from amoCRM or Bitrix24?',
          a: 'Yes. We export customers, deals, notes and files and move them into the new system, cleaning duplicates along the way.',
        },
        {
          q: 'Will the CRM be in Uzbek?',
          a: 'Yes. The interface can be in Uzbek (Latin), Russian and English, and every employee picks the language they prefer.',
        },
        {
          q: 'Does it work with telephony and Telegram?',
          a: 'Yes. IP telephony calls are recorded and linked to the customer card, and messages from the Telegram bot and Instagram arrive in the CRM automatically.',
        },
        {
          q: 'Can we use it on a phone?',
          a: 'Yes. The CRM runs in the browser and is mobile-friendly; if needed we also build a dedicated mobile app for sales agents.',
        },
      ],
    },
  },
}

export default service
