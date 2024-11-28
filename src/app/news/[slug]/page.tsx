import { getArticleBySlug, getAllArticles } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// 生成静态页面参数
export async function generateStaticParams() {
  const articles = getAllArticles().filter(article => article.category === 'news')
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

interface NewsDetailPageProps {
  params: {
    slug: string
  }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = getArticleBySlug('news', params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto py-8 md:py-12">
      {/* 文章头部 */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Badge variant="secondary" className="capitalize">
              {article.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
              {article.title}
            </h1>
          </div>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
        <Separator />
      </div>

      {/* 文章内容 */}
      <div className="prose prose-gray dark:prose-invert mx-auto mt-8">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* 文章底部 */}
      <div className="mt-8">
        <Separator className="my-8" />
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            Thanks for reading!
          </p>
          <Badge variant="outline">
            GPT-5 News
          </Badge>
        </div>
      </div>
    </article>
  )
}