import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tricitycarselfdrive.in'
  const lastModified = new Date()

  const staticPages = ['', '/cars', '/locations', '/contact', '/about']

  const cityPages = ['chandigarh', 'kharar', 'zirakpur', 'mohali']

  return [
    // 🔹 STATIC PAGES
    ...staticPages.map((path): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: path === '' ? 1.0 : 0.8
    })),

    // 🔹 CITY SEO PAGES (HIGH PRIORITY)
    ...cityPages.map((city): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}/self-drive-cars/${city}`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9
    }))
  ]
}
