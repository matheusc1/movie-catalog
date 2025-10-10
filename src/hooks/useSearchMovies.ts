import { useQuery } from '@tanstack/react-query'
import { getMoviesBySearch } from '../api/getMoviesBySearch'
import type { Movie } from '../api/getPopularMovies'

export function useSearchMovies(search: string) {
  const {
    data: searchMovies,
    isError,
    refetch,
  } = useQuery<Movie[]>({
    queryKey: ['search-movies', search],
    queryFn: () => getMoviesBySearch(search),
    enabled: !!search,
  })

  return { searchMovies, isError, refetch }
}
