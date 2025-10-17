import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Web Utilities',
    short_name: 'Web Utilities',
    description:
      'A collection of free, simple, and powerful online web utilities. Tools for developers, designers, and content creators to make your tasks easier.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    lang: 'en',
    icons: [
      {
        src: '/images/icon.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/images/icon.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  }
}
