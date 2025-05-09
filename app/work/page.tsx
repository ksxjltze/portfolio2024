import StylingSandBox from "../components/StylingSandBox"


export const metadata = {
  title: 'Work',
  description: 'work work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work</h1>
      <p>This page is a work in progress. Please check out my old projects <a className="font-bold underline" href="https://leejiakeat.vercel.app/projects/">here.</a>
      </p>
      <br></br>
      <p>
        Visit <a className="font-bold underline" href="https://www.rathsoft.com/">RATHSOFT</a> to see some of the games I've worked on.
      </p>
      <br></br>
      <p>Play our games at
        <a className="font-bold underline" href="https://rathsoft.itch.io/"> https://rathsoft.itch.io/</a>!
      </p>
    </section>
  )
}
