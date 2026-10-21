import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

/** Top of every inner page: breadcrumbs, H1 and lead paragraph. */
export function PageHero({
  crumbs,
  label,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: { name: string; path: string }[]
  label: string
  eyebrow?: string
  title: string
  lead?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <Breadcrumbs items={crumbs} label={label} />
        <div className="mt-10 max-w-4xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-title font-bold">{title}</h1>
          {lead && <div className="measure text-lead mt-6 text-muted">{lead}</div>}
          {children}
        </div>
      </div>
    </section>
  )
}
