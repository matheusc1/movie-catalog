import { useQuery } from '@tanstack/react-query'

export type Movie = {
  id: number
  title: string
  director?: string
  genre_ids: number[]
  genres?: string[]
  poster_path: string
}

export function useRawMovies() {
  const { data: rawMovies, isError } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&page=1`
      )

      const data = await response.json()
      return data.results
    },
  })

  return { rawMovies, isError }
}
