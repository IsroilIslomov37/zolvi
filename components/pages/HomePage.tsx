import type { PageMeta, PageProps } from './types'

export function getMeta(): PageMeta {
  return { title: 'HomePage | ZOLVI', description: 'TODO', heading: 'HomePage' }
}

export function Page({ routeKey }: PageProps) {
  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold">HomePage {JSON.stringify(routeKey)}</h1>
    </div>
  )
}
