import { home } from '@/content/home'
import type { Locale } from '@/lib/i18n'

/** The five delivery stages as a timeline, shared by the home page and every landing page. */
export function ProcessSteps({ locale }: { locale: Locale }) {
  const { steps } = home[locale].process
  return (
    <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
      {steps.map((step, i) => (
        <li key={step.title} className="relative pl-16 md:pt-16 md:pl-0">
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute top-12 -bottom-10 left-6 w-px bg-line-strong md:top-6 md:right-[-1.5rem] md:bottom-auto md:left-12 md:h-px md:w-auto"
            />
          )}
          <span
            className={`absolute top-0 left-0 grid size-12 place-items-center rounded-full font-display text-base font-bold ${
              i === 0
                ? 'bg-accent text-accent-ink'
                : 'border border-line-strong bg-surface text-text'
            }`}
          >
            {i + 1}
          </span>
          <p className="text-sm font-semibold text-accent-text">{step.when}</p>
          <h3 className="mt-1 font-sans text-xl font-bold tracking-tight">{step.title}</h3>
          <ul className="mt-3 space-y-1.5 text-muted">
            {step.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
