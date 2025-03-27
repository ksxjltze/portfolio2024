import Link from 'next/link'
import { getBlogPostsByYear, BlogPostData, formatBlogDate } from 'app/blog/utils'

export function DisplayBlogLinks(sortByUpdated: boolean, sortAscending: boolean) {
  return <div>
    {Array.from(getBlogPostsByYear(sortByUpdated, sortAscending)).map(([year, posts]) => (
      <div key={year} className='mb-8'>
        <h2 className='text-xl mb-4 font-bold'>{year}</h2>
        {posts.map((post) => BlogLink(post, sortByUpdated))}
      </div>
    ))}
  </div>;
}

export function BlogLink(post, sortByUpdated) {
  const useUpdatedAtDates = sortByUpdated && post.metadata.updatedAt;
  const textStyle = useUpdatedAtDates ? "text-accent-foreground" : "text-muted-foreground";

  return (<Link
    key={post.slug}
    className="flex flex-col space-y-1 mb-4"
    href={`/blog/${post.slug}`}>
    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
      <p className={`${textStyle} w-[100px] tabular-nums`}>
        {formatBlogDate(useUpdatedAtDates ? post.metadata.updatedAt : post.metadata.publishedAt)}
      </p>
      <p className="font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
        {post.metadata.title}
      </p>
    </div>
  </Link>)
}