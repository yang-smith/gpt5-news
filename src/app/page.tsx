import { Suspense } from 'react';
import Header from '@/components/Header';
import NewsList from '@/components/NewsList';
import Footer from '@/components/Footer';
import Summary from '@/components/Summary';

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
