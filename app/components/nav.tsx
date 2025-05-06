import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { CommandMenu } from './CommandMenu'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/work': {
    name: 'work',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] -mr-[8px] mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20 nav-container">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="nav-item transition-all hover:text-[var(--emphasis)] dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <div className='flex items-center ml-auto gap-2.5 p-1 -mt-0.75'>
            <CommandMenu />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}
