import { useQuery } from '@tanstack/react-query'
import { Card } from './components/card'

export type Movie = {
  id: string
  title: string
  poster_path: string
}

export function App() {
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=da5d36b98e985f16ef3e0de0e24fda59&language=pt-BR&page=1`
      )

      const data = await response.json()
      return data.results as Movie[]
    },
  })

  return (
    <div className="w-full py-20 text-center">
      <span className="text-2xl">Movie Catalog</span>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
