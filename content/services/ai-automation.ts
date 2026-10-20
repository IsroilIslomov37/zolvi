import type { Service } from '@/lib/types'

const service: Service = {
  id: 'ai-automation',
  kind: 'service',
  category: 'ai',
  icon: 'sparkles',
  demo: 'ai',
  plan: 'business',
  relatedServices: ['ai', 'automation', 'telegram-bot', 'crm'],
  relatedIndustries: ['clinics', 'e-commerce', 'hotels', 'restaurants'],
  locales: {
    uz: {
      slug: 'ai-avtomatlashtirish',
      name: 'AI-avtomatlashtirish',
      summary:
        'Murojaatlar, hujjatlar va hisobotlar ustidagi rutin ishni AI-agentlar bajaradi, xodim faqat tasdiqlaydi.',
      metaTitle: 'AI-avtomatlashtirish: AI-agentlar biznes uchun | ZOLVI',
      metaDescription:
        'AI-avtomatlashtirish: AI-agentlar murojaatlarga javob beradi, hujjatlarni kiritadi va hisobot yozadi. CRM va Telegram bilan integratsiya. Toshkent.',
      h1: 'AI-avtomatlashtirish — rutin ishni AI-agentlarga topshiring',
      lead: "AI-avtomatlashtirish oddiy avtomatlashtirishdan bir qadam oldinda: qat'iy qoidalar o'rniga sun'iy intellekt matnni tushunadi, qaror qabul qilish uchun tayyorgarlik ko'radi va harakatni bajaradi. Masalan, mijoz xabarini o'qib, CRM'da bitim ochadi, javob yozadi va menejerga vazifa qo'yadi. ZOLVI bunday AI-agentlarni sizning tizimlaringizga ulaydi.",
      audience: [
        "Telegram, Instagram va telefon orqali ko'p murojaat oladigan bizneslar",
        'Har kuni bir xil xat, javob va hisobotlarni yozadigan jamoalar',
        "CRM yoki ERP'si bor, lekin ma'lumot kiritishga hali ham ko'p vaqt sarflaydigan kompaniyalar",
        "Operatorlar sonini ko'paytirmasdan o'sishni xohlaydigan kompaniyalar",
      ],
      pains: [
        {
          title: "Operatorlar «nusxa-ko'chirish» bilan band",
          text: "Mijoz xabaridagi ism, telefon va buyurtmani CRM'ga qo'lda ko'chirish — har bir murojaatga bir necha daqiqa.",
        },
        {
          title: 'Javob sifati har xil',
          text: "Bir operator batafsil javob beradi, boshqasi — qisqa va xato bilan. Mijoz tajribasi xodimga bog'liq bo'lib qoladi.",
        },
        {
          title: 'Hisobotlarni hech kim yozmaydi',
          text: "Kunlik xulosa, qo'ng'iroqlar tahlili va shikoyatlar sharhi kerak, lekin ularga vaqt yo'q.",
        },
      ],
      includes: [
        {
          title: 'AI-agent murojaatlar uchun',
          text: "Xabarni o'qiydi, ma'lumotlarni ajratib CRM'ga yozadi, javob loyihasini tayyorlaydi va kerakli xodimga biriktiradi.",
        },
        {
          title: "Qo'ng'iroqlar tahlili",
          text: "Qo'ng'iroq yozuvlari matnga aylantiriladi, qisqa xulosa va keyingi qadam CRM kartochkasiga yoziladi.",
        },
        {
          title: 'Hujjatlar oqimi',
          text: "Email va Telegram orqali kelgan hujjatlar avtomatik o'qiladi, tekshiriladi va tizimga kiritiladi.",
        },
        {
          title: 'Kunlik AI-xulosalar',
          text: "Rahbar har kuni ertalab savdo, shikoyatlar va muammolar bo'yicha qisqa xulosani Telegram'da oladi.",
        },
        {
          title: 'Inson nazorati',
          text: "AI faqat ruxsat etilgan harakatlarni bajaradi; muhim qadamlar uchun xodim tasdig'i so'raladi.",
        },
        {
          title: 'Integratsiyalar',
          text: 'CRM, ERP, Telegram, Instagram, IP-telefoniya, Google Workspace va 1C bilan ishlaydi.',
        },
      ],
      sections: [
        {
          h2: 'Oddiy avtomatlashtirishdan farqi nimada',
          paragraphs: [
            "Oddiy avtomatlashtirish «agar A bo'lsa — B qil» qoidasi bilan ishlaydi va tuzilgan ma'lumotlar bilan yaxshi ishlaydi. Lekin mijoz xabari, shikoyat yoki skanerlangan hujjat tuzilmagan matn — bu yerda qoidalar ojiz qoladi.",
            "AI-agent matnni tushunadi: xabardan buyurtmani, hujjatdan summani, qo'ng'iroqdan muammoni ajratib oladi. Shundan keyin oddiy avtomatlashtirish ishga tushadi — ma'lumot CRM'ga yoziladi, vazifa yaratiladi, xabar yuboriladi.",
          ],
        },
        {
          h2: 'Xavfsiz joriy etish',
          paragraphs: [
            "AI-agentni birinchi navbatda «maslahatchi» rejimida ishga tushiramiz: u javob va harakatni taklif qiladi, xodim tasdiqlaydi. Natijalar yetarlicha aniq bo'lgach, oddiy holatlarni to'liq avtomatik rejimga o'tkazamiz.",
            "Har bir harakat jurnalga yoziladi, shuning uchun AI nima qilganini va nima uchun qilganini har doim ko'rish mumkin.",
          ],
        },
        {
          h2: 'Qaysi jarayonlar AI-agent uchun mos',
          paragraphs: [
            "AI-agentga eng mos jarayonlar: ko'p takrorlanadigan, matn bilan bog'liq va natijasi tekshirilishi oson bo'lganlar. Masalan, murojaatlarni saralash, buyurtmalarni kiritish, qo'ng'iroqlarni xulosalash, hujjatlardan ma'lumot ajratish.",
            "To'lovlarni tasdiqlash yoki shartnoma shartlarini o'zgartirish kabi qimmat xatoli qarorlarni esa AI faqat tayyorlaydi — yakuniy qarorni inson qabul qiladi. Bu chegarani auditda birgalikda belgilaymiz.",
          ],
        },
      ],
      timeline: '3–8 hafta',
      faq: [
        {
          q: 'AI-avtomatlashtirish qancha turadi?',
          a: "Narx agentlar va integratsiyalar soniga bog'liq — odatda «Biznes» paketi doirasida. AI-model uchun oylik xarajatni auditda alohida hisoblaymiz.",
        },
        {
          q: "AI-agent operatorni to'liq almashtiradimi?",
          a: "Yo'q. U rutin ishning katta qismini oladi, operator esa murakkab holatlar va mijoz bilan muloqotga ko'proq vaqt ajratadi.",
        },
        {
          q: 'Qaysi kanallar bilan ishlaydi?',
          a: 'Telegram, Instagram, WhatsApp Business, sayt chatlari, email va IP-telefoniya — barcha murojaatlar bitta joyga tushadi.',
        },
        {
          q: "Xato bo'lsa nima bo'ladi?",
          a: "AI ishonchi past bo'lgan holatlarni insonga uzatadi, muhim harakatlar esa faqat tasdiqdan keyin bajariladi. Barcha harakatlar jurnalda saqlanadi.",
        },
        {
          q: "Natija qachon ko'rinadi?",
          a: "Birinchi agent odatda 3–4 haftada ishga tushadi; birinchi oyning oxirida qo'l ishiga ketadigan vaqtning qanchaga kamayganini ko'rasiz.",
        },
      ],
    },
    ru: {
      slug: 'ai-avtomatizaciya',
      name: 'AI-автоматизация',
      summary:
        'Рутину с обращениями, документами и отчётами выполняют AI-агенты, сотрудник только подтверждает.',
      metaTitle: 'AI-автоматизация: AI-агенты для бизнеса | ZOLVI',
      metaDescription:
        'AI-автоматизация: AI-агенты отвечают на обращения, вносят документы и пишут отчёты. Интеграция с CRM и Telegram. Ташкент. Бесплатный аудит.',
      h1: 'AI-автоматизация — передайте рутину AI-агентам',
      lead: 'AI-автоматизация — шаг дальше обычной автоматизации: вместо жёстких правил искусственный интеллект понимает текст, готовит решение и выполняет действие. Например, читает сообщение клиента, открывает сделку в CRM, пишет ответ и ставит задачу менеджеру. ZOLVI подключает таких AI-агентов к вашим системам.',
      audience: [
        'Бизнес с большим потоком обращений в Telegram, Instagram и по телефону',
        'Команды, которые каждый день пишут одни и те же письма, ответы и отчёты',
        'Компании, у которых есть CRM или ERP, но ввод данных всё ещё отнимает много времени',
        'Компании, которые хотят расти без увеличения штата операторов',
      ],
      pains: [
        {
          title: 'Операторы заняты копированием',
          text: 'Перенести имя, телефон и заказ из сообщения клиента в CRM вручную — несколько минут на каждое обращение.',
        },
        {
          title: 'Качество ответов разное',
          text: 'Один оператор отвечает подробно, другой — коротко и с ошибками. Опыт клиента зависит от сотрудника.',
        },
        {
          title: 'Отчёты никто не пишет',
          text: 'Нужны ежедневная сводка, анализ звонков и разбор жалоб, но на это нет времени.',
        },
      ],
      includes: [
        {
          title: 'AI-агент для обращений',
          text: 'Читает сообщение, извлекает данные и записывает в CRM, готовит черновик ответа и назначает ответственного.',
        },
        {
          title: 'Анализ звонков',
          text: 'Записи звонков превращаются в текст, краткое резюме и следующий шаг попадают в карточку CRM.',
        },
        {
          title: 'Поток документов',
          text: 'Документы из почты и Telegram автоматически распознаются, проверяются и вносятся в систему.',
        },
        {
          title: 'Ежедневные AI-сводки',
          text: 'Каждое утро руководитель получает в Telegram краткую сводку по продажам, жалобам и проблемам.',
        },
        {
          title: 'Контроль человеком',
          text: 'AI выполняет только разрешённые действия; для важных шагов запрашивается подтверждение сотрудника.',
        },
        {
          title: 'Интеграции',
          text: 'Работает с CRM, ERP, Telegram, Instagram, IP-телефонией, Google Workspace и 1С.',
        },
      ],
      sections: [
        {
          h2: 'Чем отличается от обычной автоматизации',
          paragraphs: [
            'Обычная автоматизация работает по правилу «если А — сделай Б» и хорошо справляется со структурированными данными. Но сообщение клиента, жалоба или скан документа — это неструктурированный текст, и здесь правила бессильны.',
            'AI-агент понимает текст: извлекает заказ из сообщения, сумму из документа, проблему из звонка. Дальше включается обычная автоматизация — данные записываются в CRM, создаётся задача, отправляется сообщение.',
          ],
        },
        {
          h2: 'Безопасное внедрение',
          paragraphs: [
            'Сначала запускаем AI-агента в режиме «советника»: он предлагает ответ и действие, сотрудник подтверждает. Когда точность становится достаточной, простые случаи переводим в полностью автоматический режим.',
            'Каждое действие записывается в журнал, поэтому всегда видно, что сделал AI и почему.',
          ],
        },
        {
          h2: 'Какие процессы подходят для AI-агента',
          paragraphs: [
            'Лучше всего AI-агенту подходят частые процессы, связанные с текстом, результат которых легко проверить. Например, сортировка обращений, ввод заказов, резюме звонков, извлечение данных из документов.',
            'Решения с дорогой ценой ошибки — подтверждение платежей или изменение условий договора — AI только готовит, а окончательное решение принимает человек. Эту границу определяем вместе на аудите.',
          ],
        },
      ],
      timeline: '3–8 недель',
      faq: [
        {
          q: 'Сколько стоит AI-автоматизация?',
          a: 'Стоимость зависит от числа агентов и интеграций — обычно в рамках пакета «Бизнес». Ежемесячные расходы на AI-модель считаем отдельно на аудите.',
        },
        {
          q: 'AI-агент полностью заменит оператора?',
          a: 'Нет. Он забирает большую часть рутины, а оператор уделяет больше времени сложным случаям и общению с клиентами.',
        },
        {
          q: 'С какими каналами работает?',
          a: 'Telegram, Instagram, WhatsApp Business, чат на сайте, почта и IP-телефония — все обращения попадают в одно место.',
        },
        {
          q: 'Что будет при ошибке?',
          a: 'Случаи с низкой уверенностью AI передаёт человеку, важные действия выполняются только после подтверждения. Все действия хранятся в журнале.',
        },
        {
          q: 'Когда будет виден результат?',
          a: 'Первый агент обычно запускается за 3–4 недели; к концу первого месяца вы увидите, насколько сократилось время на ручную работу.',
        },
      ],
    },
    en: {
      slug: 'ai-automation',
      name: 'AI automation',
      summary:
        'AI agents handle the routine work around requests, documents and reports; staff just approve.',
      metaTitle: 'AI Automation: AI Agents for Business | ZOLVI',
      metaDescription:
        'AI automation: AI agents answer requests, enter documents and write reports, integrated with your CRM and Telegram. Tashkent. Free 30-minute audit.',
      h1: 'AI automation — hand routine work to AI agents',
      lead: 'AI automation goes one step beyond classic automation: instead of rigid rules, artificial intelligence understands text, prepares a decision and carries out the action. For example, it reads a customer message, opens a deal in the CRM, drafts a reply and assigns a task to a manager. ZOLVI connects such AI agents to your systems.',
      audience: [
        'Businesses with a heavy flow of requests via Telegram, Instagram and phone',
        'Teams writing the same emails, replies and reports every day',
        'Companies that have a CRM or ERP but still spend a lot of time on data entry',
        'Companies that want to grow without hiring more operators',
      ],
      pains: [
        {
          title: 'Operators busy copy-pasting',
          text: 'Moving a name, phone and order from a customer message into the CRM by hand takes minutes per request.',
        },
        {
          title: 'Inconsistent replies',
          text: 'One operator answers in detail, another briefly and with mistakes. Customer experience depends on who is on shift.',
        },
        {
          title: 'Nobody writes the reports',
          text: 'You need a daily summary, call analysis and complaint reviews, but nobody has the time.',
        },
      ],
      includes: [
        {
          title: 'AI agent for requests',
          text: 'Reads the message, extracts the data into the CRM, drafts a reply and assigns the right person.',
        },
        {
          title: 'Call analysis',
          text: 'Call recordings are transcribed; a short summary and next step are written to the CRM card.',
        },
        {
          title: 'Document flow',
          text: 'Documents arriving by email or Telegram are read, checked and entered into the system automatically.',
        },
        {
          title: 'Daily AI summaries',
          text: 'Every morning the owner gets a short Telegram summary of sales, complaints and issues.',
        },
        {
          title: 'Human in the loop',
          text: 'The AI only performs permitted actions; important steps require a staff member’s approval.',
        },
        {
          title: 'Integrations',
          text: 'Works with your CRM, ERP, Telegram, Instagram, IP telephony, Google Workspace and 1C.',
        },
      ],
      sections: [
        {
          h2: 'How it differs from classic automation',
          paragraphs: [
            'Classic automation follows “if A, do B” rules and works well with structured data. But a customer message, a complaint or a scanned document is unstructured text, and rules fall short.',
            'An AI agent understands the text: it extracts the order from a message, the amount from a document, the problem from a call. Then classic automation takes over — data goes into the CRM, a task is created, a message is sent.',
          ],
        },
        {
          h2: 'A safe rollout',
          paragraphs: [
            'We first launch the AI agent in “advisor” mode: it proposes a reply and an action, and a person approves. Once accuracy is high enough, simple cases move to fully automatic mode.',
            'Every action is logged, so you can always see what the AI did and why.',
          ],
        },
        {
          h2: 'Which processes suit an AI agent',
          paragraphs: [
            'AI agents fit best on frequent, text-heavy processes whose result is easy to check: triaging requests, entering orders, summarizing calls, extracting data from documents.',
            'For decisions where a mistake is expensive — approving payments or changing contract terms — the AI only prepares the case and a person makes the final call. We draw that line together during the audit.',
          ],
        },
      ],
      timeline: '3–8 weeks',
      faq: [
        {
          q: 'How much does AI automation cost?',
          a: 'It depends on the number of agents and integrations — usually within the Business package. The monthly AI model cost is estimated separately during the audit.',
        },
        {
          q: 'Will an AI agent fully replace an operator?',
          a: 'No. It takes over most of the routine so operators can spend more time on complex cases and on customers.',
        },
        {
          q: 'Which channels does it work with?',
          a: 'Telegram, Instagram, WhatsApp Business, website chat, email and IP telephony — every request lands in one place.',
        },
        {
          q: 'What happens when it makes a mistake?',
          a: 'Low-confidence cases go to a person and important actions run only after approval. Every action is kept in a log.',
        },
        {
          q: 'When will we see results?',
          a: 'The first agent usually goes live in 3–4 weeks; by the end of the first month you will see how much manual time has been cut.',
        },
      ],
    },
  },
}

export default service
