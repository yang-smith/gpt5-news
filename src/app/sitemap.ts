import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/markdown'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  const baseUrl = 'https://gpt5-news.site'

  const routes = [
    '',
    '/news',
    '/gpt5',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/${article.category}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...articleRoutes]
}