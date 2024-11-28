import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GPT-5 News & Updates | Latest Information about ChatGPT-5',
    template: '%s | GPT-5 News & Updates'
  },
  description: 'Stay updated with the latest GPT-5 news, release date information, and ChatGPT-5 development updates. Comprehensive coverage of OpenAI\'s next-generation language model.',
  keywords: ['ChatGPT 5', 'GPT-5', 'GPT5 news', 'GPT 5 release date', 'when will GPT 5 come out', 'ChatGPT5'],
  openGraph: {
    title: 'GPT-5 News & Updates',
    description: 'Latest information about ChatGPT-5 development and release updates',
    url: 'https://gpt5-news.site/',
    siteName: 'GPT-5 Updates',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT-5 News & Updates',
    description: 'Latest information about ChatGPT-5 development and release updates',
  },
  alternates: {
    canonical: 'https://gpt5-news.site/',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}