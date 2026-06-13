import { Link } from 'react-router'
import type { Movie } from '../api/get-popular-movies'

interface MovieProps {
  movie: Movie
}

export function Card({ movie }: MovieProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group w-full h-[160px] flex bg-paper-50 dark:bg-ink-850 border border-ink-700/15 dark:border-paper-200/10 rounded-lg overflow-hidden hover:border-marquee/50 transition-colors"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        className="w-[108px] h-full object-cover shrink-0"
        alt={`Pôster do filme ${movie.title}`}
      />

      <div className="perforation-v" />

      <div className="flex-1 flex flex-col justify-between p-4 min-w-0">
        <div className="space-y-1.5">
          <p className="font-title font-bold text-lg leading-tight text-ink-900 dark:text-paper-100 truncate">
            {movie.title}
          </p>
          <p className="text-sm text-ink-700/70 dark:text-paper-600 truncate">
            {movie.director || 'Diretor desconhecido'}
          </p>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div className="flex gap-1.5 flex-wrap">
            {movie.genres?.map(genre => (
              <span
                key={genre}
                className="font-mono text-[11px] uppercase tracking-wide px-1.5 py-0.5 rounded border border-ink-700/15 dark:border-paper-200/15 text-ink-700/70 dark:text-paper-600"
              >
                {genre}
              </span>
            ))}
          </div>

          <span className="font-mono text-[11px] text-gold shrink-0">
            Nº {String(movie.id).padStart(6, '0')}
          </span>
        </div>
      </div>
    </Link>
  )
}
