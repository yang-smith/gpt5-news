import Link from 'next/link'
import { getAllArticles } from '@/lib/markdown'
import { ArticleCard } from '@/components/shared/article-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Latest ChatGPT-5 News & Updates | GPT-5 Release Information',
  description: 'Get the latest updates about ChatGPT-5 development, release date predictions, and news. Stay informed about GPT-5 features and capabilities.',
}

export default function Home() {
  // 获取最新的3篇文章
  const latestArticles = getAllArticles().slice(0, 3)

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your Source for GPT-5 Updates
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Stay informed about the latest developments, features, and news about GPT-5.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/news">
              <Button size="lg">Latest News</Button>
            </Link>
            <Link href="/gpt5">
              <Button variant="outline" size="lg">Explore Features</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Latest Updates</h2>
            <p className="text-muted-foreground">
              Stay up to date with the latest GPT-5 news and developments
            </p>
          </div>
          <Link href="/news">
            <Button variant="ghost">View All News →</Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">GPT-5 Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Coming Soon</Badge>
              <CardTitle>Enhanced Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Advanced natural language understanding</li>
                <li>Improved context retention</li>
                <li>Enhanced reasoning abilities</li>
                <li>Better multimodal processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2" variant="secondary">Research</Badge>
              <CardTitle>Technical Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Larger parameter count</li>
                <li>More efficient training process</li>
                <li>Reduced computational requirements</li>
                <li>Better fine-tuning capabilities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <Card className="bg-muted">
          <CardContent className="flex flex-col items-center justify-center space-y-4 p-12 text-center">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Don't miss any updates about GPT-5. Follow our news section for the latest information.
            </p>
            <Link href="/news">
              <Button size="lg" className="mt-4">
                View All News
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}