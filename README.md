# ZOLVI — zolvi.uz

Сайт студии ZOLVI (CRM, ERP, автоматизация, AI). Три языка (uz по умолчанию без префикса, `/ru`, `/en`),
все страницы собираются статически (SSG), контент лежит в `content/`.

**Стек:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · MDX (блог) · zod · lucide-react.

---

## Быстрый старт

```bash
npm install
cp .env.example .env.local   # заполните переменные (см. ниже)
npm run dev                  # http://localhost:3000
```

Нужен Node.js ≥ 20.9.

| Команда                               | Что делает                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`                         | Dev-сервер                                                                                                                                                                            |
| `npm run build`                       | Продакшн-сборка (все страницы + OG-картинки статически)                                                                                                                               |
| `npm run start`                       | Запуск собранного сайта                                                                                                                                                               |
| `npm run lint` / `npm run typecheck`  | ESLint / TypeScript                                                                                                                                                                   |
| `npm run format`                      | Prettier                                                                                                                                                                              |
| `npm run check-content`               | Быстрая проверка контента без сборки: длина title ≤ 60 и description ≤ 160, дубли, число FAQ                                                                                          |
| `npm run seo-check`                   | Проверка **собранных** страниц (после `build`): h1, title, description, canonical, hreflang, og, JSON-LD, `<html lang>`, битые внутренние ссылки, sitemap ↔ страницы, robots.txt, 404 |
| `npm run lighthouse -- <url> [пути…]` | Lighthouse (mobile), 3 прогона на страницу, отчёты в `reports/lighthouse/`                                                                                                            |
| `npm run word-count [фильтр]`         | Количество слов в `<main>` собранных страниц                                                                                                                                          |

Перед коммитом: `npm run lint && npm run typecheck && npm run build && npm run seo-check`.

> В Git Bash на Windows пути вида `/xizmatlar` превращаются в `C:/Program Files/Git/...`.
> Запускайте так: `MSYS_NO_PATHCONV=1 npm run lighthouse -- http://localhost:3000 / /xizmatlar/crm-tizimi`.

---

## Структура

```
app/
  [locale]/layout.tsx          корневой layout (html lang, шрифты, аналитика)
  [locale]/[[...slug]]/page.tsx одна точка входа для всех страниц: путь → RouteKey → компонент
  og/[locale]/[key]/route.tsx  OG-картинки 1200×630 (next/og), генерируются при сборке
  api/lead/route.ts            форма → Telegram
  sitemap.ts robots.ts manifest.ts global-not-found.tsx
components/
  pages/        шаблон каждой страницы (getMeta + Page)
  sections/     блоки страниц (hero, кейсы, цены, процесс…)
  demos/        интерактивные демо (грузятся лениво)
  layout/ ui/ forms/ analytics/
content/
  services/*.ts industries/*.ts   лендинги услуг и отраслей (uz/ru/en в одном файле)
  cases/index.ts compare/*.ts demos.ts pricing.ts home.ts
  blog/<locale>/*.mdx             статьи блога
lib/
  site.ts        ВСЕ факты о компании (телефон, адрес, гео, соцсети) — TODO тут
  routes.ts      переведённые адреса разделов и построение URL
  seo.ts         метаданные, hreflang, JSON-LD
  dictionary.ts  строки интерфейса на трёх языках
scripts/         seo-check, check-content, lighthouse, word-count
```

### Адреса и языки

- Узбекский — без префикса: `/xizmatlar/crm-tizimi`; русский — `/ru/uslugi/razrabotka-crm`; английский — `/en/services/crm-development`.
- Корни разделов переводятся в `lib/routes.ts` (`sections`), адреса отдельных страниц — поле `slug` в контенте.
- Физически все страницы живут в `app/[locale]/[[...slug]]`. `next.config.ts` переписывает `/xizmatlar` → `/uz/xizmatlar`
  (rewrite, URL в браузере не меняется) и делает 301 с `/uz/*` → `/*` и с `www.zolvi.uz` → `https://zolvi.uz`.
