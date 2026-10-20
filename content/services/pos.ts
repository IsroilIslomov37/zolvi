import type { Service } from '@/lib/types'

const service: Service = {
  id: 'pos',
  kind: 'service',
  category: 'products',
  icon: 'pos',
  demo: 'pos',
  caseId: 'kitchen-operations',
  plan: 'business',
  relatedServices: ['erp', 'telegram-bot', 'mobile-apps', 'crm'],
  relatedIndustries: ['restaurants', 'retail', 'hotels', 'e-commerce'],
  locales: {
    uz: {
      slug: 'pos-tizimi',
      name: 'POS tizimi',
      summary:
        "Kassa, oshxona ekrani, ombor va hisobotlar — restoran va do'konlar uchun bitta tizimda.",
      metaTitle: "POS tizimi restoran va do'konlar uchun | ZOLVI",
      metaDescription:
        "Restoran, kafe va do'konlar uchun POS tizimi: kassa, oshxona ekrani, ombor, filiallar va onlayn-kassa integratsiyasi. Toshkentda joriy etamiz.",
      h1: "POS tizimi — restoran va do'konlar uchun kassa va boshqaruv",
      lead: "POS tizimi — bu shunchaki kassa emas: u buyurtmani qabul qiladi, oshxonaga yoki omborga uzatadi, mahsulotni ombordan hisobdan chiqaradi va rahbarga savdoni real vaqtda ko'rsatadi. ZOLVI POS tizimini restoran, kafe, do'kon va filiallar tarmog'i uchun ish jarayoniga moslab ishlab chiqadi va joriy etadi.",
      audience: [
        'Restoranlar, kafelar, fast-fud va kofeynyalar',
        "Do'konlar va chakana savdo tarmoqlari",
        "Bir nechta filialni bitta joydan boshqarmoqchi bo'lgan egalar",
        "Yetkazib berish va zalda xizmatni birlashtirmoqchi bo'lgan bizneslar",
      ],
      pains: [
        {
          title: 'Buyurtma oshxonaga kech yetadi',
          text: "Ofitsiant qog'ozni oshxonaga olib boradi, buyurtma chalkashadi, mijoz kutib qoladi va norozi bo'ladi.",
        },
        {
          title: "Mahsulot «yo'qolib» qoladi",
          text: "Sotilgan taomlar uchun ingredientlar hisobdan chiqarilmaydi — oy oxirida kamomad paydo bo'ladi va sababini hech kim bilmaydi.",
        },
        {
          title: "Filiallar ko'rinmaydi",
          text: "Har bir filialda o'z kassa dasturi, hisobotlar esa kechqurun telefon orqali yig'iladi.",
        },
      ],
      includes: [
        {
          title: 'Kassa va buyurtmalar',
          text: "Zal xaritasi, stollar, modifikatorlar, hisobni bo'lish, chegirmalar va bir nechta to'lov turi.",
        },
        {
          title: 'Oshxona ekrani (KDS)',
          text: "Buyurtma oshxonaga bir zumda tushadi, oshpaz tayyorlik holatini belgilaydi, kechikishlar ko'rinib turadi.",
        },
        {
          title: 'Ombor va texnologik kartalar',
          text: "Har bir taomning retsepti bo'yicha ingredientlar avtomatik hisobdan chiqariladi, kam qolgan mahsulot haqida ogohlantirish.",
        },
        {
          title: 'Yetkazib berish',
          text: 'Telegram-bot, sayt va agregatorlardan kelgan buyurtmalar ham shu kassaga tushadi, kuryerlar nazorat ostida.',
        },
        {
          title: "Onlayn-kassa va to'lovlar",
          text: "Fiskal cheklar, terminallar, Click, Payme va Uzum orqali to'lov integratsiyasi.",
        },
        {
          title: 'Filiallar va hisobotlar',
          text: "Barcha filiallar bitta panelda: savdo, o'rtacha chek, eng ko'p sotilgan taomlar, xodimlar samaradorligi.",
        },
      ],
      sections: [
        {
          h2: 'Tayyor POS yoki maxsus POS',
          paragraphs: [
            "Tayyor POS tizimlari tez ishga tushadi va kichik kafe uchun ko'pincha yetarli. Lekin filiallar tarmog'i, o'ziga xos menyu, o'z yetkazib berish xizmati yoki ERP bilan chuqur integratsiya kerak bo'lsa, shablon tizim to'sqinlik qila boshlaydi.",
            "Maxsus POS sizning xizmat ko'rsatish standartingizni raqamlashtiradi: buyurtma qaysi ketma-ketlikda yuriladi, kim qaysi chegirmani bera oladi, oshxona qaysi tartibda ishlaydi. Auditda ochiq aytamiz: sizga tayyor tizim yetadimi yoki maxsus kerakmi.",
          ],
        },
        {
          h2: "Ishga tushirish xizmatni to'xtatmasdan",
          paragraphs: [
            "POS'ni avval bitta filialda yoki bitta smenada sinab ko'ramiz, xodimlarni o'qitamiz va menyu hamda texnologik kartalarni tizimga kiritamiz. Faqat shundan keyin qolgan filiallarga o'tamiz.",
            "Uskunalar (planshetlar, printerlar, terminallar) bo'yicha ham maslahat beramiz, mavjud uskunalaringizdan foydalanishga harakat qilamiz.",
          ],
        },
        {
          h2: "POS joriy etilgandan keyin nimalar o'zgaradi",
          paragraphs: [
            "Birinchi o'zgarish — tezlik: buyurtma oshxonaga qog'oz orqali emas, bir zumda yetib boradi, ofitsiantlar zal bilan oshxona orasida kamroq yuradi. Ikkinchisi — nazorat: har bir sotilgan taom ingredientlarni hisobdan chiqaradi va kamomad sababi ko'rinib qoladi.",
            "Uchinchisi — rahbar uchun shaffoflik: har bir filialning savdosi, o'rtacha cheki va eng mashhur taomlari telefonda real vaqtda ko'rinadi. Bu menyu va narxlar bo'yicha qarorlarni taxmin emas, raqamlar asosida qabul qilish imkonini beradi.",
          ],
        },
      ],
      timeline: '6–10 hafta',
      faq: [
        {
          q: 'POS tizimi narxi qancha?',
          a: "POS «Biznes» paketiga kiradi — boshlang'ich narx «Narxlar» sahifasida. Yakuniy narx filiallar soni va integratsiyalarga bog'liq.",
        },
        {
          q: 'Internet uzilsa POS ishlaydimi?',
          a: "Ha, kassa oflayn rejimda ishlashda davom etadi va internet tiklanganda ma'lumotlarni sinxronlaydi.",
        },
        {
          q: 'Qanday uskunalar kerak?',
          a: 'Planshet yoki kompyuter, chek printeri va oshxona uchun ekran yoki printer. Mavjud uskunangizni tekshirib, imkon qadar undan foydalanamiz.',
        },
        {
          q: 'Onlayn-kassa va soliq talablari bilan ishlaydimi?',
          a: "Ha, fiskal cheklar uchun onlayn-kassalar bilan integratsiya qilamiz. TODO: qo'llab-quvvatlanadigan onlayn-kassa modellarini tasdiqlang.",
        },
        {
          q: 'Yetkazib berish buyurtmalari ham tushadimi?',
          a: "Ha, Telegram-bot, sayt va agregatorlardan kelgan buyurtmalar ham shu POS'ga tushadi va oshxonaga uzatiladi.",
        },
      ],
    },
    ru: {
      slug: 'pos-sistema',
      name: 'POS-система',
      summary:
        'Касса, кухонный экран, склад и отчёты для ресторанов и магазинов — в одной системе.',
      metaTitle: 'POS-система для ресторанов и магазинов | ZOLVI',
      metaDescription:
        'POS-система для ресторанов, кафе и магазинов: касса, кухонный экран, склад, филиалы и интеграция с онлайн-кассами. Внедрение в Ташкенте.',
      h1: 'POS-система — касса и управление для ресторанов и магазинов',
      lead: 'POS-система — это не просто касса: она принимает заказ, передаёт его на кухню или склад, списывает продукты и показывает руководителю продажи в реальном времени. ZOLVI разрабатывает и внедряет POS-систему под рабочий процесс ресторана, кафе, магазина или сети филиалов.',
      audience: [
        'Рестораны, кафе, фастфуд и кофейни',
        'Магазины и розничные сети',
        'Владельцы, которые хотят управлять несколькими филиалами из одного места',
        'Бизнес, которому нужно объединить доставку и обслуживание в зале',
      ],
      pains: [
        {
          title: 'Заказ поздно доходит до кухни',
          text: 'Официант несёт бумажку на кухню, заказ путается, гость ждёт и остаётся недоволен.',
        },
        {
          title: 'Продукты «пропадают»',
          text: 'Ингредиенты для проданных блюд не списываются — в конце месяца появляется недостача, и никто не знает почему.',
        },
        {
          title: 'Филиалов не видно',
          text: 'В каждом филиале своя касса, а отчёты собираются вечером по телефону.',
        },
      ],
      includes: [
        {
          title: 'Касса и заказы',
          text: 'Схема зала, столы, модификаторы, разделение счёта, скидки и несколько способов оплаты.',
        },
        {
          title: 'Кухонный экран (KDS)',
          text: 'Заказ мгновенно попадает на кухню, повар отмечает готовность, задержки сразу видны.',
        },
        {
          title: 'Склад и техкарты',
          text: 'Ингредиенты автоматически списываются по рецептуре блюда, уведомления о дефиците продуктов.',
        },
        {
          title: 'Доставка',
          text: 'Заказы из Telegram-бота, сайта и агрегаторов попадают в ту же кассу, курьеры под контролем.',
        },
        {
          title: 'Онлайн-касса и оплаты',
          text: 'Фискальные чеки, терминалы, интеграция оплаты через Click, Payme и Uzum.',
        },
        {
          title: 'Филиалы и отчёты',
          text: 'Все филиалы на одной панели: выручка, средний чек, топ блюд, эффективность сотрудников.',
        },
      ],
      sections: [
        {
          h2: 'Готовая POS или заказная',
          paragraphs: [
            'Готовые POS-системы запускаются быстро и для небольшого кафе часто подходят. Но если есть сеть филиалов, особое меню, собственная доставка или нужна глубокая интеграция с ERP, шаблонная система начинает мешать.',
            'Заказная POS оцифровывает ваш стандарт обслуживания: в какой последовательности идёт заказ, кто какую скидку может дать, в каком порядке работает кухня. На аудите честно скажем, хватит ли вам готовой системы или нужна заказная.',
          ],
        },
        {
          h2: 'Запуск без остановки работы',
          paragraphs: [
            'Сначала тестируем POS в одном филиале или в одну смену, обучаем сотрудников и вносим меню и техкарты. Только после этого переходим к остальным филиалам.',
            'Консультируем и по оборудованию (планшеты, принтеры, терминалы) и стараемся использовать то, что у вас уже есть.',
          ],
        },
        {
          h2: 'Что меняется после внедрения POS',
          paragraphs: [
            'Первое — скорость: заказ попадает на кухню мгновенно, а не на бумажке, официанты меньше ходят между залом и кухней. Второе — контроль: каждое проданное блюдо списывает ингредиенты, и причина недостачи становится видна.',
            'Третье — прозрачность для руководителя: выручка, средний чек и популярные блюда каждого филиала видны на телефоне в реальном времени. Решения по меню и ценам принимаются по цифрам, а не наугад.',
          ],
        },
      ],
      timeline: '6–10 недель',
      faq: [
        {
          q: 'Сколько стоит POS-система?',
          a: 'POS входит в пакет «Бизнес» — стартовая цена на странице «Цены». Итоговая стоимость зависит от числа филиалов и интеграций.',
        },
        {
          q: 'Работает ли POS без интернета?',
          a: 'Да, касса продолжает работать офлайн и синхронизирует данные, когда интернет появляется.',
        },
        {
          q: 'Какое оборудование нужно?',
          a: 'Планшет или компьютер, чековый принтер и экран или принтер для кухни. Проверим ваше оборудование и по возможности используем его.',
        },
        {
          q: 'Работает с онлайн-кассами и налоговыми требованиями?',
          a: 'Да, интегрируемся с онлайн-кассами для фискальных чеков. TODO: подтвердить список поддерживаемых моделей онлайн-касс.',
        },
        {
          q: 'Заказы на доставку тоже попадают в POS?',
          a: 'Да, заказы из Telegram-бота, сайта и агрегаторов попадают в ту же POS и передаются на кухню.',
        },
      ],
    },
    en: {
      slug: 'pos-system',
      name: 'POS system',
      summary:
        'Till, kitchen display, inventory and reports for restaurants and shops in one system.',
      metaTitle: 'POS System for Restaurants and Retail | ZOLVI',
      metaDescription:
        'A POS system for restaurants, cafes and shops: till, kitchen display, inventory, branches and online cash register integration. Implemented in Tashkent.',
      h1: 'POS system — till and management for restaurants and shops',
      lead: 'A POS system is more than a till: it takes the order, passes it to the kitchen or warehouse, writes off stock and shows the owner sales in real time. ZOLVI builds and implements a POS system around the workflow of a restaurant, cafe, shop or branch network.',
      audience: [
        'Restaurants, cafes, fast food and coffee shops',
        'Shops and retail chains',
        'Owners who want to run several branches from one place',
        'Businesses combining delivery with dine-in service',
      ],
      pains: [
        {
          title: 'Orders reach the kitchen late',
          text: 'A waiter walks a paper ticket to the kitchen, orders get mixed up, guests wait and leave unhappy.',
        },
        {
          title: 'Stock “disappears”',
          text: 'Ingredients for sold dishes are not written off, so a shortage appears at month-end and nobody knows why.',
        },
        {
          title: 'Branches are invisible',
          text: 'Each branch runs its own till software and reports are collected by phone in the evening.',
        },
      ],
      includes: [
        {
          title: 'Till and orders',
          text: 'Floor plan, tables, modifiers, split bills, discounts and multiple payment methods.',
        },
        {
          title: 'Kitchen display (KDS)',
          text: 'Orders reach the kitchen instantly, cooks mark them ready and delays are visible at a glance.',
        },
        {
          title: 'Inventory and recipes',
          text: 'Ingredients are written off automatically by recipe, with low-stock alerts.',
        },
        {
          title: 'Delivery',
          text: 'Orders from the Telegram bot, website and aggregators land in the same till, with couriers tracked.',
        },
        {
          title: 'Online cash register and payments',
          text: 'Fiscal receipts, card terminals and payments via Click, Payme and Uzum.',
        },
        {
          title: 'Branches and reports',
          text: 'Every branch on one dashboard: revenue, average check, best-selling dishes, staff performance.',
        },
      ],
      sections: [
        {
          h2: 'Off-the-shelf or custom POS',
          paragraphs: [
            'Off-the-shelf POS systems start quickly and are often enough for a small cafe. But with a branch network, a special menu, your own delivery or deep ERP integration, a template system starts getting in the way.',
            'A custom POS digitizes your service standard: the order flow, who can grant which discount, how the kitchen works. During the audit we tell you honestly whether an off-the-shelf system will do or you need a custom one.',
          ],
        },
        {
          h2: 'Launch without stopping service',
          paragraphs: [
            'We first test the POS in one branch or one shift, train the staff and load the menu and recipes. Only then do we roll it out to other branches.',
            'We also advise on hardware (tablets, printers, terminals) and try to reuse what you already have.',
          ],
        },
        {
          h2: 'What changes after a POS rollout',
          paragraphs: [
            'First, speed: orders reach the kitchen instantly instead of on paper, and waiters spend less time walking between floor and kitchen. Second, control: every dish sold writes off its ingredients, so the cause of any shortage becomes visible.',
            'Third, transparency for the owner: revenue, average check and top dishes for every branch are visible on a phone in real time, so menu and pricing decisions rest on numbers rather than guesses.',
          ],
        },
      ],
      timeline: '6–10 weeks',
      faq: [
        {
          q: 'How much does a POS system cost?',
          a: 'POS is part of the Business package — see the starting price on the Pricing page. The final price depends on the number of branches and integrations.',
        },
        {
          q: 'Does the POS work offline?',
          a: 'Yes, the till keeps working offline and syncs data once the connection is back.',
        },
        {
          q: 'What hardware is needed?',
          a: 'A tablet or computer, a receipt printer and a screen or printer for the kitchen. We check your existing hardware and reuse it where possible.',
        },
        {
          q: 'Does it work with online cash registers and tax rules?',
          a: 'Yes, we integrate with online cash registers for fiscal receipts. TODO: confirm the list of supported cash register models.',
        },
        {
          q: 'Do delivery orders reach the POS too?',
          a: 'Yes, orders from the Telegram bot, website and aggregators arrive in the same POS and go to the kitchen.',
        },
      ],
    },
  },
}

export default service
