import { DisplayBlogLinks, FetchBlogParams } from 'app/components/posts'
import BlogSortingOptions from '../components/BlogSortingOptions';

export const metadata = {
  title: 'Articles',
  description: 'Ramblings of a Malaysian Generation Z CS grad',
}

export default async function Page(props) {
  const [sortByUpdated, sortOldestFirst] = await FetchBlogParams(props.searchParams);

  return (
    <div className="my-8">
      <section>
        <div className='flex flex-row'>
          <h1 className='text-2xl mb-2 font-bold'>Articles</h1>
          <BlogSortingOptions />
        </div>
        <p>I have a habit of writing unfinished articles.</p>
        <br/>
        {DisplayBlogLinks(sortByUpdated, sortOldestFirst)}
      </section>
    </div>
  )
}
