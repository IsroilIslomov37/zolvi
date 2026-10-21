import { localeMeta, locales, type L10n, type Locale } from '@/lib/i18n'

/** Plain links to the same page in other languages: crawlable and works without JS. */
export function LangSwitcher({
  locale,
  paths,
  label,
  large = false,
}: {
  locale: Locale
  paths: L10n<string>
  label: string
  /** 44px targets for touch layouts (mobile menu, footer). */
  large?: boolean
}) {
  return (
    <nav aria-label={label}>
      <ul className="flex items-center rounded-control border border-line p-1 text-xs font-semibold">
        {locales.map((l) => (
          <li key={l}>
            <a
              href={paths[l]}
              hrefLang={localeMeta[l].htmlLang}
              lang={localeMeta[l].htmlLang}
              aria-current={l === locale ? 'true' : undefined}
              title={localeMeta[l].label}
              className={`grid place-items-center rounded-lg px-2.5 transition-colors ${
                large ? 'min-h-11 min-w-11' : 'min-h-11 min-w-11 lg:min-h-8 lg:min-w-9'
              } ${l === locale ? 'bg-surface-2 text-text' : 'text-muted hover:text-text'}`}
            >
              {localeMeta[l].short}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
