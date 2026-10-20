export const locales = ['uz', 'ru', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'uz'

/** A value translated into every locale. */
export type L10n<T> = Record<Locale, T>

export const localeMeta: L10n<{
  label: string
  short: string
  htmlLang: string
  ogLocale: string
}> = {
  uz: { label: "O'zbekcha", short: 'UZ', htmlLang: 'uz', ogLocale: 'uz_UZ' },
  ru: { label: 'Русский', short: 'RU', htmlLang: 'ru', ogLocale: 'ru_RU' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Picks the current locale's value; accepts plain values for strings that don't need translating. */
export function t<T>(value: L10n<T>, locale: Locale): T {
  return value[locale]
}

const dateFormats: L10n<string> = { uz: 'uz-UZ', ru: 'ru-RU', en: 'en-GB' }

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(dateFormats[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}
