import { getArticleBySlug, getAllArticles } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

// 生成静态页面参数
export async function generateStaticParams() {
  const articles = getAllArticles().filter(article => article.category === 'gpt5')
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

interface GPT5FeaturePageProps {
  params: {
    slug: string
  }
}

export default function GPT5FeaturePage({ params }: GPT5FeaturePageProps) {
  const article = getArticleBySlug('gpt5', params.slug)

  if (!article) {
    notFound()
  }

  // 获取其他GPT5文章用于推荐
  const relatedArticles = getAllArticles()
    .filter(a => a.category === 'gpt5' && a.slug !== params.slug)
    .slice(0, 2)

  return (
    <div className="space-y-12">
      {/* 文章主体 */}
      <article>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="capitalize">
                {article.category}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {article.description}
              </p>
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
      </article>

      {/* 相关文章 */}
      {relatedArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Related Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedArticles.map((article) => (
              <Link key={article.slug} href={`/gpt5/${article.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground">{article.description}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {new Date(article.date).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 返回按钮 */}
      <div className="flex justify-center">
        <Link 
          href="/gpt5"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to GPT-5 Overview
        </Link>
      </div>
    </div>
  )
}