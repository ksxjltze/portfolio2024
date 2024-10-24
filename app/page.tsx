import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lee Jia Keat
      </h1>
      <p className="mb-4">
        {`Hello there, I'm an indie game developer making games for RATHSOFT. I specialize in gameplay programming with Unity but I also often work with cloud, web, database, etc.
        I strongly believe that anything can be done as long as one is truly willing to put in the effort and time.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