- Переключатель языков — обычные `<a href>` на ту же страницу на другом языке; на каждой странице есть `hreflang` uz/ru/en + `x-default` (uz).

---

## Как добавить контент

### Новая услуга или отрасль

1. Скопируйте ближайший файл, например `content/services/crm.ts` → `content/services/new-service.ts`.
2. Поменяйте `id`, `icon` (список в `components/ui/Icon.tsx`), `demo`, `plan`, связи и тексты на трёх языках.
   Уникальный `slug` для каждого языка, `metaTitle` ≤ 60 символов (с « | ZOLVI»), `metaDescription` ≤ 160, 5–7 FAQ.
3. Добавьте импорт в `content/services/index.ts` (порядок в массиве = порядок в меню и сетках).
4. `npm run check-content`, затем `npm run build && npm run seo-check`.

Страница, sitemap, hreflang, OG-картинка, JSON-LD (Service + FAQPage + BreadcrumbList), ссылки в футере и в сетке
на главной появятся автоматически. Отрасли — то же самое в `content/industries/`.

### Новая статья блога

Создайте по файлу на каждый язык: `content/blog/uz/<slug>.mdx`, `content/blog/ru/<slug>.mdx`, `content/blog/en/<slug>.mdx`.
Имя файла = адрес статьи. Общий `id` во frontmatter связывает переводы:

```mdx
---
id: my-article # одинаковый во всех языках
title: 'Заголовок для <title> | ZOLVI' # ≤ 60 символов
description: '≤ 160 символов'
h1: 'Заголовок статьи'
date: 2026-11-01
author: Akmaljon Mordayev
services: [crm, automation] # id услуг для блока «Услуги из статьи»
industries: [restaurants]
draft: false # true → показывается плашка «черновик»
---

Текст в Markdown. ## Заголовки второго уровня попадают в оглавление.
Таблицы (GFM) поддерживаются. Для пометки пробела в фактах: <Todo>что уточнить</Todo>
```

Статья должна существовать на **всех трёх** языках (иначе сборка упадёт с понятной ошибкой).
Внутри MDX не используйте `{` `}` и `<` в обычном тексте — это синтаксис MDX.

### Кейс, сравнение, демо

- Кейсы: `content/cases/index.ts`. Метрики — только реальные; название клиента, стек, скриншоты и отзыв — после согласия клиента.
- Сравнения: файл в `content/compare/` + импорт в `content/compare/index.ts`.
- Демо: компонент в `components/demos/`, регистрация в `components/demos/DemoHost.tsx` и `content/demos.ts` → страница `/demo/<id>`.

### Факты о компании

Телефон, адрес, координаты, часы работы, соцсети, юр. название — в `lib/site.ts`.
Пока значение `null`, на сайте показывается заметная метка `TODO`, а в JSON-LD поле просто не выводится.
Цены пакетов — `priceFrom` в `content/pricing.ts` (число в сумах).

Найти все пробелы: `grep -rn "TODO" content lib components`.

---

## Переменные окружения

| Переменная                             | Где используется                                                         | Обязательно   |
| -------------------------------------- | ------------------------------------------------------------------------ | ------------- |
| `TELEGRAM_BOT_TOKEN`                   | `app/api/lead` — токен бота от @BotFather (только сервер)                | да, для формы |
| `TELEGRAM_CHAT_ID`                     | id чата/группы, куда приходят заявки (бот должен быть добавлен в группу) | да, для формы |
| `NEXT_PUBLIC_GA_ID`                    | Google Analytics 4 (`G-XXXXXXX`)                                         | нет           |
| `NEXT_PUBLIC_YM_ID`                    | Яндекс Метрика (номер счётчика)                                          | нет           |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | мета-тег Search Console                                                  | нет           |
| `NEXT_PUBLIC_YANDEX_VERIFICATION`      | мета-тег Яндекс Вебмастера                                               | нет           |

