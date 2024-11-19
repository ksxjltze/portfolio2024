import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lee Jia Keat
      </h1>
      <p className="mb-4">
        {`Hello there, I'm a Software Engineer. I like to build things, and make cool things.`}
      </p>
      <p>I have used various technologies and programming languages across a variety of different projects, work, school and personal. I enjoy experimenting with tech, and I have a strong passion for software development.</p>
      <br></br>
      <p>
        <i>
          Jack of all trades, master of none, but oftentimes, better than master of one.
        </i>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
