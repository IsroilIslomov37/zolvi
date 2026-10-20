import type { PageMeta, PageProps } from './types'

export function getMeta(): PageMeta {
  return { title: 'PrivacyPage | ZOLVI', description: 'TODO', heading: 'PrivacyPage' }
}

export function Page({ routeKey }: PageProps) {
  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold">PrivacyPage {JSON.stringify(routeKey)}</h1>
    </div>
  )
}
