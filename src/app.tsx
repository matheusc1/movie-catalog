import { useQuery } from '@tanstack/react-query'
import { Card } from './components/card'

export type Movie = {
  id: string
  title: string
  genre_ids: string[]
  genres?: string[]
  poster_path: string
}

export function App() {
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

      return data.results.map((movie: Movie) => ({
        ...movie,
        genres: movie.genre_ids
          .map(id => genres.find((g: { id: string }) => g.id === id)?.name)
          .filter(Boolean)
          .slice(0, 2) as string[],
      }))
    },
  })

  return (
    <div className="w-full py-20 text-center">
      <span className="text-2xl text-neutral-50">Movie Catalog</span>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
