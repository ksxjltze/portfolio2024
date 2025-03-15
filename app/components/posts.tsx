import Link from 'next/link'
import { BlogPostData, formatBlogDate, formatDate, getBlogPosts, getBlogPostsByYear } from 'app/blog/utils'

export function BlogPosts() {
  let blogPostsByYear = getBlogPostsByYear();

  return (
    <section>
      <h1 className='text-2xl mb-2 font-bold'>Articles</h1>
      {Array.from(blogPostsByYear).map(([year, posts]) => (
        <div key={year} className='mb-8'>
          <h2 className='text-xl mb-4 font-bold'>{year}</h2>
          {DisplayBlogLinks(posts)}
        </div>
      ))}
    </section>
  )
}

function DisplayBlogLinks(posts : BlogPostData[]) {
  return posts.map((post) => BlogLink(post));
}

function BlogLink(post) {
  return (<Link
    key={post.slug}
    className="flex flex-col space-y-1 mb-4"
    href={`/blog/${post.slug}`}>
    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
      <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
        {formatBlogDate(post.metadata.publishedAt)}
      </p>
      <p className="font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
        {post.metadata.title}
      </p>
    </div>
  </Link>)
}