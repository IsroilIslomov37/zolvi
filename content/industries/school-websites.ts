import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'school-websites',
  kind: 'industry',
  icon: 'school',
  demo: 'telegram-bot',
  plan: 'start',
  relatedServices: ['web-apps', 'telegram-bot', 'crm'],
  relatedIndustries: ['education'],
  locales: {
    uz: {
      slug: 'maktab-va-oquv-markaz-saytlari',
      name: "Maktab va o'quv markaz saytlari",
      summary:
        "Xususiy maktablar va o'quv markazlari uchun tez, ko'p tilli, arizalarni CRM'ga yuboradigan saytlar.",
      metaTitle: "Maktab va o'quv markazi uchun sayt yaratish | ZOLVI",
      metaDescription:
        "Xususiy maktab va o'quv markazi uchun sayt: kurslar, o'qituvchilar, narxlar, onlayn ariza va to'lov, CRM va Telegram bilan bog'lanish. SEO'ga tayyor.",
      h1: "Maktab va o'quv markazi uchun sayt yaratish",
      lead: "Ota-ona maktab yoki o'quv markazini tanlashdan oldin uning saytini telefonda ochadi: kurslar, o'qituvchilar, narxlar va natijalarni ko'radi. ZOLVI xususiy maktablar, o'quv markazlari va bog'chalar uchun tez yuklanadigan, o'zbek va rus tillaridagi, qidiruvda topiladigan va arizalarni to'g'ridan-to'g'ri CRM'ga yuboradigan saytlar yaratadi.",
      audience: [
        'Xususiy maktablar va litseylar',
        "Til va IT o'quv markazlari",
        "Xususiy bog'chalar va bolalar markazlari",
        "Saytini yangilamoqchi bo'lgan ta'lim tarmoqlari",
      ],
      pains: [
        {
          title: 'Sayt telefonda ochilmaydi',
          text: "Eski sayt sekin va mobil telefonga moslashmagan — ota-onalar uni yopib, raqobatchiga o'tadi.",
        },
        {
          title: 'Sayt topilmaydi',
          text: "«Toshkentda ingliz tili kurslari» deb qidirganda sayt Google va Yandex'da ko'rinmaydi.",
        },
        {
          title: "Arizalar email'da yo'qoladi",
          text: "Saytdagi forma xatni pochtaga yuboradi, uni hech kim o'z vaqtida o'qimaydi.",
        },
      ],
      includes: [
        {
          title: 'Kurslar va dasturlar sahifalari',
          text: "Har bir kurs uchun alohida sahifa: dastur, davomiylik, narx, jadval va o'qituvchilar.",
        },
        {
          title: "O'qituvchilar va natijalar",
          text: "O'qituvchilar profillari, o'quvchilar yutuqlari va ota-onalar fikrlari.",
        },
        {
          title: 'Onlayn ariza va sinov darsi',
          text: "Ariza CRM'ga va Telegram'ga darhol tushadi, sinov darsiga yozilish bir necha bosishda.",
        },
        {
          title: "Onlayn to'lov",
          text: "Kurs yoki oylik to'lovni Click va Payme orqali saytda qabul qilish.",
        },
        {
          title: "Ko'p tillilik va SEO",
          text: "O'zbek va rus tillari, har bir sahifa uchun alohida manzil va meta-teglar, mikrorazmetka.",
        },
        {
          title: 'Oson boshqaruv',
          text: "Yangiliklar, e'lonlar, jadval va narxlarni admin paneldan o'zingiz o'zgartirasiz.",
        },
      ],
      sections: [
        {
          h2: "Sayt — o'quvchilar oqimining boshlanishi",
          paragraphs: [
            "Ta'lim xizmatlarini tanlash — uzoq qaror: ota-ona bir necha saytni solishtiradi, fikrlarni o'qiydi va narxlarni taqqoslaydi. Aniq dastur, o'qituvchilar va natijalar ko'rsatilgan sayt ishonch uyg'otadi va arizani tezlashtiradi.",
            'Shuning uchun saytni chiroyli «vizitka» sifatida emas, arizalarni olib keladigan vosita sifatida quramiz: har bir sahifada aniq harakatga chaqiruv va oddiy forma bor.',
          ],
        },
        {
          h2: "Qidiruvdan kelgan o'quvchilar",
          paragraphs: [
            "Har bir kurs va filial uchun alohida sahifa qidiruv tizimlariga aniq so'rovlar bo'yicha ko'rinish imkonini beradi: «Chilonzorda ingliz tili kursi», «IT kurslari bolalar uchun Toshkent». Sahifalar serverda tayyorlanadi va telefonda tez ochiladi.",
            "Saytni Google Search Console, Yandex Webmaster va Google Business Profile bilan ulaymiz, shunda markazingiz xaritada ham ko'rinadi.",
          ],
        },
        {
          h2: "CRM va Telegram bilan bog'langan",
          paragraphs: [
            "Saytdan kelgan har bir ariza darhol CRM'da kartochka bo'lib paydo bo'ladi va administratorga Telegram'da xabar boradi. Hech bir ariza pochtada yo'qolmaydi.",
            "Agar sizda hali CRM bo'lmasa, sayt bilan birga o'quv markazi uchun CRM'ni ham joriy etishimiz mumkin — yoki boshlanishiga arizalarni Telegram-guruhga yuboramiz.",
          ],
        },
      ],
      timeline: '3–5 hafta',
      faq: [
        {
          q: 'Maktab sayti narxi qancha?',
          a: "Sayt «Start» paketiga kiradi — boshlang'ich narx «Narxlar» sahifasida. Onlayn to'lov va CRM integratsiyasi alohida baholanadi.",
        },
        {
          q: "Sayt qancha vaqtda tayyor bo'ladi?",
          a: 'Odatda 3–5 hafta: dizayn, matnlar, ishlab chiqish va qidiruv tizimlariga ulash.',
        },
        {
          q: 'Matnlarni kim yozadi?',
          a: "Tuzilma va SEO-matnlarni biz tayyorlaymiz, kurslar, o'qituvchilar va narxlar bo'yicha faktlarni siz berasiz.",
        },
        {
          q: "Saytni keyin o'zimiz o'zgartira olamizmi?",
          a: "Ha, yangiliklar, kurslar, narxlar va rasmlarni admin paneldan o'zgartirasiz.",
        },
        {
          q: 'Domen va hostingni siz sozlaysizmi?',
          a: 'Ha, domen, hosting, SSL va pochtani sozlashda yordam beramiz.',
        },
        {
          q: "Sayt Google'da qachon ko'rina boshlaydi?",
          a: "Sayt ishga tushgach, uni Google Search Console va Yandex Webmaster'ga ulaymiz va sitemap yuboramiz. Odatda sahifalar bir necha haftada indeksga tushadi; yuqori pozitsiyalar esa raqobat va kontent sifatiga bog'liq.",
        },
      ],
    },
    ru: {
      slug: 'sajty-dlya-shkol',
      name: 'Сайты для школ и учебных центров',
      summary:
        'Быстрые многоязычные сайты для частных школ и учебных центров с заявками прямо в CRM.',
      metaTitle: 'Создание сайта для школы и учебного центра | ZOLVI',
      metaDescription:
        'Сайт для частной школы и учебного центра: курсы, преподаватели, цены, онлайн-заявка и оплата, связка с CRM и Telegram. Готов к SEO.',
      h1: 'Создание сайта для школы и учебного центра',
      lead: 'Прежде чем выбрать школу или учебный центр, родитель открывает его сайт в телефоне: смотрит курсы, преподавателей, цены и результаты. ZOLVI создаёт для частных школ, учебных центров и детских садов быстрые сайты на узбекском и русском, которые находятся в поиске и отправляют заявки прямо в CRM.',
      audience: [
        'Частные школы и лицеи',
        'Языковые и IT учебные центры',
        'Частные детские сады и детские центры',
        'Образовательные сети, которым нужно обновить сайт',
      ],
      pains: [
        {
          title: 'Сайт не открывается на телефоне',
          text: 'Старый сайт медленный и не адаптирован под мобильные — родители закрывают его и уходят к конкуренту.',
        },
        {
          title: 'Сайт не находят',
          text: 'По запросу «курсы английского в Ташкенте» сайта нет ни в Google, ни в Яндексе.',
        },
        {
          title: 'Заявки теряются в почте',
          text: 'Форма на сайте отправляет письмо на почту, которое никто вовремя не читает.',
        },
      ],
      includes: [
        {
          title: 'Страницы курсов и программ',
          text: 'Отдельная страница для каждого курса: программа, длительность, цена, расписание и преподаватели.',
        },
        {
          title: 'Преподаватели и результаты',
          text: 'Профили преподавателей, достижения учеников и отзывы родителей.',
        },
        {
          title: 'Онлайн-заявка и пробный урок',
          text: 'Заявка сразу попадает в CRM и Telegram, запись на пробный урок в несколько кликов.',
        },
        {
          title: 'Онлайн-оплата',
          text: 'Приём оплаты за курс или месяц на сайте через Click и Payme.',
        },
        {
          title: 'Многоязычность и SEO',
          text: 'Узбекский и русский, отдельный адрес и мета-теги для каждой страницы, микроразметка.',
        },
        {
          title: 'Простое управление',
          text: 'Новости, объявления, расписание и цены вы меняете сами в админ-панели.',
        },
      ],
      sections: [
        {
          h2: 'Сайт — начало потока учеников',
          paragraphs: [
            'Выбор образовательных услуг — долгое решение: родитель сравнивает несколько сайтов, читает отзывы и цены. Сайт с понятной программой, преподавателями и результатами вызывает доверие и ускоряет заявку.',
            'Поэтому строим сайт не как красивую «визитку», а как инструмент, который приводит заявки: на каждой странице — понятный призыв к действию и простая форма.',
          ],
        },
        {
          h2: 'Ученики из поиска',
          paragraphs: [
            'Отдельная страница для каждого курса и филиала позволяет находиться в поиске по конкретным запросам: «курсы английского на Чиланзаре», «IT-курсы для детей Ташкент». Страницы рендерятся на сервере и быстро открываются на телефоне.',
            'Подключаем сайт к Google Search Console, Яндекс Вебмастеру и Google Business Profile, чтобы центр был виден и на карте.',
          ],
        },
        {
          h2: 'Связка с CRM и Telegram',
          paragraphs: [
            'Каждая заявка с сайта сразу появляется карточкой в CRM, а администратор получает уведомление в Telegram. Ни одна заявка не потеряется в почте.',
            'Если CRM у вас пока нет, вместе с сайтом можем внедрить CRM для учебного центра — или на старте отправлять заявки в Telegram-группу.',
          ],
        },
      ],
      timeline: '3–5 недель',
      faq: [
        {
          q: 'Сколько стоит сайт для школы?',
          a: 'Сайт входит в пакет «Старт» — стартовая цена на странице «Цены». Онлайн-оплата и интеграция с CRM оцениваются отдельно.',
        },
        {
          q: 'За какой срок будет готов сайт?',
          a: 'Обычно 3–5 недель: дизайн, тексты, разработка и подключение к поисковикам.',
        },
        {
          q: 'Кто пишет тексты?',
          a: 'Структуру и SEO-тексты готовим мы, факты о курсах, преподавателях и ценах даёте вы.',
        },
        {
          q: 'Сможем потом сами менять сайт?',
          a: 'Да, новости, курсы, цены и фото меняются в админ-панели.',
        },
        {
          q: 'Настроите домен и хостинг?',
          a: 'Да, поможем с доменом, хостингом, SSL и почтой.',
        },
        {
          q: 'Когда сайт начнёт появляться в Google?',
          a: 'После запуска подключаем сайт к Google Search Console и Яндекс Вебмастеру и отправляем sitemap. Обычно страницы попадают в индекс за несколько недель, а высокие позиции зависят от конкуренции и качества контента.',
        },
      ],
    },
    en: {
      slug: 'school-websites',
      name: 'Websites for schools and training centers',
      summary:
        'Fast multilingual websites for private schools and training centers that send enquiries straight to the CRM.',
      metaTitle: 'Websites for Schools and Training Centers | ZOLVI',
      metaDescription:
        'A website for a private school or training center: courses, teachers, prices, online enquiries and payments, linked to your CRM and Telegram. SEO-ready.',
      h1: 'Websites for schools and training centers',
      lead: 'Before choosing a school or training center, parents open its website on their phone to see courses, teachers, prices and results. ZOLVI builds fast Uzbek and Russian websites for private schools, training centers and kindergartens that rank in search and send enquiries straight into a CRM.',
      audience: [
        'Private schools and lyceums',
        'Language and coding training centers',
        'Private kindergartens and children’s centers',
        'Education networks that need a new website',
      ],
      pains: [
        {
          title: "The site doesn't work on phones",
          text: 'The old site is slow and not mobile-friendly, so parents close it and go to a competitor.',
        },
        {
          title: "The site can't be found",
          text: 'Search “English courses in Tashkent” and the site is nowhere in Google or Yandex.',
        },
        {
          title: 'Enquiries get lost in email',
          text: 'The website form sends an email that nobody reads in time.',
        },
      ],
      includes: [
        {
          title: 'Course and program pages',
          text: 'A page for every course: syllabus, duration, price, timetable and teachers.',
        },
        {
          title: 'Teachers and results',
          text: 'Teacher profiles, student achievements and parent testimonials.',
        },
        {
          title: 'Online enquiries and trial lessons',
          text: 'Enquiries land in the CRM and Telegram instantly; booking a trial takes a few taps.',
        },
        {
          title: 'Online payment',
          text: 'Accept course or monthly fees on the site via Click and Payme.',
        },
        {
          title: 'Multilingual and SEO',
          text: 'Uzbek and Russian, a separate URL and meta tags for every page, and structured data.',
        },
        {
          title: 'Easy to manage',
          text: 'Update news, announcements, timetables and prices yourself in the admin panel.',
        },
      ],
      sections: [
        {
          h2: 'The website is where new students start',
          paragraphs: [
            'Choosing education is a long decision: parents compare several websites, read reviews and check prices. A site with a clear program, teachers and results builds trust and speeds up the enquiry.',
            'So we build the site not as a pretty business card but as a tool that brings enquiries, with a clear call to action and a simple form on every page.',
          ],
        },
        {
          h2: 'Students from search',
          paragraphs: [
            'A separate page for every course and branch lets you rank for specific searches like “English course in Chilanzar” or “coding courses for kids Tashkent”. Pages are server-rendered and open quickly on phones.',
            'We connect the site to Google Search Console, Yandex Webmaster and Google Business Profile so your center shows up on the map too.',
          ],
        },
        {
          h2: 'Connected to the CRM and Telegram',
          paragraphs: [
            'Every website enquiry appears as a CRM card immediately and the administrator gets a Telegram notification. No enquiry gets lost in an inbox.',
            'If you do not have a CRM yet, we can implement a training center CRM alongside the website — or start by sending enquiries to a Telegram group.',
          ],
        },
      ],
      timeline: '3–5 weeks',
      faq: [
        {
          q: 'How much does a school website cost?',
          a: 'A website is part of the Start package — see the starting price on the Pricing page. Online payment and CRM integration are estimated separately.',
        },
        {
          q: 'How long does it take?',
          a: 'Usually 3–5 weeks: design, copy, development and search engine setup.',
        },
        {
          q: 'Who writes the copy?',
          a: 'We prepare the structure and SEO copy; you provide the facts about courses, teachers and prices.',
        },
        {
          q: 'Can we edit the site ourselves later?',
          a: 'Yes, news, courses, prices and photos are edited in the admin panel.',
        },
        {
          q: 'Will you set up the domain and hosting?',
          a: 'Yes, we help with the domain, hosting, SSL and email.',
        },
        {
          q: 'When will the site start appearing in Google?',
          a: 'After launch we connect the site to Google Search Console and Yandex Webmaster and submit the sitemap. Pages are usually indexed within a few weeks; top positions depend on competition and content quality.',
        },
      ],
    },
  },
}

export default industry
