import Link from 'next/link'
import { getAllArticles } from '@/lib/markdown'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Metadata } from 'next'

export default function GPT5Page() {
  const gpt5Articles = getAllArticles().filter(article => article.category === 'gpt5')

  // 特性卡片数据
  const features = [
    {
      title: "Enhanced Intelligence",
      description: "Advanced reasoning capabilities and improved context understanding",
      status: "development"
    },
    {
      title: "Multimodal Processing",
      description: "Better handling of various data types and formats",
      status: "research"
    },
    {
      title: "Improved Efficiency",
      description: "Optimized performance with reduced computational requirements",
      status: "planned"
    },
    {
      title: "Extended Context",
      description: "Larger context window for better information retention",
      status: "development"
    }
  ]

  return (
    <div className="space-y-12">
      {/* 页面标题 */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">GPT-5 Overview</h1>
          <p className="text-muted-foreground">
            Comprehensive information about GPT-5&apos;s features, capabilities, and development status.
          </p>
        </div>
        <Separator />
      </div>

      {/* 特性网格 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <Badge variant="secondary">{feature.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 技术规格 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Technical Specifications</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Model Size</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">~4.0T</p>
              <p className="text-muted-foreground">Parameters</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Context Window</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">100K+</p>
              <p className="text-muted-foreground">Tokens</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Training Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2024</p>
              <p className="text-muted-foreground">Latest Update</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 相关文章 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {gpt5Articles.map((article) => (
            <Link key={article.slug} href={`/gpt5/${article.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
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
    </div>
  )
}

export const metadata: Metadata = {
  title: 'GPT-5 Features & Capabilities | ChatGPT-5 Information',
  description: 'Explore GPT-5 features, capabilities, and improvements. Learn about ChatGPT-5 expected release date and technical specifications.',
}