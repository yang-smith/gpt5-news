import { MDXRemote } from 'next-mdx-remote/rsc';

interface ArticleDisplayProps {
  content: string;
}

export default function ArticleDisplay({ content }: ArticleDisplayProps) {
  return (
    <article className="prose lg:prose-xl dark:prose-invert mx-auto">
      <MDXRemote source={content} />
    </article>
  );
}