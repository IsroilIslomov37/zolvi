import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'education',
  kind: 'industry',
  icon: 'education',
  demo: 'crm',
  plan: 'business',
  relatedServices: ['crm', 'telegram-bot', 'mobile-apps', 'web-apps'],
  relatedIndustries: ['school-websites'],
  locales: {
    uz: {
      slug: 'oquv-markazi-crm',
      name: "O'quv markazi uchun CRM",
      summary: "Lidlar, guruhlar, davomat, to'lovlar va o'qituvchilar — o'quv markazi uchun CRM.",
      metaTitle: "O'quv markaz uchun CRM tizimi — ta'lim CRM | ZOLVI",
      metaDescription:
        "O'quv markaz uchun CRM: lidlar, sinov darslari, guruhlar, davomat, to'lovlar va qarzdorlik, o'qituvchilar maoshi, Telegram orqali ota-onalarga xabar.",
      h1: "O'quv markazi uchun CRM tizimi",
      lead: "O'quv markazi uchun CRM — bu yangi o'quvchi arizasidan to oylik to'lovgacha bo'lgan butun yo'lni bitta tizimda boshqarish: lidlar, sinov darslari, guruhlar, davomat, to'lovlar, qarzdorlik va o'qituvchilar maoshi. ZOLVI til markazlari, IT-maktablar, repetitorlik markazlari va bolalar klublari uchun CRM ishlab chiqadi.",
      audience: [
        'Til markazlari va IT-maktablar',
        'Abituriyentlarni tayyorlash markazlari',
        'Bolalar rivojlanish markazlari va sport klublari',
        "Bir nechta filialga ega o'quv markazlari tarmoqlari",
      ],
      pains: [
        {
          title: "Arizalar yo'qoladi",
          text: "Instagram va Telegram'dan kelgan arizalar daftarga yoziladi, sinov darsiga chaqirilmay qoladi.",
        },
        {
          title: 'Qarzdorlik nazoratsiz',
          text: "Kim to'ladi, kim kechiktirdi — administrator jadvalni qo'lda tekshiradi, eslatmalar o'z vaqtida yuborilmaydi.",
        },
        {
          title: "O'qituvchilar maoshi — bosh og'riq",
          text: "Har oy dars soatlari va davomat qo'lda sanaladi, xatolar nizolarga olib keladi.",
        },
      ],
      includes: [
        {
          title: 'Lidlar va sinov darslari',
          text: "Barcha kanallardan arizalar CRM'ga tushadi, sinov darsiga yozish va eslatma avtomatik.",
        },
        {
          title: 'Guruhlar va jadval',
          text: "Guruhlar, xonalar va o'qituvchilar jadvali, to'qnashuvlardan himoya.",
        },
        {
          title: 'Davomat va baholar',
          text: "O'qituvchi davomatni telefonda belgilaydi, ota-onaga Telegram orqali xabar boradi.",
        },
        {
          title: "To'lovlar va qarzdorlik",
          text: "Oylik to'lovlar, chegirmalar, Click/Payme orqali to'lov va qarzdorlarga avtomatik eslatma.",
        },
        {
          title: "O'qituvchilar maoshi",
          text: "Dars soatlari va o'quvchilar soniga qarab maosh avtomatik hisoblanadi.",
        },
        {
          title: 'Hisobotlar',
          text: "Konversiya, o'quvchilar ketishi, filiallar va kurslar bo'yicha daromad.",
        },
      ],
      sections: [
        {
          h2: "Ariza — sinov darsi — o'quvchi",
          paragraphs: [
            "O'quv markazlarida eng ko'p pul ariza va to'lov o'rtasida yo'qoladi: arizaga kech javob berildi, sinov darsiga eslatilmadi, sinovdan keyin hech kim qo'ng'iroq qilmadi. CRM har bir bosqichni nazorat qiladi va menejerga keyingi qadamni eslatadi.",
            "Hisobotda qaysi kanal (Instagram, Telegram, tavsiya) eng ko'p to'lovchi o'quvchi olib kelishini ko'rasiz va reklama byudjetini to'g'ri taqsimlaysiz.",
          ],
        },
        {
          h2: 'Ota-onalar bilan aloqa Telegram orqali',
          paragraphs: [
            "Ota-onalar o'zbek yoki rus tilidagi Telegram-bot orqali davomat, baholar va to'lov eslatmalarini oladi, to'lovni ham shu yerda qila oladi. Bu administratorning qo'ng'iroqlarini kamaytiradi va ota-onalar ishonchini oshiradi.",
            "O'quvchilarning ketishini oldindan ko'rish uchun tizim ketma-ket darsga kelmaganlarni belgilaydi — menejer ular bilan o'z vaqtida bog'lanadi.",
          ],
        },
        {
          h2: "Nega amoCRM emas, maxsus ta'lim CRM",
          paragraphs: [
            "Umumiy CRM'larda guruhlar, jadval, davomat va o'qituvchilar maoshi yo'q — ularni qo'shimcha jadvallarda yuritishga to'g'ri keladi. Maxsus ta'lim CRM'ida bularning hammasi bitta tizimda va bir-biriga bog'liq.",
            "Ko'p filialli markazlar uchun esa har bir filial alohida hisoblanadi, rahbar esa butun tarmoqni bitta panelda ko'radi.",
          ],
        },
      ],
      timeline: '6–8 hafta',
      faq: [
        {
          q: "O'quv markazi CRM'i narxi qancha?",
          a: "Narx filiallar soni va modullarga bog'liq; odatda «Biznes» paketi doirasida. Aniq smetani bepul auditdan keyin beramiz.",
        },
        {
          q: "Excel'dagi o'quvchilar bazasini ko'chirasizmi?",
          a: "Ha, o'quvchilar, guruhlar, to'lovlar tarixi va qarzdorlikni Excel yoki eski tizimdan ko'chiramiz.",
        },
        {
          q: "O'qituvchilar telefondan foydalana oladimi?",
          a: "Ha, o'qituvchi o'z jadvali, guruhlari va davomatni telefonda ko'radi va belgilaydi.",
        },
        {
          q: 'Ota-onalarga xabar qanday boradi?',
          a: "Telegram-bot yoki SMS orqali: davomat, to'lov eslatmasi, e'lonlar.",
        },
        {
          q: 'Onlayn darslar uchun ham mosmi?',
          a: 'Ha, onlayn guruhlar, dars havolalari va materiallar ham tizimda yuritiladi.',
        },
        {
          q: 'Bir nechta filialni boshqarish mumkinmi?',
          a: "Ha, har bir filialning o'z guruhlari, xonalari va kassasi bor, rahbar esa barcha filiallar bo'yicha o'quvchilar soni, to'lovlar va qarzdorlikni bitta panelda solishtiradi.",
        },
      ],
    },
    ru: {
      slug: 'crm-dlya-uchebnogo-centra',
      name: 'CRM для учебного центра',
      summary: 'Лиды, группы, посещаемость, оплаты и преподаватели — CRM для учебного центра.',
      metaTitle: 'CRM для учебного центра и школы | ZOLVI',
      metaDescription:
        'CRM для учебного центра: лиды, пробные уроки, группы, посещаемость, оплаты и долги, зарплата преподавателей, уведомления родителям в Telegram.',
      h1: 'CRM-система для учебного центра',
      lead: 'CRM для учебного центра — это управление всем путём от заявки нового ученика до ежемесячной оплаты в одной системе: лиды, пробные уроки, группы, посещаемость, оплаты, задолженности и зарплата преподавателей. ZOLVI разрабатывает CRM для языковых центров, IT-школ, репетиторских центров и детских клубов.',
      audience: [
        'Языковые центры и IT-школы',
        'Центры подготовки абитуриентов',
        'Детские развивающие центры и спортивные клубы',
        'Сети учебных центров с несколькими филиалами',
      ],
      pains: [
        {
          title: 'Заявки теряются',
          text: 'Заявки из Instagram и Telegram записываются в блокнот, на пробный урок не приглашают.',
        },
        {
          title: 'Долги без контроля',
          text: 'Кто оплатил, кто задержал — администратор проверяет таблицу вручную, напоминания уходят не вовремя.',
        },
        {
          title: 'Зарплата преподавателей — головная боль',
          text: 'Каждый месяц часы и посещаемость считают вручную, ошибки приводят к конфликтам.',
        },
      ],
      includes: [
        {
          title: 'Лиды и пробные уроки',
          text: 'Заявки из всех каналов попадают в CRM, запись на пробный урок и напоминание — автоматически.',
        },
        {
          title: 'Группы и расписание',
          text: 'Расписание групп, аудиторий и преподавателей с защитой от накладок.',
        },
        {
          title: 'Посещаемость и оценки',
          text: 'Преподаватель отмечает посещаемость в телефоне, родитель получает уведомление в Telegram.',
        },
        {
          title: 'Оплаты и задолженности',
          text: 'Ежемесячные платежи, скидки, оплата через Click/Payme и автоматические напоминания должникам.',
        },
        {
          title: 'Зарплата преподавателей',
          text: 'Зарплата считается автоматически по часам и числу учеников.',
        },
        {
          title: 'Отчёты',
          text: 'Конверсия, отток учеников, доход по филиалам и курсам.',
        },
      ],
      sections: [
        {
          h2: 'Заявка — пробный урок — ученик',
          paragraphs: [
            'В учебных центрах больше всего денег теряется между заявкой и оплатой: поздно ответили, не напомнили о пробном уроке, после пробного никто не перезвонил. CRM контролирует каждый этап и подсказывает менеджеру следующий шаг.',
            'В отчётах видно, какой канал (Instagram, Telegram, рекомендации) приводит больше всего платящих учеников, — и рекламный бюджет распределяется правильно.',
          ],
        },
        {
          h2: 'Связь с родителями через Telegram',
          paragraphs: [
            'Родители получают посещаемость, оценки и напоминания об оплате через Telegram-бота на узбекском или русском и могут оплатить прямо там. Это сокращает звонки администратору и повышает доверие родителей.',
            'Чтобы заранее увидеть отток, система отмечает учеников, пропустивших несколько уроков подряд, — менеджер связывается с ними вовремя.',
          ],
        },
        {
          h2: 'Почему специализированная CRM, а не amoCRM',
          paragraphs: [
            'В универсальных CRM нет групп, расписания, посещаемости и зарплаты преподавателей — их приходится вести в дополнительных таблицах. В специализированной CRM для образования всё это в одной системе и связано между собой.',
            'Для центров с филиалами каждый филиал учитывается отдельно, а руководитель видит всю сеть на одной панели.',
          ],
        },
      ],
      timeline: '6–8 недель',
      faq: [
        {
          q: 'Сколько стоит CRM для учебного центра?',
          a: 'Стоимость зависит от числа филиалов и модулей; обычно в рамках пакета «Бизнес». Точную смету даём после бесплатного аудита.',
        },
        {
          q: 'Перенесёте базу учеников из Excel?',
          a: 'Да, переносим учеников, группы, историю оплат и задолженности из Excel или старой системы.',
        },
        {
          q: 'Преподаватели могут работать с телефона?',
          a: 'Да, преподаватель видит своё расписание и группы и отмечает посещаемость в телефоне.',
        },
        {
          q: 'Как уведомляются родители?',
          a: 'Через Telegram-бота или SMS: посещаемость, напоминание об оплате, объявления.',
        },
        {
          q: 'Подходит для онлайн-занятий?',
          a: 'Да, онлайн-группы, ссылки на уроки и материалы тоже ведутся в системе.',
        },
        {
          q: 'Можно управлять несколькими филиалами?',
          a: 'Да, у каждого филиала свои группы, аудитории и касса, а руководитель сравнивает число учеников, оплаты и задолженность по всем филиалам на одной панели.',
        },
      ],
    },
    en: {
      slug: 'education-crm',
      name: 'CRM for training centers',
      summary:
        'Leads, groups, attendance, payments and teachers — a CRM built for training centers.',
      metaTitle: 'CRM for Training Centers and Schools | ZOLVI',
      metaDescription:
        'A CRM for training centers: leads, trial lessons, groups, attendance, payments and debts, teacher payroll and Telegram notifications for parents.',
      h1: 'CRM system for training centers',
      lead: 'A training center CRM manages the whole journey from a new student’s enquiry to the monthly payment in one system: leads, trial lessons, groups, attendance, payments, debts and teacher payroll. ZOLVI builds CRMs for language centers, coding schools, tutoring centers and children’s clubs.',
      audience: [
        'Language centers and coding schools',
        'University entrance preparation centers',
        'Children’s development centers and sports clubs',
        'Training center chains with several branches',
      ],
      pains: [
        {
          title: 'Enquiries get lost',
          text: 'Enquiries from Instagram and Telegram go into a notebook and never get invited to a trial lesson.',
        },
        {
          title: 'Unpaid fees out of control',
          text: 'Who paid and who is late — the administrator checks a spreadsheet by hand and reminders go out late.',
        },
        {
          title: 'Teacher payroll is a headache',
          text: 'Every month hours and attendance are counted by hand, and mistakes lead to disputes.',
        },
      ],
      includes: [
        {
          title: 'Leads and trial lessons',
          text: 'Enquiries from every channel land in the CRM; trial bookings and reminders are automatic.',
        },
        {
          title: 'Groups and timetable',
          text: 'Timetables for groups, rooms and teachers with clash protection.',
        },
        {
          title: 'Attendance and grades',
          text: 'Teachers mark attendance on their phones and parents get a Telegram notification.',
        },
        {
          title: 'Payments and debts',
          text: 'Monthly fees, discounts, payment via Click/Payme and automatic reminders for overdue accounts.',
        },
        {
          title: 'Teacher payroll',
          text: 'Pay is calculated automatically from hours taught and student numbers.',
        },
        {
          title: 'Reports',
          text: 'Conversion, student churn and revenue by branch and course.',
        },
      ],
      sections: [
        {
          h2: 'Enquiry — trial lesson — student',
          paragraphs: [
            'Training centers lose the most money between enquiry and payment: a slow reply, no trial reminder, no follow-up call after the trial. The CRM tracks each step and prompts the manager with the next action.',
            'Reports show which channel — Instagram, Telegram or referrals — brings the most paying students, so the ad budget goes where it works.',
          ],
        },
        {
          h2: 'Parents kept informed via Telegram',
          paragraphs: [
            'Parents receive attendance, grades and payment reminders from a Telegram bot in Uzbek or Russian and can pay right there. That cuts calls to the administrator and builds parents’ trust.',
            'To spot churn early, the system flags students who miss several lessons in a row so a manager can reach out in time.',
          ],
        },
        {
          h2: 'Why a dedicated education CRM rather than amoCRM',
          paragraphs: [
            'General-purpose CRMs have no groups, timetables, attendance or teacher payroll, so you end up running extra spreadsheets. A dedicated education CRM keeps all of it in one connected system.',
            'For multi-branch centers each branch is tracked separately while the owner sees the whole network on one dashboard.',
          ],
        },
      ],
      timeline: '6–8 weeks',
      faq: [
        {
          q: 'How much does a training center CRM cost?',
          a: 'It depends on the number of branches and modules; usually within the Business package. We give an exact estimate after the free audit.',
        },
        {
          q: 'Will you migrate our student list from Excel?',
          a: 'Yes, we migrate students, groups, payment history and debts from Excel or your old system.',
        },
        {
          q: 'Can teachers use it on their phones?',
          a: 'Yes, teachers see their timetable and groups and mark attendance on the phone.',
        },
        {
          q: 'How are parents notified?',
          a: 'Through a Telegram bot or SMS: attendance, payment reminders and announcements.',
        },
        {
          q: 'Does it work for online classes?',
          a: 'Yes, online groups, lesson links and materials are managed in the system too.',
        },
        {
          q: 'Can we manage several branches?',
          a: 'Yes, each branch has its own groups, rooms and cash desk, while the owner compares student numbers, payments and debts across all branches on one dashboard.',
        },
      ],
    },
  },
}

export default industry
