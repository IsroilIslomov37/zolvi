import type { Service } from '@/lib/types'

const service: Service = {
  id: 'automation',
  kind: 'service',
  category: 'business',
  icon: 'automation',
  demo: 'crm',
  caseId: 'field-service-platform',
  plan: 'business',
  relatedServices: ['crm', 'erp', 'ai-automation', 'telegram-bot', 'api'],
  relatedIndustries: ['restaurants', 'logistics', 'field-service', 'clinics'],
  locales: {
    uz: {
      slug: 'biznesni-avtomatlashtirish',
      name: 'Biznesni avtomatlashtirish',
      summary:
        "Takrorlanadigan qo'l ishlarini tizimga topshiring: hisobotlar, bildirishnomalar, hujjatlar va nazorat.",
      metaTitle: 'Biznesni avtomatlashtirish Toshkentda | ZOLVI',
      metaDescription:
        "Biznesni avtomatlashtirish: hisobotlar, hujjatlar, bildirishnomalar va nazorat avtomatik. Qo'l mehnati va xatolar kamayadi. Bepul audit — 30 daqiqa.",
      h1: "Biznesni avtomatlashtirish — qo'l mehnatini tizimga topshiring",
      lead: "Biznesni avtomatlashtirish — bu xodimlar har kuni qo'lda bajaradigan ishlarni tizimga topshirish: ma'lumotni bir jadvaldan boshqasiga ko'chirish, hisobot yig'ish, eslatma yozish, hujjat tayyorlash. ZOLVI avval jarayonlaringiz xaritasini tuzadi, vaqt qayerda yo'qolayotganini topadi va aynan o'sha joylarni avtomatlashtiradi.",
      audience: [
        "Xodimlari kunining katta qismini Excel va qog'oz bilan o'tkazadigan kompaniyalar",
        "Rahbar har bir jarayonni shaxsan nazorat qilishga majbur bo'lgan bizneslar",
        'Filiallar yoki brigadalar ishini masofadan boshqaradigan kompaniyalar',
        "Xatolar va kechikishlar mijozlarni yo'qotishga olib kelayotgan jamoalar",
      ],
      pains: [
        {
          title: "Bir xil ish har kuni qo'lda",
          text: "Buyurtmalarni jadvalga ko'chirish, hisobot yig'ish, mijozlarga eslatma yuborish — bular har kuni bir necha soatni oladi.",
        },
        {
          title: 'Inson omili xatolari',
          text: "Noto'g'ri kiritilgan raqam, unutilgan to'lov, yuborilmagan hujjat — kichik xatolar katta yo'qotishlarga aylanadi.",
        },
        {
          title: 'Nazorat faqat rahbar orqali',
          text: "Hamma narsa rahbarning telefoni orqali o'tadi. U ta'tilga chiqsa — biznes sekinlashadi.",
        },
      ],
      includes: [
        {
          title: 'Jarayonlar auditi',
          text: "Har bir jarayon xaritasini tuzamiz, qo'l ishlari va kechikishlarni soatlarda o'lchaymiz va avtomatlashtirish rejasini tuzamiz.",
        },
        {
          title: 'Avtomatik hisobotlar',
          text: "Savdo, ombor, moliya va xodimlar bo'yicha hisobotlar o'z-o'zidan yig'iladi va har kuni Telegram yoki email'ga keladi.",
        },
        {
          title: 'Hujjatlar va shablonlar',
          text: "Shartnomalar, hisob-fakturalar, dalolatnomalar bir tugma bilan tizimdagi ma'lumotlardan tayyorlanadi.",
        },
        {
          title: 'Bildirishnomalar va eslatmalar',
          text: "Mijozlarga to'lov, yozilish va buyurtma holati haqida SMS va Telegram xabarlari avtomatik yuboriladi.",
        },
        {
          title: 'Vazifalar va nazorat',
          text: "Vazifa muddati o'tsa, mas'ul shaxs va rahbarga xabar boradi. Har bir jarayon holati bitta panelda.",
        },
        {
          title: "Tizimlarni bog'lash",
          text: "CRM, 1C, sayt, kassalar va bank o'rtasida ma'lumotlar avtomatik almashinadi.",
        },
      ],
      sections: [
        {
          h2: "Nimani avtomatlashtirish kerak, nimani — yo'q",
          paragraphs: [
            "Hamma narsani avtomatlashtirish shart emas. Eng katta samara tez-tez takrorlanadigan, qoidasi aniq va xatosi qimmatga tushadigan jarayonlardan keladi: buyurtmalarni qabul qilish, hisobotlar, to'lov eslatmalari, ombor harakati.",
            "Auditda har bir jarayonga oyiga qancha soat ketayotganini hisoblaymiz va avtomatlashtirishning qaytimini ko'rsatamiz. Agar biror jarayonni avtomatlashtirish o'zini oqlamasa, buni ochiq aytamiz.",
          ],
        },
        {
          h2: 'Kichik qadamlar bilan katta natija',
          paragraphs: [
            "Avtomatlashtirishni eng og'riqli jarayondan boshlaymiz va 2–4 haftada birinchi natijani beramiz — masalan, kunlik hisobot qo'lda emas, avtomatik keladi. Keyin keyingi jarayonga o'tamiz.",
            "Bunday yondashuv xodimlarga yangi tizimga asta-sekin ko'nikish imkonini beradi, siz esa har bir bosqichdan keyin natijani raqamlarda ko'rasiz.",
          ],
        },
        {
          h2: 'Avtomatlashtirishning odatiy natijalari',
          paragraphs: [
            "Avtomatlashtirishdan keyin odatda uch narsa o'zgaradi: xodimlar takroriy ishlarga kamroq vaqt sarflaydi, xatolar soni kamayadi va rahbar biznes holatini telefon qilmasdan ko'radi. Aniq raqamlar har bir kompaniyada boshqacha — shuning uchun ularni auditda sizning ma'lumotlaringiz asosida hisoblaymiz.",
            "Muhimi, bo'shagan vaqt yo'qolib ketmaydi: menejerlar ko'proq mijoz bilan ishlaydi, operatorlar ko'proq murojaatga javob beradi, rahbar esa operatsion ishlar o'rniga rivojlanish bilan shug'ullanadi.",
          ],
        },
      ],
      timeline: '4–10 hafta',
      faq: [
        {
          q: 'Biznesni avtomatlashtirish qancha turadi?',
          a: "Narx avtomatlashtiriladigan jarayonlar soniga bog'liq. Kichik avtomatlashtirish «Start» paketiga, kompleks loyiha «Biznes» paketiga kiradi. Aniq smetani auditdan keyin beramiz.",
        },
        {
          q: 'Qaysi jarayonlardan boshlash kerak?',
          a: "Eng ko'p vaqt oladigan va eng ko'p xato chiqaradigan jarayondan. Odatda bu hisobotlar, buyurtmalarni qabul qilish yoki ombor hisobi bo'ladi.",
        },
        {
          q: 'Mavjud dasturlarni almashtirish kerakmi?',
          a: "Shart emas. Ko'pincha mavjud dasturlarni (1C, CRM, Google Sheets) bir-biri bilan bog'lab, ular orasidagi qo'l ishini olib tashlaymiz.",
        },
        {
          q: "Xodimlar yangi tizimga ko'nikadimi?",
          a: "Interfeysni xodimlar bilan birga prototip bosqichida sinab ko'ramiz, ishga tushirishda esa o'qitamiz va birinchi haftada yonida bo'lamiz.",
        },
        {
          q: "Natijani qanday o'lchaymiz?",
          a: "Auditda «oldin» ko'rsatkichlarini (soatlar, xatolar, kechikishlar) qayd qilamiz va ishga tushirgandan keyin xuddi shu ko'rsatkichlar bilan solishtiramiz.",
        },
      ],
    },
    ru: {
      slug: 'avtomatizaciya-biznesa',
      name: 'Автоматизация бизнеса',
      summary: 'Передайте рутину системе: отчёты, уведомления, документы и контроль.',
      metaTitle: 'Автоматизация бизнеса в Узбекистане | ZOLVI',
      metaDescription:
        'Автоматизация бизнеса: отчёты, документы, уведомления и контроль — автоматически. Меньше ручной работы и ошибок. Ташкент. Бесплатный аудит — 30 минут.',
      h1: 'Автоматизация бизнеса — передайте рутину системе',
      lead: 'Автоматизация бизнеса — это передача системе того, что сотрудники каждый день делают руками: перенос данных из одной таблицы в другую, сбор отчётов, напоминания, подготовка документов. ZOLVI сначала составляет карту ваших процессов, находит, где теряется время, и автоматизирует именно эти места.',
      audience: [
        'Компании, где сотрудники проводят большую часть дня в Excel и бумагах',
        'Бизнес, где руководитель вынужден лично контролировать каждый процесс',
        'Компании, которые удалённо управляют филиалами или бригадами',
        'Команды, у которых ошибки и задержки стоят потерянных клиентов',
      ],
      pains: [
        {
          title: 'Одна и та же работа руками каждый день',
          text: 'Перенос заказов в таблицу, сбор отчётов, напоминания клиентам — на это каждый день уходит несколько часов.',
        },
        {
          title: 'Ошибки человеческого фактора',
          text: 'Неверно введённая цифра, забытый платёж, неотправленный документ — мелкие ошибки превращаются в большие потери.',
        },
        {
          title: 'Контроль — только через руководителя',
          text: 'Всё проходит через телефон руководителя. Он уходит в отпуск — бизнес замедляется.',
        },
      ],
      includes: [
        {
          title: 'Аудит процессов',
          text: 'Составляем карту каждого процесса, измеряем ручную работу и задержки в часах и строим план автоматизации.',
        },
        {
          title: 'Автоматические отчёты',
          text: 'Отчёты по продажам, складу, финансам и сотрудникам собираются сами и каждый день приходят в Telegram или на почту.',
        },
        {
          title: 'Документы и шаблоны',
          text: 'Договоры, счета, акты готовятся одной кнопкой из данных системы.',
        },
        {
          title: 'Уведомления и напоминания',
          text: 'SMS и сообщения в Telegram клиентам об оплате, записи и статусе заказа отправляются автоматически.',
        },
        {
          title: 'Задачи и контроль',
          text: 'Просрочена задача — уведомление получают ответственный и руководитель. Статус каждого процесса на одной панели.',
        },
        {
          title: 'Связка систем',
          text: 'Данные автоматически передаются между CRM, 1С, сайтом, кассами и банком.',
        },
      ],
      sections: [
        {
          h2: 'Что стоит автоматизировать, а что — нет',
          paragraphs: [
            'Автоматизировать всё не нужно. Наибольший эффект дают частые процессы с понятными правилами и дорогой ценой ошибки: приём заказов, отчёты, напоминания об оплате, движение товара на складе.',
            'На аудите считаем, сколько часов в месяц уходит на каждый процесс, и показываем окупаемость автоматизации. Если какой-то процесс автоматизировать невыгодно, говорим об этом прямо.',
          ],
        },
        {
          h2: 'Большой результат маленькими шагами',
          paragraphs: [
            'Начинаем с самого болезненного процесса и даём первый результат за 2–4 недели — например, ежедневный отчёт приходит автоматически, а не собирается вручную. Затем переходим к следующему процессу.',
            'Такой подход позволяет сотрудникам постепенно привыкнуть к новой системе, а вам — видеть результат в цифрах после каждого этапа.',
          ],
        },
        {
          h2: 'Типичные результаты автоматизации',
          paragraphs: [
            'После автоматизации обычно меняются три вещи: сотрудники тратят меньше времени на повторяющиеся задачи, ошибок становится меньше, а руководитель видит состояние бизнеса без звонков. Точные цифры у каждой компании свои — поэтому считаем их на аудите по вашим данным.',
            'Важно, что освободившееся время не теряется: менеджеры больше работают с клиентами, операторы успевают ответить на большее число обращений, а руководитель занимается развитием вместо операционки.',
          ],
        },
      ],
      timeline: '4–10 недель',
      faq: [
        {
          q: 'Сколько стоит автоматизация бизнеса?',
          a: 'Стоимость зависит от числа автоматизируемых процессов. Небольшая автоматизация входит в пакет «Старт», комплексный проект — в пакет «Бизнес». Точную смету даём после аудита.',
        },
        {
          q: 'С каких процессов начинать?',
          a: 'С того, который отнимает больше всего времени и даёт больше всего ошибок. Обычно это отчёты, приём заказов или складской учёт.',
        },
        {
          q: 'Нужно менять существующие программы?',
          a: 'Не обязательно. Часто мы связываем существующие программы (1С, CRM, Google Sheets) между собой и убираем ручную работу между ними.',
        },
        {
          q: 'Сотрудники привыкнут к новой системе?',
          a: 'Интерфейс тестируем вместе с сотрудниками на этапе прототипа, при запуске обучаем и первую неделю находимся рядом.',
        },
        {
          q: 'Как измерить результат?',
          a: 'На аудите фиксируем показатели «до» (часы, ошибки, задержки) и после запуска сравниваем с теми же показателями.',
        },
      ],
    },
    en: {
      slug: 'business-automation',
      name: 'Business automation',
      summary: 'Hand routine work to a system: reports, notifications, documents and control.',
      metaTitle: 'Business Automation in Uzbekistan | ZOLVI',
      metaDescription:
        'Business automation: reports, documents, notifications and control run on their own. Less manual work and fewer errors. Tashkent. Free 30-minute audit.',
      h1: 'Business automation — hand routine work to a system',
      lead: 'Business automation means handing the system what your staff do by hand every day: copying data between spreadsheets, building reports, writing reminders, preparing documents. ZOLVI first maps your processes, finds where time is lost and automates exactly those spots.',
      audience: [
        'Companies whose staff spend most of the day in spreadsheets and paperwork',
        'Businesses where the owner has to control every process personally',
        'Companies managing branches or field crews remotely',
        'Teams losing customers to mistakes and delays',
      ],
      pains: [
        {
          title: 'The same work by hand every day',
          text: 'Copying orders into a spreadsheet, building reports, reminding customers — it takes hours every day.',
        },
        {
          title: 'Human error',
          text: 'A mistyped number, a forgotten payment, a document never sent — small mistakes turn into big losses.',
        },
        {
          title: 'Control only through the owner',
          text: 'Everything goes through the owner’s phone. When they go on holiday, the business slows down.',
        },
      ],
      includes: [
        {
          title: 'Process audit',
          text: 'We map every process, measure manual work and delays in hours and build an automation plan.',
        },
        {
          title: 'Automatic reports',
          text: 'Sales, inventory, finance and staff reports build themselves and arrive in Telegram or email every day.',
        },
        {
          title: 'Documents and templates',
          text: 'Contracts, invoices and acts are generated from system data in one click.',
        },
        {
          title: 'Notifications and reminders',
          text: 'SMS and Telegram messages about payments, appointments and order status go to customers automatically.',
        },
        {
          title: 'Tasks and control',
          text: 'When a task is overdue, the owner of the task and the manager are notified. Every process status on one dashboard.',
        },
        {
          title: 'Connected systems',
          text: 'Data flows automatically between the CRM, 1C, website, cash registers and the bank.',
        },
      ],
      sections: [
        {
          h2: 'What to automate — and what not to',
          paragraphs: [
            'You do not need to automate everything. The biggest gains come from frequent processes with clear rules where errors are expensive: taking orders, reports, payment reminders, stock movements.',
            'During the audit we calculate how many hours a month each process takes and show the payback of automating it. If automating something does not pay off, we say so.',
          ],
        },
        {
          h2: 'Big results in small steps',
          paragraphs: [
            'We start with the most painful process and deliver the first result in 2–4 weeks — for example, the daily report arrives automatically instead of being built by hand. Then we move to the next process.',
            'This lets your team get used to the new system gradually, and you see the result in numbers after every stage.',
          ],
        },
        {
          h2: 'Typical results of automation',
          paragraphs: [
            'After automation three things usually change: staff spend less time on repetitive tasks, there are fewer errors and the owner sees the state of the business without phone calls. Exact figures differ for every company, so we calculate them from your own data during the audit.',
            'Crucially, the time freed up is not lost: managers spend more time with customers, operators handle more requests and the owner works on growth instead of daily operations.',
          ],
        },
      ],
      timeline: '4–10 weeks',
      faq: [
        {
          q: 'How much does business automation cost?',
          a: 'It depends on how many processes are automated. Small automations fall under the Start package, complex projects under Business. We give an exact estimate after the audit.',
        },
        {
          q: 'Which processes should we start with?',
          a: 'The one that takes the most time and produces the most errors. Usually that is reporting, order intake or inventory.',
        },
        {
          q: 'Do we need to replace our existing software?',
          a: 'Not necessarily. Often we connect your existing tools (1C, CRM, Google Sheets) and remove the manual work between them.',
        },
        {
          q: 'Will staff adapt to the new system?',
          a: 'We test the interface with your staff at the prototype stage, train them at launch and stay close during the first week.',
        },
        {
          q: 'How do we measure the result?',
          a: 'During the audit we record “before” metrics (hours, errors, delays) and compare the same metrics after launch.',
        },
      ],
    },
  },
}

export default service
