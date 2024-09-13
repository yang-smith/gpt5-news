import { NewsItem } from './types';

// 手动构建的 NewsItem 数组
const newsItems: NewsItem[] = [
  {
    id: '2',
    title: 'GitHub: openai',
    excerpt: 'https://github.com/openai',
    content: '',
    imageUrl: 'default',
    url: 'https://github.com/openai',
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
  {
    id: '6',
    title: 'OpenAI Introduces o1-preview: A New Series of Reasoning Models',
    excerpt: 'OpenAI launches o1-preview, a new AI model series designed for enhanced reasoning and problem-solving capabilities in science, coding, and math.',
    content: `We've developed a new series of AI models designed to spend more time thinking before they respond. They can reason through complex tasks and solve harder problems than previous models in science, coding, and math.
Today, we are releasing the first of this series in ChatGPT and our API. This is a preview and we expect regular updates and improvements. Alongside this release, we're also including evaluations for the next update, currently in development.
Some in the AI community are speculating that this new model series could be considered as GPT-4.5.`,
    imageUrl: 'default', 
    url: 'https://openai.com/index/introducing-openai-o1-preview/', 
    date: '2024-09-12',
    source: 'OpenAI Blog'
  },
  {
    id: '7',
    title: 'OpenAI research lead for GPT-4o/GPT-5 resigns',
    excerpt: 'Alexis Conneau, a key figure in OpenAI\'s development of advanced language models, announces his departure to start a new company.',
    content: `Career update: After an amazing journey at @OpenAI building #Her, I've decided to start a new company.

Alexis Conneau, who has been a crucial part of OpenAI's research team working on advanced language models like GPT-4o and the anticipated GPT-5, has announced his resignation from the company. Conneau, known for his work on the #Her project at OpenAI, shared his decision to embark on a new entrepreneurial venture.

This departure comes at a critical time in AI development, potentially impacting the progress of GPT-5 and related projects at OpenAI. The AI community is closely watching to see how this move might influence the landscape of large language models and AI research.`,
    imageUrl: 'post', 
    url: 'https://www.reddit.com/r/singularity/comments/1fe4dz7/openai_research_lead_for_gpt4ogpt5_resigns/', // 这是一个假设的 URL，你需要用实际的 URL 替换它
    date: '2024-09-10',
    source: 'X'
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