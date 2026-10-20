import type { Service } from '@/lib/types'

const service: Service = {
  id: 'custom-software',
  kind: 'service',
  category: 'consulting',
  icon: 'code',
  demo: 'crm',
  caseId: 'field-service-platform',
  plan: 'enterprise',
  relatedServices: ['web-apps', 'saas', 'erp', 'support'],
  relatedIndustries: ['manufacturing', 'logistics', 'field-service', 'tourism'],
  locales: {
    uz: {
      slug: 'maxsus-dasturiy-taminot',
      name: "Maxsus dasturiy ta'minot",
      summary: 'Tayyor dastur mos kelmaganda — jarayoningiz uchun noldan quriladigan tizim.',
      metaTitle: "Maxsus dasturiy ta'minot ishlab chiqish Toshkent | ZOLVI",
      metaDescription:
        "Biznes uchun maxsus dasturiy ta'minot ishlab chiqish: kashfiyot, prototip, haftalik relizlar, avtomatik testlar va kod sizga tegishli. Toshkent.",
      h1: "Maxsus dasturiy ta'minot ishlab chiqish",
      lead: "Ba'zi jarayonlar hech qanday tayyor dasturga sig'maydi: noyob ishlab chiqarish texnologiyasi, murakkab narxlash, o'ziga xos logistika. Bunday holatda maxsus dasturiy ta'minot raqobat ustunligiga aylanadi. ZOLVI uni kashfiyot bosqichidan boshlab, haftalik relizlar bilan va manba kodi sizga tegishli bo'lgan holda ishlab chiqadi.",
      audience: [
        "Jarayonlari tayyor CRM yoki ERP'ga sig'maydigan kompaniyalar",
        "Bir nechta dasturni birlashtirib, bitta tizimga o'tmoqchi bo'lgan bizneslar",
        "Eski, qo'llab-quvvatlanmaydigan tizimini almashtirishi kerak bo'lgan kompaniyalar",
        "Texnik jamoasi yo'q, lekin murakkab tizim kerak bo'lgan tashkilotlar",
      ],
      pains: [
        {
          title: 'Tayyor dasturga moslashish',
          text: "Jamoa dastur cheklovlarini aylanib o'tish uchun Excel va qo'lda ishlardan foydalanadi — dastur yordam o'rniga to'sqinlik qiladi.",
        },
        {
          title: 'Eski tizim «qora quti»',
          text: "Tizimni yozgan dasturchi ketgan, hujjatlar yo'q, har bir o'zgarish yangi xatolarni keltirib chiqaradi.",
        },
        {
          title: 'Avvalgi loyiha muvaffaqiyatsiz tugagan',
          text: "Muddatlar o'tib ketgan, byudjet oshgan, natija esa kutilganidek emas — ishonch yo'qolgan.",
        },
      ],
      includes: [
        {
          title: 'Kashfiyot bosqichi',
          text: 'Jarayonlar xaritasi, foydalanuvchilar bilan intervyular, talablar va loyiha hajmi — kod yozishdan oldin.',
        },
        {
          title: 'Prototip va dizayn',
          text: "Bosiladigan prototip va interfeys dizayni: tizimni qurilishidan oldin «ushlab ko'rasiz».",
        },
        {
          title: 'Arxitektura',
          text: "Ma'lumotlar modeli, texnologiyalar tanlovi va kengayish rejasi — yillar davomida ishlashi uchun.",
        },
        {
          title: 'Haftalik relizlar',
          text: "Har hafta jonli test muhitida yangi versiya, siz izoh berasiz va ustuvorliklarni o'zgartirasiz.",
        },
        {
          title: 'Sifat va testlar',
          text: 'Avtomatik testlar, kod tekshiruvi va xavfsizlik amaliyotlari — har bir relizda.',
        },
        {
          title: 'Hujjatlar va kod topshirish',
          text: "Manba kodi, hujjatlar va kirish huquqlari sizga topshiriladi — hech qanday qaramlik yo'q.",
        },
      ],
      sections: [
        {
          h2: 'Loyiha xatarlarini qanday kamaytiramiz',
          paragraphs: [
            "Dasturiy loyihalar ko'pincha noaniq talablar va «hammasi bir kunda» ishga tushirish tufayli muvaffaqiyatsiz bo'ladi. Shuning uchun biz kashfiyot bosqichi bilan boshlaymiz va loyihani har biri ishlaydigan natija beradigan kichik bosqichlarga bo'lamiz.",
            "Har hafta siz real ishlaydigan versiyani ko'rasiz. Agar biror narsa noto'g'ri yo'nalishda ketsa, buni oylar o'tib emas, bir haftada bilib olamiz.",
          ],
        },
        {
          h2: 'Kod sizga tegishli',
          paragraphs: [
            "Maxsus tizim — bu sizning aktivingiz. Shartnomada manba kodi va ma'lumotlarga bo'lgan huquqlar sizga o'tishi yoziladi, kod tushunarli tuzilma va hujjatlar bilan topshiriladi.",
            "Shu tufayli kelajakda tizimni o'z jamoangiz yoki boshqa pudratchi bilan rivojlantirishingiz mumkin. Biz esa qo'llab-quvvatlash bo'yicha hamkor bo'lib qolishni taklif qilamiz.",
          ],
        },
        {
          h2: "Maxsus dasturiy ta'minot narxi qanday shakllanadi",
          paragraphs: [
            "Narx kashfiyot bosqichi natijalariga asoslanadi: jarayonlar xaritasi, foydalanuvchi rollari, integratsiyalar va ma'lumotlar hajmi. Shu bosqichdan keyin loyiha modullarga bo'linadi va har bir modulning narxi va muddati alohida ko'rsatiladi.",
            "Bunday yondashuv byudjetni boshqarish imkonini beradi: eng muhim modullardan boshlaysiz, qolganlarini esa birinchi natijalarni ko'rganingizdan keyin rejalashtirasiz.",
          ],
        },
      ],
      timeline: '3 oydan',
      faq: [
        {
          q: "Maxsus dasturiy ta'minot narxi qancha?",
          a: "Narx loyiha hajmiga bog'liq va kashfiyot bosqichidan keyin aniqlanadi. Odatda «Korporativ» paketi doirasida; kashfiyot bosqichining o'zi alohida baholanishi mumkin.",
        },
        {
          q: 'Qanday texnologiyalardan foydalanasiz?',
          a: "Vazifaga qarab: TypeScript, React/Next.js, Node.js, Python, PostgreSQL, mobil ilovalar uchun kross-platforma texnologiyalar. Mashhur va qo'llab-quvvatlanadigan stekni tanlaymiz.",
        },
        {
          q: "Loyiha davomida talablar o'zgarsa-chi?",
          a: "Bu normal holat. Haftalik relizlar bilan ishlaganimiz uchun ustuvorliklarni har hafta o'zgartirish mumkin, hajm va narx ochiq qayta ko'rib chiqiladi.",
        },
        {
          q: "Eski tizimdan ko'chishga yordam berasizmi?",
          a: "Ha, ma'lumotlarni ko'chiramiz va o'tish davrida ikki tizimni parallel ishlatish rejasini tuzamiz.",
        },
        {
          q: 'NDA imzolaysizmi?',
          a: 'Ha, kashfiyot bosqichidan oldin maxfiylik shartnomasini imzolashimiz mumkin.',
        },
      ],
    },
    ru: {
      slug: 'zakaznoe-po',
      name: 'Заказное ПО',
      summary: 'Когда готовые программы не подходят — система, построенная с нуля под ваш процесс.',
      metaTitle: 'Разработка заказного ПО в Ташкенте | ZOLVI',
      metaDescription:
        'Разработка программного обеспечения на заказ: исследование, прототип, еженедельные релизы, автотесты, код принадлежит вам. Разработка ПО в Ташкенте.',
      h1: 'Разработка программного обеспечения на заказ',
      lead: 'Некоторые процессы не помещаются ни в одну готовую программу: уникальная технология производства, сложное ценообразование, особая логистика. Тогда заказное ПО становится конкурентным преимуществом. ZOLVI разрабатывает его начиная с этапа исследования, еженедельными релизами и с передачей исходного кода вам.',
      audience: [
        'Компании, чьи процессы не помещаются в готовую CRM или ERP',
        'Бизнес, который хочет объединить несколько программ в одну систему',
        'Компании, которым нужно заменить устаревшую систему без поддержки',
        'Организации без своей IT-команды, которым нужна сложная система',
      ],
      pains: [
        {
          title: 'Подстройка под готовую программу',
          text: 'Команда обходит ограничения программы через Excel и ручную работу — программа мешает вместо того, чтобы помогать.',
        },
        {
          title: 'Старая система — «чёрный ящик»',
          text: 'Разработчик ушёл, документации нет, каждое изменение порождает новые ошибки.',
        },
        {
          title: 'Прошлый проект провалился',
          text: 'Сроки сорваны, бюджет превышен, результат не тот — доверия больше нет.',
        },
      ],
      includes: [
        {
          title: 'Этап исследования',
          text: 'Карта процессов, интервью с пользователями, требования и объём проекта — до написания кода.',
        },
        {
          title: 'Прототип и дизайн',
          text: 'Кликабельный прототип и дизайн интерфейса: вы «трогаете» систему до начала разработки.',
        },
        {
          title: 'Архитектура',
          text: 'Модель данных, выбор технологий и план масштабирования — чтобы система работала годами.',
        },
        {
          title: 'Еженедельные релизы',
          text: 'Каждую неделю новая версия на живом тестовом стенде, вы даёте обратную связь и меняете приоритеты.',
        },
        {
          title: 'Качество и тесты',
          text: 'Автотесты, код-ревью и практики безопасности — в каждом релизе.',
        },
        {
          title: 'Документация и передача кода',
          text: 'Исходный код, документация и доступы передаются вам — никакой зависимости.',
        },
      ],
      sections: [
        {
          h2: 'Как снижаем риски проекта',
          paragraphs: [
            'Программные проекты чаще всего проваливаются из-за размытых требований и запуска «всего сразу». Поэтому начинаем с этапа исследования и делим проект на небольшие этапы, каждый из которых даёт работающий результат.',
            'Каждую неделю вы видите реально работающую версию. Если что-то идёт не туда, это становится понятно через неделю, а не через месяцы.',
          ],
        },
        {
          h2: 'Код принадлежит вам',
          paragraphs: [
            'Заказная система — ваш актив. В договоре прописывается переход прав на исходный код и данные, код передаётся с понятной структурой и документацией.',
            'Благодаря этому в будущем систему можно развивать своей командой или с другим подрядчиком. Мы же предлагаем остаться партнёром по поддержке.',
          ],
        },
        {
          h2: 'Как формируется стоимость заказного ПО',
          paragraphs: [
            'Цена основывается на результатах этапа исследования: карта процессов, роли пользователей, интеграции и объём данных. После него проект делится на модули, и для каждого отдельно указываются цена и срок.',
            'Такой подход позволяет управлять бюджетом: начинаете с самых важных модулей, а остальные планируете, увидев первые результаты.',
          ],
        },
      ],
      timeline: 'от 3 месяцев',
      faq: [
        {
          q: 'Сколько стоит заказное ПО?',
          a: 'Стоимость зависит от объёма и определяется после этапа исследования. Обычно в рамках пакета «Корпоративный»; само исследование может оцениваться отдельно.',
        },
        {
          q: 'Какие технологии используете?',
          a: 'По задаче: TypeScript, React/Next.js, Node.js, Python, PostgreSQL, кроссплатформенные технологии для мобильных приложений. Выбираем популярный и поддерживаемый стек.',
        },
        {
          q: 'Что если требования изменятся по ходу проекта?',
          a: 'Это нормально. Благодаря еженедельным релизам приоритеты можно менять каждую неделю, объём и цена пересматриваются открыто.',
        },
        {
          q: 'Поможете с переходом со старой системы?',
          a: 'Да, переносим данные и составляем план параллельной работы двух систем на переходный период.',
        },
        {
          q: 'Подписываете NDA?',
          a: 'Да, можем подписать соглашение о конфиденциальности до этапа исследования.',
        },
      ],
    },
    en: {
      slug: 'custom-software',
      name: 'Custom software',
      summary:
        'When no off-the-shelf product fits — a system built from scratch around your process.',
      metaTitle: 'Custom Software Development in Tashkent | ZOLVI',
      metaDescription:
        'Custom software development: discovery, prototype, weekly releases, automated tests, and the code belongs to you. Software development in Tashkent.',
      h1: 'Custom software development',
      lead: 'Some processes fit no off-the-shelf product: a unique production technology, complex pricing, unusual logistics. That is where custom software becomes a competitive advantage. ZOLVI builds it starting with discovery, in weekly releases, and hands the source code over to you.',
      audience: [
        'Companies whose processes do not fit a standard CRM or ERP',
        'Businesses that want to merge several tools into one system',
        'Companies replacing an outdated, unsupported system',
        'Organizations without an in-house tech team that need a complex system',
      ],
      pains: [
        {
          title: 'Bending to fit off-the-shelf software',
          text: 'The team works around the software’s limits with spreadsheets and manual steps — the tool gets in the way instead of helping.',
        },
        {
          title: 'The old system is a black box',
          text: 'The developer who wrote it is gone, there is no documentation and every change causes new bugs.',
        },
        {
          title: 'A previous project failed',
          text: 'Deadlines slipped, the budget overran and the result missed the mark — trust is gone.',
        },
      ],
      includes: [
        {
          title: 'Discovery phase',
          text: 'Process map, user interviews, requirements and scope — before any code is written.',
        },
        {
          title: 'Prototype and design',
          text: 'A clickable prototype and UI design, so you can try the system before it is built.',
        },
        {
          title: 'Architecture',
          text: 'Data model, technology choice and a scaling plan — so the system lasts for years.',
        },
        {
          title: 'Weekly releases',
          text: 'A new version on a live staging environment every week; you give feedback and reshuffle priorities.',
        },
        {
          title: 'Quality and testing',
          text: 'Automated tests, code review and security practices in every release.',
        },
        {
          title: 'Documentation and code handover',
          text: 'Source code, documentation and access are handed to you — no lock-in.',
        },
      ],
      sections: [
        {
          h2: 'How we reduce project risk',
          paragraphs: [
            'Software projects most often fail because of vague requirements and a “big bang” launch. So we start with discovery and split the project into small stages, each delivering a working result.',
            'Every week you see a version that actually works. If something is heading the wrong way, you find out within a week, not months later.',
          ],
        },
        {
          h2: 'The code belongs to you',
          paragraphs: [
            'A custom system is your asset. The contract transfers the rights to the source code and data to you, and the code is handed over with a clear structure and documentation.',
            'That means you can later develop the system with your own team or another vendor. We offer to stay on as your support partner.',
          ],
        },
        {
          h2: 'How the price of custom software is set',
          paragraphs: [
            'Price is based on the discovery results: the process map, user roles, integrations and data volume. After discovery the project is split into modules, each with its own price and timeline.',
            'That keeps the budget under control: you start with the most important modules and plan the rest once you have seen the first results.',
          ],
        },
      ],
      timeline: 'from 3 months',
      faq: [
        {
          q: 'How much does custom software cost?',
          a: 'It depends on scope and is fixed after discovery. Usually within the Enterprise package; discovery itself may be priced separately.',
        },
        {
          q: 'Which technologies do you use?',
          a: 'Depending on the task: TypeScript, React/Next.js, Node.js, Python, PostgreSQL and cross-platform mobile tech. We pick a popular, well-supported stack.',
        },
        {
          q: 'What if requirements change mid-project?',
          a: 'That is normal. With weekly releases priorities can change every week, and scope and price are reviewed openly.',
        },
        {
          q: 'Will you help us move off our old system?',
          a: 'Yes, we migrate the data and plan a period where both systems run in parallel.',
        },
        {
          q: 'Do you sign NDAs?',
          a: 'Yes, we can sign a non-disclosure agreement before discovery starts.',
        },
      ],
    },
  },
}

export default service
