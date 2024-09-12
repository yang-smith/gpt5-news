import { getArticleContent } from '@/lib/api';
import ArticleDisplay from '@/components/ArticleDisplay';

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const content = await getArticleContent(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <ArticleDisplay content={content} />
    </div>
  );
}