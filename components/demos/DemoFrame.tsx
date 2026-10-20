import type { ReactNode } from 'react'
import type { L10n } from '@/lib/i18n'

export function DemoFrame({
  title,
  note,
  children,
  actions,
}: {
  title: string
  note: string
  children: ReactNode
  actions?: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface text-text shadow-[var(--shadow)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-2 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff6b5b]" />
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="size-2.5 rounded-full bg-[#4ade80]" />
          </span>
          <span className="text-sm font-bold">{title}</span>
          <span className="rounded-md bg-accent/15 px-2 py-0.5 text-[10px] font-bold tracking-widest text-accent-text uppercase">
            Demo
          </span>
        </div>
        {actions}
      </div>
      <div className="p-3 sm:p-5">{children}</div>
      <p className="border-t border-line px-4 py-2.5 text-xs text-muted">{note}</p>
    </div>
  )
}

export const demoNote: L10n<string> = {
  uz: "Bu namoyish: ma'lumotlar o'ylab topilgan, haqiqiy tizim sizning jarayonlaringizga moslanadi.",
  ru: 'Это демонстрация: данные вымышленные, настоящая система настраивается под ваши процессы.',
  en: 'This is a demo with made-up data; the real system is tailored to your processes.',
}

export const fmtNumber = (n: number) => new Intl.NumberFormat('ru-RU').format(n)

export const currency: L10n<string> = { uz: "so'm", ru: 'сум', en: 'UZS' }

export const smallBtn = 'btn btn-primary min-h-8 rounded-lg px-3 py-1.5 text-xs'
