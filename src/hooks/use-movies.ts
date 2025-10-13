import { mapMovies } from '../utils/map-movies'
import { useDirectors } from './use-directors'
import { useGenres } from './use-genres'
import { usePopularMovies } from './use-popular-movies'
import { useSearchMovies } from './use-search-movies'

interface UseMoviesOptions {
  search?: string
}

export function useMovies({ search }: UseMoviesOptions = {}) {
  const { genres, isError: isGenresError, refetch: refetchGenres } = useGenres()

  const {
    popularMovies,
    isError: isPopularError,
    refetch: refetchPopular,
  } = usePopularMovies()
  const {
    searchMovies,
    isError: isSearchError,
    refetch: refetchSearch,
  } = useSearchMovies(search ?? '')

  const rawMovies = search ? searchMovies : popularMovies

  const {
    directors,
    isError: isDirectorsError,
    refetch: refetchDirectors,
  } = useDirectors(rawMovies?.map(m => m.id))

  const movies = mapMovies(rawMovies, genres, directors)

  const isError =
    isGenresError ||
    isDirectorsError ||
    (search ? isSearchError : isPopularError)

  const refetch = () => {
    refetchGenres()
    refetchDirectors()
    search ? refetchSearch() : refetchPopular()
  }

  return { movies, isError, refetch }
}
