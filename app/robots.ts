import type { MetadataRoute } from 'next';
import { SiteConfig } from '@/config/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SiteConfig.siteUrl}/sitemap.xml`,
    host: SiteConfig.siteUrl,
  };
}
