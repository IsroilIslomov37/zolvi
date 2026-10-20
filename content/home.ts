import type { L10n } from '@/lib/i18n'
import type { Faq } from '@/lib/types'

export type FilterId = 'all' | 'ai' | 'business' | 'industries' | 'products' | 'consulting'
export type ProblemId = 'leads' | 'stock' | 'reports' | 'orders' | 'control'

type HomeCopy = {
  metaTitle: string
  metaDescription: string
  hero: {
    eyebrow: string
    h1: string
    display: string
    lead: string
    note: string
    panelLabel: string
    toOrder: string
    toChaos: string
  }
  /** Hero cards: a problem in "chaos" state, a widget in "order" state. */
  chaosCards: { chaos: string; order: string; value: string }[]
  marquee: { label: string; items: { id: string; label: string }[] }
  beforeAfter: {
    eyebrow: string
    title: string
    intro: string
    before: string
    after: string
    slider: string
    pains: string[]
    metrics: { value: string; label: string }[]
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    filterLabel: string
    filters: Record<FilterId, string>
    demo: string
    close: string
  }
  process: {
    eyebrow: string
    title: string
    intro: string
    steps: { when: string; title: string; items: string[] }[]
  }
  cases: { eyebrow: string; title: string; intro: string }
  stats: {
    eyebrow: string
    title: string
    items: { value: string; label: string }[]
    confirm: string
  }
  testimonials: { eyebrow: string; title: string; intro: string; placeholder: string }
  calculator: {
    eyebrow: string
    title: string
    intro: string
    business: string
    businesses: { id: string; label: string; industryId?: string; serviceId: string }[]
    problem: string
    problems: { id: ProblemId; label: string; effect: string; range: [number, number] }[]
    people: string
    hours: string
    resultTitle: string
    resultHours: string
    resultFte: string
    recommended: string
    disclaimer: string
    cta: string
  }
  pricing: { eyebrow: string; title: string; intro: string; from: string; cta: string; all: string }
  faq: { eyebrow: string; title: string; items: Faq[] }
}

