import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { Article } from '@/types/article'

const md = new MarkdownIt()

export function getAllArticles(): Article[] {
  const contentDirectory = path.join(process.cwd(), 'src/content')
  const categories = fs.readdirSync(contentDirectory)
  
  return categories.flatMap(category => {
    const categoryPath = path.join(contentDirectory, category)
    const files = fs.readdirSync(categoryPath)
    
    return files.map(file => {
      const fullPath = path.join(categoryPath, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        ...data,
        content: md.render(content),
        slug: file.replace('.md', ''),
        category
      } as Article
    })
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(category: string, slug: string): Article | null {
  try {
    const fullPath = path.join(process.cwd(), 'src/content', category, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      ...data,
      content: md.render(content),
      slug,
      category
    } as Article
  } catch {
    return null
  }
}