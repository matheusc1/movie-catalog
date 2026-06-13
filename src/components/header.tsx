import { LucideSearch } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import TicketMark from '/ticket-mark.svg'
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
    <header className="sticky top-0 z-50 w-full bg-paper-50/90 dark:bg-ink-900/90 backdrop-blur-md">
      <div className="max-w-app mx-auto px-6 lg:px-3 flex items-center gap-3 sm:gap-10 py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={TicketMark} alt="Movie Catalog" className="w-9 h-9" />
          <span className="hidden sm:inline font-title font-extrabold text-2xl tracking-wide text-ink-900 dark:text-paper-100">
            Movie Catalog
          </span>
        </Link>

        <form
          autoComplete="off"
          onSubmit={onSearch}
          className="relative flex-1"
        >
          <input
            type="text"
            className="w-full rounded-lg px-4 pr-12 py-2 bg-transparent border border-ink-700/30 dark:border-paper-200/25 placeholder:text-ink-600/70 dark:placeholder:text-paper-600/70 font-sans focus:outline-none focus:ring-2 focus:ring-marquee/40"
            placeholder="Buscar filmes..."
            name="search"
            onChange={e => setSearch(e.target.value)}
          />
          <LucideSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-600 dark:text-paper-600" />
        </form>

        <ModeToggle />
      </div>

      <div className="perforation" />
    </header>
  )
}