export const home: L10n<HomeCopy> = {
  uz: {
    metaTitle: 'CRM, ERP va biznesni avtomatlashtirish Toshkentda | ZOLVI',
    metaDescription:
      "ZOLVI — Toshkentdagi dasturlash studiyasi: CRM, ERP, POS, Telegram-botlar va AI. Excel, yo'qolgan qo'ng'iroqlar va qog'oz o'rniga bitta tizim. Bepul audit.",
    hero: {
      eyebrow: 'Toshkent · CRM · ERP · AI',
      h1: 'CRM, ERP va biznesni avtomatlashtirish — Toshkent',
      display: 'Shovqinni tizimga aylantiramiz',
      lead: "Tarqoq Excel-jadvallar, javobsiz qo'ng'iroqlar va qog'ozdagi eslatmalar o'rniga — bitta aqlli tizim. Biznesingiz qanday ishlasa, CRM, ERP, avtomatlashtirish va AI'ni xuddi shunday moslab quramiz.",
      note: '30 daqiqa · bepul · majburiyatsiz',
      panelLabel: 'Interaktiv animatsiya: muammolar kartochkalari boshqaruv paneliga aylanadi',
      toOrder: 'Tartibga keltirish',
      toChaos: 'Tartibsizlikka qaytarish',
    },
    chaosCards: [
      { chaos: "12 ta javobsiz qo'ng'iroq", order: "Qo'ng'iroqlar CRM'da", value: '0 javobsiz' },
      { chaos: 'Ombor 3 kundan beri sanalmagan', order: "Ombor qoldig'i", value: 'Real vaqtda' },
      { chaos: 'Hisob-faktura 14 kun kechikdi', order: 'Hisob-fakturalar', value: 'Avtomatik' },
      { chaos: '#482 buyurtma qayerda?', order: '#482 buyurtma', value: "Yo'lda · 14:20" },
      { chaos: 'hisobot_final_v7.xlsx', order: 'Kunlik hisobot', value: 'Tayyor 09:00' },
      { chaos: "WhatsApp: 38 o'qilmagan", order: 'Murojaatlar', value: 'Hammasi taqsimlangan' },
    ],
    marquee: {
      label: 'Biz ishlaydigan sohalar',
      items: [
        { id: 'restaurants', label: 'Restoranlar' },
        { id: 'hotels', label: 'Mehmonxonalar' },
        { id: 'retail', label: 'Chakana savdo' },
        { id: 'education', label: "Ta'lim" },
        { id: 'logistics', label: 'Logistika' },
        { id: 'tourism', label: 'Turizm' },
        { id: 'e-commerce', label: 'E-tijorat' },
        { id: 'clinics', label: 'Tibbiyot' },
        { id: 'manufacturing', label: 'Ishlab chiqarish' },
        { id: 'field-service', label: 'Dala xizmati' },
      ],
    },
    beforeAfter: {
      eyebrow: 'Oldin / keyin',
      title: 'Xuddi shu biznes — ZOLVI bilan 90 kundan keyin',
      intro:
        "Slayderni suring: chap tomonda bugungi kundalik hayot, o'ng tomonda esa jarayonlar bitta tizimga yig'ilgandan keyingi holat.",
      before: 'Oldin',
      after: '90 kundan keyin',
      slider: 'Oldin va keyin holatini solishtirish',
      pains: [
        'Mijozlar 5 ta messenjer va daftarda',
        'Menejer ketsa — mijozlar bazasi ham ketadi',
        "Ombor qoldig'i haftada bir marta sanaladi",
        'Hisobot uchun 2 kun Excel bilan kurash',
        "Rahbar hamma narsani telefonda so'rab bilib oladi",
      ],
      metrics: [
        { value: '+34%', label: 'daromad' },
        { value: '−60%', label: "qo'l mehnati" },
        { value: '×3', label: 'tezroq javob mijozga' },
      ],
    },
    services: {
      eyebrow: 'Xizmatlar',
      title: 'Biznes uchun tizimlar: CRM, ERP, POS, botlar va AI',
      intro:
        "Har bir kartochka alohida sahifaga olib boradi. «Demo» tugmasini bosing — interfeysni shu yerning o'zida sinab ko'rasiz.",
      filterLabel: 'Xizmatlarni saralash',
      filters: {
        all: 'Hammasi',
        ai: 'AI',
        business: 'Biznes tizimlari',
        industries: 'Sohalar',
        products: 'Mahsulotlar',
        consulting: 'Konsalting',
      },
      demo: 'Demo',
      close: 'Yopish',
    },
    process: {
      eyebrow: 'Jarayon',
      title: "Birinchi haftadan natija ko'rinadi",
      intro:
        "Katta «sehrli» relizni oylab kutmaysiz: har hafta ishlaydigan versiyani ko'rasiz va izoh berasiz.",
      steps: [
        {
          when: '1-hafta',
          title: 'Kashfiyot',
          items: ['Jarayonlar xaritasi', 'Muammolar auditi', 'Hajm va narx'],
        },
        {
          when: '2–3-hafta',
          title: 'Dizayn',
          items: ['Bosiladigan prototip', 'Arxitektura', "Ma'lumotlar modeli"],
        },
        {
          when: '3–10-hafta',
          title: 'Ishlab chiqish',
          items: ['Haftalik relizlar', 'Jonli test muhiti', 'Avtomatik testlar'],
        },
        {
          when: 'Ishga tushirish',
          title: 'Ishga tushirish',
          items: ["Ma'lumotlarni ko'chirish", "Xodimlarni o'qitish", 'Birinchi hafta yonma-yon'],
        },
        {
          when: 'Keyin',
          title: "Qo'llab-quvvatlash",
          items: ['Monitoring', 'Tuzatishlar SLA bilan', 'Yangi funksiyalar'],
        },
      ],
    },
    cases: {
      eyebrow: 'Keyslar',
      title: 'Raqamlarda natija',
      intro:
        "Har bir keys: vazifa → yechim → natija → texnologiyalar. To'liq tarixni sahifasida o'qing.",
    },
    stats: {
      eyebrow: 'Raqamlar',
      title: 'ZOLVI raqamlarda',
      confirm: 'tasdiqlash kerak',
      items: [
        { value: '12+', label: 'yillik tajriba' },
        { value: '180+', label: 'ishga tushirilgan tizim' },
        { value: '20', label: 'soha' },
        { value: '99.98%', label: 'uptime' },
      ],
    },
    testimonials: {
      eyebrow: 'Fikrlar',
      title: 'Mijozlarimiz nima deydi',
      intro: 'Har bir fikr — haqiqiy inson, lavozimi va kompaniyasi bilan.',
      placeholder: 'mijoz fikri: matn, ism, lavozim, kompaniya va surat',
    },
    calculator: {
      eyebrow: 'Kalkulyator',
      title: 'Avtomatlashtirish qancha vaqtni qaytaradi?',
      intro:
        "Biznes turi va asosiy muammoni tanlang — taxminiy samarani ko'rasiz. Aniq hisob-kitob bepul auditda.",
      business: 'Biznes turi',
      businesses: [
        {
          id: 'restaurant',
          label: 'Restoran yoki kafe',
          industryId: 'restaurants',
          serviceId: 'pos',
        },
        { id: 'hotel', label: 'Mehmonxona', industryId: 'hotels', serviceId: 'crm' },
        { id: 'education', label: "O'quv markazi", industryId: 'education', serviceId: 'crm' },
        { id: 'retail', label: 'Chakana savdo', industryId: 'retail', serviceId: 'erp' },
        { id: 'clinic', label: 'Klinika', industryId: 'clinics', serviceId: 'crm' },
        {
          id: 'logistics',
          label: 'Logistika yoki dala xizmati',
          industryId: 'logistics',
          serviceId: 'automation',
        },
        { id: 'other', label: 'Boshqa', serviceId: 'custom-software' },
      ],
      problem: 'Asosiy muammo',
      problems: [
        {
          id: 'leads',
          label: "Murojaatlar va qo'ng'iroqlar yo'qoladi",
          effect: "Har bir murojaat CRM'da qayd etiladi, javobsiz qo'ng'iroqlar nazoratda",
          range: [0.25, 0.4],
        },
        {
          id: 'stock',
          label: 'Ombor va qoldiqlar nazoratsiz',
          effect: 'Qoldiqlar real vaqtda, kam qolgan tovar haqida avtomatik ogohlantirish',
          range: [0.3, 0.5],
        },
        {
          id: 'reports',
          label: "Hisobotlar Excel'da qo'lda",
          effect: "Hisobotlar avtomatik yig'iladi, rahbar ularni ertalab Telegram'da oladi",
          range: [0.4, 0.6],
        },
        {
          id: 'orders',
          label: 'Buyurtmalar sekin va chalkash',
          effect: 'Buyurtma kassadan oshxona yoki omborga bir zumda yetib boradi',
          range: [0.25, 0.45],
        },
        {
          id: 'control',
          label: "Filial va xodimlar ustidan nazorat yo'q",
          effect: "Har bir filial va xodim bo'yicha ko'rsatkichlar bitta panelda",
          range: [0.2, 0.35],
        },
      ],
      people: "Qo'lda ish bilan band xodimlar",
      hours: 'Har biri haftasiga necha soat sarflaydi',
      resultTitle: 'Taxminiy samara',
      resultHours: "soat/oy bo'shaydi",
      resultFte: "≈ to'liq stavkadagi xodim",
      recommended: 'Sizga mos yechim',
      disclaimer:
        "Bu taxmin, va'da emas. Koeffitsientlar sizning jarayonlaringizga qarab o'zgaradi — aniq raqamni auditda hisoblaymiz. TODO: koeffitsientlarni real loyihalar ma'lumotlari bilan tasdiqlang.",
      cta: 'Aniq hisob-kitobni olish',
    },
    pricing: {
      eyebrow: 'Narxlar',
      title: 'Ochiq narxlar: paketlar «…dan»',
      intro: "Yakuniy smeta auditdan keyin modullar bo'yicha beriladi. Yashirin to'lovlar yo'q.",
      from: 'dan',
      cta: 'Paketni muhokama qilish',
      all: 'Batafsil narxlar',
    },
    faq: {
      eyebrow: 'FAQ',
      title: "Ko'p so'raladigan savollar",
      items: [
        {
          q: 'CRM tizimi narxi qancha turadi?',
          a: "Narx modullar soni, integratsiyalar va foydalanuvchilar soniga bog'liq. «Narxlar» sahifasida paketlarning boshlang'ich narxlari bor, aniq smetani esa bepul auditdan keyin modullar bo'yicha beramiz.",
        },
        {
          q: 'Nega amoCRM yoki Bitrix24 emas, maxsus tizim?',
          a: "Tayyor CRM tez ishga tushadi, lekin jarayonlaringizni unga moslashga to'g'ri keladi. Maxsus tizim esa sizning jarayonlaringizga moslanadi va har oylik litsenziya to'lovini talab qilmaydi. Ba'zan tayyor CRM yetarli — buni auditda ochiq aytamiz.",
        },
        {
          q: 'Tizim qancha vaqtda ishga tushadi?',
          a: "Telegram-bot yoki bitta modul — 2–4 hafta, CRM yoki POS — 6–10 hafta, ERP va ko'p filialli tizimlar — 3 oydan. Birinchi ishlaydigan versiyani odatda 3–4-haftada ko'rasiz.",
        },
        {
          q: 'Mavjud dasturlarimiz bilan integratsiya qilasizmi?',
          a: "Ha: 1C, telefoniya, Telegram, Click, Payme, Uzum, bank API'lari, Google Sheets va boshqalar. Agar dasturda API bo'lmasa, ma'lumot almashishning boshqa yo'lini topamiz.",
        },
        {
          q: "Ma'lumotlarim xavfsizligi qanday ta'minlanadi?",
          a: "Rollar va kirish huquqlari, shifrlangan ulanish, kundalik zaxira nusxalar. Shaxsiy ma'lumotlarni O'zbekiston hududida saqlash talablarini hisobga olamiz. Manba kodi va ma'lumotlar sizga tegishli.",
        },
        {
          q: "Ishga tushirgandan keyin nima bo'ladi?",
          a: "Birinchi haftada jamoangiz bilan yonma-yon ishlaymiz, keyin qo'llab-quvvatlash paketi bo'yicha monitoring, tuzatishlar va yangi funksiyalarni qo'shib boramiz.",
        },
        {
          q: 'Bepul audit nima beradi?',
          a: "30 daqiqalik qo'ng'iroqda jarayonlaringizni ko'rib chiqamiz, vaqt va pul qayerda yo'qolayotganini ko'rsatamiz va qaysi yechim kerakligini — ba'zan hech qanday dastur kerak emasligini ham — ochiq aytamiz.",
        },
      ],
    },
  },
  ru: {
    metaTitle: 'CRM, ERP и автоматизация бизнеса в Ташкенте | ZOLVI',
    metaDescription:
      'ZOLVI — студия разработки в Ташкенте: CRM, ERP, POS, Telegram-боты и AI. Одна система вместо Excel, пропущенных звонков и бумажек. Бесплатный аудит.',
    hero: {
      eyebrow: 'Ташкент · CRM · ERP · AI',
      h1: 'Разработка CRM, ERP и автоматизация бизнеса — Ташкент',
      display: 'Превращаем хаос в систему',
      lead: 'Вместо разрозненных Excel-таблиц, пропущенных звонков и бумажных заметок — одна умная система. CRM, ERP, автоматизацию и AI мы подстраиваем под то, как работает именно ваш бизнес.',
      note: '30 минут · бесплатно · без обязательств',
      panelLabel: 'Интерактивная анимация: карточки-проблемы складываются в дашборд',
      toOrder: 'Навести порядок',
      toChaos: 'Вернуть хаос',
    },
    chaosCards: [
      { chaos: '12 пропущенных звонков', order: 'Звонки в CRM', value: '0 пропущенных' },
      { chaos: 'Склад не считали 3 дня', order: 'Остатки склада', value: 'В реальном времени' },
      { chaos: 'Счёт задержан на 14 дней', order: 'Счета', value: 'Автоматически' },
      { chaos: 'Где заказ #482?', order: 'Заказ #482', value: 'В пути · 14:20' },
      { chaos: 'отчёт_final_v7.xlsx', order: 'Ежедневный отчёт', value: 'Готов в 09:00' },
      { chaos: 'WhatsApp: 38 непрочитанных', order: 'Обращения', value: 'Все распределены' },
    ],
    marquee: {
      label: 'Отрасли, с которыми работаем',
      items: [
        { id: 'restaurants', label: 'Рестораны' },
        { id: 'hotels', label: 'Гостиницы' },
        { id: 'retail', label: 'Розница' },
        { id: 'education', label: 'Образование' },
        { id: 'logistics', label: 'Логистика' },
        { id: 'tourism', label: 'Туризм' },
        { id: 'e-commerce', label: 'E-commerce' },
        { id: 'clinics', label: 'Медицина' },
        { id: 'manufacturing', label: 'Производство' },
        { id: 'field-service', label: 'Выездной сервис' },
      ],
    },
    beforeAfter: {
      eyebrow: 'До / после',
      title: 'Тот же бизнес — через 90 дней с ZOLVI',
      intro:
        'Потяните ползунок: слева — обычный день сегодня, справа — после того как процессы собраны в одну систему.',
      before: 'До',
      after: 'Через 90 дней',
      slider: 'Сравнить состояние до и после',
      pains: [
        'Клиенты в 5 мессенджерах и блокноте',
        'Ушёл менеджер — ушла и база клиентов',
        'Остатки на складе считают раз в неделю',
        'Отчёт — это 2 дня борьбы с Excel',
        'Руководитель узнаёт всё по телефону',
      ],
      metrics: [
        { value: '+34%', label: 'выручки' },
        { value: '−60%', label: 'ручной работы' },
        { value: '×3', label: 'быстрее ответ клиенту' },
      ],
    },
    services: {
      eyebrow: 'Услуги',
      title: 'Системы для бизнеса: CRM, ERP, POS, боты и AI',
      intro:
        'Каждая карточка ведёт на отдельную страницу. Нажмите «Демо» — и попробуйте интерфейс прямо здесь.',
      filterLabel: 'Фильтр услуг',
      filters: {
        all: 'Все',
        ai: 'AI',
        business: 'Бизнес-системы',
        industries: 'Отрасли',
        products: 'Продукты',
        consulting: 'Консалтинг',
      },
      demo: 'Демо',
      close: 'Закрыть',
    },
    process: {
      eyebrow: 'Процесс',
      title: 'Результат виден с первой недели',
      intro:
        'Никакого «большого релиза» через полгода: каждую неделю вы видите рабочую версию и даёте обратную связь.',
      steps: [
        {
          when: '1-я неделя',
          title: 'Исследование',
          items: ['Карта процессов', 'Аудит проблем', 'Объём и стоимость'],
        },
        {
          when: '2–3-я неделя',
          title: 'Дизайн',
          items: ['Кликабельный прототип', 'Архитектура', 'Модель данных'],
        },
        {
          when: '3–10-я неделя',
          title: 'Разработка',
          items: ['Еженедельные релизы', 'Живой тестовый стенд', 'Автотесты'],
        },
        {
          when: 'Запуск',
          title: 'Запуск',
          items: ['Перенос данных', 'Обучение сотрудников', 'Первая неделя рядом'],
        },
        {
          when: 'Дальше',
          title: 'Поддержка',
          items: ['Мониторинг', 'Исправления по SLA', 'Новые функции'],
        },
      ],
    },
    cases: {
      eyebrow: 'Кейсы',
      title: 'Результат в цифрах',
      intro:
        'Каждый кейс: задача → решение → результат → стек. Полная история — на странице кейса.',
    },
    stats: {
      eyebrow: 'Цифры',
      title: 'ZOLVI в цифрах',
      confirm: 'подтвердить',
      items: [
        { value: '12+', label: 'лет опыта' },
        { value: '180+', label: 'запущенных систем' },
        { value: '20', label: 'отраслей' },
        { value: '99.98%', label: 'uptime' },
      ],
    },
    testimonials: {
      eyebrow: 'Отзывы',
      title: 'Что говорят клиенты',
      intro: 'Каждый отзыв — реальный человек с должностью и компанией.',
      placeholder: 'отзыв клиента: текст, имя, должность, компания и фото',
    },
    calculator: {
      eyebrow: 'Калькулятор',
      title: 'Сколько времени вернёт автоматизация?',
      intro:
        'Выберите тип бизнеса и главную проблему — увидите примерный эффект. Точный расчёт — на бесплатном аудите.',
      business: 'Тип бизнеса',
      businesses: [
        {
          id: 'restaurant',
          label: 'Ресторан или кафе',
          industryId: 'restaurants',
          serviceId: 'pos',
        },
        { id: 'hotel', label: 'Гостиница', industryId: 'hotels', serviceId: 'crm' },
        { id: 'education', label: 'Учебный центр', industryId: 'education', serviceId: 'crm' },
        { id: 'retail', label: 'Розничная торговля', industryId: 'retail', serviceId: 'erp' },
        { id: 'clinic', label: 'Клиника', industryId: 'clinics', serviceId: 'crm' },
        {
          id: 'logistics',
          label: 'Логистика или выездной сервис',
          industryId: 'logistics',
          serviceId: 'automation',
        },
        { id: 'other', label: 'Другое', serviceId: 'custom-software' },
      ],
      problem: 'Главная проблема',
      problems: [
        {
          id: 'leads',
          label: 'Теряются обращения и звонки',
          effect: 'Каждое обращение фиксируется в CRM, пропущенные звонки под контролем',
          range: [0.25, 0.4],
        },
        {
          id: 'stock',
          label: 'Склад и остатки без контроля',
          effect: 'Остатки в реальном времени, автоматические уведомления о дефиците',
          range: [0.3, 0.5],
        },
        {
          id: 'reports',
          label: 'Отчёты вручную в Excel',
          effect: 'Отчёты собираются сами, руководитель получает их утром в Telegram',
          range: [0.4, 0.6],
        },
        {
          id: 'orders',
          label: 'Заказы медленные и путаются',
          effect: 'Заказ мгновенно попадает с кассы на кухню или склад',
          range: [0.25, 0.45],
        },
        {
          id: 'control',
          label: 'Нет контроля над филиалами и сотрудниками',
          effect: 'Показатели по каждому филиалу и сотруднику на одной панели',
          range: [0.2, 0.35],
        },
      ],
      people: 'Сотрудников на ручной работе',
      hours: 'Часов в неделю на каждого',
      resultTitle: 'Примерный эффект',
      resultHours: 'часов в месяц освобождается',
      resultFte: '≈ сотрудника на полной ставке',
      recommended: 'Подходящее решение',
      disclaimer:
        'Это оценка, а не обещание. Коэффициенты зависят от ваших процессов — точную цифру посчитаем на аудите. TODO: подтвердить коэффициенты данными реальных проектов.',
      cta: 'Получить точный расчёт',
    },
    pricing: {
      eyebrow: 'Цены',
      title: 'Открытые цены: пакеты «от …»',
      intro: 'Итоговая смета даётся после аудита по модулям. Без скрытых платежей.',
      from: 'от',
      cta: 'Обсудить пакет',
      all: 'Подробнее о ценах',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Частые вопросы',
      items: [
        {
          q: 'Сколько стоит CRM-система?',
          a: 'Стоимость зависит от числа модулей, интеграций и пользователей. На странице «Цены» указаны стартовые цены пакетов, а точную смету по модулям мы даём после бесплатного аудита.',
        },
        {
          q: 'Почему заказная система, а не amoCRM или Bitrix24?',
          a: 'Готовая CRM запускается быстро, но под неё приходится подстраивать процессы. Заказная система подстраивается под вас и не требует ежемесячной оплаты лицензий. Иногда готовой CRM достаточно — на аудите скажем об этом честно.',
        },
        {
          q: 'За какой срок запускается система?',
          a: 'Telegram-бот или один модуль — 2–4 недели, CRM или POS — 6–10 недель, ERP и системы для сети филиалов — от 3 месяцев. Первую рабочую версию вы обычно видите на 3–4-й неделе.',
        },
        {
          q: 'Интегрируетесь с нашими программами?',
          a: 'Да: 1С, телефония, Telegram, Click, Payme, Uzum, банковские API, Google Sheets и другие. Если у программы нет API, найдём другой способ обмена данными.',
        },
        {
          q: 'Как обеспечивается безопасность данных?',
          a: 'Роли и права доступа, шифрованное соединение, ежедневные резервные копии. Учитываем требования о хранении персональных данных на территории Узбекистана. Исходный код и данные принадлежат вам.',
        },
        {
          q: 'Что после запуска?',
          a: 'Первую неделю работаем рядом с вашей командой, дальше по пакету поддержки — мониторинг, исправления и новые функции.',
        },
        {
          q: 'Что даёт бесплатный аудит?',
          a: 'За 30 минут разбираем ваши процессы, показываем, где теряются время и деньги, и честно говорим, какое решение нужно — иногда и то, что программа вам пока не нужна.',
        },
      ],
    },
  },
  en: {
    metaTitle: 'CRM, ERP & Business Automation in Tashkent | ZOLVI',
    metaDescription:
      'ZOLVI is a Tashkent software studio building CRM, ERP, POS, Telegram bots and AI. One system instead of Excel, missed calls and paper. Free audit.',
    hero: {
      eyebrow: 'Tashkent · CRM · ERP · AI',
      h1: 'CRM, ERP and business automation — Tashkent',
      display: 'We turn noise into systems',
      lead: 'Scattered spreadsheets, missed calls and paper notes become one smart system. We tailor CRM, ERP, automation and AI to the way your business actually works.',
      note: '30 minutes · free · no commitment',
      panelLabel: 'Interactive animation: problem cards line up into a dashboard',
      toOrder: 'Bring order',
      toChaos: 'Back to chaos',
    },
    chaosCards: [
      { chaos: '12 missed calls', order: 'Calls in CRM', value: '0 missed' },
      { chaos: 'Stock not counted for 3 days', order: 'Inventory', value: 'Real time' },
      { chaos: 'Invoice 14 days late', order: 'Invoices', value: 'Automatic' },
      { chaos: 'Where is order #482?', order: 'Order #482', value: 'On the way · 14:20' },
      { chaos: 'report_final_v7.xlsx', order: 'Daily report', value: 'Ready at 09:00' },
      { chaos: 'WhatsApp: 38 unread', order: 'Requests', value: 'All assigned' },
    ],
    marquee: {
      label: 'Industries we work with',
      items: [
        { id: 'restaurants', label: 'Restaurants' },
        { id: 'hotels', label: 'Hotels' },
        { id: 'retail', label: 'Retail' },
        { id: 'education', label: 'Education' },
        { id: 'logistics', label: 'Logistics' },
        { id: 'tourism', label: 'Tourism' },
        { id: 'e-commerce', label: 'E-commerce' },
        { id: 'clinics', label: 'Healthcare' },
        { id: 'manufacturing', label: 'Manufacturing' },
        { id: 'field-service', label: 'Field service' },
      ],
    },
    beforeAfter: {
      eyebrow: 'Before / after',
      title: 'The same business — 90 days after ZOLVI',
      intro:
        'Drag the slider: on the left, an ordinary day today; on the right, the same day once processes live in one system.',
      before: 'Before',
      after: 'After 90 days',
      slider: 'Compare before and after',
      pains: [
        'Customers spread across 5 messengers and a notebook',
        'A manager leaves — the customer base leaves too',
        'Stock is counted once a week',
        'A report means 2 days of fighting Excel',
        'The owner learns everything by phone',
      ],
      metrics: [
        { value: '+34%', label: 'revenue' },
        { value: '−60%', label: 'manual work' },
        { value: '×3', label: 'faster replies to customers' },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Business systems: CRM, ERP, POS, bots and AI',
      intro: 'Every card leads to its own page. Press “Demo” to try the interface right here.',
      filterLabel: 'Filter services',
      filters: {
        all: 'All',
        ai: 'AI',
        business: 'Business systems',
        industries: 'Industries',
        products: 'Products',
        consulting: 'Consulting',
      },
      demo: 'Demo',
      close: 'Close',
    },
    process: {
      eyebrow: 'Process',
      title: 'Results from week one',
      intro:
        'No “big bang” release six months later: every week you see a working version and give feedback.',
      steps: [
        {
          when: 'Week 1',
          title: 'Discovery',
          items: ['Process map', 'Problem audit', 'Scope and price'],
        },
        {
          when: 'Weeks 2–3',
          title: 'Design',
          items: ['Clickable prototype', 'Architecture', 'Data model'],
        },
        {
          when: 'Weeks 3–10',
          title: 'Development',
          items: ['Weekly releases', 'Live staging', 'Automated tests'],
        },
        {
          when: 'Launch',
          title: 'Launch',
          items: ['Data migration', 'Staff training', 'First week on site'],
        },
        {
          when: 'After',
          title: 'Support',
          items: ['Monitoring', 'Fixes under SLA', 'New features'],
        },
      ],
    },
    cases: {
      eyebrow: 'Case studies',
      title: 'Results in numbers',
      intro: 'Each case: task → solution → result → stack. Read the full story on its page.',
    },
    stats: {
      eyebrow: 'Numbers',
      title: 'ZOLVI in numbers',
      confirm: 'to confirm',
      items: [
        { value: '12+', label: 'years of experience' },
        { value: '180+', label: 'systems launched' },
        { value: '20', label: 'industries' },
        { value: '99.98%', label: 'uptime' },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What clients say',
      intro: 'Every testimonial is a real person with a role and a company.',
      placeholder: 'client testimonial: text, name, role, company and photo',
    },
    calculator: {
      eyebrow: 'Calculator',
      title: 'How much time will automation give back?',
      intro:
        'Choose your business type and main problem to see an estimated effect. The exact numbers come from the free audit.',
      business: 'Business type',
      businesses: [
        {
          id: 'restaurant',
          label: 'Restaurant or cafe',
          industryId: 'restaurants',
          serviceId: 'pos',
        },
        { id: 'hotel', label: 'Hotel', industryId: 'hotels', serviceId: 'crm' },
        { id: 'education', label: 'Training center', industryId: 'education', serviceId: 'crm' },
        { id: 'retail', label: 'Retail', industryId: 'retail', serviceId: 'erp' },
        { id: 'clinic', label: 'Clinic', industryId: 'clinics', serviceId: 'crm' },
        {
          id: 'logistics',
          label: 'Logistics or field service',
          industryId: 'logistics',
          serviceId: 'automation',
        },
        { id: 'other', label: 'Other', serviceId: 'custom-software' },
      ],
      problem: 'Main problem',
      problems: [
        {
          id: 'leads',
          label: 'Requests and calls get lost',
          effect: 'Every request is logged in the CRM, missed calls are under control',
          range: [0.25, 0.4],
        },
        {
          id: 'stock',
          label: 'Inventory is out of control',
          effect: 'Real-time stock levels and automatic low-stock alerts',
          range: [0.3, 0.5],
        },
        {
          id: 'reports',
          label: 'Reports are built by hand in Excel',
          effect: 'Reports build themselves and arrive in Telegram every morning',
          range: [0.4, 0.6],
        },
        {
          id: 'orders',
          label: 'Orders are slow and get mixed up',
          effect: 'An order goes from the till to the kitchen or warehouse instantly',
          range: [0.25, 0.45],
        },
        {
          id: 'control',
          label: 'No visibility into branches and staff',
          effect: 'Metrics for every branch and employee on one dashboard',
          range: [0.2, 0.35],
        },
      ],
      people: 'Staff doing manual work',
      hours: 'Hours per week each',
      resultTitle: 'Estimated effect',
      resultHours: 'hours freed per month',
      resultFte: '≈ full-time employees',
      recommended: 'Recommended solution',
      disclaimer:
        'An estimate, not a promise. The coefficients depend on your processes — we calculate the exact figure during the audit. TODO: confirm the coefficients with real project data.',
      cta: 'Get an exact estimate',
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Open pricing: packages “from …”',
      intro: 'The final estimate is broken down by module after the audit. No hidden fees.',
      from: 'from',
      cta: 'Discuss this package',
      all: 'Full pricing',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How much does a CRM system cost?',
          a: 'It depends on the number of modules, integrations and users. The Pricing page lists starting prices for each package; we give an exact per-module estimate after the free audit.',
        },
        {
          q: 'Why a custom system instead of amoCRM or Bitrix24?',
          a: 'An off-the-shelf CRM is quick to start, but you end up bending your processes to fit it. A custom system fits you and has no monthly license fees. Sometimes an off-the-shelf CRM is enough — we will tell you so during the audit.',
        },
        {
          q: 'How long does it take to launch?',
          a: 'A Telegram bot or a single module takes 2–4 weeks, a CRM or POS 6–10 weeks, ERP and multi-branch systems from 3 months. You usually see the first working version in week 3–4.',
        },
        {
          q: 'Do you integrate with our existing software?',
          a: 'Yes: 1C, telephony, Telegram, Click, Payme, Uzum, bank APIs, Google Sheets and more. If a program has no API, we find another way to exchange data.',
        },
        {
          q: 'How is my data kept secure?',
          a: 'Roles and permissions, encrypted connections and daily backups. We follow the requirement to store personal data of Uzbek citizens inside Uzbekistan. The source code and data belong to you.',
        },
        {
          q: 'What happens after launch?',
          a: 'For the first week we work side by side with your team, then the support plan covers monitoring, fixes and new features.',
        },
        {
          q: 'What does the free audit give me?',
          a: 'In a 30-minute call we review your processes, show where time and money leak, and tell you honestly which solution you need — sometimes that you need no software yet.',
        },
      ],
    },
  },
}
