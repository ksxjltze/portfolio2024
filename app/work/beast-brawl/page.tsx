import Image from "next/image"


export const metadata = {
    title: 'Beast Brawl',
    description: 'Auto-battler game made in Unity',
  }
  
  export default function Page() {
    return (
      <article>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-8 font-bold">Beast Brawl</h1>
          <a className="text-blue-500 font-bold mb-4" href="https://store.steampowered.com/app/3201630/Beast_Brawl/">
            <Image src="/images/beast-brawl/BB.png" width={800} height={600} alt="Beast Brawl Cover Art"></Image>
          </a>
          <p className="mb-4">
            Click <a className="text-blue-500 font-bold" href="https://store.steampowered.com/app/3201630/Beast_Brawl/">here</a> to check it out on Steam!
          </p>
          <iframe src="https://store.steampowered.com/widget/3201630/" width="500" height="190"></iframe>
        </div>
        <section className="mt-4">
          <h1 className="text-2xl mb-4 font-bold">About</h1>
          <p>
            BEAST BRAWL is a strategic roguelike auto-battler which pits teams of primal beasts against one another in a battle for survival.
          </p>
          <br></br>
          <div>
            <strong>Features:</strong>
            <ul className="list-disc list-inside">
              <li>Deterministic Battles</li>
              <li>Superposition Turn-Based System</li>
              <li>Emergent Systems</li>
            </ul>
          </div>
          <br></br>
          <p>Play it online: <a href="https://rathsoft.itch.io/beastbrawl">https://rathsoft.itch.io/beastbrawl</a></p>
        </section>
        <section className="mt-4">
          <h1 className="text-2xl mb-1 font-bold">Technology</h1>
          <h2 className="text-lg">Game Engine: Unity</h2>
          <br></br>
          <h2 className="text-xl mb-1 font-bold">Packages and Libraries (not exhaustive)</h2>
          <ul className="list-disc list-inside">
            <li>Unity UI</li>
            <li>Steamworks.NET</li>
            <li>Unity Networking</li>
          </ul>
          <br></br>
          <h2 className="text-xl mb-1 font-bold">Platforms</h2>
            <ul className="list-disc list-inside">
              <li>Google Cloud Firestore</li>
              <li>Google Cloud Run</li>
            </ul>
        </section>
      </article>
    )
  }
  