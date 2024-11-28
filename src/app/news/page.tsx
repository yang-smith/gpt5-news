import { getAllArticles } from '@/lib/markdown'
import { ArticleCard } from '@/components/shared/article-card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'

export default function NewsPage() {
  const articles = getAllArticles().filter(article => article.category === 'news')

  return (
    <main className="flex-1">
      <div className="container py-8 md:py-12">
        {/* 页面标题 */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">News</h1>
              <Badge variant="secondary">
                {articles.length} Articles
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Latest updates and news about GPT-5 development and releases.
            </p>
          </div>
          <Separator />
        </div>

        {/* 文章列表 */}
        {articles.length > 0 ? (
          <div className="grid gap-6 mt-8">
            {articles.map((article) => (
              <ArticleCard 
                key={article.slug} 
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-lg font-semibold">No articles found</h3>
            <p className="text-muted-foreground">
              Check back later for updates.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'GPT-5 News | Latest Updates and Release Information',
  description: 'Latest news about GPT-5 development, release timeline, and updates from OpenAI. Stay informed about ChatGPT-5 progress.',
}