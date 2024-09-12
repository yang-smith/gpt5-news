import NewsCard from '@/components/NewsCard';
import { getNews } from '@/lib/api';

export default async function NewsList() {
  const news = getNews();

  // 按时间倒序排序新闻
  const sortedNews = news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedNews.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}