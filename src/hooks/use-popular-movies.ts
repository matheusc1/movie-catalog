import { useQuery } from '@tanstack/react-query'
import { getPopularMovies, type Movie } from '../api/get-popular-movies'

export function usePopularMovies() {
  const {
    data: popularMovies,
    isError,
    refetch,
  } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: getPopularMovies,
  })

  return { popularMovies, isError, refetch }
}
