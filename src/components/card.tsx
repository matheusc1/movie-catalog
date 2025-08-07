import type { Movie } from '../app'

interface MovieProps {
  movie: Movie
}

export function Card({ movie }: MovieProps) {
  return (
    <div className="w-[280px] h-fit flex flex-col items-center border-1 bg-neutral-800 border-neutral-775 rounded-[10px] mt-8">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        className="w-[107px] h-[145px] content-center"
        alt={`${movie.title} banner`}
      />
      <div className="h-0.25 w-full bg-neutral-750" />
      <div className="w-full text-start p-4 space-y-4">
        <p className="font-bold truncate text-neutral-100">{movie.title}</p>
        <div className="space-y-2">
          <p className="text-sm">Diretor</p>
          <div className="rounded-sm px-2 w-fit bg-neutral-750 text-sm">
            Gênero
          </div>
        </div>
      </div>
    </div>
  )
}
