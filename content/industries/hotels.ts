import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'hotels',
  kind: 'industry',
  icon: 'hotel',
  demo: 'crm',
  caseId: 'hospitality-platform',
  plan: 'business',
  relatedServices: ['crm', 'telegram-bot', 'saas', 'web-apps'],
  relatedIndustries: ['tourism', 'restaurants'],
  locales: {
    uz: {
      slug: 'mehmonxona',
      name: 'Mehmonxona',
      summary:
        "Bron, ro'yxatga olish, xonalar holati, uy xo'jaligi va mehmonlar bazasi — mehmonxona uchun bitta tizim.",
      metaTitle: 'Mehmonxona boshqaruv tizimi (PMS) Toshkent | ZOLVI',
      metaDescription:
        "Mehmonxona va hostellar uchun boshqaruv tizimi: bron, ro'yxatga olish, xonalar holati, uy xo'jaligi, mehmonlar CRM'i va to'lovlar. Toshkent.",
      h1: 'Mehmonxona boshqaruv tizimi',
      lead: "Mehmonxona boshqaruv tizimi bronlarni, mehmonlarni ro'yxatga olishni, xonalar holatini va uy xo'jaligi xizmatini bitta joyga yig'adi. Administrator jadval bilan emas, tizim bilan ishlaydi, rahbar esa bandlik va daromadni real vaqtda ko'radi. ZOLVI mehmonxonalar, hostellar, dam olish maskanlari va mehmon uylari tarmoqlari uchun tizim quradi.",
      audience: [
        'Shahar mehmonxonalari va butik-otellar',
        'Hostellar va mehmon uylari',
        'Dam olish maskanlari va sanatoriylar',
        'Bir nechta obyektga ega mehmonxona tarmoqlari',
      ],
      pains: [
        {
          title: 'Ikki marta sotilgan xona',
          text: 'Bronlar telefon, Telegram va onlayn-platformalardan keladi, jadval kech yangilanadi va bitta xona ikki mehmonga beriladi.',
        },
        {
          title: "Ro'yxatga olish uzoq davom etadi",
          text: "Mehmon qabulxonada pasport ma'lumotlari qo'lda yozilguncha kutadi, navbat paydo bo'ladi.",
        },
        {
          title: "Xona tayyormi — noma'lum",
          text: "Administrator farroshlarga qo'ng'iroq qilib, qaysi xona tozalanganini aniqlaydi.",
        },
      ],
      includes: [
        {
          title: 'Bronlar shaxmatkasi',
          text: 'Barcha kanallardan bronlar bitta jadvalda, ikki marta sotishdan himoya, tariflar va mavsumiy narxlar.',
        },
        {
          title: "Tez ro'yxatga olish",
          text: "Mehmon ma'lumotlarini oldindan to'ldirish, hujjatni skanerlash va ro'yxatga olishni tezlashtirish.",
        },
        {
          title: "Uy xo'jaligi",
          text: 'Xonalar holati real vaqtda, farroshlar uchun vazifalar mobil telefonda, texnik nosozliklar haqida xabar.',
        },
        {
          title: "Mehmonlar CRM'i",
          text: 'Mehmonlar tarixi, afzalliklari, qayta tashriflar va sodiqlik dasturi.',
        },
        {
          title: "To'lovlar va hisob",
          text: "Oldindan to'lov, xizmatlar hisobi (restoran, transfer, SPA), Click, Payme va kartalar orqali to'lov.",
        },
        {
          title: 'Tarmoq uchun hisobotlar',
          text: "Bandlik, o'rtacha narx, RevPAR va har bir obyekt bo'yicha daromad — bitta panelda.",
        },
      ],
      sections: [
        {
          h2: "Bronlar bir joyda — ikki marta sotish yo'q",
          paragraphs: [
            "Mehmonxona uchun eng qimmat xato — bitta xonani ikki marta sotish. Tizim barcha bron kanallarini bitta shaxmatkaga yig'adi va xona band bo'lishi bilan uni boshqa kanallarda yopadi.",
            "Onlayn-platformalar (channel manager) bilan integratsiya ularning API'si va shartlariga bog'liq — buni auditda aniqlaymiz. TODO: qaysi bron platformalari bilan integratsiya tayyor ekanini tasdiqlang.",
          ],
        },
        {
          h2: "Ro'yxatga olishni tezlashtirish",
          paragraphs: [
            "Mehmon bronni tasdiqlaganda unga Telegram yoki SMS orqali ma'lumotlarni oldindan to'ldirish havolasi yuboriladi. Kelganda administrator faqat hujjatni tekshiradi va kalitni beradi.",
            'Bu qabulxonadagi navbatni kamaytiradi va mehmonning birinchi taassurotini yaxshilaydi — ayniqsa guruhlar va tur-operatorlar mehmonlari kelganda.',
          ],
        },
        {
          h2: 'Bir nechta obyektga ega tarmoqlar uchun',
          paragraphs: [
            "Tarmoqda har bir obyekt o'z bronlari va xodimlari bilan ishlaydi, boshqaruv kompaniyasi esa barcha obyektlarning bandligi, narxlari va daromadini solishtiradi. Mehmon tarmoqning istalgan obyektiga qayta kelganda, uning tarixi va afzalliklari saqlanib qoladi.",
            'Narx siyosati, tariflar va standartlar markazdan boshqariladi, bu esa yangi obyektlarni tezda tizimga ulash imkonini beradi.',
          ],
        },
      ],
      timeline: '8–12 hafta',
      faq: [
        {
          q: 'Mehmonxona tizimi narxi qancha?',
          a: "Narx obyektlar va xonalar soni, integratsiyalar va modullarga bog'liq. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: 'Booking.com kabi platformalar bilan integratsiya bormi?',
          a: "Integratsiya platforma API'si va shartlariga bog'liq. TODO: qaysi platformalar bilan integratsiya tayyor ekanini tasdiqlang.",
        },
        {
          q: "Restoran va qo'shimcha xizmatlarni ham hisobga oladimi?",
          a: 'Ha, restoran, transfer, SPA va boshqa xizmatlar mehmon hisobiga yoziladi va chiqishda yagona hisob beriladi.',
        },
        {
          q: 'Farroshlar telefon orqali ishlay oladimi?',
          a: "Ha, uy xo'jaligi xodimlari vazifalar va xona holatini mobil telefonda ko'radi va yangilaydi.",
        },
        {
          q: "Eski tizimdan bronlarni ko'chirasizmi?",
          a: "Ha, kelajakdagi bronlar va mehmonlar bazasini ko'chiramiz, o'tish kunini past mavsumga rejalashtiramiz.",
        },
      ],
    },
    ru: {
      slug: 'gostinicy',
      name: 'Гостиницы',
      summary:
        'Брони, заселение, статусы номеров, хаускипинг и база гостей — одна система для отеля.',
      metaTitle: 'Система управления гостиницей (PMS) в Ташкенте | ZOLVI',
      metaDescription:
        'Система управления для гостиниц и хостелов: брони, заселение, статусы номеров, хаускипинг, CRM гостей и оплаты. Разработка в Ташкенте.',
      h1: 'Система управления гостиницей',
      lead: 'Система управления гостиницей собирает в одном месте брони, заселение гостей, статусы номеров и работу хаускипинга. Администратор работает не с таблицей, а с системой, а руководитель видит загрузку и доход в реальном времени. ZOLVI строит системы для гостиниц, хостелов, баз отдыха и сетей гостевых домов.',
      audience: [
        'Городские гостиницы и бутик-отели',
        'Хостелы и гостевые дома',
        'Базы отдыха и санатории',
        'Гостиничные сети с несколькими объектами',
      ],
      pains: [
        {
          title: 'Номер продан дважды',
          text: 'Брони приходят по телефону, в Telegram и с онлайн-площадок, таблица обновляется поздно, и один номер отдают двум гостям.',
        },
        {
          title: 'Долгое заселение',
          text: 'Гость ждёт на ресепшене, пока паспортные данные переписывают вручную, образуется очередь.',
        },
        {
          title: 'Готов ли номер — неизвестно',
          text: 'Администратор звонит горничным, чтобы узнать, какой номер убран.',
        },
      ],
      includes: [
        {
          title: 'Шахматка броней',
          text: 'Брони из всех каналов в одной таблице, защита от овербукинга, тарифы и сезонные цены.',
        },
        {
          title: 'Быстрое заселение',
          text: 'Предварительное заполнение данных гостем, сканирование документа и ускоренная регистрация.',
        },
        {
          title: 'Хаускипинг',
          text: 'Статусы номеров в реальном времени, задачи горничным в телефоне, заявки о технических неисправностях.',
        },
        {
          title: 'CRM гостей',
          text: 'История гостей, предпочтения, повторные визиты и программа лояльности.',
        },
        {
          title: 'Оплаты и счета',
          text: 'Предоплата, учёт услуг (ресторан, трансфер, SPA), оплата через Click, Payme и карты.',
        },
        {
          title: 'Отчёты для сети',
          text: 'Загрузка, средняя цена, RevPAR и доход по каждому объекту — на одной панели.',
        },
      ],
      sections: [
        {
          h2: 'Брони в одном месте — без овербукинга',
          paragraphs: [
            'Самая дорогая ошибка гостиницы — продать один номер дважды. Система собирает все каналы бронирования в одну шахматку и закрывает номер в других каналах, как только он занят.',
            'Интеграция с онлайн-площадками (channel manager) зависит от их API и условий — это уточняем на аудите. TODO: подтвердить, с какими площадками бронирования интеграция готова.',
          ],
        },
        {
          h2: 'Ускоряем заселение',
          paragraphs: [
            'После подтверждения брони гость получает в Telegram или по SMS ссылку для предварительного заполнения данных. По приезде администратор только проверяет документ и выдаёт ключ.',
            'Это сокращает очередь на ресепшене и улучшает первое впечатление гостя — особенно при заезде групп и гостей туроператоров.',
          ],
        },
        {
          h2: 'Для сетей с несколькими объектами',
          paragraphs: [
            'В сети каждый объект работает со своими бронями и персоналом, а управляющая компания сравнивает загрузку, цены и доход всех объектов. Когда гость возвращается в любой объект сети, его история и предпочтения сохраняются.',
            'Ценовая политика, тарифы и стандарты управляются централизованно, что позволяет быстро подключать новые объекты.',
          ],
        },
      ],
      timeline: '8–12 недель',
      faq: [
        {
          q: 'Сколько стоит система для гостиницы?',
          a: 'Стоимость зависит от числа объектов и номеров, интеграций и модулей. Точную смету даём после аудита.',
        },
        {
          q: 'Есть интеграция с площадками вроде Booking.com?',
          a: 'Интеграция зависит от API и условий площадки. TODO: подтвердить, с какими площадками интеграция готова.',
        },
        {
          q: 'Учитываются ресторан и дополнительные услуги?',
          a: 'Да, ресторан, трансфер, SPA и другие услуги записываются на счёт гостя, при выезде выдаётся единый счёт.',
        },
        {
          q: 'Горничные могут работать с телефона?',
          a: 'Да, сотрудники хаускипинга видят задачи и статусы номеров в телефоне и обновляют их.',
        },
        {
          q: 'Перенесёте брони из старой системы?',
          a: 'Да, переносим будущие брони и базу гостей, а день перехода планируем на низкий сезон.',
        },
      ],
    },
    en: {
      slug: 'hotels',
      name: 'Hotels',
      summary:
        'Bookings, check-in, room status, housekeeping and a guest database — one system for your hotel.',
      metaTitle: 'Hotel Management System (PMS) in Tashkent | ZOLVI',
      metaDescription:
        'A management system for hotels and hostels: bookings, check-in, room status, housekeeping, guest CRM and payments. Built in Tashkent, Uzbekistan.',
      h1: 'Hotel management system',
      lead: 'A hotel management system brings bookings, guest check-in, room status and housekeeping into one place. Front desk staff work with a system instead of a spreadsheet, and management sees occupancy and revenue in real time. ZOLVI builds systems for hotels, hostels, resorts and guesthouse networks.',
      audience: [
        'City hotels and boutique hotels',
        'Hostels and guesthouses',
        'Resorts and sanatoriums',
        'Hotel chains with several properties',
      ],
      pains: [
        {
          title: 'A room sold twice',
          text: 'Bookings arrive by phone, Telegram and online platforms, the spreadsheet updates late and one room goes to two guests.',
        },
        {
          title: 'Slow check-in',
          text: 'Guests wait at reception while passport details are copied by hand, and a queue builds up.',
        },
        {
          title: 'Is the room ready? Nobody knows',
          text: 'The front desk calls housekeeping to find out which rooms have been cleaned.',
        },
      ],
      includes: [
        {
          title: 'Booking grid',
          text: 'Bookings from every channel in one grid, overbooking protection, rate plans and seasonal pricing.',
        },
        {
          title: 'Fast check-in',
          text: 'Guests pre-fill their details, documents are scanned and registration is quicker.',
        },
        {
          title: 'Housekeeping',
          text: 'Real-time room status, tasks for housekeepers on their phones and maintenance requests.',
        },
        {
          title: 'Guest CRM',
          text: 'Guest history, preferences, repeat stays and a loyalty program.',
        },
        {
          title: 'Payments and folios',
          text: 'Prepayments, charges for extra services (restaurant, transfer, spa) and payment via Click, Payme and cards.',
        },
        {
          title: 'Chain reporting',
          text: 'Occupancy, average rate, RevPAR and revenue per property — on one dashboard.',
        },
      ],
      sections: [
        {
          h2: 'Bookings in one place — no overbooking',
          paragraphs: [
            'The most expensive mistake a hotel can make is selling one room twice. The system pulls every booking channel into one grid and closes a room on other channels as soon as it is taken.',
            'Integration with online platforms (a channel manager) depends on their APIs and terms — we check this in the audit. TODO: confirm which booking platform integrations are ready.',
          ],
        },
        {
          h2: 'Faster check-in',
          paragraphs: [
            'Once a booking is confirmed, the guest gets a Telegram or SMS link to pre-fill their details. On arrival the front desk simply checks the document and hands over the key.',
            'That shortens the reception queue and improves the guest’s first impression — especially when groups and tour-operator guests arrive.',
          ],
        },
        {
          h2: 'For chains with several properties',
          paragraphs: [
            'In a chain each property works with its own bookings and staff, while the management company compares occupancy, rates and revenue across all of them. When a guest returns to any property, their history and preferences are already there.',
            'Pricing policy, rate plans and standards are managed centrally, so new properties can be connected quickly.',
          ],
        },
      ],
      timeline: '8–12 weeks',
      faq: [
        {
          q: 'How much does a hotel system cost?',
          a: 'It depends on the number of properties and rooms, integrations and modules. We give an exact estimate after the audit.',
        },
        {
          q: 'Do you integrate with platforms like Booking.com?',
          a: 'Integration depends on the platform’s API and terms. TODO: confirm which platform integrations are ready.',
        },
        {
          q: 'Are the restaurant and extra services covered?',
          a: 'Yes, restaurant, transfer, spa and other services are charged to the guest folio, with one bill at check-out.',
        },
        {
          q: 'Can housekeepers work from their phones?',
          a: 'Yes, housekeeping staff see tasks and room status on their phones and update them there.',
        },
        {
          q: 'Will you migrate bookings from our old system?',
          a: 'Yes, we migrate future bookings and the guest database and schedule the switch-over for the low season.',
        },
      ],
    },
  },
}

export default industry
