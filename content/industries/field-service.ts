import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'field-service',
  kind: 'industry',
  icon: 'wrench',
  demo: 'crm',
  caseId: 'field-service-platform',
  plan: 'business',
  relatedServices: ['mobile-apps', 'automation', 'crm', 'saas'],
  relatedIndustries: ['logistics', 'manufacturing'],
  locales: {
    uz: {
      slug: 'dala-xizmati',
      name: 'Dala xizmati',
      summary:
        'Arizalar, texniklar jadvali, mobil ilova, ehtiyot qismlar va hisob-kitoblar — servis kompaniyalari uchun.',
      metaTitle: 'Dala xizmati (field service) boshqaruv tizimi | ZOLVI',
      metaDescription:
        'Servis va montaj kompaniyalari uchun tizim: arizalar, texniklarni rejalashtirish, mobil ilova, fotohisobot, ehtiyot qismlar va mijozga xabarlar. Toshkent.',
      h1: 'Dala xizmati (field service) uchun boshqaruv tizimi',
      lead: "Texniklar, montajchilar va ustalar ofisdan tashqarida ishlaydi — shuning uchun ularning ishini qog'oz va telefon orqali boshqarish qiyin. ZOLVI arizani qabul qilishdan tortib, texnikni tayinlash, joyida bajarish, fotohisobot va to'lovgacha bo'lgan jarayonni bitta tizim va mobil ilovaga yig'adi.",
      audience: [
        'Konditsioner, maishiy texnika va uskunalar servisi',
        "Montaj, o'rnatish va ta'mirlash kompaniyalari",
        "Internet-provayderlar va xavfsizlik tizimlari o'rnatuvchilar",
        "Uskunalar yetkazib beruvchilarning servis bo'limlari",
      ],
      pains: [
        {
          title: "Texnik qayerda — noma'lum",
          text: "Dispetcher texniklarga qo'ng'iroq qilib, kim bo'sh va kim qachon tugatishini aniqlaydi.",
        },
        {
          title: 'Bajarilgan ish isbotlanmaydi',
          text: "Mijoz ish sifatsiz bajarilganini aytadi, lekin fotosurat ham, imzolangan dalolatnoma ham yo'q.",
        },
        {
          title: "Ehtiyot qismlar yo'qoladi",
          text: "Texnik omborga qism oladi, lekin qaysi buyurtmaga ishlatgani noma'lum.",
        },
      ],
      includes: [
        {
          title: 'Arizalar va SLA',
          text: 'Telefon, sayt, Telegram va mijoz kabinetidan arizalar, muddatlar va muhimlik darajasi.',
        },
        {
          title: 'Rejalashtirish',
          text: "Texniklar malakasi, joylashuvi va bandligiga qarab arizalarni taqsimlash, xaritada ko'rinish.",
        },
        {
          title: 'Texnik ilovasi',
          text: "Vazifalar, marshrut, cheklist, fotohisobot, mijoz imzosi va to'lov qabul qilish — oflayn rejim bilan.",
        },
        {
          title: 'Ehtiyot qismlar',
          text: 'Ombor va texnik mashinasidagi qoldiqlar, har bir arizaga sarflangan qismlar.',
        },
        {
          title: 'Mijozga xabarlar',
          text: "Texnik tayinlangani, yo'lga chiqqani va ish bajarilgani haqida SMS yoki Telegram xabari.",
        },
        {
          title: 'Hisobotlar',
          text: 'Texniklar samaradorligi, SLA bajarilishi, qayta chaqiruvlar va mijozlar bahosi.',
        },
      ],
      sections: [
        {
          h2: 'Arizadan bajarilishgacha — bitta zanjir',
          paragraphs: [
            "Ariza tizimga tushishi bilan dispetcher uni xaritada ko'radi va mos texnikka tayinlaydi. Texnik ilovada manzil, mijoz ma'lumotlari, uskuna tarixi va kerakli qismlarni oladi.",
            "Ish tugagach, texnik cheklistni to'ldiradi, fotosurat qo'shadi va mijoz imzosini oladi. Ariza avtomatik yopiladi, mijozga esa dalolatnoma va hisob yuboriladi.",
          ],
        },
        {
          h2: 'Uskunalar tarixi va rejali xizmat',
          paragraphs: [
            "Har bir mijoz uskunasining kartochkasi bor: qachon o'rnatilgan, qanday ta'mirlangan, qaysi qismlar almashtirilgan. Texnik keyingi tashrifda butun tarixni ko'radi.",
            'Rejali texnik xizmat (masalan, konditsionerlarni mavsumiy tozalash) uchun tizim arizalarni avtomatik yaratadi va mijozga eslatadi — bu doimiy daromad manbai.',
          ],
        },
        {
          h2: 'Texniklar samaradorligi',
          paragraphs: [
            "Tizim har bir texnik bo'yicha bajarilgan arizalar, o'rtacha bajarilish vaqti, qayta chaqiruvlar va mijozlar bahosini ko'rsatadi. Bu adolatli motivatsiya tizimini qurish imkonini beradi.",
            'Ish haqi va bonuslarni ham bajarilgan ishlar asosida avtomatik hisoblash mumkin.',
          ],
        },
      ],
      timeline: '8–12 hafta',
      faq: [
        {
          q: 'Dala xizmati tizimi narxi qancha?',
          a: "Narx texniklar soni, modullar va integratsiyalarga bog'liq; odatda «Biznes» paketi doirasida. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: 'Texniklar qanday telefondan foydalanadi?',
          a: 'Oddiy Android yoki iPhone yetarli; ilova oflayn ishlaydi.',
        },
        {
          q: "Mijozlar ariza holatini ko'ra oladimi?",
          a: 'Ha, SMS yoki Telegram orqali holat xabarlari keladi, korporativ mijozlar uchun kabinet ham qilish mumkin.',
        },
        {
          q: "To'lovni joyida qabul qilsa bo'ladimi?",
          a: "Ha, naqd, karta yoki Click/Payme havolasi orqali; to'lov arizaga avtomatik bog'lanadi.",
        },
        {
          q: 'Mavjud CRM bilan integratsiya qilasizmi?',
          a: "Ha, ariza va mijozlar ma'lumotlari mavjud CRM yoki 1C bilan almashinishi mumkin.",
        },
        {
          q: 'Ehtiyot qismlar hisobini qanday yuritamiz?',
          a: 'Har bir texnik mashinasi alohida «ombor» sifatida yuritiladi. Texnik qismni arizada ishlatganda u avtomatik hisobdan chiqariladi, kam qolgan qismlar haqida esa ombor mudiri xabar oladi.',
        },
      ],
    },
    ru: {
      slug: 'vyezdnoe-obsluzhivanie',
      name: 'Выездной сервис',
      summary:
        'Заявки, расписание техников, мобильное приложение, запчасти и расчёты — для сервисных компаний.',
      metaTitle: 'Система управления выездным сервисом | ZOLVI',
      metaDescription:
        'Система для сервисных и монтажных компаний: заявки, планирование техников, мобильное приложение, фотоотчёт, запчасти и уведомления клиентам.',
      h1: 'Система управления выездным сервисом (field service)',
      lead: 'Техники, монтажники и мастера работают вне офиса — поэтому управлять их работой через бумагу и телефон сложно. ZOLVI собирает в одной системе и мобильном приложении весь процесс: от приёма заявки, назначения техника и выполнения на месте до фотоотчёта и оплаты.',
      audience: [
        'Сервис кондиционеров, бытовой техники и оборудования',
        'Компании по монтажу, установке и ремонту',
        'Интернет-провайдеры и установщики систем безопасности',
        'Сервисные отделы поставщиков оборудования',
      ],
      pains: [
        {
          title: 'Где техник — неизвестно',
          text: 'Диспетчер обзванивает техников, чтобы понять, кто свободен и кто когда закончит.',
        },
        {
          title: 'Выполненную работу не доказать',
          text: 'Клиент говорит, что работу сделали плохо, а нет ни фото, ни подписанного акта.',
        },
        {
          title: 'Запчасти пропадают',
          text: 'Техник берёт деталь со склада, но на какую заявку её потратил — непонятно.',
        },
      ],
      includes: [
        {
          title: 'Заявки и SLA',
          text: 'Заявки по телефону, с сайта, из Telegram и кабинета клиента, сроки и приоритеты.',
        },
        {
          title: 'Планирование',
          text: 'Распределение заявок с учётом квалификации, местоположения и загрузки техников, отображение на карте.',
        },
        {
          title: 'Приложение техника',
          text: 'Задачи, маршрут, чек-лист, фотоотчёт, подпись клиента и приём оплаты — с офлайн-режимом.',
        },
        {
          title: 'Запчасти',
          text: 'Остатки на складе и в машине техника, запчасти по каждой заявке.',
        },
        {
          title: 'Уведомления клиенту',
          text: 'SMS или Telegram о назначении техника, выезде и выполнении работы.',
        },
        {
          title: 'Отчёты',
          text: 'Эффективность техников, выполнение SLA, повторные вызовы и оценки клиентов.',
        },
      ],
      sections: [
        {
          h2: 'От заявки до выполнения — одна цепочка',
          paragraphs: [
            'Как только заявка попадает в систему, диспетчер видит её на карте и назначает подходящего техника. Техник получает в приложении адрес, данные клиента, историю оборудования и нужные запчасти.',
            'По завершении техник заполняет чек-лист, прикрепляет фото и получает подпись клиента. Заявка закрывается автоматически, а клиенту уходят акт и счёт.',
          ],
        },
        {
          h2: 'История оборудования и плановое обслуживание',
          paragraphs: [
            'У каждого оборудования клиента есть карточка: когда установлено, как ремонтировалось, какие запчасти менялись. При следующем визите техник видит всю историю.',
            'Для планового ТО (например, сезонной чистки кондиционеров) система сама создаёт заявки и напоминает клиенту — это источник постоянного дохода.',
          ],
        },
        {
          h2: 'Эффективность техников',
          paragraphs: [
            'Система показывает по каждому технику число выполненных заявок, среднее время выполнения, повторные вызовы и оценки клиентов. Это позволяет построить справедливую систему мотивации.',
            'Зарплату и бонусы тоже можно считать автоматически по выполненным работам.',
          ],
        },
      ],
      timeline: '8–12 недель',
      faq: [
        {
          q: 'Сколько стоит система для выездного сервиса?',
          a: 'Стоимость зависит от числа техников, модулей и интеграций; обычно в рамках пакета «Бизнес». Точную смету даём после аудита.',
        },
        {
          q: 'Какие телефоны нужны техникам?',
          a: 'Подойдёт обычный Android или iPhone; приложение работает офлайн.',
        },
        {
          q: 'Клиенты видят статус заявки?',
          a: 'Да, приходят уведомления по SMS или в Telegram, для корпоративных клиентов можно сделать кабинет.',
        },
        {
          q: 'Можно принимать оплату на месте?',
          a: 'Да, наличными, картой или по ссылке Click/Payme; оплата автоматически привязывается к заявке.',
        },
        {
          q: 'Интегрируетесь с нашей CRM?',
          a: 'Да, данные о заявках и клиентах могут обмениваться с существующей CRM или 1С.',
        },
        {
          q: 'Как вести учёт запчастей?',
          a: 'Машина каждого техника ведётся как отдельный «склад». Когда техник использует деталь в заявке, она списывается автоматически, а заведующий складом получает уведомление о заканчивающихся запчастях.',
        },
      ],
    },
    en: {
      slug: 'field-service',
      name: 'Field service',
      summary:
        'Work orders, technician scheduling, a mobile app, spare parts and billing for service companies.',
      metaTitle: 'Field Service Management System | ZOLVI',
      metaDescription:
        'A system for service and installation companies: work orders, technician scheduling, mobile app, photo reports, spare parts and customer notifications.',
      h1: 'Field service management system',
      lead: 'Technicians, installers and repair crews work away from the office, which makes managing them by paper and phone hard. ZOLVI brings the whole process — from taking a request and assigning a technician to on-site work, photo reports and payment — into one system and mobile app.',
      audience: [
        'Air conditioning, appliance and equipment service',
        'Installation and repair companies',
        'Internet providers and security system installers',
        'Service departments of equipment suppliers',
      ],
      pains: [
        {
          title: 'Nobody knows where the technician is',
          text: 'The dispatcher phones around to find out who is free and who will finish when.',
        },
        {
          title: 'No proof of work done',
          text: 'The customer says the job was poor, and there is neither a photo nor a signed act.',
        },
        {
          title: 'Spare parts go missing',
          text: 'A technician takes a part from the warehouse, but which job it was used on is unknown.',
        },
      ],
      includes: [
        {
          title: 'Work orders and SLAs',
          text: 'Requests by phone, website, Telegram and client portal, with deadlines and priorities.',
        },
        {
          title: 'Scheduling',
          text: 'Jobs assigned by technician skills, location and workload, shown on a map.',
        },
        {
          title: 'Technician app',
          text: 'Tasks, route, checklist, photo report, customer signature and payment collection — with offline mode.',
        },
        {
          title: 'Spare parts',
          text: 'Stock in the warehouse and in each technician’s van, and parts used per job.',
        },
        {
          title: 'Customer notifications',
          text: 'SMS or Telegram messages when a technician is assigned, on the way and done.',
        },
        {
          title: 'Reports',
          text: 'Technician performance, SLA compliance, repeat visits and customer ratings.',
        },
      ],
      sections: [
        {
          h2: 'From request to completion in one chain',
          paragraphs: [
            'As soon as a request enters the system, the dispatcher sees it on the map and assigns the right technician, who gets the address, customer details, equipment history and required parts in the app.',
            'When the job is done, the technician completes the checklist, attaches photos and collects the customer’s signature. The job closes automatically and the act and invoice go to the customer.',
          ],
        },
        {
          h2: 'Equipment history and planned maintenance',
          paragraphs: [
            'Every piece of customer equipment has a record: when it was installed, how it was repaired, which parts were replaced. On the next visit the technician sees the full history.',
            'For planned maintenance — such as seasonal air conditioner cleaning — the system creates jobs and reminds customers automatically, a steady source of recurring revenue.',
          ],
        },
        {
          h2: 'Technician performance',
          paragraphs: [
            'The system shows completed jobs, average job time, repeat visits and customer ratings for each technician, which makes a fair incentive scheme possible.',
            'Pay and bonuses can also be calculated automatically from completed work.',
          ],
        },
      ],
      timeline: '8–12 weeks',
      faq: [
        {
          q: 'How much does a field service system cost?',
          a: 'It depends on the number of technicians, modules and integrations; usually within the Business package. We give an exact estimate after the audit.',
        },
        {
          q: 'What phones do technicians need?',
          a: 'Any ordinary Android or iPhone; the app works offline.',
        },
        {
          q: 'Can customers see job status?',
          a: 'Yes, status updates arrive by SMS or Telegram, and corporate clients can get a portal.',
        },
        {
          q: 'Can we take payment on site?',
          a: 'Yes, by cash, card or a Click/Payme link; the payment is linked to the job automatically.',
        },
        {
          q: 'Do you integrate with our CRM?',
          a: 'Yes, job and customer data can be exchanged with your existing CRM or 1C.',
        },
        {
          q: 'How are spare parts tracked?',
          a: 'Each technician’s van is tracked as its own small warehouse. When a part is used on a job it is written off automatically, and the storekeeper is alerted when parts run low.',
        },
      ],
    },
  },
}

export default industry
