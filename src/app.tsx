import { useIsFetching } from '@tanstack/react-query'
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
    <div className="max-w-[1180px] w-full mx-auto py-10 text-center space-y-10">
      <div className="mx-auto flex items-end justify-end -mt-4 -mb-3">
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-title text-neutral-950 dark:text-neutral-50 font-bold text-shadow-sm text-shadow-neutral-100/70 dark:text-shadow-neutral-950/70">
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
