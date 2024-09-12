import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">GPT-5 News</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/articles" className="hover:text-gray-300">Articles</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}