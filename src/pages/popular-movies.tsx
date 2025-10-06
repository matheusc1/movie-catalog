import { useIsFetching } from '@tanstack/react-query'
import { Card } from '../components/card'
import { CardSkeleton } from '../components/cardSkeleton'
import { ErrorFallback } from '../components/errorFallback'
import { useMovies } from '../hooks/useMovies'

export function PopularMovies() {
  const isFetching = useIsFetching()
  const { movies, isError, refetch } = useMovies()

  if (isError) {
    return <ErrorFallback onRetry={refetch} isFetching={isFetching > 0} />
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-title text-neutral-950 dark:text-neutral-50 font-bold">
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
