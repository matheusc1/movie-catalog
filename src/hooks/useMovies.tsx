import { useQuery } from '@tanstack/react-query'
import type { Movie } from '../app'

export function useMovies() {
  const { data: genres } = useQuery({
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

  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&page=1`
      )

      const data = await response.json()
      return data.results as Movie[]
    },
    enabled: !!genres,
    select: movies =>
      movies.map(movie => ({
        ...movie,
        genres: movie.genre_ids
          .map(id => genres.find((g: { id: string }) => g.id === id)?.name)
          .filter(Boolean)
          .slice(0, 2) as string[],
      })),
  })

  const { data: directors } = useQuery({
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
          const data = await res.json()
          const director = data.crew.find(
            (c: any) => c.job === 'Director'
          )?.name
          return { movieId: movie.id, director }
        })
      )
      return results
    },
  })

  const moviesList = movies?.map(movie => ({
    ...movie,
    director: directors?.find(d => d.movieId === movie.id)?.director,
  }))

  return { moviesList }
}
