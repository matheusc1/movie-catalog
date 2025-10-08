import { LucideSearch } from 'lucide-react'
import { Outlet } from 'react-router'

import Logo from '/logo.png'
import LogoMobile from '/video-player.svg'
import { ModeToggle } from './theme/mode-toggle'

export function Layout() {
  return (
    <div className="max-w-[1180px] w-full mx-auto px-6 lg:px-0 py-10 text-center">
      <header className="flex w-full items-center gap-3 sm:gap-10 mb-7">
        <img src={Logo} alt="Movie Catalog" className="hidden sm:inline" />
        <img
          src={LogoMobile}
          alt="Movie Catalog"
          className="sm:hidden w-12 h-12"
        />

        <div className="relative flex-1">
          <input
            type="text"
            className="w-full rounded-lg px-4 pr-12 py-2 bg-transparent border border-neutral-150 dark:border-neutral-725 placeholder:text-neutral-600 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-zinc-500"
            placeholder="Buscar filmes..."
          />
          <LucideSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 dark:text-neutral-400" />
        </div>

        <ModeToggle />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
