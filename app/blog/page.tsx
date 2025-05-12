import { DisplayBlogLinks, FetchBlogParams } from 'app/components/posts'
import BlogDisplayOptions from '../components/BlogDisplayOptions';

export const metadata = {
  title: 'Articles',
  description: 'Ramblings of a Malaysian Generation Z CS grad',
}

export default async function Page(props) {
  const [mode, sortByUpdated, sortOldestFirst] = await FetchBlogParams(props.searchParams);

  return (
    <div className="my-8">
      <section>
        <div className='flex flex-row'>
          <h1 className='text-2xl mb-2 font-bold'>Articles</h1>
          <BlogDisplayOptions />
        </div>
        <p>I have a habit of writing unfinished articles.</p>
        <br/>
        {DisplayBlogLinks(mode, sortByUpdated, sortOldestFirst)}
      </section>
    </div>
  )
}
