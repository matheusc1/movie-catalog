import type { Director } from '../api/getDirectors'
import type { Genres } from '../api/getGenres'
import type { Movie } from '../api/getPopularMovies'

export function mapMovies(
  movies: Movie[] | undefined,
  genres: Genres[] | undefined,
  directors: Director[] | undefined
): Movie[] | undefined {
  if (!movies) return undefined

  return movies
    .map(movie => ({
      ...movie,
      genres: movie.genre_ids
        .map(id => genres?.find(g => g.id === id)?.name)
        .filter(Boolean)
        .slice(0, 2) as string[],
      director: directors?.find(d => d.movieId === movie.id)?.director,
    }))
    .sort((a, b) => b.popularity - a.popularity)
}
