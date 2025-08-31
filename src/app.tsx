import { useIsFetching } from '@tanstack/react-query'
import { Card } from './components/card'
import { useMovies } from './hooks/useMovies'

export function App() {
  const isFetching = useIsFetching()
  const { movies } = useMovies()

  if (isFetching > 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center animate-pulse">
        Loading...
      </div>
    )
  }

  return (
    <div className="w-full py-20 text-center">
      <span className="text-2xl text-neutral-50 font-semibold">
        Most Popular Movies
      </span>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
