import { useQuery } from '@tanstack/react-query'
import { getMoviesBySearch } from '../api/get-movies-by-search'
import type { Movie } from '../api/get-popular-movies'

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
