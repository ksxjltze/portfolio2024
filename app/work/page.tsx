import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: 'Work',
  description: 'work work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 aero:ml-4 tracking-tighter">Stuff I've worked on</h1>
      <section className="flex flex-col items-center justify-center mb-8">
        <iframe src="https://store.steampowered.com/widget/3667460/" width="500" height="190"></iframe>
      </section>
      <Link href="/work/playing-god">
        <div className="flex flex-col items-center justify-center aero:drop-shadow-2xl aero:shadow-2xl border-2 border-foreground rounded-md p-4 aero:border-0">
            <h1 className="text-2xl mb-4 text-foreground">Playing God</h1>
            <Image src={"/images/playing-god/PG-Main.jpg"} width={600} height={500} alt="Playing God Splash"></Image>
        </div>
      </Link>
      <Link href="/work/beast-brawl">
        <div className="mt-8 flex flex-col items-center justify-center aero:drop-shadow-2xl aero:shadow-2xl border-2 border-foreground rounded-md p-4 aero:border-0">
            <h1 className="text-2xl mb-4 text-foreground">Beast Brawl</h1>
            <Image src={"/images/beast-brawl/BB.png"} width={600} height={500} alt="Beast Brawl Splash"></Image>
        </div>
      </Link>
      <br></br>
      <p className="mt-4">Play our games online at
        <a className="font-bold underline" href="https://rathsoft.itch.io/"> https://rathsoft.itch.io/</a>!
      </p>
      <p>Check out my <a href="https://leejiakeat.vercel.app/projects">Old Projects</a>, most of which were done when I was still a student.</p>
      <p>Crappy 3D art: <a href="https://www.artstation.com/ksxjltze">https://www.artstation.com/ksxjltze</a></p>
      <a href='https://ko-fi.com/Z8Z81EXP6U' target='_blank'><img height='36' className='mt-4 border-0 h-12' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' alt='Buy Me a Coffee at ko-fi.com' /></a>
    </section>
  )
}
