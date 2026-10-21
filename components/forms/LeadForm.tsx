'use client'

import { useEffect, useId, useState, type FormEvent, type ReactNode } from 'react'
import { track } from '@/lib/analytics'
import type { Dictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { formatUzPhone } from '@/lib/phone'
import { Icon } from '@/components/ui/Icon'

type Status = 'idle' | 'sending' | 'success' | 'error' | 'rate_limited'

// Floating labels: the label sits inside the empty field and moves up on focus or input.
const box =
  'peer w-full rounded-control border border-line-strong bg-bg px-4 text-base text-text transition-colors hover:border-muted/60 focus:border-accent focus:outline-none aria-invalid:border-danger'
const floating =
  'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-all duration-200 ease-out peer-focus:top-3.5 peer-focus:text-xs peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium'
const raised =
  'pointer-events-none absolute top-3.5 left-4 -translate-y-1/2 text-xs font-medium text-muted'

export function LeadForm({
  locale,
  t,
  privacyHref,
  telegramUrl,
  defaultBusiness = '',
  plans,
}: {
  locale: Locale
  t: Dictionary['form']
  privacyHref: string
  telegramUrl: string
  defaultBusiness?: string
  plans: { id: string; name: string }[]
}) {
  const id = useId()
  const [status, setStatus] = useState<Status>('idle')
  const [phone, setPhone] = useState('')
  const [plan, setPlan] = useState('')
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({})

  // Package cards link to #audit with data-plan; preselect that package here.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest('[data-plan]')
      const picked = el?.getAttribute('data-plan')
      if (picked && plans.some((p) => p.id === picked)) setPlan(picked)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [plans])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const digits = phone.replace(/\D/g, '')
    const nextErrors = { name: name.length < 2, phone: digits.length !== 9 }
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.phone) {
      e.currentTarget
        .querySelector<HTMLElement>(nextErrors.name ? `[name="name"]` : `[name="phone"]`)
        ?.focus()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: digits,
          business: form.get('business') ?? '',
          plan: plans.find((p) => p.id === plan)?.name ?? '',
          comment: form.get('comment') ?? '',
          website: form.get('website') ?? '',
          locale,
          page: location.pathname,
        }),
      })
      if (res.status === 429) return setStatus('rate_limited')
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      track('lead_submit', {
        page: location.pathname,
        business: String(form.get('business') ?? ''),
        plan,
      })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="panel flex flex-col items-start gap-5 p-8 sm:p-10">
        <span className="animate-pop-in grid size-16 place-items-center rounded-full bg-accent text-accent-ink">
          <Icon name="check" className="size-8" strokeWidth={2.5} />
        </span>
        <p className="animate-fade-up text-xl font-semibold [animation-delay:150ms]">{t.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="panel space-y-4 p-5 sm:p-8">
      <Field error={errors.name && t.invalidName} errorId={`${id}-name-err`}>
        <input
          id={`${id}-name`}
          name="name"
          autoComplete="name"
          required
          maxLength={80}
          placeholder=" "
          aria-invalid={errors.name || undefined}
          aria-describedby={errors.name ? `${id}-name-err` : undefined}
          onInput={() => errors.name && setErrors((e) => ({ ...e, name: false }))}
          className={`${box} h-14 pt-5 pb-1.5`}
        />
        <label htmlFor={`${id}-name`} className={floating}>
          {t.name} *
        </label>
      </Field>

      <Field error={errors.phone && t.invalidPhone} errorId={`${id}-phone-err`}>
        <span className="pointer-events-none absolute bottom-2 left-4 text-base text-muted">
          +998
        </span>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          required
          placeholder="90 123 45 67"
          value={phone}
          onChange={(e) => {
            setPhone(formatUzPhone(e.target.value))
            if (errors.phone) setErrors((er) => ({ ...er, phone: false }))
          }}
          aria-invalid={errors.phone || undefined}
          aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
          className={`${box} h-14 pt-5 pb-1.5 pl-[3.6rem] placeholder:text-muted/50`}
        />
        <label htmlFor={`${id}-phone`} className={raised}>
          {t.phone} *
        </label>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <select
            id={`${id}-business`}
            name="business"
            defaultValue={defaultBusiness}
            className={`${box} h-14 appearance-none pt-5 pr-10 pb-1.5`}
          >
            <option value="">{t.businessPlaceholder}</option>
            {t.businessTypes.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <label htmlFor={`${id}-business`} className={raised}>
            {t.business}
          </label>
          <Icon
            name="chevron"
            className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
          />
        </Field>

        <Field>
          <select
            id={`${id}-plan`}
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className={`${box} h-14 appearance-none pt-5 pr-10 pb-1.5`}
          >
            <option value="">{t.planPlaceholder}</option>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <label htmlFor={`${id}-plan`} className={raised}>
            {t.plan}
          </label>
          <Icon
            name="chevron"
            className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
          />
        </Field>
      </div>

      <Field>
        <textarea
          id={`${id}-comment`}
          name="comment"
          rows={3}
          maxLength={1000}
          placeholder={t.commentPlaceholder}
          className={`${box} min-h-28 resize-y pt-7 pb-3 placeholder:text-transparent focus:placeholder:text-muted/60`}
        />
        <label htmlFor={`${id}-comment`} className={floating.replace('top-1/2', 'top-7')}>
          {t.comment}
        </label>
      </Field>

      {/* Honeypot: hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        aria-busy={status === 'sending' || undefined}
        className="btn btn-primary h-14 w-full text-base"
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>

      {(status === 'error' || status === 'rate_limited') && (
        <p
          role="alert"
          className="flex gap-2.5 rounded-control bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          <Icon name="alert" className="mt-0.5 size-4 shrink-0" />
          <span>
            {status === 'error' ? t.error : t.rateLimited}{' '}
            <a href={telegramUrl} className="font-semibold underline">
              Telegram
            </a>
          </span>
        </p>
      )}
      <p className="text-sm text-muted">
        <a href={privacyHref} className="tap underline underline-offset-2 hover:text-text">
          {t.consent}
        </a>
      </p>
    </form>
  )
}

function Field({
  children,
  error,
  errorId,
}: {
  children: ReactNode
  error?: string | false
  errorId?: string
}) {
  return (
    <div>
      <div className="relative">{children}</div>
      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-sm text-danger">
          <Icon name="alert" className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}
