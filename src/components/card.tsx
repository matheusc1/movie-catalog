import type { Movie } from '../api/getPopularMovies'

interface MovieProps {
  movie: Movie
}

export function Card({ movie }: MovieProps) {
  return (
    <div className="w-[280px] h-fit flex flex-col items-center border-1 bg-neutral-800 border-neutral-750 rounded-[10px] shadow-sm">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        className="w-[107px] h-[145px] content-center"
        alt={`${movie.title} banner`}
      />
      <div className="h-0.25 w-full bg-neutral-725" />
      <div className="w-full text-start p-4 space-y-3">
        <p className="font-bold font-title truncate text-neutral-100">{movie.title}</p>
        <div className="space-y-2">
          <p className="text-sm">{movie.director || 'Desconhecido'}</p>
          <div className="flex gap-2 flex-row">
            {movie.genres?.map(genre => (
              <div
                key={genre}
                className="rounded-sm px-2 w-fit bg-neutral-725 text-sm"
              >
                {genre || 'Desconhecido'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
