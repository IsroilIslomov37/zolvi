import type { Comparison } from '@/lib/types'

/**
 * Facts about amoCRM are kept general on purpose (pricing model, not prices).
 * TODO: check current amoCRM/Kommo plans before quoting any numbers.
 */
const comparison: Comparison = {
  id: 'amocrm-vs-custom-crm',
  relatedServices: ['crm', 'automation', 'api', 'telegram-bot'],
  locales: {
    uz: {
      slug: 'amocrm-yoki-maxsus-crm',
      name: 'amoCRM yoki maxsus CRM',
      metaTitle: 'amoCRM yoki maxsus CRM: qaysi biri yaxshi? | ZOLVI',
      metaDescription:
        "amoCRM va maxsus CRM'ni solishtiramiz: narx modeli, joriy etish muddati, moslashuvchanlik, integratsiyalar va ma'lumotlarga egalik. Qaysi biri sizga mos?",
      h1: 'amoCRM yoki maxsus CRM: qaysi biri yaxshi?',
      lead: "amoCRM — O'zbekistonda eng mashhur tayyor CRM'lardan biri. Maxsus CRM esa aynan sizning jarayonlaringiz uchun yoziladi. Ikkalasi ham yaxshi, lekin turli vaziyatlar uchun. Quyida halol taqqoslash va qaysi holatda nimani tanlash kerakligi.",
      optionA: 'amoCRM',
      optionB: 'Maxsus CRM',
      rows: [
        {
          criterion: 'Ishga tushirish',
          a: "Bir necha kun — ro'yxatdan o'tish va sozlash",
          b: '6–10 hafta: audit, prototip, ishlab chiqish',
        },
        {
          criterion: 'Narx modeli',
          a: 'Har bir foydalanuvchi uchun oylik obuna',
          b: "Bir martalik ishlab chiqish + ixtiyoriy qo'llab-quvvatlash",
        },
        {
          criterion: 'Jarayonlarga moslashuv',
          a: 'Voronka va maydonlar sozlanadi, mantiq platforma doirasida',
          b: 'Har qanday jarayon, maydon, hisobot va avtomatlashtirish',
        },
        {
          criterion: 'Sohaviy funksiyalar',
          a: 'Umumiy savdo; maxsus narsalar vidjetlar orqali',
          b: 'Guruhlar, jadvallar, ombor, texnik kartalar — kerakli hamma narsa',
        },
        {
          criterion: 'Mahalliy integratsiyalar',
          a: 'Marketpleys vidjetlari va API orqali',
          b: '1C, Click, Payme, Uzum, telefoniya — loyihaning bir qismi',
        },
        {
          criterion: "Ma'lumotlar va kod",
          a: "Ma'lumotlar platforma serverlarida, kod — yo'q",
          b: "Kod va ma'lumotlar sizniki, server joylashuvini tanlaysiz",
        },
        {
          criterion: "Foydalanuvchilar ko'payganda",
          a: "Xarajat foydalanuvchilar soniga mutanosib o'sadi",
          b: "Litsenziya to'lovi yo'q, faqat server xarajatlari",
        },
      ],
      chooseA: {
        title: "amoCRM qachon to'g'ri tanlov",
        points: [
          'Savdo jarayoni standart: lid → aloqa → taklif → bitim',
          'Jamoa kichik (bir necha menejer) va tez boshlash kerak',
          'Maxsus funksiyalar va murakkab integratsiyalar hozircha kerak emas',
          'Byudjet ishlab chiqish uchun emas, oylik obuna uchun mos',
        ],
      },
      chooseB: {
        title: "Maxsus CRM qachon to'g'ri tanlov",
        points: [
          "Jarayon o'ziga xos: guruhlar, jadval, ombor, texniklar, filiallar",
          "Foydalanuvchilar ko'p va obuna xarajati yildan-yilga oshmoqda",
          "1C, to'lov tizimlari va o'z dasturlaringiz bilan chuqur integratsiya kerak",
          "Ma'lumotlar va kod kompaniyaga tegishli bo'lishi muhim",
        ],
      },
      sections: [
        {
          h2: 'Umumiy egalik xarajatini hisoblang',
          paragraphs: [
            "Tayyor CRM boshida arzon ko'rinadi, maxsus CRM esa qimmat. Ammo to'g'ri solishtirish uchun 3 yillik umumiy xarajatni hisoblash kerak: obuna × foydalanuvchilar × oylar, qo'shimcha vidjetlar va integratorga to'lovlar — maxsus CRM'ni ishlab chiqish va qo'llab-quvvatlashga qarshi.",
            "Ko'pincha 5–10 foydalanuvchida tayyor CRM foydaliroq, jamoa kattalashgani va jarayonlar murakkablashgani sari esa maxsus tizim o'zini oqlay boshlaydi. Bepul auditda bu hisob-kitobni sizning raqamlaringiz bilan qilamiz. TODO: amoCRM'ning joriy tariflarini tekshirib, misol hisob-kitob qo'shing.",
          ],
        },
        {
          h2: "Gibrid yo'l ham bor",
          paragraphs: [
            "Har doim ham «yoki-yoki» tanlash shart emas. amoCRM'da ishlashni davom ettirib, unga API orqali maxsus modul — masalan, ombor, to'lovlar yoki Telegram-bot — qo'shish mumkin.",
            "Keyinchalik, agar tayyor CRM cheklovlari kuchaysa, ma'lumotlarni maxsus tizimga ko'chirish oson bo'ladi, chunki jarayonlar allaqachon tartibga solingan.",
          ],
        },
      ],
      faq: [
        {
          q: "amoCRM'dan maxsus CRM'ga ma'lumotlarni ko'chirsa bo'ladimi?",
          a: "Ha, mijozlar, bitimlar, vazifalar, izohlar va fayllar eksport qilinib, yangi tizimga ko'chiriladi.",
        },
        {
          q: 'Maxsus CRM qancha turadi?',
          a: "Narx modullar va integratsiyalarga bog'liq. «Narxlar» sahifasida boshlang'ich narxlar bor, aniq smeta auditdan keyin.",
        },
        {
          q: "amoCRM'ni sozlashda yordam berasizmi?",
          a: "Ha. Agar auditda tayyor CRM sizga yetarli ekani ma'lum bo'lsa, uni sozlash va integratsiyalarni ulashda yordam beramiz.",
        },
        {
          q: 'Maxsus CRM ishlab chiqish xavfli emasmi?',
          a: 'Xavfni haftalik relizlar va bosqichma-bosqich ishga tushirish kamaytiradi: birinchi modul 3–4-haftada ishlaydi, kod esa sizga topshiriladi.',
        },
        {
          q: "Qaysi biri O'zbekiston uchun qulayroq?",
          a: "Bu jarayonlaringizga bog'liq. Mahalliy to'lov tizimlari, 1C va o'zbek tilidagi interfeys muhim bo'lsa, maxsus CRM afzalroq bo'lishi mumkin.",
        },
      ],
    },
    ru: {
      slug: 'amocrm-ili-zakaznaya-crm',
      name: 'amoCRM или заказная CRM',
      metaTitle: 'amoCRM или заказная CRM: что выбрать? | ZOLVI',
      metaDescription:
        'Сравниваем amoCRM и заказную CRM: модель оплаты, срок внедрения, гибкость, интеграции и владение данными. Что подойдёт вашему бизнесу?',
      h1: 'amoCRM или заказная CRM: что лучше?',
      lead: 'amoCRM — одна из самых популярных готовых CRM в Узбекистане. Заказная CRM пишется под ваши процессы. Обе хороши, но для разных ситуаций. Ниже — честное сравнение и когда что выбирать.',
      optionA: 'amoCRM',
      optionB: 'Заказная CRM',
      rows: [
        {
          criterion: 'Запуск',
          a: 'Несколько дней — регистрация и настройка',
          b: '6–10 недель: аудит, прототип, разработка',
        },
        {
          criterion: 'Модель оплаты',
          a: 'Ежемесячная подписка за каждого пользователя',
          b: 'Разовая разработка + поддержка по желанию',
        },
        {
          criterion: 'Гибкость под процессы',
          a: 'Настраиваются воронка и поля, логика — в рамках платформы',
          b: 'Любые процессы, поля, отчёты и автоматизации',
        },
        {
          criterion: 'Отраслевые функции',
          a: 'Общие продажи; особое — через виджеты',
          b: 'Группы, расписания, склад, техкарты — всё, что нужно',
        },
        {
          criterion: 'Местные интеграции',
          a: 'Через виджеты маркетплейса и API',
          b: '1С, Click, Payme, Uzum, телефония — часть проекта',
        },
        {
          criterion: 'Данные и код',
          a: 'Данные на серверах платформы, кода нет',
          b: 'Код и данные ваши, сервер выбираете вы',
        },
        {
          criterion: 'При росте числа пользователей',
          a: 'Расходы растут пропорционально числу пользователей',
          b: 'Нет платы за лицензии, только сервер',
        },
      ],
      chooseA: {
        title: 'Когда выбрать amoCRM',
        points: [
          'Стандартный процесс продаж: лид → контакт → предложение → сделка',
          'Небольшая команда (несколько менеджеров) и нужен быстрый старт',
          'Особые функции и сложные интеграции пока не нужны',
          'Бюджет рассчитан на подписку, а не на разработку',
        ],
      },
      chooseB: {
        title: 'Когда выбрать заказную CRM',
        points: [
          'Процесс особенный: группы, расписание, склад, техники, филиалы',
          'Пользователей много, и расходы на подписку растут из года в год',
          'Нужна глубокая интеграция с 1С, платёжными системами и своими программами',
          'Важно, чтобы данные и код принадлежали компании',
        ],
      },
      sections: [
        {
          h2: 'Посчитайте полную стоимость владения',
          paragraphs: [
            'Готовая CRM на старте кажется дешёвой, а заказная — дорогой. Но для честного сравнения нужно считать полную стоимость за 3 года: подписка × пользователи × месяцы, дополнительные виджеты и оплата интегратору — против разработки и поддержки заказной CRM.',
            'Часто при 5–10 пользователях готовая CRM выгоднее, а по мере роста команды и усложнения процессов окупается заказная система. На бесплатном аудите сделаем этот расчёт на ваших цифрах. TODO: проверить актуальные тарифы amoCRM и добавить пример расчёта.',
          ],
        },
        {
          h2: 'Есть и гибридный путь',
          paragraphs: [
            'Не всегда нужно выбирать «или-или». Можно продолжать работать в amoCRM и добавить к ней через API заказной модуль — например, склад, оплаты или Telegram-бота.',
            'Позже, если ограничения готовой CRM станут критичными, перенести данные в заказную систему будет проще, ведь процессы уже упорядочены.',
          ],
        },
      ],
      faq: [
        {
          q: 'Можно перенести данные из amoCRM в заказную CRM?',
          a: 'Да, клиенты, сделки, задачи, комментарии и файлы выгружаются и переносятся в новую систему.',
        },
        {
          q: 'Сколько стоит заказная CRM?',
          a: 'Стоимость зависит от модулей и интеграций. Стартовые цены — на странице «Цены», точная смета — после аудита.',
        },
        {
          q: 'Поможете настроить amoCRM?',
          a: 'Да. Если на аудите выяснится, что готовой CRM вам достаточно, поможем с настройкой и интеграциями.',
        },
        {
          q: 'Не рискованно ли разрабатывать CRM на заказ?',
          a: 'Риск снижают еженедельные релизы и поэтапный запуск: первый модуль работает на 3–4-й неделе, а код передаётся вам.',
        },
        {
          q: 'Что удобнее для Узбекистана?',
          a: 'Зависит от процессов. Если важны местные платёжные системы, 1С и интерфейс на узбекском, заказная CRM может оказаться удобнее.',
        },
      ],
    },
    en: {
      slug: 'amocrm-vs-custom-crm',
      name: 'amoCRM vs custom CRM',
      metaTitle: 'amoCRM vs Custom CRM: Which Is Better? | ZOLVI',
      metaDescription:
        'amoCRM vs a custom CRM: pricing model, time to launch, flexibility, integrations and data ownership. Which one fits your business?',
      h1: 'amoCRM or a custom CRM: which is better?',
      lead: 'amoCRM is one of the most popular off-the-shelf CRMs in Uzbekistan. A custom CRM is written for your processes. Both are good, for different situations. Here is an honest comparison and when to choose which.',
      optionA: 'amoCRM',
      optionB: 'Custom CRM',
      rows: [
        {
          criterion: 'Time to launch',
          a: 'A few days — sign up and configure',
          b: '6–10 weeks: audit, prototype, development',
        },
        {
          criterion: 'Pricing model',
          a: 'Monthly subscription per user',
          b: 'One-off development plus optional support',
        },
        {
          criterion: 'Fit to your processes',
          a: 'Configurable pipeline and fields; logic within the platform',
          b: 'Any process, field, report or automation',
        },
        {
          criterion: 'Industry features',
          a: 'General sales; special needs via widgets',
          b: 'Groups, schedules, inventory, recipes — whatever you need',
        },
        {
          criterion: 'Local integrations',
          a: 'Through marketplace widgets and the API',
          b: '1C, Click, Payme, Uzum, telephony — part of the project',
        },
        {
          criterion: 'Data and code',
          a: 'Data on the platform’s servers, no code',
          b: 'Your code and data; you choose the server',
        },
        {
          criterion: 'As users grow',
          a: 'Cost grows in proportion to users',
          b: 'No license fees, just server costs',
        },
      ],
      chooseA: {
        title: 'When amoCRM is the right choice',
        points: [
          'A standard sales process: lead → contact → proposal → deal',
          'A small team (a few managers) that needs to start fast',
          'No special features or complex integrations needed yet',
          'A budget suited to a subscription rather than development',
        ],
      },
      chooseB: {
        title: 'When a custom CRM is the right choice',
        points: [
          'A distinctive process: groups, schedules, inventory, technicians, branches',
          'Many users, and subscription costs keep rising year after year',
          'Deep integration with 1C, payment systems and your own software',
          'It matters that the company owns its data and code',
        ],
      },
      sections: [
        {
          h2: 'Calculate the total cost of ownership',
          paragraphs: [
            'An off-the-shelf CRM looks cheap at the start and a custom one looks expensive. A fair comparison counts the total cost over three years: subscription × users × months, extra widgets and integrator fees — versus building and supporting a custom CRM.',
            'With 5–10 users an off-the-shelf CRM is often cheaper; as the team grows and processes get more complex, a custom system starts paying back. We run this calculation on your numbers during the free audit. TODO: check current amoCRM plans and add a worked example.',
          ],
        },
        {
          h2: 'There is a hybrid route too',
          paragraphs: [
            'It does not have to be either-or. You can keep amoCRM and add a custom module through its API — for example inventory, payments or a Telegram bot.',
            'Later, if the limits of the off-the-shelf CRM start to bite, moving to a custom system is easier because the processes are already in order.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can data be moved from amoCRM to a custom CRM?',
          a: 'Yes, customers, deals, tasks, notes and files are exported and migrated into the new system.',
        },
        {
          q: 'How much does a custom CRM cost?',
          a: 'It depends on the modules and integrations. Starting prices are on the Pricing page; the exact estimate follows the audit.',
        },
        {
          q: 'Will you help us set up amoCRM?',
          a: 'Yes. If the audit shows an off-the-shelf CRM is enough, we help with configuration and integrations.',
        },
        {
          q: 'Is building a custom CRM risky?',
          a: 'Weekly releases and a staged rollout reduce the risk: the first module works in week 3–4, and the code is handed over to you.',
        },
        {
          q: 'Which is better for Uzbekistan?',
          a: 'It depends on your processes. If local payment systems, 1C and an Uzbek interface matter, a custom CRM may be the better fit.',
        },
      ],
    },
  },
}

export default comparison
