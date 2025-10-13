import { useIsFetching } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { Card } from '../components/card'
import { CardSkeleton } from '../components/card-skeleton'
import { ErrorFallback } from '../components/error-fallback'
import { useMovies } from '../hooks/use-movies'

export function Search() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('q') || ''

  const isFetching = useIsFetching()
  const { movies, isError, refetch } = useMovies({ search })

  if (isError) {
    return <ErrorFallback onRetry={refetch} isFetching={isFetching > 0} />
  }

  return (
    <div className="space-y-10">
      <h1 className="text-start text-2xl font-title text-neutral-950 dark:text-neutral-50 font-bold mt-20">
        Resultados da busca por: "{search}"
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
