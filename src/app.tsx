import { useIsFetching } from '@tanstack/react-query'
import { LucideSearch } from 'lucide-react'
import { Card } from './components/card'
import { CardSkeleton } from './components/cardSkeleton'
import { ErrorFallback } from './components/errorFallback'
import { ModeToggle } from './components/theme/mode-toggle'
import { useMovies } from './hooks/useMovies'

export function App() {
  const isFetching = useIsFetching()
  const { movies, isError, refetch } = useMovies()

  if (isError) {
    return <ErrorFallback onRetry={refetch} isFetching={isFetching > 0} />
  }

  return (
    <div className="max-w-[1180px] w-full mx-auto px-6 lg:px-0 py-10 text-center space-y-10">
      <div className="flex justify-end -mt-6 mb-2.5 relative z-10">
        <ModeToggle />
      </div>
      <div className="relative w-full mb-7">
        <input
          type="text"
          className="w-full rounded-lg px-4 pr-12 py-2 bg-transparent border border-neutral-150 dark:border-neutral-725 placeholder:text-neutral-600 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-zinc-500"
          placeholder="Buscar filmes..."
        />
        <LucideSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 dark:text-neutral-400" />
      </div>
      <h1 className="text-3xl font-title text-neutral-950 dark:text-neutral-50 font-bold text-shadow-sm text-shadow-neutral-100/70 dark:text-shadow-neutral-950/70">
        Filmes mais populares
      </h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}

        {isFetching > 0 &&
          Array.from({ length: 8 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: it's a static list
            <CardSkeleton key={index} />
          ))}
      </div>
    </div>
  )
}
