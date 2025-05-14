

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
            <img src="/images/playing-god/PG-Main.jpg"></img>
          </a>
          <p className="mb-4">
            Click <a className="text-blue-500 font-bold" href="https://store.steampowered.com/app/3165320/Playing_God/">here</a> to check it out on Steam!
          </p>
          <iframe src="https://store.steampowered.com/widget/3165320/" width="500" height="190"></iframe>
        </div>
        <section className="mt-4">
          <h1 className="text-2xl mb-4 font-bold">About</h1>
          <p>
            God is missing. Hell is full. Someone has taken over, and now souls must earn their place to stay in hell. PLAYING GOD is an ultra fast-paced speedrunning platformer where you take control of Dunte the duck to run, jump, and dash your way through the nine circles of hell and rebel against the mysterious entity playing god.
          </p>
          <br></br>
          <div>
            <strong>Features:</strong>
            <ul className="list-disc list-inside">
              <li>Skill-based precision platforming</li>
              <li>Online Leaderboard</li>
              <li>Map editor</li>
              <li>Customizable controls</li>
              <li>Steam achievements</li>
            </ul>
          </div>
          <br></br>
          <p>Play the demo online: <a href="https://rathsoft.itch.io/playing-god">https://rathsoft.itch.io/playing-god</a></p>
        </section>
        <section className="mt-4">
          <h1 className="text-2xl mb-4 font-bold">Technology</h1>
          <h2>Game Engine: Unity</h2>
          <h2>Packages and Libraries (not exhaustive):</h2>
          <ul className="list-disc list-inside">
            <li>Unity UI</li>
            <li>Unity Input System</li>
            <li>Steamworks.NET</li>
          </ul>
        </section>
      </article>
    )
  }
  