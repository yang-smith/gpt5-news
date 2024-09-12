import type { Metadata } from 'next'
import { Suspense } from 'react';
import Header from '@/components/Header';
import NewsList from '@/components/NewsList';
import Footer from '@/components/Footer';
import Summary from '@/components/Summary';

export const metadata: Metadata = {
  title: 'GPT-5 News | Latest Updates and Developments',
  description: 'Explore the cutting-edge world of GPT-5. Get the latest news, features, and insights on OpenAI\'s most advanced language model.',
  keywords: ['GPT-5', 'AI', 'OpenAI', 'language model', 'artificial intelligence', 'news'],
  openGraph: {
    title: 'GPT-5 News | Latest Updates and Developments',
    description: 'Explore the cutting-edge world of GPT-5. Get the latest news, features, and insights on OpenAI\'s most advanced language model.',
    url: 'https://your-domain.com',
    siteName: 'GPT-5 News',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT-5 News | Latest Updates and Developments',
    description: 'Explore the cutting-edge world of GPT-5. Get the latest news, features, and insights on OpenAI\'s most advanced language model.',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            GPT-5 News
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Anything about GPT-5: 
            <span className="font-semibold text-purple-300"> Stay updated on the latest developments</span>
          </p>
        </div>
        <Summary />
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
          <Suspense fallback={<div className="text-white">Loading news...</div>}>
            <NewsList />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
