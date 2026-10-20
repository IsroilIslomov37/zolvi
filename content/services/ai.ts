import type { Service } from '@/lib/types'

const service: Service = {
  id: 'ai',
  kind: 'service',
  category: 'ai',
  icon: 'ai',
  demo: 'ai',
  caseId: 'retail-analytics',
  plan: 'enterprise',
  relatedServices: ['ai-automation', 'crm', 'erp', 'telegram-bot'],
  relatedIndustries: ['retail', 'clinics', 'e-commerce', 'education'],
  locales: {
    uz: {
      slug: 'suniy-intellekt-yechimlari',
      name: "Sun'iy intellekt (AI) yechimlari",
      summary:
        "AI-yordamchilar, hujjatlarni o'qish, prognozlash va tahlil — biznes ma'lumotlaringiz asosida.",
      metaTitle: "Sun'iy intellekt (AI) yechimlari biznes uchun | ZOLVI",
      metaDescription:
        "Biznes uchun sun'iy intellekt: AI-yordamchilar, murojaatlarni saralash, hujjatlarni o'qish, savdo prognozi. O'zbek va rus tillarida. Toshkent.",
      h1: "Biznes uchun sun'iy intellekt (AI) yechimlari",
      lead: "Sun'iy intellekt biznesda «modaga» emas, aniq vazifaga kerak: murojaatlarga tez javob berish, hujjatlardan ma'lumot ajratib olish, talabni prognoz qilish, xodimlarga bilim bazasidan javob topish. ZOLVI AI'ni sizning ma'lumotlaringiz va jarayonlaringizga ulaydi — o'zbek, rus va ingliz tillarida ishlaydigan qilib.",
      audience: [
        "Kuniga yuzlab murojaat oladigan kompaniyalar: klinikalar, do'konlar, xizmat ko'rsatish",
        "Ko'p hujjat bilan ishlaydigan bo'limlar: buxgalteriya, logistika, xaridlar",
        "Ombor va savdo ma'lumotlarini prognoz uchun ishlatmoqchi bo'lgan chakana savdo",
        "Ichki bilimlarini (reglamentlar, yo'riqnomalar) xodimlarga tez yetkazmoqchi bo'lgan jamoalar",
      ],
      pains: [
        {
          title: 'Murojaatlarga javob sekin',
          text: 'Operatorlar bir xil savollarga qayta-qayta javob beradi, tunda va dam olish kunlari esa mijoz javobsiz qoladi.',
        },
        {
          title: "Hujjatlar qo'lda qayta yoziladi",
          text: "Hisob-fakturalar, nakladnoylar va arizalardagi ma'lumotlar tizimga qo'lda kiritiladi — sekin va xatolar bilan.",
        },
        {
          title: "Ma'lumot bor, xulosa yo'q",
          text: "Savdo va ombor ma'lumotlari yig'ilgan, lekin qachon nima buyurtma qilish va qaysi mijoz ketishi mumkinligini hech kim ko'rmaydi.",
        },
      ],
      includes: [
        {
          title: 'AI-yordamchi (chat-bot)',
          text: "Sayt, Telegram va Instagram'da mijozlarga sizning bilim bazangiz asosida javob beradi, murakkab savolni operatorga uzatadi.",
        },
        {
          title: 'Murojaatlarni saralash',
          text: "Kiruvchi xabarlar mavzu va muhimligi bo'yicha avtomatik tasniflanadi va kerakli bo'limga yo'naltiriladi.",
        },
        {
          title: "Hujjatlarni o'qish (OCR)",
          text: "Skanerlangan hujjat va fotosuratlardan summa, sana, mahsulotlar ro'yxati ajratib olinadi va tizimga yoziladi.",
        },
        {
          title: 'Prognozlash',
          text: 'Talab, qoldiqlar va savdo prognozi: qachon va qancha buyurtma qilishni tizim tavsiya qiladi.',
        },
        {
          title: 'Ichki bilim bazasi',
          text: "Xodimlar reglament va yo'riqnomalar bo'yicha savolni oddiy tilda berib, manba ko'rsatilgan javob oladi.",
        },
        {
          title: 'Xavfsizlik va nazorat',
          text: "Ma'lumotlarga kirish huquqlari, javoblar jurnali va muhim harakatlar uchun inson tasdig'i.",
        },
      ],
      sections: [
        {
          h2: 'AI qayerda haqiqiy foyda beradi',
          paragraphs: [
            "AI ko'p, takrorlanadigan va matnli ishlar bor joyda eng yaxshi natija beradi: mijoz savollari, hujjatlar, tasniflash. Muhim qarorlarda esa AI yordamchi bo'lib qoladi — u taklif qiladi, inson tasdiqlaydi.",
            "Har bir AI loyihasini kichik pilotdan boshlaymiz: bitta jarayon, aniq ko'rsatkich (javob vaqti, qo'lda kiritilgan hujjatlar soni) va 2–4 haftalik sinov. Natija ko'rinsa — kengaytiramiz.",
          ],
        },
        {
          h2: "O'zbek tili va mahalliy ma'lumotlar",
          paragraphs: [
            "Mijozlar o'zbek (lotin va kirill), rus tilida va aralash yozadi. AI-yechimni aynan shunday real xabarlarda sinab, sozlaymiz, shunda u sizning mijozlaringizni tushunadi.",
            "Ma'lumotlarni qayerda saqlash va qaysi AI-modellarni ishlatishni birgalikda tanlaymiz: shaxsiy ma'lumotlar uchun mahalliy saqlash talablarini hisobga olamiz.",
          ],
        },
        {
          h2: 'AI-yechim narxi nimalardan iborat',
          paragraphs: [
            "AI loyihasining xarajati ikki qismdan iborat: bir martalik ishlab chiqish (integratsiya, bilim bazasini tayyorlash, sozlash va sinov) va oylik foydalanish (AI-model so'rovlari, server, monitoring). Oylik qism murojaatlar yoki hujjatlar soniga bog'liq.",
            "Pilot bosqichida ikkala xarajatni real ma'lumotlarda o'lchaymiz, shuning uchun to'liq joriy etishdan oldin bitta murojaat yoki hujjatga qancha pul ketishini va u qancha vaqt tejashini aniq bilasiz.",
          ],
        },
      ],
      timeline: 'Pilot 2–4 hafta',
      faq: [
        {
          q: 'AI-yechim narxi qancha?',
          a: "Pilot loyiha kichik byudjet bilan boshlanadi; to'liq yechim «Korporativ» paketiga kiradi. Bundan tashqari AI-model ishlatilishi uchun oylik xarajat bo'ladi — auditda uni hisoblab beramiz.",
        },
        {
          q: "AI o'zbek tilini tushunadimi?",
          a: "Zamonaviy modellar o'zbek tilini yaxshi tushunadi. Biz yechimni sizning real xabarlaringizda sinaymiz va kerakli joylarda sozlaymiz.",
        },
        {
          q: "AI noto'g'ri javob bersa-chi?",
          a: "AI faqat sizning bilim bazangizdan javob beradi, ishonchi past bo'lsa — operatorga uzatadi. Muhim harakatlar (to'lov, qaytarish) faqat inson tasdig'i bilan bajariladi.",
        },
        {
          q: "Ma'lumotlarimiz xavfsizmi?",
          a: "Kirish huquqlarini cheklaymiz, ma'lumotlarni modellarni o'qitish uchun uzatmaydigan xizmatlardan foydalanamiz va saqlash joyini siz bilan kelishamiz.",
        },
        {
          q: 'Qayerdan boshlash kerak?',
          a: "Eng ko'p takrorlanadigan jarayondan — odatda mijozlar savollari yoki hujjatlarni kiritish. Bepul auditda pilot uchun eng mos jarayonni tanlaymiz.",
        },
      ],
    },
    ru: {
      slug: 'ii-resheniya',
      name: 'Решения на базе ИИ (AI)',
      summary:
        'AI-ассистенты, распознавание документов, прогнозы и аналитика — на ваших бизнес-данных.',
      metaTitle: 'Решения на базе ИИ (AI) для бизнеса | ZOLVI',
      metaDescription:
        'Искусственный интеллект для бизнеса: AI-ассистенты, сортировка обращений, распознавание документов, прогноз продаж. На узбекском и русском. Ташкент.',
      h1: 'Решения на базе искусственного интеллекта для бизнеса',
      lead: 'Искусственный интеллект нужен бизнесу не «для моды», а для конкретной задачи: быстро отвечать на обращения, извлекать данные из документов, прогнозировать спрос, находить ответы в базе знаний для сотрудников. ZOLVI подключает AI к вашим данным и процессам — так, чтобы он работал на узбекском, русском и английском.',
      audience: [
        'Компании с сотнями обращений в день: клиники, магазины, сервис',
        'Отделы с большим документооборотом: бухгалтерия, логистика, закупки',
        'Розница, которая хочет использовать данные склада и продаж для прогнозов',
        'Команды, которым нужно быстро доносить внутренние знания (регламенты, инструкции) до сотрудников',
      ],
      pains: [
        {
          title: 'Медленные ответы на обращения',
          text: 'Операторы снова и снова отвечают на одни и те же вопросы, а ночью и в выходные клиент остаётся без ответа.',
        },
        {
          title: 'Документы перепечатываются вручную',
          text: 'Данные из счетов, накладных и заявок вносятся в систему руками — медленно и с ошибками.',
        },
        {
          title: 'Данные есть, выводов нет',
          text: 'Данные о продажах и складе накоплены, но никто не видит, когда и что заказывать и какой клиент может уйти.',
        },
      ],
      includes: [
        {
          title: 'AI-ассистент (чат-бот)',
          text: 'Отвечает клиентам на сайте, в Telegram и Instagram по вашей базе знаний, сложные вопросы передаёт оператору.',
        },
        {
          title: 'Сортировка обращений',
          text: 'Входящие сообщения автоматически классифицируются по теме и приоритету и направляются в нужный отдел.',
        },
        {
          title: 'Распознавание документов (OCR)',
          text: 'Из сканов и фотографий извлекаются сумма, дата, список товаров и записываются в систему.',
        },
        {
          title: 'Прогнозирование',
          text: 'Прогноз спроса, остатков и продаж: система подсказывает, когда и сколько заказывать.',
        },
        {
          title: 'Внутренняя база знаний',
          text: 'Сотрудники задают вопрос по регламентам и инструкциям обычным языком и получают ответ со ссылкой на источник.',
        },
        {
          title: 'Безопасность и контроль',
          text: 'Права доступа к данным, журнал ответов и подтверждение человеком для важных действий.',
        },
      ],
      sections: [
        {
          h2: 'Где AI даёт реальную пользу',
          paragraphs: [
            'AI лучше всего работает там, где много однотипной текстовой работы: вопросы клиентов, документы, классификация. В важных решениях AI остаётся помощником — он предлагает, человек подтверждает.',
            'Каждый AI-проект начинаем с небольшого пилота: один процесс, понятная метрика (время ответа, число документов, введённых вручную) и 2–4 недели теста. Есть результат — масштабируем.',
          ],
        },
        {
          h2: 'Узбекский язык и локальные данные',
          paragraphs: [
            'Клиенты пишут на узбекском (латиница и кириллица), на русском и вперемешку. Мы тестируем и настраиваем AI-решение именно на таких реальных сообщениях, чтобы оно понимало ваших клиентов.',
            'Где хранить данные и какие AI-модели использовать, выбираем вместе: учитываем требования о локальном хранении персональных данных.',
          ],
        },
        {
          h2: 'Из чего складывается стоимость AI-решения',
          paragraphs: [
            'Затраты на AI-проект состоят из двух частей: разовая разработка (интеграция, подготовка базы знаний, настройка и тестирование) и ежемесячное использование (запросы к AI-модели, сервер, мониторинг). Ежемесячная часть зависит от числа обращений или документов.',
            'На пилоте мы измеряем обе части на реальных данных, поэтому ещё до полного внедрения вы точно знаете, сколько стоит обработка одного обращения или документа и сколько времени она экономит.',
          ],
        },
      ],
      timeline: 'Пилот 2–4 недели',
      faq: [
        {
          q: 'Сколько стоит AI-решение?',
          a: 'Пилот стартует с небольшого бюджета; полное решение входит в пакет «Корпоративный». Кроме того, есть ежемесячные расходы на использование AI-модели — посчитаем их на аудите.',
        },
        {
          q: 'AI понимает узбекский язык?',
          a: 'Современные модели хорошо понимают узбекский. Мы тестируем решение на ваших реальных сообщениях и донастраиваем там, где нужно.',
        },
        {
          q: 'Что если AI ответит неправильно?',
          a: 'AI отвечает только по вашей базе знаний, а при низкой уверенности передаёт вопрос оператору. Важные действия (оплата, возврат) выполняются только с подтверждением человека.',
        },
        {
          q: 'Наши данные в безопасности?',
          a: 'Ограничиваем права доступа, используем сервисы, которые не передают данные для обучения моделей, и согласуем с вами место хранения.',
        },
        {
          q: 'С чего начать?',
          a: 'С самого повторяющегося процесса — обычно это вопросы клиентов или ввод документов. На бесплатном аудите выберем лучший процесс для пилота.',
        },
      ],
    },
    en: {
      slug: 'ai-solutions',
      name: 'AI solutions',
      summary:
        'AI assistants, document recognition, forecasting and analytics — on your own business data.',
      metaTitle: 'AI Solutions for Business in Uzbekistan | ZOLVI',
      metaDescription:
        'Artificial intelligence for business: AI assistants, request triage, document recognition and sales forecasting, in Uzbek, Russian and English. Tashkent.',
      h1: 'Artificial intelligence (AI) solutions for business',
      lead: 'Businesses need AI for concrete tasks, not for hype: answering requests faster, pulling data out of documents, forecasting demand, finding answers in a knowledge base. ZOLVI connects AI to your data and processes so it works in Uzbek, Russian and English.',
      audience: [
        'Companies handling hundreds of requests a day: clinics, shops, service businesses',
        'Document-heavy teams: accounting, logistics, purchasing',
        'Retailers that want to turn inventory and sales data into forecasts',
        'Teams that need to get internal knowledge (policies, manuals) to staff quickly',
      ],
      pains: [
        {
          title: 'Slow replies to requests',
          text: 'Operators answer the same questions over and over, and at night or on weekends customers get no reply at all.',
        },
        {
          title: 'Documents retyped by hand',
          text: 'Data from invoices, waybills and applications is typed into the system manually — slowly and with errors.',
        },
        {
          title: 'Data without insight',
          text: 'Sales and inventory data piles up, but nobody sees what to order and when, or which customer is about to leave.',
        },
      ],
      includes: [
        {
          title: 'AI assistant (chatbot)',
          text: 'Answers customers on your website, Telegram and Instagram from your knowledge base and hands complex questions to an operator.',
        },
        {
          title: 'Request triage',
          text: 'Incoming messages are classified by topic and priority and routed to the right team automatically.',
        },
        {
          title: 'Document recognition (OCR)',
          text: 'Amounts, dates and item lists are extracted from scans and photos and written into the system.',
        },
        {
          title: 'Forecasting',
          text: 'Demand, stock and sales forecasts: the system suggests what to order and when.',
        },
        {
          title: 'Internal knowledge base',
          text: 'Staff ask about policies and manuals in plain language and get answers with the source cited.',
        },
        {
          title: 'Security and control',
          text: 'Data access rights, a log of answers and human approval for important actions.',
        },
      ],
      sections: [
        {
          h2: 'Where AI actually pays off',
          paragraphs: [
            'AI performs best where there is a lot of repetitive text work: customer questions, documents, classification. In important decisions AI stays an assistant — it suggests, a person approves.',
            'Every AI project starts with a small pilot: one process, a clear metric (response time, documents entered by hand) and a 2–4 week trial. If the result is there, we scale.',
          ],
        },
        {
          h2: 'Uzbek language and local data',
          paragraphs: [
            'Customers write in Uzbek (Latin and Cyrillic), in Russian and in a mix of both. We test and tune the AI solution on exactly these real messages so it understands your customers.',
            'We choose together where data is stored and which AI models are used, taking local personal-data storage requirements into account.',
          ],
        },
        {
          h2: 'What an AI solution costs',
          paragraphs: [
            'An AI project has two cost components: one-off development (integration, preparing the knowledge base, tuning and testing) and monthly usage (AI model requests, servers, monitoring). The monthly part depends on the volume of requests or documents.',
            'During the pilot we measure both on real data, so before full rollout you know exactly what handling one request or document costs and how much time it saves.',
          ],
        },
      ],
      timeline: 'Pilot in 2–4 weeks',
      faq: [
        {
          q: 'How much does an AI solution cost?',
          a: 'A pilot starts with a small budget; a full solution is part of the Enterprise package. There is also a monthly cost for using the AI model — we estimate it during the audit.',
        },
        {
          q: 'Does AI understand Uzbek?',
          a: 'Modern models understand Uzbek well. We test the solution on your real messages and fine-tune it where needed.',
        },
        {
          q: 'What if the AI gives a wrong answer?',
          a: 'The AI answers only from your knowledge base and hands low-confidence questions to an operator. Important actions such as payments or refunds always require human approval.',
        },
        {
          q: 'Is our data safe?',
          a: 'We restrict access rights, use services that do not train models on your data and agree on the storage location with you.',
        },
        {
          q: 'Where should we start?',
          a: 'With the most repetitive process — usually customer questions or document entry. During the free audit we pick the best process for a pilot.',
        },
      ],
    },
  },
}

export default service
