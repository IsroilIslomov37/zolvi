import type { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  headingLevel = 2,
  layout = 'stack',
}: {
  id?: string
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  children?: ReactNode
  className?: string
  headingLevel?: 2 | 3
  /** `split`: heading in a sticky left column, content on the right (lg and up). */
  layout?: 'stack' | 'split'
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const headingId = id ? `${id}-title` : undefined
  const split = layout === 'split'
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`section-y ${className}`}
    >
      <div className={`container-page ${split ? 'grid gap-10 lg:grid-cols-12 lg:gap-12' : ''}`}>
        {(eyebrow || title || intro) && (
          <header
            className={
              split ? 'self-start lg:sticky lg:top-28 lg:col-span-4' : 'mb-10 max-w-3xl sm:mb-14'
            }
          >
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <Heading id={headingId} className="text-heading font-bold">
                {title}
              </Heading>
            )}
            {intro && <div className="measure text-lead mt-5 text-muted">{intro}</div>}
          </header>
        )}
        {split ? <div className="lg:col-span-8">{children}</div> : children}
      </div>
    </section>
  )
}
