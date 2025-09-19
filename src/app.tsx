import { useIsFetching } from '@tanstack/react-query'
import { Card } from './components/card'
import { CardSkeleton } from './components/cardSkeleton'
import { ErrorFallback } from './components/errorFallback'
import { useMovies } from './hooks/useMovies'

export function App() {
  const isFetching = useIsFetching()
  const { movies, isError, refetch } = useMovies()

  if (isError) {
    return <ErrorFallback onRetry={refetch} isFetching={isFetching > 0} />
  }

  return (
    <div className="w-full py-10 text-center">
      <h1 className="text-2xl font-title text-neutral-50 font-bold text-shadow-sm text-shadow-neutral-950/70">
        Filmes mais populares
      </h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}

        {isFetching > 0 &&
          Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
      </div>
    </div>
  )
}
