import { useQuery } from '@tanstack/react-query'
import { useRawMovies } from './useRawMovies'

type CrewMember = {
  job: string
  name: string
}

export type Director = {
  movieId: number
  director?: string
}

export function useDirectors() {
  const { rawMovies: movies } = useRawMovies()

  const { data: directors, isError } = useQuery({
    queryKey: ['directors', movies?.map(m => m.id).join(',')],
    enabled: !!movies,
    queryFn: async () => {
      const results = await Promise.all(
        movies!.map(async movie => {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${
              import.meta.env.VITE_API_KEY
            }&language=pt-BR`
          )
          return res.json()
        })
      )
      return results
    },
    select: (results): Director[] => {
      return results.map((data, index) => {
        const movieId = movies![index].id
        const director = (data.crew as CrewMember[]).find(
          c => c.job === 'Director'
        )?.name
        return { movieId, director }
      })
    },
  })

  return { directors, isError }
}
