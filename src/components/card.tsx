import type { Movie } from '../api/getPopularMovies'

interface MovieProps {
  movie: Movie
}

export function Card({ movie }: MovieProps) {
  return (
    <div className="w-[280px] h-fit flex flex-col items-center border-1 dark:bg-neutral-800 border-neutral-175 dark:border-neutral-750 rounded-[10px]">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        className="w-[108px] h-[145px] content-center"
        alt={`${movie.title} banner`}
      />
      <div className="h-0.25 w-full bg-neutral-150 dark:bg-neutral-725" />
      <div className="w-full text-start p-4 space-y-3">
        <p className="text-lg font-bold font-title truncate">{movie.title}</p>
        <div className="space-y-2">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {movie.director || 'Desconhecido'}
          </p>
          <div className="flex gap-2 flex-row">
            {movie.genres?.map(genre => (
              <div
                key={genre}
                className="text-sm rounded-md px-2 py-0.5 w-fit bg-neutral-125 text-neutral-700 dark:text-neutral-300 dark:bg-neutral-725"
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