Без Telegram-переменных форма отвечает 503 и предлагает написать в Telegram — заявка не теряется молча.
События аналитики: `cta_click`, `lead_submit`, `telegram_click`, `phone_click`, `demo_open`
(в Метрике — цели с такими же идентификаторами; создайте их как «JavaScript-событие»).

Как узнать `TELEGRAM_CHAT_ID`: добавьте бота в группу, напишите в группе сообщение, откройте
`https://api.telegram.org/bot<TOKEN>/getUpdates` и возьмите `chat.id` (для групп он отрицательный).

---

## Деплой на Vercel (основной вариант)

1. Импортируйте репозиторий в Vercel (Framework: Next.js, настройки по умолчанию).
2. Settings → Environment Variables: добавьте переменные из таблицы выше (Production).
3. Settings → Domains: добавьте `zolvi.uz` (основной) и `www.zolvi.uz` с редиректом на `zolvi.uz` (301).
   Редирект с www продублирован в `next.config.ts`.
4. DNS у регистратора: `A @ 76.76.21.21`, `CNAME www cname.vercel-dns.com` (проверьте актуальные значения в Vercel).
5. Проверьте: `https://zolvi.uz/`, `/ru`, `/en`, `/sitemap.xml`, `/robots.txt`, несуществующий адрес → 404.

Rate limit формы — в памяти инстанса (защита от простого спама). Для жёсткого лимита между инстансами
подключите общий стор (например, Upstash Redis) в `app/api/lead/route.ts`.

## Альтернатива: статический экспорт (любой хостинг)

`output: 'export'` не поддерживает rewrites/redirects, Route Handlers на запрос и `global-not-found`, поэтому:

1. В `next.config.ts`: добавьте `output: 'export'`, `images: { unoptimized: true }`, уберите `rewrites`, `redirects`, `headers`
   и `experimental.globalNotFound`; удалите `app/api` (форму перенесите в serverless-функцию, например Cloudflare Worker,
   и поменяйте адрес в `components/forms/LeadForm.tsx`).
2. `npm run build` → папка `out/`. Узбекские страницы окажутся в `out/uz/…` — отдавайте их с корня правилами сервера.
   Пример nginx:

```nginx
server {
  server_name zolvi.uz;
  root /var/www/zolvi/out;

  location ~ ^/uz(/.*)?$ { return 301 /$1; }          # /uz/... → /...
  location ~ ^/(ru|en|_next|og)(/|$) { try_files $uri $uri.html $uri/index.html =404; }
  location / { try_files $uri /uz$uri.html /uz$uri/index.html /uz.html =404; }
  error_page 404 /404.html;
}
server { server_name www.zolvi.uz; return 301 https://zolvi.uz$request_uri; }
```

Основной и проверенный путь — Vercel.

---

## После деплоя

1. **Google Search Console**: добавьте ресурс `https://zolvi.uz` (домен или префикс), подтвердите через
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` или DNS, отправьте `https://zolvi.uz/sitemap.xml`.
2. **Яндекс Вебмастер**: добавьте сайт, подтвердите через `NEXT_PUBLIC_YANDEX_VERIFICATION`, отправьте sitemap,
   укажите регион (Ташкент) в «Региональности».
3. **Google Business Profile** и **Яндекс Бизнес** (а также 2GIS): карточка компании с тем же названием, адресом,
   телефоном и сайтом, что в `lib/site.ts` (NAP должен совпадать везде).
4. Проверьте разметку: [Rich Results Test](https://search.google.com/test/rich-results) и валидатор schema.org.
5. Проверьте скорость на реальном домене: [PageSpeed Insights](https://pagespeed.web.dev/); полевые данные (CrUX) появятся через ~28 дней трафика.
6. Заполните все `TODO` (см. отчёт / `grep -rn TODO`) — особенно телефон, адрес, цены, кейсы и отзывы: без них не будет полной разметки `LocalBusiness`.
7. Создайте цели в Метрике и конверсии в GA4 для событий формы и кликов.
