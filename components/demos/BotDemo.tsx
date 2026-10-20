'use client'

import { useEffect, useRef, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { Icon } from '@/components/ui/Icon'
import { DemoFrame, demoNote } from './DemoFrame'

type Reply = { label: string; answer: string }

const copy: Record<
  Locale,
  { title: string; bot: string; greeting: string; typing: string; replies: Reply[] }
> = {
  uz: {
    title: 'Telegram-bot',
    bot: 'Kafe yordamchisi',
    greeting: "Assalomu alaykum! Men buyurtma va bron bo'yicha yordam beraman. Nima qilamiz?",
    typing: 'yozmoqda…',
    replies: [
      {
        label: '📋 Menyu',
        answer:
          "Bugungi menyu: Osh — 45 000, Lag'mon — 38 000, Somsa — 9 000. Qaysi birini buyurtma qilamiz?",
      },
      {
        label: '🚚 Buyurtma holati',
        answer: "#482 buyurtmangiz yo'lda. Kuryer Jasur, taxminan 14:20 da yetib boradi.",
      },
      {
        label: '📅 Stol bron qilish',
        answer:
          "Bugun 19:00 ga 4 kishilik stol bo'sh. Bron qilamizmi? Tasdiqlash SMS orqali keladi.",
      },
      {
        label: '👤 Operator',
        answer:
          "Murojaatingiz CRM'ga yozildi va operator Madinaga biriktirildi. U 2 daqiqa ichida javob beradi.",
      },
    ],
  },
  ru: {
    title: 'Telegram-бот',
    bot: 'Помощник кафе',
    greeting: 'Здравствуйте! Помогу с заказом и бронью. Что делаем?',
    typing: 'печатает…',
    replies: [
      {
        label: '📋 Меню',
        answer: 'Сегодня в меню: плов — 45 000, лагман — 38 000, самса — 9 000. Что заказываем?',
      },
      {
        label: '🚚 Статус заказа',
        answer: 'Ваш заказ #482 в пути. Курьер Жасур, будет примерно в 14:20.',
      },
      {
        label: '📅 Забронировать стол',
        answer:
          'Сегодня на 19:00 свободен стол на 4 человек. Бронируем? Подтверждение придёт по SMS.',
      },
      {
        label: '👤 Оператор',
        answer:
          'Обращение записано в CRM и назначено оператору Мадине. Она ответит в течение 2 минут.',
      },
    ],
  },
  en: {
    title: 'Telegram bot',
    bot: 'Cafe assistant',
    greeting: 'Hello! I can help with orders and bookings. What would you like to do?',
    typing: 'typing…',
    replies: [
      {
        label: '📋 Menu',
        answer: "Today's menu: plov — 45,000, lagman — 38,000, samsa — 9,000. What shall we order?",
      },
      {
        label: '🚚 Order status',
        answer: 'Your order #482 is on the way. Courier Jasur will arrive around 14:20.',
      },
      {
        label: '📅 Book a table',
        answer:
          'A table for 4 is free tonight at 19:00. Shall I book it? Confirmation comes by SMS.',
      },
      {
        label: '👤 Operator',
        answer:
          'Your request is logged in the CRM and assigned to Madina. She will reply within 2 minutes.',
      },
    ],
  },
}

type Message = { from: 'bot' | 'user'; text: string }

export default function BotDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: t.greeting }])
  const [typing, setTyping] = useState(false)
  const scroller = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])
  useEffect(() => () => clearTimeout(timer.current), [])

  const ask = (reply: Reply) => {
    if (typing) return
    setMessages((m) => [...m, { from: 'user', text: reply.label }])
    setTyping(true)
    timer.current = setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: reply.answer }])
    }, 900)
  }

  return (
    <DemoFrame title={t.title} note={demoNote[locale]}>
      <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-line bg-[#0e1621] text-[#e9eef5]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#17212b] px-4 py-3">
          <span className="grid size-9 place-items-center rounded-full bg-[#2aabee] text-white">
            <Icon name="bot" className="size-5" />
          </span>
          <div>
            <p className="text-sm font-bold">{t.bot}</p>
            <p className="text-[11px] text-[#7f91a4]">{typing ? t.typing : 'bot'}</p>
          </div>
        </div>
        <div ref={scroller} className="h-72 space-y-2 overflow-y-auto p-3" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <p
                className={`animate-fade-up max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === 'user' ? 'rounded-br-md bg-[#2b5278]' : 'rounded-bl-md bg-[#182533]'
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
          {typing && (
            <div className="flex">
              <span className="rounded-2xl rounded-bl-md bg-[#182533] px-3 py-2 text-sm">
                <span className="animate-pulse-dot">•••</span>
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-1.5 border-t border-white/10 bg-[#17212b] p-2">
          {t.replies.map((r) => (
            <button
              key={r.label}
              type="button"
              onClick={() => ask(r)}
              className="rounded-lg bg-[#2b5278]/60 px-2 py-2 text-xs font-semibold transition hover:bg-[#2b5278]"
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
    </DemoFrame>
  )
}
