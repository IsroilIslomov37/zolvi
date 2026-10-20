import type { PageMeta, PageProps } from './types'

export function getMeta(): PageMeta {
  return { title: 'CasePage | ZOLVI', description: 'TODO', heading: 'CasePage' }
}

export function Page({ routeKey }: PageProps) {
  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold">CasePage {JSON.stringify(routeKey)}</h1>
    </div>
  )
}
