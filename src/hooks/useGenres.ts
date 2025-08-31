import { useQuery } from '@tanstack/react-query'

type Genres = {
  id: number
  name: string
}

export function useGenres() {
  const { data: genres } = useQuery<Genres[]>({
    queryKey: ['genres'],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`
      )
      const data = await res.json()
      return data.genres
    },
    staleTime: Infinity,
  })

  return { genres }
}
