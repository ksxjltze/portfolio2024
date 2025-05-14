import Link from 'next/link'
import { getBlogPostsByYear, formatBlogDate } from 'app/blog/utils'
import { BlogDisplayMode } from '../blog/types';
import Image from 'next/image';

export async function FetchBlogParams(searchParams) {
  const params = await searchParams;

  const mode = params.mode ? params.mode : BlogDisplayMode.Cards;
  const sortOldestFirst = params.sortOldestFirst?.toLowerCase() === 'true';
  const sortByUpdated = params.sortByUpdated?.toLowerCase() === 'true';
  const filter = params.filter ? params.filter.split(',') : [];

  return [mode, sortByUpdated, sortOldestFirst, filter];
}

export function DisplayBlogLinks(mode: BlogDisplayMode, sortByUpdated: boolean, sortOldestFirst: boolean, filter: string[] = []) {
  return <div>
    {Array.from(getBlogPostsByYear(sortByUpdated, sortOldestFirst, filter))
      .toSorted((a, b) => {
        const [yearA, _A] = a;
        const [yearB, _B] = b;

        return sortOldestFirst ? yearA - yearB : yearB - yearA;
      })
      .map(([year, posts]) => {
          if (mode == BlogDisplayMode.Grid)
            return (
              <div key={year} className='mb-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {posts.map((post) => BlogLink(mode, post, sortByUpdated))}
                </div>
              </div>
            );
          else if (mode == BlogDisplayMode.Cards)
            return (
              <div key={year} className='mb-8'>
                <h2 className='text-xl mb-4 font-bold'>{year}</h2>
                <div className="flex flex-col flex-wrap gap-4">
                  {posts.map((post) => BlogLink(mode, post, sortByUpdated))}
                </div>
              </div>
            );     
          else
            return (
              <div key={year} className='mb-8'>
                <h2 className='text-xl mb-4 font-bold'>{year}</h2>
                {posts.map((post) => BlogLink(mode, post, sortByUpdated))}
              </div>
            );
      })}
  </div>;
}

export function BlogLink(mode: BlogDisplayMode, post, useUpdatedAt) {
  const useUpdatedAtDates = useUpdatedAt && post.metadata.updatedAt;
  const textStyle = useUpdatedAtDates ? "highlighted font-semibold" : "text-foreground";

  const placeholderImage = "/favicon.svg";

  const articleListItem = 
    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
      <p className={`${textStyle} hover:underline w-[100px] tabular-nums`}>
        {formatBlogDate(useUpdatedAtDates ? post.metadata.updatedAt : post.metadata.publishedAt)}
      </p>
      <p className="font-bold hover:underline text-foreground transition duration-500 ease-in-out tracking-tight">
        {post.metadata.title}
      </p>
    </div>;

    if (mode == BlogDisplayMode.Grid)
      return (
        <div key={post.slug} className="shadow-md ring-1 ring-neutral-200 dark:ring-0 rounded-lg p-4 dark:shadow-white dark:shadow-sm">
          <Link key={post.slug}
              className="flex flex-col space-y-1 mb-2 gap-1 items-center justify-between h-full content-center text-center"
              href={`/blog/${post.slug}`}>
                <h1 className='text-foreground'>{post.metadata.title}</h1>
                <div className='bg-accent aero:bg-transparent aero:drop-shadow-2xl rounded-2xl'>
                  <Image alt='article image' className="object-contain w-32 h-32" src={post.metadata.image ?? placeholderImage}></Image>
                </div>
          </Link>
        </div>
      );
    else if (mode == BlogDisplayMode.Cards)
      return (
        <div key={post.slug} className="shadow-md rounded-lg p-4 flex-1 ring-1 ring-neutral-300 dark:ring-0 aero:ring-0 aero:bg-gradient-to-br aero:from-[#bbb3] aero:to-transparent dark:shadow-white dark:shadow-sm">
            <Link
              key={post.slug}
              className="flex flex-col"
              href={`/blog/${post.slug}`}>
              <div>
                {articleListItem}
                {post.metadata.image ? <Image alt='article image' className="mt-3" src={post.metadata.image}></Image> : null}
              </div>
            </Link>
        </div>
      );
      else
        return <Link
            key={post.slug}
            className="flex flex-col mb-2"
            href={`/blog/${post.slug}`}>
            {articleListItem}
        </Link>;
}