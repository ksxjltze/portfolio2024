import Link from 'next/link'
import { getBlogPostsByYear, formatBlogDate } from 'app/blog/utils'

export async function FetchBlogParams(searchParams) {
  const params = await searchParams;

  const sortOldestFirst = params.sortOldestFirst?.toLowerCase() === 'true';
  const sortByUpdated = params.sortByUpdated?.toLowerCase() === 'true';

  return [sortByUpdated, sortOldestFirst];
}

export function DisplayBlogLinks(sortByUpdated: boolean, sortOldestFirst: boolean) {
  return <div>
    {Array.from(getBlogPostsByYear(sortByUpdated, sortOldestFirst))
      .toSorted((a, b) => {
        const [yearA, _A] = a;
        const [yearB, _B] = b;

        return sortOldestFirst ? yearA - yearB : yearB - yearA;
      })
      .map(([year, posts]) => (
        <div key={year} className='mb-8'>
          <h2 className='text-xl mb-4 font-bold'>{year}</h2>
          {posts.map((post) => BlogLink(post, sortByUpdated))}
        </div>
      ))}
  </div>;
}

export function BlogLink(post, useUpdatedAt) {
  const useUpdatedAtDates = useUpdatedAt && post.metadata.updatedAt;
  const textStyle = useUpdatedAtDates ? "highlighted font-semibold" : "text-foreground";

  return (<Link
    key={post.slug}
    className="flex flex-col space-y-1 mb-4"
    href={`/blog/${post.slug}`}>
    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
      <p className={`${textStyle} hover:underline hover:font-bold w-[100px] tabular-nums`}>
        {formatBlogDate(useUpdatedAtDates ? post.metadata.updatedAt : post.metadata.publishedAt)}
      </p>
      <p className="font-bold hover:underline text-foreground transition duration-500 ease-in-out tracking-tight">
        {post.metadata.title}
      </p>
    </div>
  </Link>)
}