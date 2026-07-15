import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/jsonld'
import { POSTS } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date('2026-07-15')
  const routes = ['', '/contacto', '/blog'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const posts = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...routes, ...posts]
}
