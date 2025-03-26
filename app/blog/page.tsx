import { DisplayBlogLinks } from 'app/components/posts'
import BlogSortingOptions from '../components/BlogSortingOptions';

export const metadata = {
  title: 'Articles',
  description: 'Ramblings of a Malaysian Generation Z CS grad',
}

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const sortByUpdated = searchParams?.sortByUpdated?.toLowerCase() === 'true';

  return (
    <div className="my-8">
      <section>
        <div className='flex flex-row'>
          <h1 className='text-2xl mb-2 font-bold'>Articles</h1>
          <BlogSortingOptions />
        </div>
        {DisplayBlogLinks(sortByUpdated)}
      </section>
    </div>
  )
}
