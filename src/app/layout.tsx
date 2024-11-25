import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default: 'GPT-5 News | Latest Updates, Release Predictions, and Feature Analysis',
    template: '%s | GPT-5 News'
  },
  description: 'Stay informed about the latest GPT-5 news, release date predictions, and feature analysis. Expert insights on OpenAI\'s next-gen language model and its potential impact across industries.',
  keywords: ['GPT-5 news', 'AI', 'OpenAI', 'GPT-5 release date predictions', 'GPT-5 feature analysis', 'AI advancements'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8638022674571300"
          crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
