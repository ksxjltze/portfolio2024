

export const metadata = {
    title: 'Playing God',
    description: 'work work.',
  }
  
  export default function Page() {
    return (
      <article>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-8 font-bold">Playing God</h1>
          <a className="text-blue-500 font-bold mb-4" href="https://store.steampowered.com/app/3165320/Playing_God/">
            <img src="/images/playing-god/pg.png"></img>
          </a>
          <p>
            Click <a className="text-blue-500 font-bold" href="https://store.steampowered.com/app/3165320/Playing_God/">here</a> to check it out on Steam!
          </p>
        </div>
        <section className="mt-4">
          My main role in the development of Playing God was integrating Steamworks, setting up the player leaderboard and managing cloud saves, with a bit of fiddling with Unity's input system for rebinding keys.
        </section>
      </article>
    )
  }
  