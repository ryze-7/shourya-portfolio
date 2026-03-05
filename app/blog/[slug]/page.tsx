'use client'

import { Navbar } from '@/components/navbar'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch the post data based on the slug
  const post = {
    title: 'Building Scalable Applications with Next.js 16',
    description: 'Learn how to architect and build scalable web applications using the latest features in Next.js 16.',
    date: 'Mar 5, 2026',
    readTime: '8 min',
    tags: ['Next.js', 'Web Development', 'Performance'],
    slug: 'building-scalable-nextjs-16',
    author: 'Your Name',
    content: `
    <p>Next.js 16 brings significant improvements to how we build web applications. In this comprehensive guide, 
    we'll explore the key features and best practices for building scalable applications.</p>

    <h2>Server Components</h2>
    <p>Server Components are a game changer for performance. By default, components in Next.js are server components, 
    which means they run on the server and don't send JavaScript to the browser.</p>

    <h2>Improved Caching</h2>
    <p>The new caching strategies in Next.js 16 allow for more granular control over how your data is cached and revalidated, 
    leading to better performance and more control over when data is refreshed.</p>

    <h2>Best Practices</h2>
    <p>When building scalable applications, consider these best practices:</p>
    <ul>
      <li>Use server components for data fetching and rendering</li>
      <li>Implement proper error boundaries</li>
      <li>Optimize images and media assets</li>
      <li>Use incremental static regeneration (ISR)</li>
      <li>Monitor and optimize Core Web Vitals</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Next.js 16 provides the tools needed to build fast, scalable applications that provide an excellent user experience.</p>
    `,
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </div>
            <div>By {post.author}</div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div
            className="space-y-6 text-foreground"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/<h2>/g, '<h2 className="text-2xl font-bold text-foreground mt-8 mb-4">')
                .replace(/<p>/g, '<p className="text-muted-foreground leading-relaxed">')
                .replace(/<ul>/g, '<ul className="list-disc list-inside space-y-2 text-muted-foreground">')
                .replace(/<li>/g, '<li className="text-muted-foreground">')
            }}
          />
        </div>

        {/* Share Section */}
        <div className="flex items-center gap-4 pt-8 border-t border-border">
          <span className="text-sm text-muted-foreground">Share this article:</span>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent border border-border rounded hover:border-accent transition-colors"
              aria-label="Share on Twitter"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent border border-border rounded hover:border-accent transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mt-20 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Link
                key={i}
                href="/blog"
                className="p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Related Article {i}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore more content about web development and technology.
                </p>
                <span className="text-accent text-sm font-medium">Read More →</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
