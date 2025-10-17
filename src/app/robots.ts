import type { MetadataRoute } from 'next'

import { DOMAIN_NAME } from '@/config/env'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/'
    },
    sitemap: `https://${DOMAIN_NAME}/sitemap.xml`
  }
}
