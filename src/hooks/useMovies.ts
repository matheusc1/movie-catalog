import { useDirectors } from './useDirectors'
import { useGenres } from './useGenres'
import { useRawMovies } from './useRawMovies'

export function useMovies() {
  const { genres, ...genresQuery } = useGenres()
  const { rawMovies, ...moviesQuery } = useRawMovies()
  const { directors, ...directorsQuery } = useDirectors()

  const movies = rawMovies?.map(movie => ({
    ...movie,

    genres: movie.genre_ids
      .map(id => genres?.find(g => g.id === id)?.name)
      .filter(Boolean)
      .slice(0, 2) as string[],

    director: directors?.find(d => d.movieId === movie.id)?.director,
  }))

  return {
    movies,
    isError:
      moviesQuery.isError || genresQuery.isError || directorsQuery.isError,
    refetch: () => {
      moviesQuery.refetch()
      genresQuery.refetch()
      directorsQuery.refetch()
    },
  }
}
