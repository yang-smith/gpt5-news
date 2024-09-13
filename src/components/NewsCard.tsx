import Image, { StaticImageData } from 'next/image';
import { NewsItem } from '../lib/types';


import defaultImage from '@/images/default.png';
import xLogo from '@/images/x-logo-b.png';
import githubLogo from '@/images/default.png';
import post from '@/images/post1.png';

// 创建一个图片映射对象
const imageMap: Record<string, StaticImageData> = {
  'default': defaultImage,
  'x-logo': xLogo,
  'github-logo': githubLogo,
  'post': post,
};

export default function NewsCard({ news }: { news: NewsItem }) {
  // 使用映射获取正确的图片，如果没有匹配项则使用默认图片
  const imageSource = imageMap[news.imageUrl] || defaultImage;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <Image
        src={imageSource}
        alt={news.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-purple-300">{news.title}</h2>
        <p className="text-gray-300 mb-4 line-clamp-3">{news.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{news.date}</span>
          <a 
            href={news.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-400 hover:text-pink-300 transition-colors duration-200"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}