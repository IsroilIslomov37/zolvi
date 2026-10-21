'use client'

import { useEffect, useId, useState, type FormEvent } from 'react'
import { track } from '@/lib/analytics'
import type { Dictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'
import { formatUzPhone } from '@/lib/phone'
import { Icon } from '@/components/ui/Icon'

type Status = 'idle' | 'sending' | 'success' | 'error' | 'rate_limited'

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
    if (nextErrors.name || nextErrors.phone) return

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
      <div role="status" className="card flex flex-col items-start gap-4 p-8">
        <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-ink">
          <Icon name="check" className="size-6" />
        </span>
        <p className="text-lg font-semibold">{t.success}</p>
      </div>
    )
  }

  const field =
    'w-full rounded-control border border-line-strong bg-bg px-4 py-3 text-base text-text placeholder:text-muted/70 focus:border-accent focus:outline-none'
  const label = 'mb-1.5 block text-sm font-semibold'

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-4 p-5 sm:p-8">
      <div>
        <label htmlFor={`${id}-name`} className={label}>
          {t.name} <span className="text-muted">*</span>
        </label>
        <input
          id={`${id}-name`}
          name="name"
          autoComplete="name"
          required
          maxLength={80}
          aria-invalid={errors.name || undefined}
          aria-describedby={errors.name ? `${id}-name-err` : undefined}
          className={field}
        />
        {errors.name && (
          <p id={`${id}-name-err`} className="mt-1.5 text-sm text-danger">
            {t.invalidName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className={label}>
          {t.phone} <span className="text-muted">*</span>
        </label>
        <div className="flex rounded-control border border-line-strong bg-bg focus-within:border-accent">
          <span className="flex items-center border-r border-line pr-3 pl-4 text-muted select-none">
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
            onChange={(e) => setPhone(formatUzPhone(e.target.value))}
            aria-invalid={errors.phone || undefined}
            aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
            className="w-full rounded-r-xl bg-transparent px-3 py-3 text-base text-text placeholder:text-muted/70 focus:outline-none"
          />
        </div>
        {errors.phone && (
          <p id={`${id}-phone-err`} className="mt-1.5 text-sm text-danger">
            {t.invalidPhone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-business`} className={label}>
          {t.business}
        </label>
        <select
          id={`${id}-business`}
          name="business"
          defaultValue={defaultBusiness}
          className={field}
        >
          <option value="">{t.businessPlaceholder}</option>
          {t.businessTypes.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-plan`} className={label}>
          {t.plan}
        </label>
        <select
          id={`${id}-plan`}
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className={field}
        >
          <option value="">{t.planPlaceholder}</option>
          {plans.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-comment`} className={label}>
          {t.comment}
        </label>
        <textarea
          id={`${id}-comment`}
          name="comment"
          rows={3}
          maxLength={1000}
          placeholder={t.commentPlaceholder}
          className={field}
        />
      </div>

      {/* Honeypot: hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary w-full disabled:opacity-70"
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>

      {(status === 'error' || status === 'rate_limited') && (
        <p role="alert" className="text-sm text-danger">
          {status === 'error' ? t.error : t.rateLimited}{' '}
          <a href={telegramUrl} className="underline">
            Telegram
          </a>
        </p>
      )}
      <p className="text-xs text-muted">
        <a href={privacyHref} className="underline underline-offset-2">
          {t.consent}
        </a>
      </p>
    </form>
  )
}
