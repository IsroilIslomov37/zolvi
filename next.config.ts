import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: { formats: ['image/avif', 'image/webp'] },
  experimental: {
    // Unmatched URLs get a real 404 even though the root layout lives under [locale].
    globalNotFound: true,
  },
  async redirects() {
    return [
      // One canonical host: https://zolvi.uz
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.zolvi.uz' }],
        destination: 'https://zolvi.uz/:path*',
        statusCode: 301,
      },
      // Uzbek is served without a prefix; /uz/... is only an internal path.
      { source: '/uz', destination: '/', statusCode: 301 },
      { source: '/uz/:path*', destination: '/:path*', statusCode: 301 },
    ]
  },
  async rewrites() {
    return {
      // Checked after static files and before dynamic routes, so /xizmatlar is
      // served by app/[locale]/[[...slug]] with locale = uz.
      afterFiles: [
        { source: '/', destination: '/uz' },
        {
          source: '/:path((?!(?:ru|en|uz)(?:/|$)|og/|api/|_next/).+)',
          destination: '/uz/:path',
        },
      ],
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/og/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, immutable' }],
      },
    ]
  },
}

export default nextConfig
