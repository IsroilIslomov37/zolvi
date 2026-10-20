import Link from 'next/link'

export function Breadcrumbs({
  items,
  label,
}: {
  items: { name: string; path: string }[]
  label: string
}) {
  return (
    <nav aria-label={label} className="text-muted text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-text">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-text">
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="opacity-50">
                    /
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
