import { useIsFetching } from '@tanstack/react-query'
import { Card } from '../components/card'
import { CardSkeleton } from '../components/card-skeleton'
import { ErrorFallback } from '../components/error-fallback'
import { useMovies } from '../hooks/use-movies'

export function PopularMovies() {
  const isFetching = useIsFetching()
  const { movies, isError, refetch } = useMovies()

  if (isError) {
    return <ErrorFallback onRetry={refetch} isFetching={isFetching > 0} />
  }

  return (
    <div className="space-y-8 px-6 lg:px-3">
      <h1 className="text-3xl font-title font-extrabold text-ink-900 dark:text-paper-100 text-left">
        Filmes mais populares
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}

        {isFetching > 0 &&
          Array.from({ length: 6 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: it's a static list
            <CardSkeleton key={index} />
          ))}
      </div>
    </div>
  )
}
