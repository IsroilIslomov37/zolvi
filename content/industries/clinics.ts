import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'clinics',
  kind: 'industry',
  icon: 'clinic',
  demo: 'telegram-bot',
  plan: 'business',
  relatedServices: ['crm', 'telegram-bot', 'ai-automation', 'mobile-apps'],
  relatedIndustries: ['education', 'hotels'],
  locales: {
    uz: {
      slug: 'tibbiyot-klinika',
      name: 'Tibbiyot va klinikalar',
      summary:
        'Onlayn yozilish, shifokorlar jadvali, bemor kartasi, kassa va eslatmalar — klinika uchun tizim.',
      metaTitle: 'Klinika uchun CRM va boshqaruv tizimi | ZOLVI',
      metaDescription:
        'Klinika va tibbiyot markazlari uchun tizim: onlayn yozilish, shifokorlar jadvali, elektron bemor kartasi, kassa, Telegram eslatmalari. Toshkent.',
      h1: 'Klinika va tibbiyot markazlari uchun boshqaruv tizimi',
      lead: "Klinika uchun tizim qabulxonadagi qo'ng'iroqlar, shifokorlar jadvali, bemorlar tarixi va to'lovlarni bitta joyga yig'adi. Bemor Telegram orqali o'zi yoziladi va eslatma oladi, shifokor esa tashrif tarixini bir bosishda ko'radi. ZOLVI xususiy klinikalar, stomatologiyalar, diagnostika markazlari va laboratoriyalar uchun tizim quradi.",
      audience: [
        "Xususiy klinikalar va ko'p tarmoqli tibbiyot markazlari",
        'Stomatologiya klinikalari',
        'Diagnostika markazlari va laboratoriyalar',
        'Kosmetologiya va reabilitatsiya markazlari',
      ],
      pains: [
        {
          title: 'Qabulxona telefonda band',
          text: "Administrator kun bo'yi yozilish uchun qo'ng'iroqlarga javob beradi, bemorlar ulanolmaydi va boshqa klinikaga yoziladi.",
        },
        {
          title: 'Bemorlar kelmay qoladi',
          text: "Yozilgan bemor unutadi, shifokor vaqti bo'sh qoladi — eslatmalar qo'lda yuboriladi yoki umuman yuborilmaydi.",
        },
        {
          title: "Bemor tarixi qog'ozda",
          text: "Oldingi tashriflar, tahlillar va tayinlovlar qog'oz kartochkalarda — topish qiyin, yo'qolishi oson.",
        },
      ],
      includes: [
        {
          title: 'Onlayn yozilish',
          text: "Sayt va Telegram-bot orqali shifokor va bo'sh vaqtni tanlash, tasdiqlash va eslatma avtomatik.",
        },
        {
          title: 'Shifokorlar jadvali',
          text: "Shifokorlar, kabinetlar va uskunalar jadvali, smenalar va ta'tillarni hisobga olgan holda.",
        },
        {
          title: 'Elektron bemor kartasi',
          text: 'Tashriflar tarixi, tashxislar, tayinlovlar, tahlil natijalari va fayllar — kirish huquqlari bilan.',
        },
        {
          title: 'Kassa va xizmatlar narxlari',
          text: "Xizmatlar narxnomasi, to'lovlar, chegirmalar va sug'urta, shifokorlar ulushi hisobi.",
        },
        {
          title: 'Eslatmalar va qayta tashriflar',
          text: 'Qabul oldidan eslatma, nazorat tashrifi va tahlil natijalari tayyorligi haqida xabar.',
        },
        {
          title: 'Hisobotlar',
          text: "Shifokorlar yuklamasi, xizmatlar bo'yicha daromad, bemorlar qaytishi va reklama kanallari.",
        },
      ],
      sections: [
        {
          h2: 'Bemorlar kelmay qolishini kamaytirish',
          paragraphs: [
            "Bo'sh qolgan shifokor vaqti — yo'qotilgan daromad. Tizim qabuldan bir kun va bir necha soat oldin Telegram yoki SMS orqali eslatma yuboradi, bemor esa bir tugma bilan tasdiqlaydi yoki vaqtni ko'chiradi.",
            "Bekor qilingan vaqt darhol bo'shaydi va navbatda turgan bemorlarga taklif qilinishi mumkin — shunda jadval to'la bo'lib qoladi.",
          ],
        },
        {
          h2: "Tibbiy ma'lumotlar xavfsizligi",
          paragraphs: [
            "Bemor ma'lumotlari — eng maxfiy ma'lumotlar. Tizimda kirish huquqlari rollar bo'yicha cheklanadi: administrator jadvalni ko'radi, shifokor — o'z bemorlarining kartalarini, har bir ko'rish esa jurnalga yoziladi.",
            "Ma'lumotlar shifrlangan holda saqlanadi va muntazam zaxiralanadi. Shaxsiy ma'lumotlarni O'zbekiston hududida saqlash talablarini hisobga olamiz.",
          ],
        },
        {
          h2: 'Laboratoriya va uskunalar bilan integratsiya',
          paragraphs: [
            "Tahlil natijalari laboratoriya tizimidan bemor kartasiga avtomatik tushishi va bemorga Telegram orqali yuborilishi mumkin. Diagnostika uskunalari bilan integratsiya uskunaning imkoniyatlariga bog'liq — buni auditda tekshiramiz.",
            'Bu qabulxonaning ishini kamaytiradi va bemorga natijani tezroq olish imkonini beradi.',
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: 'Klinika uchun tizim narxi qancha?',
          a: "Narx shifokorlar va filiallar soni, modullar va integratsiyalarga bog'liq; odatda «Biznes» paketi doirasida. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: 'Bemorlar Telegram orqali yozila oladimi?',
          a: 'Ha, bemor Telegram-bot yoki sayt orqali shifokor va vaqtni tanlaydi, tasdiq va eslatmalarni oladi.',
        },
        {
          q: "Bemor ma'lumotlari xavfsizmi?",
          a: "Kirish huquqlari rollar bo'yicha cheklanadi, ko'rishlar jurnalga yoziladi, ma'lumotlar shifrlanadi va zaxiralanadi.",
        },
        {
          q: "Eski bemorlar bazasini ko'chirasizmi?",
          a: "Ha, Excel yoki eski dasturdan bemorlar va tashriflar tarixini ko'chiramiz.",
        },
        {
          q: "Sug'urta kompaniyalari bilan ishlash hisobga olinadimi?",
          a: "Ha, sug'urta bo'yicha xizmatlar va hisob-kitoblar alohida yuritiladi. TODO: qaysi sug'urta kompaniyalari bilan integratsiya kerakligini aniqlang.",
        },
      ],
    },
    ru: {
      slug: 'kliniki',
      name: 'Медицина и клиники',
      summary:
        'Онлайн-запись, расписание врачей, карта пациента, касса и напоминания — система для клиники.',
      metaTitle: 'CRM и система управления для клиники | ZOLVI',
      metaDescription:
        'Система для клиник и медцентров: онлайн-запись, расписание врачей, электронная карта пациента, касса, напоминания в Telegram. Ташкент.',
      h1: 'Система управления для клиник и медицинских центров',
      lead: 'Система для клиники собирает в одном месте звонки на ресепшен, расписание врачей, историю пациентов и оплаты. Пациент сам записывается через Telegram и получает напоминания, а врач видит историю визитов в один клик. ZOLVI строит системы для частных клиник, стоматологий, диагностических центров и лабораторий.',
      audience: [
        'Частные клиники и многопрофильные медцентры',
        'Стоматологические клиники',
        'Диагностические центры и лаборатории',
        'Центры косметологии и реабилитации',
      ],
      pains: [
        {
          title: 'Ресепшен занят телефоном',
          text: 'Администратор весь день отвечает на звонки для записи, пациенты не могут дозвониться и записываются в другую клинику.',
        },
        {
          title: 'Пациенты не приходят',
          text: 'Записанный пациент забывает, время врача простаивает — напоминания отправляются вручную или не отправляются вовсе.',
        },
        {
          title: 'История пациента на бумаге',
          text: 'Прошлые визиты, анализы и назначения в бумажных картах — найти сложно, потерять легко.',
        },
      ],
      includes: [
        {
          title: 'Онлайн-запись',
          text: 'Выбор врача и свободного времени через сайт и Telegram-бота, подтверждение и напоминание автоматически.',
        },
        {
          title: 'Расписание врачей',
          text: 'Расписание врачей, кабинетов и оборудования с учётом смен и отпусков.',
        },
        {
          title: 'Электронная карта пациента',
          text: 'История визитов, диагнозы, назначения, результаты анализов и файлы — с разграничением доступа.',
        },
        {
          title: 'Касса и прайс услуг',
          text: 'Прайс-лист, оплаты, скидки и страховка, расчёт доли врачей.',
        },
        {
          title: 'Напоминания и повторные визиты',
          text: 'Напоминание перед приёмом, о контрольном визите и о готовности анализов.',
        },
        {
          title: 'Отчёты',
          text: 'Загрузка врачей, доход по услугам, возвращаемость пациентов и рекламные каналы.',
        },
      ],
      sections: [
        {
          h2: 'Сокращаем неявки пациентов',
          paragraphs: [
            'Простой врача — потерянный доход. Система отправляет напоминание в Telegram или по SMS за день и за несколько часов до приёма, а пациент одной кнопкой подтверждает или переносит визит.',
            'Отменённое время сразу освобождается и может быть предложено пациентам из листа ожидания — так расписание остаётся заполненным.',
          ],
        },
        {
          h2: 'Безопасность медицинских данных',
          paragraphs: [
            'Данные пациентов — самые чувствительные. Доступ в системе разграничен по ролям: администратор видит расписание, врач — карты своих пациентов, а каждый просмотр записывается в журнал.',
            'Данные хранятся в зашифрованном виде и регулярно резервируются. Учитываем требования о хранении персональных данных на территории Узбекистана.',
          ],
        },
        {
          h2: 'Интеграция с лабораторией и оборудованием',
          paragraphs: [
            'Результаты анализов могут автоматически попадать из лабораторной системы в карту пациента и отправляться ему в Telegram. Интеграция с диагностическим оборудованием зависит от его возможностей — проверяем это на аудите.',
            'Это разгружает ресепшен и позволяет пациенту быстрее получить результат.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит система для клиники?',
          a: 'Стоимость зависит от числа врачей и филиалов, модулей и интеграций; обычно в рамках пакета «Бизнес». Точную смету даём после аудита.',
        },
        {
          q: 'Пациенты могут записываться через Telegram?',
          a: 'Да, пациент выбирает врача и время в Telegram-боте или на сайте и получает подтверждение и напоминания.',
        },
        {
          q: 'Данные пациентов в безопасности?',
          a: 'Доступ разграничен по ролям, просмотры записываются в журнал, данные шифруются и резервируются.',
        },
        {
          q: 'Перенесёте старую базу пациентов?',
          a: 'Да, переносим пациентов и историю визитов из Excel или старой программы.',
        },
        {
          q: 'Учитывается работа со страховыми компаниями?',
          a: 'Да, услуги и расчёты по страховке ведутся отдельно. TODO: уточнить, с какими страховыми нужна интеграция.',
        },
      ],
    },
    en: {
      slug: 'clinics',
      name: 'Healthcare and clinics',
      summary:
        'Online booking, doctor schedules, patient records, billing and reminders — a system for clinics.',
      metaTitle: 'Clinic Management System and CRM | ZOLVI',
      metaDescription:
        'A system for clinics and medical centers: online booking, doctor schedules, electronic patient records, billing and Telegram reminders. Tashkent.',
      h1: 'Management system for clinics and medical centers',
      lead: 'A clinic system brings reception calls, doctor schedules, patient history and payments into one place. Patients book themselves via Telegram and get reminders, and doctors see the visit history in one click. ZOLVI builds systems for private clinics, dental practices, diagnostic centers and laboratories.',
      audience: [
        'Private clinics and multi-specialty medical centers',
        'Dental clinics',
        'Diagnostic centers and laboratories',
        'Cosmetology and rehabilitation centers',
      ],
      pains: [
        {
          title: 'Reception is stuck on the phone',
          text: 'The administrator answers booking calls all day, patients cannot get through and book elsewhere.',
        },
        {
          title: 'Patients do not show up',
          text: 'Booked patients forget and the doctor’s time goes unused — reminders are sent by hand or not at all.',
        },
        {
          title: 'Patient history on paper',
          text: 'Previous visits, tests and prescriptions sit in paper files that are hard to find and easy to lose.',
        },
      ],
      includes: [
        {
          title: 'Online booking',
          text: 'Patients choose a doctor and time slot via the website or Telegram bot, with automatic confirmation and reminders.',
        },
        {
          title: 'Doctor schedules',
          text: 'Schedules for doctors, rooms and equipment that account for shifts and leave.',
        },
        {
          title: 'Electronic patient record',
          text: 'Visit history, diagnoses, prescriptions, test results and files — with access controls.',
        },
        {
          title: 'Billing and price list',
          text: 'Service price list, payments, discounts and insurance, plus doctor fee calculations.',
        },
        {
          title: 'Reminders and follow-ups',
          text: 'Reminders before appointments, for follow-up visits and when test results are ready.',
        },
        {
          title: 'Reports',
          text: 'Doctor utilization, revenue by service, patient retention and marketing channels.',
        },
      ],
      sections: [
        {
          h2: 'Fewer no-shows',
          paragraphs: [
            'An idle doctor is lost revenue. The system sends a Telegram or SMS reminder a day and a few hours before the appointment, and the patient confirms or reschedules with one tap.',
            'A cancelled slot is freed immediately and can be offered to patients on the waiting list, keeping the schedule full.',
          ],
        },
        {
          h2: 'Medical data security',
          paragraphs: [
            'Patient data is the most sensitive data there is. Access is role-based: administrators see the schedule, doctors see their own patients’ records, and every view is logged.',
            'Data is stored encrypted and backed up regularly. We follow the requirement to store personal data of Uzbek citizens inside Uzbekistan.',
          ],
        },
        {
          h2: 'Lab and equipment integration',
          paragraphs: [
            'Test results can flow from the laboratory system into the patient record and be sent to the patient via Telegram. Integration with diagnostic equipment depends on the device’s capabilities — we check this during the audit.',
            'That lightens the load on reception and gets results to patients faster.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does a clinic system cost?',
          a: 'It depends on the number of doctors and branches, modules and integrations; usually within the Business package. We give an exact estimate after the audit.',
        },
        {
          q: 'Can patients book via Telegram?',
          a: 'Yes, patients choose a doctor and time in the Telegram bot or on the website and receive confirmation and reminders.',
        },
        {
          q: 'Is patient data secure?',
          a: 'Access is role-based, views are logged, and data is encrypted and backed up.',
        },
        {
          q: 'Will you migrate our existing patient base?',
          a: 'Yes, we migrate patients and visit history from Excel or your old software.',
        },
        {
          q: 'Is insurance billing supported?',
          a: 'Yes, insurance services and settlements are tracked separately. TODO: specify which insurers need an integration.',
        },
      ],
    },
  },
}

export default industry
