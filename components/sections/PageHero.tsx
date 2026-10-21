import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

/** Top of every inner page: breadcrumbs, H1, lead paragraph and an optional right column. */
export function PageHero({
  crumbs,
  label,
  eyebrow,
  title,
  lead,
  aside,
  children,
}: {
  crumbs: { name: string; path: string }[]
  label: string
  eyebrow?: string
  title: string
  lead?: ReactNode
  /** Shown beside the heading on large screens (a figure, a preview, contacts). */
  aside?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <Breadcrumbs items={crumbs} label={label} />
        <div className={`mt-10 ${aside ? 'grid items-center gap-12 lg:grid-cols-12' : ''}`}>
          <div className={aside ? 'lg:col-span-7' : 'max-w-4xl'}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="text-title font-bold">{title}</h1>
            {lead && <div className="measure text-lead mt-6 text-muted">{lead}</div>}
            {children}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </section>
  )
}
