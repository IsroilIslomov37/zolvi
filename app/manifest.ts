import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZOLVI — CRM, ERP va biznesni avtomatlashtirish',
    short_name: 'ZOLVI',
    description: 'Shovqinni tizimga aylantiramiz: CRM, ERP, avtomatlashtirish va AI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1119',
    theme_color: '#0b1119',
    lang: 'uz',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
  }
}
