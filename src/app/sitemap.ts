import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gpt5-news.site',
      lastModified: new Date(),
    },
    // {
    //   url: 'https://your-domain.com/about',
    //   lastModified: new Date(),
    // },
    // ... 其他页面
  ]
}