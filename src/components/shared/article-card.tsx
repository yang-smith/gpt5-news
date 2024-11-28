import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Article } from '@/types/article'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'featured'  // 可以添加不同的样式变体
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  return (
    <Link href={`/${article.category}/${article.slug}`}>
      <Card className={`
        h-full 
        hover:shadow-lg 
        transition-shadow 
        duration-300
        ${variant === 'featured' ? 'border-primary' : ''}
      `}>
        <CardHeader>
          <div className="flex justify-between items-start space-x-4">
            <CardTitle className="text-xl line-clamp-2">
              {article.title}
            </CardTitle>
            <Badge 
              variant="secondary" 
              className="capitalize shrink-0"
            >
              {article.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* 文章描述 */}
            <p className="text-muted-foreground line-clamp-3">
              {article.description}
            </p>
            
            {/* 日期 */}
            <div className="flex items-center text-sm text-muted-foreground">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}