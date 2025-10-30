export type MovieDetails = {
  id: number
  backdrop_path: string
  title: string
  overview: string
  poster_path: string
  release_date: string
  tagline: string
  vote_average: number
  director: string
  runtime: number
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  genres: {
    name: string
  }[]
}

export async function GetMovieDetails(id: number): Promise<MovieDetails> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`
    )

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching movie details')
  }
}
