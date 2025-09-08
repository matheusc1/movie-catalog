import { useQuery } from '@tanstack/react-query'
import { getPopularMovies, type Movie } from '../api/getPopularMovies'

export function useRawMovies() {
  const { data: rawMovies, isError } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: getPopularMovies,
  })

  return { rawMovies, isError }
}
