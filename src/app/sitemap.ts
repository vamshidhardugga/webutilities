import type { MetadataRoute } from 'next'

import { DOMAIN_NAME } from '@/config/env'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['']

  return paths.map((path) => ({
    url: `https://${DOMAIN_NAME}${path === '' ? '' : '/'}${path}`,
    lastModified: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-01`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.9
  }))
}
