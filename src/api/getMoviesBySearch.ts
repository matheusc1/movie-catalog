import type { Movie } from './getPopularMovies'

export async function getMoviesBySearch(movie: string): Promise<Movie[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR&page=1`
    )

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch popular movies')
  }
}
