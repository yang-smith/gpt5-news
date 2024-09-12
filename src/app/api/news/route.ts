import { NextResponse } from 'next/server';
import { NewsItem } from '@/lib/types';

const dummyNews: NewsItem[] = [
  // ... 模拟新闻数据
];

export async function GET() {
  // 在实际应用中，这里应该从数据库或外部API获取数据
  return NextResponse.json(dummyNews);
}