
import { DisplayBlogLinks } from 'app/components/posts';
import { BlogDisplayMode } from 'app/blog/types';

export default async function Page() {

  return (
    <section>
      <div>
          <p>Hello there, I'm <strong>Lee Jia Keat</strong>; just a guy who likes to code.
        </p>
      </div>
      <br></br>
      <p>I enjoy building and experimenting with technology, and I love developing software, particularly, games.</p>
      <br></br>
      <p>
        Aside from being a typical tech bro, I also enjoy working with Blender, and aspire to one day create my own characters and worlds that inspire others through technical art.
      </p>
      <br></br>
      <p>
        Most of my recent work has been with the Unity game engine, but I have also worked on custom engines written in C++ (OpenGL), with tiny dabblings in Vulkan, WebGPU and ThreeJS.
      </p>
      <br></br>
      <p>Proud alumni of the DigiPen Institute of Technology (Singapore).</p>
      <div className="my-8">
        <section>
          <div className='flex flex-row'>
            <h1 className='text-2xl mb-2 font-bold'>Articles</h1>
          </div>
            {DisplayBlogLinks(BlogDisplayMode.List, true, false )}
        </section>
      </div>
    </section>
  )
};
