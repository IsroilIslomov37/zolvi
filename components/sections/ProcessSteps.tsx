import { home } from '@/content/home'
import type { Locale } from '@/lib/i18n'

/** The five delivery stages, shared by the home page and every landing page. */
export function ProcessSteps({ locale }: { locale: Locale }) {
  const { steps } = home[locale].process
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.title} className="card relative flex flex-col p-5">
          <span className="mb-4 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-ink">
              {i + 1}
            </span>
            <span className="text-xs font-semibold text-accent-text">{step.when}</span>
          </span>
          <h3 className="font-sans text-lg font-bold tracking-normal">{step.title}</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {step.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-accent-text">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
