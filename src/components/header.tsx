import { LucideSearch } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

import Logo from '/logo.png'
import LogoMobile from '/video-player.svg'

import { ModeToggle } from './theme/mode-toggle'

export function Header() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  function onSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const query = search.trim()

    if (!query) return

    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <header className="flex max-w-app w-full items-center gap-3 sm:gap-10">
      <Link to="/" className="cursor-pointer">
        <img src={Logo} alt="Movie Catalog" className="hidden sm:inline" />
        <img
          src={LogoMobile}
          alt="Movie Catalog"
          className="sm:hidden w-12 h-12"
        />
      </Link>

      <form autoComplete="off" onSubmit={onSearch} className="relative flex-1">
        <input
          type="text"
          className="w-full rounded-lg px-4 pr-12 py-2 bg-transparent border border-neutral-150 dark:border-neutral-725 placeholder:text-neutral-600 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-zinc-500"
          placeholder="Buscar filmes..."
          name="search"
          onChange={e => setSearch(e.target.value)}
        />
        <LucideSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 dark:text-neutral-400" />
      </form>

      <ModeToggle />
    </header>
  )
}
