import type { Industry } from '@/lib/types'

const industry: Industry = {
  id: 'restaurants',
  kind: 'industry',
  icon: 'restaurant',
  demo: 'pos',
  caseId: 'kitchen-operations',
  plan: 'business',
  relatedServices: ['pos', 'telegram-bot', 'erp', 'mobile-apps'],
  relatedIndustries: ['hotels', 'e-commerce', 'tourism'],
  locales: {
    uz: {
      slug: 'restoran-va-kafe',
      name: 'Restoran va kafe',
      summary:
        'Kassa, oshxona ekrani, ombor, yetkazib berish va filiallar — restoran uchun bitta tizim.',
      metaTitle: 'Restoranni avtomatlashtirish Toshkentda | ZOLVI',
      metaDescription:
        'Restoran va kafeni avtomatlashtirish: POS-kassa, oshxona ekrani, ombor va texnologik kartalar, yetkazib berish va Telegram-bot. Toshkent.',
      h1: 'Restoran va kafeni avtomatlashtirish',
      lead: "Restoranni avtomatlashtirish — bu buyurtma kassadan oshxonaga bir zumda yetib borishi, har bir taom ingredientlarni ombordan avtomatik hisobdan chiqarishi va egasi barcha filiallarning savdosini telefonda ko'rishi. ZOLVI restoran, kafe, fast-fud va kofeynyalar uchun tizimni zal, oshxona, ombor va yetkazib berishni bog'lagan holda quradi.",
      audience: [
        'Bitta yoki bir nechta zalga ega restoran va kafelar',
        'Yetkazib berish va olib ketish bilan ishlaydigan fast-fud va oshxonalar',
        "Filiallar tarmog'ini bitta joydan boshqarmoqchi bo'lgan egalar",
        "Banket va to'y xizmatlarini ko'rsatadigan restoranlar",
      ],
      pains: [
        {
          title: 'Oshxona va zal bir-birini eshitmaydi',
          text: "Buyurtmalar qog'ozda, ofitsiant oshxonaga yuguradi, taom kechikadi yoki boshqa stolga ketadi.",
        },
        {
          title: 'Ombordagi kamomad sababsiz',
          text: "Go'sht, yog' va guruch kutilganidan tez tugaydi, lekin qayerga ketgani noma'lum — texnologik kartalar yo'q.",
        },
        {
          title: 'Yetkazib berish alohida hayot kechiradi',
          text: 'Telegram, telefon va agregatorlardan kelgan buyurtmalar turli joyda, kuryerlarni nazorat qilish qiyin.',
        },
        {
          title: 'Egasi faqat kechqurun bilib oladi',
          text: "Bugungi tushum, o'rtacha chek va eng ko'p sotilgan taomlar — hammasi kun oxirida, telefon orqali.",
        },
      ],
      includes: [
        {
          title: 'POS-kassa va zal xaritasi',
          text: "Stollar, buyurtmalar, modifikatorlar, hisobni bo'lish, chegirmalar va xizmat haqi.",
        },
        {
          title: 'Oshxona ekrani',
          text: "Buyurtmalar sexlar bo'yicha (issiq, sovuq, bar) taqsimlanadi, tayyorlanish vaqti nazorat qilinadi.",
        },
        {
          title: 'Ombor va texnologik kartalar',
          text: "Har bir taomning retsepti bo'yicha avtomatik hisobdan chiqarish, inventarizatsiya va xarid tavsiyalari.",
        },
        {
          title: 'Yetkazib berish va Telegram-bot',
          text: "Bot va saytdan buyurtma, onlayn to'lov, kuryerlar ilovasi va mijozga holat haqida xabar.",
        },
        {
          title: 'Bron va banketlar',
          text: "Stol bron qilish, banket buyurtmalari, oldindan to'lov va eslatmalar.",
        },
        {
          title: "Filiallar bo'yicha hisobotlar",
          text: "Savdo, o'rtacha chek, ABC-tahlil, xodimlar va filiallar samaradorligi — real vaqtda.",
        },
      ],
      sections: [
        {
          h2: 'Restoranda avtomatlashtirish qayerdan boshlanadi',
          paragraphs: [
            "Ko'pincha eng katta yo'qotish ikki joyda bo'ladi: zal va oshxona o'rtasidagi aloqada hamda omborda. Shuning uchun birinchi bosqichda POS-kassa va oshxona ekranini ishga tushiramiz, so'ng texnologik kartalarni kiritib, ombor hisobini avtomatlashtiramiz.",
            "Yetkazib berish, Telegram-bot va sodiqlik dasturi keyingi bosqichlarda qo'shiladi — hammasi bitta tizimda, shuning uchun mijoz, buyurtma va to'lov ma'lumotlari bir joyda saqlanadi.",
          ],
        },
        {
          h2: 'Texnologik kartalar va tannarx nazorati',
          paragraphs: [
            'Har bir taom uchun ingredientlar va ularning miqdori tizimga kiritiladi. Taom sotilganda mahsulotlar avtomatik hisobdan chiqariladi, shuning uchun istalgan vaqtda nazariy qoldiqni haqiqiy qoldiq bilan solishtirish mumkin.',
            "Bu taom tannarxini ham aniq ko'rsatadi: narxlar oshganda qaysi taomlar foydasiz bo'lib qolganini darhol ko'rasiz va menyuni o'z vaqtida o'zgartirasiz.",
          ],
        },
        {
          h2: "Filiallar tarmog'i uchun",
          paragraphs: [
            "Bir nechta filial bo'lsa, menyu, narxlar va texnologik kartalar markazdan boshqariladi, har bir filial esa o'z savdosi va ombori bilan ishlaydi. Egasi barcha filiallarni bitta panelda solishtiradi.",
            "Markaziy oshxona yoki ombor bo'lsa, filiallarga yetkazib berish va ichki ko'chirishlar ham tizimda hisobga olinadi.",
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: 'Restoranni avtomatlashtirish qancha turadi?',
          a: "Narx filiallar soni, modullar va integratsiyalarga bog'liq; odatda «Biznes» paketi doirasida. Aniq smetani bepul auditdan keyin beramiz.",
        },
        {
          q: "Mavjud kassa uskunalarimizdan foydalansa bo'ladimi?",
          a: "Ko'p hollarda ha: planshetlar, printerlar va terminallarni tekshirib, mos kelganlarini ishlatamiz.",
        },
        {
          q: 'Internet uzilsa kassa ishlaydimi?',
          a: "Ha, kassa oflayn ishlashda davom etadi va internet tiklanganda ma'lumotlarni sinxronlaydi.",
        },
        {
          q: 'Yetkazib berish agregatorlari bilan integratsiya bormi?',
          a: "Agregator API taqdim etsa, buyurtmalar to'g'ridan-to'g'ri kassaga tushadi. TODO: qaysi agregatorlar bilan integratsiya tayyor ekanini tasdiqlang.",
        },
        {
          q: "Xodimlarni o'qitasizmi?",
          a: "Ha, kassirlar, ofitsiantlar, oshpazlar va boshqaruvchilar uchun alohida o'qitish o'tkazamiz va birinchi smenalarda yonida bo'lamiz.",
        },
        {
          q: "Tizimni bosqichma-bosqich joriy etsa bo'ladimi?",
          a: "Ha, odatda shunday qilamiz: avval kassa va oshxona, keyin ombor, so'ng yetkazib berish va bot.",
        },
      ],
    },
    ru: {
      slug: 'restorany-i-kafe',
      name: 'Рестораны и кафе',
      summary: 'Касса, кухонный экран, склад, доставка и филиалы — одна система для ресторана.',
      metaTitle: 'Автоматизация ресторана и кафе в Ташкенте | ZOLVI',
      metaDescription:
        'Автоматизация ресторана и кафе: POS-касса, кухонный экран, склад и техкарты, доставка и Telegram-бот. Внедрение в Ташкенте.',
      h1: 'Автоматизация ресторана и кафе',
      lead: 'Автоматизация ресторана — это когда заказ мгновенно попадает с кассы на кухню, каждое блюдо автоматически списывает ингредиенты со склада, а владелец видит выручку всех филиалов в телефоне. ZOLVI строит систему для ресторанов, кафе, фастфуда и кофеен, связывая зал, кухню, склад и доставку.',
      audience: [
        'Рестораны и кафе с одним или несколькими залами',
        'Фастфуд и столовые с доставкой и навынос',
        'Владельцы, которые хотят управлять сетью филиалов из одного места',
        'Рестораны с банкетами и свадьбами',
      ],
      pains: [
        {
          title: 'Кухня и зал не слышат друг друга',
          text: 'Заказы на бумаге, официант бегает на кухню, блюдо опаздывает или уходит не на тот стол.',
        },
        {
          title: 'Недостача на складе без причины',
          text: 'Мясо, масло и рис заканчиваются быстрее, чем ожидалось, но куда уходят — непонятно: техкарт нет.',
        },
        {
          title: 'Доставка живёт отдельно',
          text: 'Заказы из Telegram, по телефону и от агрегаторов в разных местах, курьеров сложно контролировать.',
        },
        {
          title: 'Владелец узнаёт всё вечером',
          text: 'Выручка за день, средний чек и топ блюд — только в конце дня и по телефону.',
        },
      ],
      includes: [
        {
          title: 'POS-касса и схема зала',
          text: 'Столы, заказы, модификаторы, разделение счёта, скидки и обслуживание.',
        },
        {
          title: 'Кухонный экран',
          text: 'Заказы распределяются по цехам (горячий, холодный, бар), время приготовления под контролем.',
        },
        {
          title: 'Склад и техкарты',
          text: 'Автоматическое списание по рецептуре каждого блюда, инвентаризация и рекомендации по закупке.',
        },
        {
          title: 'Доставка и Telegram-бот',
          text: 'Заказ через бота и сайт, онлайн-оплата, приложение для курьеров и уведомления клиенту о статусе.',
        },
        {
          title: 'Брони и банкеты',
          text: 'Бронь столов, банкетные заказы, предоплата и напоминания.',
        },
        {
          title: 'Отчёты по филиалам',
          text: 'Выручка, средний чек, ABC-анализ, эффективность сотрудников и филиалов — в реальном времени.',
        },
      ],
      sections: [
        {
          h2: 'С чего начинается автоматизация ресторана',
          paragraphs: [
            'Чаще всего главные потери в двух местах: в связи между залом и кухней и на складе. Поэтому на первом этапе запускаем POS-кассу и кухонный экран, затем вносим техкарты и автоматизируем склад.',
            'Доставка, Telegram-бот и программа лояльности подключаются на следующих этапах — всё в одной системе, поэтому данные о клиенте, заказе и оплате хранятся в одном месте.',
          ],
        },
        {
          h2: 'Техкарты и контроль себестоимости',
          paragraphs: [
            'Для каждого блюда в систему вносятся ингредиенты и их количество. При продаже продукты списываются автоматически, поэтому в любой момент можно сравнить расчётный остаток с фактическим.',
            'Это показывает и точную себестоимость блюда: при росте цен вы сразу видите, какие блюда стали убыточными, и вовремя меняете меню.',
          ],
        },
        {
          h2: 'Для сети филиалов',
          paragraphs: [
            'Если филиалов несколько, меню, цены и техкарты управляются централизованно, а каждый филиал работает со своими продажами и складом. Владелец сравнивает все филиалы на одной панели.',
            'Если есть центральная кухня или склад, поставки в филиалы и внутренние перемещения тоже учитываются в системе.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит автоматизация ресторана?',
          a: 'Стоимость зависит от числа филиалов, модулей и интеграций; обычно в рамках пакета «Бизнес». Точную смету даём после бесплатного аудита.',
        },
        {
          q: 'Можно использовать наше кассовое оборудование?',
          a: 'Чаще всего да: проверяем планшеты, принтеры и терминалы и используем подходящие.',
        },
        {
          q: 'Касса работает без интернета?',
          a: 'Да, касса продолжает работать офлайн и синхронизирует данные при восстановлении связи.',
        },
        {
          q: 'Есть интеграция с агрегаторами доставки?',
          a: 'Если агрегатор предоставляет API, заказы попадают прямо в кассу. TODO: подтвердить, с какими агрегаторами интеграция готова.',
        },
        {
          q: 'Обучаете сотрудников?',
          a: 'Да, проводим отдельное обучение для кассиров, официантов, поваров и управляющих и находимся рядом в первые смены.',
        },
        {
          q: 'Можно внедрять поэтапно?',
          a: 'Да, обычно так и делаем: сначала касса и кухня, затем склад, потом доставка и бот.',
        },
      ],
    },
    en: {
      slug: 'restaurants-and-cafes',
      name: 'Restaurants and cafes',
      summary:
        'Till, kitchen display, inventory, delivery and branches — one system for your restaurant.',
      metaTitle: 'Restaurant and Cafe Automation in Tashkent | ZOLVI',
      metaDescription:
        'Restaurant and cafe automation: POS till, kitchen display, inventory and recipes, delivery and a Telegram bot. Implemented in Tashkent, Uzbekistan.',
      h1: 'Restaurant and cafe automation',
      lead: 'Restaurant automation means orders reach the kitchen from the till instantly, every dish writes off its ingredients automatically and the owner sees revenue across all branches on a phone. ZOLVI builds systems for restaurants, cafes, fast food and coffee shops that connect the floor, kitchen, inventory and delivery.',
      audience: [
        'Restaurants and cafes with one or several dining rooms',
        'Fast food and canteens offering delivery and takeaway',
        'Owners who want to run a branch network from one place',
        'Restaurants hosting banquets and weddings',
      ],
      pains: [
        {
          title: "Kitchen and floor can't hear each other",
          text: 'Orders on paper, waiters running to the kitchen, dishes late or sent to the wrong table.',
        },
        {
          title: 'Unexplained stock shortages',
          text: 'Meat, oil and rice run out faster than expected and nobody knows where they went — there are no recipe cards.',
        },
        {
          title: 'Delivery lives a separate life',
          text: 'Orders from Telegram, phone and aggregators sit in different places and couriers are hard to track.',
        },
        {
          title: 'The owner finds out in the evening',
          text: "Today's revenue, average check and best-sellers arrive at the end of the day, by phone.",
        },
      ],
      includes: [
        {
          title: 'POS till and floor plan',
          text: 'Tables, orders, modifiers, split bills, discounts and service charges.',
        },
        {
          title: 'Kitchen display',
          text: 'Orders routed by station (hot, cold, bar) with preparation time tracked.',
        },
        {
          title: 'Inventory and recipe cards',
          text: 'Automatic write-off by recipe, stocktakes and purchase suggestions.',
        },
        {
          title: 'Delivery and Telegram bot',
          text: 'Ordering via bot and website, online payment, a courier app and status updates for customers.',
        },
        {
          title: 'Bookings and banquets',
          text: 'Table bookings, banquet orders, prepayments and reminders.',
        },
        {
          title: 'Branch reports',
          text: 'Revenue, average check, ABC analysis, staff and branch performance — in real time.',
        },
      ],
      sections: [
        {
          h2: 'Where restaurant automation starts',
          paragraphs: [
            'The biggest losses usually sit in two places: the link between floor and kitchen, and the storeroom. So the first stage launches the POS till and kitchen display; then we load recipe cards and automate inventory.',
            'Delivery, the Telegram bot and a loyalty program follow in later stages — all in one system, so customer, order and payment data live in one place.',
          ],
        },
        {
          h2: 'Recipe cards and cost control',
          paragraphs: [
            'Each dish gets its ingredients and quantities in the system. When a dish is sold, products are written off automatically, so you can compare expected and actual stock at any moment.',
            'It also shows the exact cost of each dish: when prices rise you immediately see which dishes have become unprofitable and adjust the menu in time.',
          ],
        },
        {
          h2: 'For branch networks',
          paragraphs: [
            'With several branches, the menu, prices and recipe cards are managed centrally while each branch runs its own sales and stock. The owner compares every branch on one dashboard.',
            'If you have a central kitchen or warehouse, deliveries to branches and internal transfers are tracked in the system too.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does restaurant automation cost?',
          a: 'It depends on the number of branches, modules and integrations; usually within the Business package. We give an exact estimate after the free audit.',
        },
        {
          q: 'Can we use our existing till hardware?',
          a: 'In most cases yes: we check your tablets, printers and terminals and reuse what fits.',
        },
        {
          q: 'Does the till work without internet?',
          a: 'Yes, it keeps working offline and syncs data when the connection returns.',
        },
        {
          q: 'Do you integrate with delivery aggregators?',
          a: 'If an aggregator offers an API, orders go straight into the till. TODO: confirm which aggregator integrations are ready.',
        },
        {
          q: 'Do you train staff?',
          a: 'Yes, we run separate training for cashiers, waiters, cooks and managers and stay close during the first shifts.',
        },
        {
          q: 'Can we roll it out in stages?',
          a: 'Yes, that is the usual approach: till and kitchen first, then inventory, then delivery and the bot.',
        },
      ],
    },
  },
}

export default industry
