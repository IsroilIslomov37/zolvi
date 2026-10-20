import type { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  headingLevel = 2,
}: {
  id?: string
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  children?: ReactNode
  className?: string
  headingLevel?: 2 | 3
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const headingId = id ? `${id}-title` : undefined
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`py-16 sm:py-24 ${className}`}
    >
      <div className="container-page">
        {(eyebrow || title || intro) && (
          <header className="mb-10 max-w-3xl sm:mb-14">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <Heading
                id={headingId}
                className="text-[clamp(1.6rem,1.1rem+2.2vw,2.6rem)] font-bold"
              >
                {title}
              </Heading>
            )}
            {intro && <div className="text-muted mt-5 text-lg">{intro}</div>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
