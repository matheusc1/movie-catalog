import { useIsFetching } from '@tanstack/react-query'
import { Card } from './components/card'
import { useMovies } from './hooks/useMovies'

export function App() {
  const isFetching = useIsFetching()
  const { movies, isError } = useMovies()

  if (isFetching > 0) {
    return (
      <div className="w-full h-screen flex text-lg font-semibold items-center justify-center animate-pulse">
        Loading...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-lg font-semibold text-neutral-200">
          Não foi possível carregar os filmes.
        </p>
        <p className="text-neutral-400 text-sm">
          Tente novamente em alguns minutos.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full py-20 text-center">
      <span className="text-2xl text-neutral-50 font-semibold">
        Popular Movies
      </span>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
