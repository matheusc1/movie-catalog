import type { Director } from '../api/get-directors'
import type { Genres } from '../api/get-genres'
import type { Movie } from '../api/get-popular-movies'

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
