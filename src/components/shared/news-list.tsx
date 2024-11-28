import { Article } from '@/types/article'
import { ArticleCard } from '@/components/shared/article-card'

interface NewsListProps {
  articles: Article[]
}

export function NewsList({ articles }: NewsListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold">No articles found</h3>
        <p className="text-muted-foreground">Check back later for updates.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}