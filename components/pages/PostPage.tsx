import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { industries } from '@/content/industries'
import { services } from '@/content/services'
import { getPost } from '@/lib/blog'
import { getDictionary } from '@/lib/dictionary'
import { formatDate, type Locale } from '@/lib/i18n'
import { ogImagePath, pathFor, type RouteKey } from '@/lib/routes'
import { articleLd, breadcrumbLd, graph } from '@/lib/seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { Todo } from '@/components/ui/Todo'
import type { PageMeta, PageProps } from './types'

function find(locale: Locale, key: RouteKey) {
  const post = 'id' in key ? getPost(locale, key.id) : undefined
  if (!post) throw new Error(`Unknown post ${JSON.stringify(key)} (${locale})`)
  return post
}

export const nav = 'blog'

export function getMeta(locale: Locale, key: RouteKey): PageMeta {
  const p = find(locale, key)
  return {
    title: p.title,
    description: p.description,
    heading: p.h1,
    eyebrow: 'Blog',
    article: { published: p.date, modified: p.updated },
  }
}

/** Components available inside MDX articles. */
const mdxComponents = { Todo }

export async function Page({ locale, routeKey }: PageProps) {
  const p = find(locale, routeKey)
  const d = getDictionary(locale)
  const path = pathFor(routeKey, locale)
  const crumbs = [
    { name: d.breadcrumbsHome, path: pathFor({ type: 'home' }, locale) },
    { name: d.nav.blog, path: pathFor({ type: 'blog' }, locale) },
    { name: p.h1, path },
  ]
  const relatedServices = p.services
    .map((id) => services.find((s) => s.id === id))
    .filter((s) => s !== undefined)
  const relatedIndustries = p.industries
    .map((id) => industries.find((s) => s.id === id))
    .filter((s) => s !== undefined)
  const toc = p.headings.filter((h) => h.level === 2)

  return (
    <>
      <article>
        <header className="relative overflow-hidden pt-8 pb-12 sm:pt-12">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="container-page relative">
            <Breadcrumbs items={crumbs} label={d.breadcrumbsLabel} />
            <div className="mt-10 max-w-3xl">
              <h1 className="text-title font-bold">{p.h1}</h1>
              <p className="mt-5 text-lg text-muted">{p.description}</p>
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <div>
                  <dt className="text-muted">{d.blog.author}</dt>
                  <dd className="font-semibold">
                    {p.author}
                    {p.authorRole && (
                      <span className="font-normal text-muted"> · {p.authorRole}</span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">{d.blog.published}</dt>
                  <dd className="font-semibold">
                    <time dateTime={p.date.toISOString()}>
                      {formatDate(p.date.toISOString(), locale)}
                    </time>
                  </dd>
                </div>
                {p.updated && (
                  <div>
                    <dt className="text-muted">{d.blog.updated}</dt>
                    <dd className="font-semibold">
                      <time dateTime={p.updated.toISOString()}>
                        {formatDate(p.updated.toISOString(), locale)}
                      </time>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted">{d.blog.reading}</dt>
                  <dd className="font-semibold">
                    {p.readingMinutes} {d.blog.minutes}
                  </dd>
                </div>
              </dl>
              {p.draft && (
                <p className="mt-6">
                  <Todo>{d.blog.draft}</Todo>
                </p>
              )}
            </div>
          </div>
        </header>

        <div className="container-page grid gap-12 pb-16 lg:grid-cols-[1fr_17rem] lg:gap-16">
          <div className="prose-zolvi max-w-3xl min-w-0">
            <MDXRemote
              source={p.body}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
            />
          </div>
          <aside className="order-first lg:order-none">
            <div className="space-y-8 lg:sticky lg:top-24">
              {toc.length > 0 && (
                <nav aria-labelledby="toc-title" className="card p-5">
                  <h2 id="toc-title" className="font-sans text-sm font-semibold text-muted">
                    {d.blog.toc}
                  </h2>
                  <ol className="mt-4 space-y-2 text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-muted hover:text-text">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              {(relatedServices.length > 0 || relatedIndustries.length > 0) && (
                <nav aria-labelledby="post-related" className="card p-5">
                  <h2 id="post-related" className="font-sans text-sm font-semibold text-muted">
                    {d.blog.related}
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {relatedServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={pathFor({ type: 'service', id: s.id }, locale)}
                          className="flex items-center gap-2 font-semibold hover:text-accent-text"
                        >
                          <Icon name={s.icon} className="size-4 text-accent-text" />
                          {s.locales[locale].name}
                        </Link>
                      </li>
                    ))}
                    {relatedIndustries.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={pathFor({ type: 'industry', id: s.id }, locale)}
                          className="flex items-center gap-2 font-semibold hover:text-accent-text"
                        >
                          <Icon name={s.icon} className="size-4 text-accent-text" />
                          {s.locales[locale].name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </aside>
        </div>
      </article>
      <JsonLd
        data={graph(
          articleLd({
            title: p.h1,
            description: p.description,
            path,
            image: ogImagePath(routeKey, locale),
            published: p.date,
            modified: p.updated,
            author: p.author,
            locale,
          }),
          breadcrumbLd(crumbs),
        )}
      />
    </>
  )
}
