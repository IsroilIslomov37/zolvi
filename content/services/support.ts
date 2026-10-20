import type { Service } from '@/lib/types'

const service: Service = {
  id: 'support',
  kind: 'service',
  category: 'consulting',
  icon: 'support',
  demo: 'ai',
  plan: 'support',
  relatedServices: ['custom-software', 'crm', 'erp', 'saas'],
  relatedIndustries: ['retail', 'restaurants', 'clinics', 'manufacturing'],
  locales: {
    uz: {
      slug: 'texnik-qollab-quvvatlash',
      name: "Texnik qo'llab-quvvatlash",
      summary:
        'Ishlab turgan tizimingiz uchun monitoring, tuzatishlar va rivojlantirish — SLA bilan.',
      metaTitle: "Dasturlarni texnik qo'llab-quvvatlash SLA bilan | ZOLVI",
      metaDescription:
        "CRM, ERP, sayt va ilovalarni texnik qo'llab-quvvatlash: monitoring, zaxira nusxalar, SLA bilan tuzatishlar va har oy yangi funksiyalar. Toshkent.",
      h1: "Dasturiy ta'minotni texnik qo'llab-quvvatlash va rivojlantirish",
      lead: "Tizim ishga tushgani — yo'lning boshi xolos. Serverlar yangilanadi, biznes o'zgaradi, xodimlar yangi funksiyalarni so'raydi, ba'zan esa nimadir buziladi. ZOLVI ishlab turgan tizimingizni — biz yozganini ham, boshqa jamoa yozganini ham — monitoring, aniq javob muddatlari (SLA) va rejali rivojlantirish bilan qo'llab-quvvatlaydi.",
      audience: [
        'Tizimini yozgan dasturchi yoki jamoa bilan aloqasi uzilgan kompaniyalar',
        "Kritik tizimi (kassa, CRM, sayt) bir soat ham to'xtamasligi kerak bo'lgan bizneslar",
        "Shtatda dasturchi ushlab turish qimmat bo'lgan kompaniyalar",
        "Tizimini muntazam yangi funksiyalar bilan rivojlantirmoqchi bo'lgan jamoalar",
      ],
      pains: [
        {
          title: 'Nosozlik — va hech kim javob bermaydi',
          text: "Kassa yoki sayt to'xtadi, dasturchi telefonni olmaydi, har bir soat pul yo'qotishiga olib keladi.",
        },
        {
          title: 'Muammolarni mijozlar topadi',
          text: "Xato haqida birinchi bo'lib mijoz shikoyat qiladi — monitoring yo'q.",
        },
        {
          title: "Kichik o'zgarishlar oylab kutadi",
          text: "Yangi hisobot yoki maydon qo'shish kabi oddiy so'rovlar ham uzoq kutishga majbur.",
        },
      ],
      includes: [
        {
          title: 'Monitoring 24/7',
          text: "Server, ma'lumotlar bazasi va asosiy funksiyalar doimiy tekshiriladi; muammo haqida biz mijozdan oldin bilamiz.",
        },
        {
          title: "SLA bo'yicha tuzatishlar",
          text: 'Kritik, muhim va oddiy xatolar uchun aniq javob va tuzatish muddatlari. TODO: SLA muddatlarini tasdiqlang.',
        },
        {
          title: 'Zaxira nusxalar',
          text: 'Muntazam avtomatik zaxira nusxalar va ularni tiklashni vaqti-vaqti bilan tekshirish.',
        },
        {
          title: 'Yangilanishlar va xavfsizlik',
          text: "Kutubxonalar, server va xavfsizlik yangilanishlari rejali ravishda o'rnatiladi.",
        },
        {
          title: 'Rivojlantirish',
          text: 'Har oy kelishilgan soatlar doirasida yangi funksiyalar, hisobotlar va yaxshilanishlar.',
        },
        {
          title: 'Oylik hisobot',
          text: 'Nima qilindi, qancha vaqt sarflandi, tizim qanchalik barqaror ishladi — har oy shaffof hisobot.',
        },
      ],
      sections: [
        {
          h2: 'Boshqa jamoa yozgan tizimni ham olamiz',
          paragraphs: [
            "Ko'pincha bizga avvalgi dasturchi bilan aloqa uzilgan tizim bilan murojaat qilishadi. Bunday holatda avval texnik audit o'tkazamiz: kod, server, xavfsizlik va zaxira nusxalar holatini tekshiramiz va xatarlar ro'yxatini beramiz.",
            "Shundan keyin eng xavfli muammolarni birinchi navbatda tuzatamiz va tizimni barqaror holatga keltiramiz, keyin esa odatiy qo'llab-quvvatlashga o'tamiz.",
          ],
        },
        {
          h2: "Shtatdagi dasturchi yoki tashqi qo'llab-quvvatlash",
          paragraphs: [
            "Bitta shtatdagi dasturchi ta'tilga chiqishi, kasal bo'lishi yoki ketishi mumkin — va tizim yana «yetimsiz» qoladi. Tashqi jamoa esa bilimni hujjatlarda saqlaydi va har doim bir nechta mutaxassis bilan ishlaydi.",
            "Ko'p mijozlar uchun aralash variant optimal: kundalik ishlar uchun ichki mas'ul shaxs, murakkab vazifalar va kafolatlangan javob muddati uchun — biz.",
          ],
        },
        {
          h2: "Qo'llab-quvvatlash qanday tashkil etiladi",
          paragraphs: [
            "Murojaatlar bitta kanal orqali qabul qilinadi — Telegram-guruh yoki tiketlar tizimi — va har biriga muhimlik darajasi beriladi. Kritik nosozliklar darhol ko'rib chiqiladi, oddiy so'rovlar esa oylik reja bo'yicha bajariladi.",
            "Oy oxirida bajarilgan ishlar, sarflangan soatlar va tizim barqarorligi bo'yicha hisobot olasiz, keyingi oy uchun esa ustuvorliklarni birgalikda belgilaymiz.",
          ],
        },
      ],
      timeline: 'Oylik',
      faq: [
        {
          q: "Qo'llab-quvvatlash narxi qancha?",
          a: "Oylik abonent to'lovi tizim hajmi va SLA darajasiga bog'liq. «Qo'llab-quvvatlash» paketining boshlang'ich narxi «Narxlar» sahifasida.",
        },
        {
          q: "Siz yozmagan tizimni qo'llab-quvvatlaysizmi?",
          a: "Ha, avval texnik audit o'tkazamiz, keyin tizimni qabul qilib olamiz.",
        },
        {
          q: 'Kechasi va dam olish kunlari ham ishlaysizmi?',
          a: "Monitoring doimiy ishlaydi. Ish vaqtidan tashqari javob kritik nosozliklar uchun SLA'da kelishiladi. TODO: navbatchilik jadvalini tasdiqlang.",
        },
        {
          q: "Ishlatilmagan soatlar keyingi oyga o'tadimi?",
          a: 'TODO: ishlatilmagan soatlar siyosatini tasdiqlang.',
        },
        {
          q: 'Shartnomani qanday bekor qilish mumkin?',
          a: 'Shartnoma oylik asosda; bekor qilinganda barcha kirish huquqlari, kod va hujjatlar sizga topshiriladi.',
        },
      ],
    },
    ru: {
      slug: 'tehpodderzhka',
      name: 'Техническая поддержка',
      summary: 'Мониторинг, исправления и развитие работающей системы — по SLA.',
      metaTitle: 'Техническая поддержка программ по SLA | ZOLVI',
      metaDescription:
        'Техническая поддержка CRM, ERP, сайтов и приложений: мониторинг, резервные копии, исправления по SLA и новые функции каждый месяц. Ташкент.',
      h1: 'Техническая поддержка и развитие программного обеспечения',
      lead: 'Запуск системы — только начало пути. Серверы обновляются, бизнес меняется, сотрудники просят новые функции, а иногда что-то ломается. ZOLVI поддерживает вашу работающую систему — и написанную нами, и созданную другой командой — с мониторингом, понятными сроками реакции (SLA) и плановым развитием.',
      audience: [
        'Компании, потерявшие связь с разработчиком или командой своей системы',
        'Бизнес, у которого критичная система (касса, CRM, сайт) не может простаивать ни часа',
        'Компании, которым дорого держать программиста в штате',
        'Команды, которые хотят регулярно развивать систему новыми функциями',
      ],
      pains: [
        {
          title: 'Сбой — и никто не отвечает',
          text: 'Касса или сайт остановились, программист не берёт трубку, каждый час — потерянные деньги.',
        },
        {
          title: 'Проблемы находят клиенты',
          text: 'Первым об ошибке сообщает клиент с жалобой — мониторинга нет.',
        },
        {
          title: 'Мелкие доработки ждут месяцами',
          text: 'Даже простые просьбы вроде нового отчёта или поля ждут очень долго.',
        },
      ],
      includes: [
        {
          title: 'Мониторинг 24/7',
          text: 'Сервер, база данных и ключевые функции проверяются постоянно; о проблеме мы узнаём раньше клиента.',
        },
        {
          title: 'Исправления по SLA',
          text: 'Чёткие сроки реакции и исправления для критичных, важных и обычных ошибок. TODO: подтвердить сроки SLA.',
        },
        {
          title: 'Резервные копии',
          text: 'Регулярные автоматические бэкапы и периодическая проверка восстановления.',
        },
        {
          title: 'Обновления и безопасность',
          text: 'Плановая установка обновлений библиотек, сервера и безопасности.',
        },
        {
          title: 'Развитие',
          text: 'Каждый месяц в рамках согласованных часов — новые функции, отчёты и улучшения.',
        },
        {
          title: 'Ежемесячный отчёт',
          text: 'Что сделано, сколько времени потрачено, насколько стабильно работала система — прозрачный отчёт каждый месяц.',
        },
      ],
      sections: [
        {
          h2: 'Берём на поддержку и чужие системы',
          paragraphs: [
            'Часто к нам приходят с системой, связь с прежним разработчиком которой потеряна. Тогда сначала проводим технический аудит: проверяем код, сервер, безопасность и резервные копии и выдаём список рисков.',
            'Затем в первую очередь устраняем самые опасные проблемы, приводим систему в стабильное состояние и переходим к обычной поддержке.',
          ],
        },
        {
          h2: 'Штатный программист или внешняя поддержка',
          paragraphs: [
            'Единственный штатный программист может уйти в отпуск, заболеть или уволиться — и система снова останется «сиротой». Внешняя команда хранит знания в документации и всегда работает несколькими специалистами.',
            'Для многих клиентов оптимален смешанный вариант: внутренний ответственный для повседневных задач, а мы — для сложных задач и гарантированных сроков реакции.',
          ],
        },
        {
          h2: 'Как организована поддержка',
          paragraphs: [
            'Обращения принимаются через один канал — Telegram-группу или систему тикетов — и каждому присваивается приоритет. Критичные сбои разбираются немедленно, обычные запросы выполняются по месячному плану.',
            'В конце месяца вы получаете отчёт о выполненных работах, потраченных часах и стабильности системы, а приоритеты на следующий месяц определяем вместе.',
          ],
        },
      ],
      timeline: 'Ежемесячно',
      faq: [
        {
          q: 'Сколько стоит поддержка?',
          a: 'Ежемесячная абонентская плата зависит от объёма системы и уровня SLA. Стартовая цена пакета «Поддержка» — на странице «Цены».',
        },
        {
          q: 'Поддерживаете системы, которые писали не вы?',
          a: 'Да, сначала проводим технический аудит, затем принимаем систему на поддержку.',
        },
        {
          q: 'Работаете ночью и в выходные?',
          a: 'Мониторинг работает постоянно. Реакция вне рабочего времени для критичных сбоев согласуется в SLA. TODO: подтвердить график дежурств.',
        },
        {
          q: 'Переносятся ли неиспользованные часы?',
          a: 'TODO: подтвердить политику по неиспользованным часам.',
        },
        {
          q: 'Как расторгнуть договор?',
          a: 'Договор помесячный; при расторжении все доступы, код и документация передаются вам.',
        },
      ],
    },
    en: {
      slug: 'technical-support',
      name: 'Technical support',
      summary: 'Monitoring, fixes and ongoing development for your live system — under an SLA.',
      metaTitle: 'Software Technical Support with an SLA | ZOLVI',
      metaDescription:
        'Technical support for CRM, ERP, websites and apps: monitoring, backups, fixes under an SLA and new features every month. Tashkent, Uzbekistan.',
      h1: 'Software technical support and ongoing development',
      lead: 'Launching a system is just the start. Servers need updates, the business changes, staff ask for new features and sometimes things break. ZOLVI supports your live system — whether we built it or another team did — with monitoring, clear response times (an SLA) and planned development.',
      audience: [
        'Companies that have lost touch with the developer or team behind their system',
        'Businesses whose critical system (till, CRM, website) cannot be down for an hour',
        'Companies for which an in-house developer is too expensive',
        'Teams that want to keep growing their system with new features',
      ],
      pains: [
        {
          title: 'An outage — and nobody answers',
          text: 'The till or website is down, the developer does not pick up, and every hour costs money.',
        },
        {
          title: 'Customers find the problems',
          text: 'The first you hear about a bug is a customer complaint — there is no monitoring.',
        },
        {
          title: 'Small changes wait for months',
          text: 'Even simple requests like a new report or field take ages.',
        },
      ],
      includes: [
        {
          title: '24/7 monitoring',
          text: 'Server, database and key functions are checked continuously; we know about a problem before your customers do.',
        },
        {
          title: 'Fixes under an SLA',
          text: 'Clear response and fix times for critical, major and minor issues. TODO: confirm SLA times.',
        },
        {
          title: 'Backups',
          text: 'Regular automatic backups with periodic restore tests.',
        },
        {
          title: 'Updates and security',
          text: 'Library, server and security updates installed on a schedule.',
        },
        {
          title: 'Development',
          text: 'New features, reports and improvements every month within the agreed hours.',
        },
        {
          title: 'Monthly report',
          text: 'What was done, how much time it took and how stable the system was — a transparent report every month.',
        },
      ],
      sections: [
        {
          h2: 'We take over systems built by others',
          paragraphs: [
            'People often come to us with a system whose original developer is gone. We start with a technical audit of the code, server, security and backups and give you a list of risks.',
            'Then we fix the most dangerous issues first, bring the system to a stable state and move on to regular support.',
          ],
        },
        {
          h2: 'In-house developer or external support',
          paragraphs: [
            'A single in-house developer can go on holiday, fall ill or leave — and the system is orphaned again. An external team keeps knowledge in documentation and always works with several specialists.',
            'For many clients a mixed setup works best: an internal owner for day-to-day tasks, and us for complex work and guaranteed response times.',
          ],
        },
        {
          h2: 'How support is organized',
          paragraphs: [
            'Requests come in through one channel — a Telegram group or a ticket system — and each gets a priority. Critical outages are handled immediately, routine requests follow the monthly plan.',
            'At month-end you get a report on the work done, hours spent and system stability, and together we set priorities for the next month.',
          ],
        },
      ],
      timeline: 'Monthly',
      faq: [
        {
          q: 'How much does support cost?',
          a: 'The monthly fee depends on the size of the system and the SLA level. See the Support package starting price on the Pricing page.',
        },
        {
          q: 'Do you support systems you did not build?',
          a: 'Yes, we run a technical audit first and then take the system over.',
        },
        {
          q: 'Do you work nights and weekends?',
          a: 'Monitoring runs continuously. Out-of-hours response for critical outages is agreed in the SLA. TODO: confirm the on-call schedule.',
        },
        {
          q: 'Do unused hours roll over?',
          a: 'TODO: confirm the unused-hours policy.',
        },
        {
          q: 'How do we cancel?',
          a: 'The contract is month to month; on cancellation all access, code and documentation are handed over to you.',
        },
      ],
    },
  },
}

export default service
