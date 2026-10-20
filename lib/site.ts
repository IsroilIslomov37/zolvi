/**
 * Every real-world fact about the company lives here. `null` means "unknown yet":
 * the UI shows a visible TODO marker and structured data simply omits the field.
 * Search the repo for "TODO" to get the full list of gaps.
 */
export const site = {
  name: 'ZOLVI',
  legalName: null as string | null, // TODO: юридическое название (ООО/MCHJ) для реквизитов и Schema
  url: 'https://zolvi.uz',
  // TODO: заменить на info@zolvi.uz, когда почта на домене будет настроена
  email: 'akmaljonmordayev@gmail.com',
  telegram: {
    handle: '@akmaljonmordayev',
    url: 'https://t.me/akmaljonmordayev',
  },
  phone: null as string | null, // TODO: телефон в формате +998XXXXXXXXX
  address: null as null | {
    // TODO: адрес офиса
    street: string
    city: string
    region: string
    postalCode: string
    country: 'UZ'
  },
  geo: null as null | { lat: number; lng: number }, // TODO: координаты офиса (для карты и Schema)
  openingHours: null as null | { days: string[]; opens: string; closes: string }, // TODO: часы работы
  foundingYear: null as number | null, // TODO: год основания
  sameAs: [
    'https://t.me/akmaljonmordayev',
    // TODO: точный URL профиля LinkedIn (Akmaljon Mordayev), Instagram, Facebook, YouTube
  ] as string[],
  linkedin: null as string | null, // TODO: URL LinkedIn Akmaljon Mordayev
  areaServed: ['Toshkent', "O'zbekiston"],
  colors: { yellow: '#F5B521', navy: '#1E3A5F', ink: '#16202E' },
} as const

export const env = {
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
  ymId: process.env.NEXT_PUBLIC_YM_ID ?? '',
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  yandexVerification: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ?? '',
}

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, '')}`
}
