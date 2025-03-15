import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Articles',
  description: 'Ramblings of a CS grad',
}

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  )
}
