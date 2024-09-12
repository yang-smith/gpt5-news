import { NewsItem } from './types';

// 手动构建的 NewsItem 数组
const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Tweet from @apples_jimmy',
    excerpt: 'Exciting developments in GPT-5! This technology is revolutionizing how we approach problem-solving. #GPT5 #AI',
    content: '',
    imageUrl: 'x-logo',
    url: 'https://x.com/apples_jimmy/status/1833595024543781088',
    date: '2024-03-11',
    source: 'X'
  },
  {
    id: '2',
    title: 'GitHub: openai/gpt-5',
    excerpt: 'OpenAI releases GPT-5, the next generation of language models.',
    content: '',
    imageUrl: 'default',
    url: 'https://github.com/openai/gpt-5',
    date: '2024-03-15',
    source: 'GitHub'
  },
  {
    id: '3',
    title: 'Jimmy Apples on GPT-4.5 and GPT-5 Release Predictions',
    excerpt: 'We should have a 4.x model (maybe still called 4.5) in October. GPT-5 expected as early as December, but Q1/Q2 2025 more likely. View Strawberry in context of better models to come.',
    content: 'Ok back to October now. We should have a 4.x model ( maybe still called 4.5, my old friend ) in October. The big boy gpt 5, I\'ve heard as early as December but for your sanity I would have Q1/Q2 2025 just in case. View Strawberry in context of better models to come.',
    imageUrl: 'x-logo',
    url: 'https://x.com/apples_jimmy/status/1833595024543781088',
    date: '2024-09-11',
    source: 'X'
  },
  {
    id: '4',
    title: 'Everything You Should Know About GPT-5',
    excerpt: 'GPT-5 is coming – and it will arrive before the end of 2024, according to OpenAI\'s latest announcement. OpenAI\'s Japan CEO announced that GPT-5 would be released in 2024, with an alleged computational load 100x that of GPT-4.',
    content: 'GPT-5 is poised to run circles around GPT-4. Here\'s what to expect, according to AI insiders.\n\nGPT-5 is coming – and it will arrive before the end of 2024, according to OpenAI\'s latest announcement. \n\nIn his podcast interview with Bill Gates, OpenAI CEO Sam Altman confirmed in January 2024 that GPT-5 was under development. Most recently, OpenAI\'s Japan CEO announced that GPT-5 would be released in 2024, with an alleged computational load 100x that of GPT-4.\n\nIn this article, we\'ve compiled all the available information about the upcoming GPT-5 model.',
    imageUrl: 'default',
    url: 'https://botpress.com/blog/everything-you-should-know-about-gpt-5',
    date: '2024-07-02',
    source: 'blog'
  },
  {
    id: '5',
    title: 'ChatGPT-5: Expected release date, price, and what we know so far',
    excerpt: 'OpenAI\'s ChatGPT-5 is confirmed and will be the next version of the AI chatbot. Expected to launch in late 2024 or early 2025, it promises major advancements.',
    content: 'TL:DR\n- OpenAI\'s ChatGPT-5 is confirmed and will be the next version of the AI chatbot.\n- Expected to launch in late 2024 or early 2025, it promises major advancements.\n- ChatGPT-5 aims to improve natural language processing and human-like interaction.\n- Multi-modal capabilities will be expanded to include more data types like images and audio.\n- OpenAI plans to make ChatGPT-5 customizable and personalizable for diverse user needs.',
    imageUrl: 'default', 
    url: 'https://readwrite.com/chatgpt-5-release-date-price-and-what-we-know-so-far/', // 请替换为实际的文章URL
    date: '2024-09-09',
    source: 'Tech Journal'
  },
  // ... 其他新闻项 ...
];

export function getNews(): NewsItem[] {
  return newsItems;
}

// 如果你需要根据 ID 获取单个新闻项
export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  return newsItems.find(item => item.id === id);
}

// 其他函数可以根据需要保留或删除