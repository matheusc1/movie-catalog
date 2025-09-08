export type Movie = {
  id: number
  title: string
  director?: string
  genre_ids: number[]
  genres?: string[]
  poster_path: string
}

export async function getPopularMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&page=1`
    )

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch popular movies')
  }
}
