import { Separator } from "@/components/ui/separator"

interface ArticleLayoutProps {
  title: string
  date: string
  children: React.ReactNode
}

export function ArticleLayout({ title, date, children }: ArticleLayoutProps) {
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <time className="text-gray-500">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <Separator className="my-8" />
        <div className="prose max-w-none">
          {children}
        </div>
      </div>
    </article>
  )
}
