export type Genres = {
  id: number
  name: string
}

export async function getGenres(): Promise<Genres[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`
    )

    const data = await response.json()
    return data.genres
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch genres')
  }
}
