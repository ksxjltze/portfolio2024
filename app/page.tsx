import { BlogPosts } from 'app/components/posts'
import { ThemeProvider } from './contexts/ThemeContext'

export default function Page() {
  return (
    <ThemeProvider>
      <section>
        <div className="mb-8">
          <p>Hello there, I'm
            <span className="ml-1.5 inline-block text-2xl font-semibold tracking-tighter">
              Lee Jia Keat
            </span>, I like to build things, and make cool things.
          </p>
        </div>
        <p>I enjoy experimenting with technology, and I have a strong passion for software development, game development in particular.</p>
        <br></br>
        <p>
          Aside from being a tech bro, I also enjoy playing around with Blender, and aspire to create characters and worlds that inspire others through technical art.
        </p>
        <br></br>
        <p>
          Recently, I've been trying to create cool visual effects in Unity, using shaders, particles, procedural generation, post-processing, etc.
        </p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </ThemeProvider>
  )
}
