import { useIsFetching } from '@tanstack/react-query'
import { LucideArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router'

import { CountryFlag } from '../components/country-flag'
import { ErrorFallback } from '../components/error-fallback'
import { Header } from '../components/header'
import { Loading } from '../components/loading'

import { useMovieDetails } from '../hooks/use-movie-details'
import { formatDate, formatTime } from '../utils/formatter'

export function MovieDetails() {
  const { id } = useParams()

  const isFetching = useIsFetching()
  const { movieDetails, isError, isLoading, refetch } = useMovieDetails(
    Number(id)
  )

  if (isLoading) return <Loading />

  if (isError) {
    return <ErrorFallback onRetry={refetch} isFetching={isFetching > 0} />
  }

  const cover = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path})`,
  }

  const country =
    movieDetails.production_countries?.[0]?.iso_3166_1 ?? 'Desconhecido'

  return (
    <div>
      <Header />

      <div className="max-w-app mx-auto px-6 lg:px-3 pt-6 pb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-ink-700/70 dark:text-paper-600 hover:text-marquee transition-colors mb-6"
        >
          <LucideArrowLeft className="size-4" />
          Voltar
        </Link>

        <div className="relative w-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 blur-[2px]" style={cover} />
          <div className="absolute inset-0 bg-paper-50/90 dark:bg-ink-900/90" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 p-6 sm:p-10">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieDetails.poster_path}`}
              className="w-60 h-90 object-cover mx-auto md:mx-0 rounded shrink-0"
              alt={`Pôster do filme ${movieDetails.title}`}
            />

            <div className="flex flex-col gap-6 min-w-0">
              <div className="space-y-2">
                <h1 className="font-title font-extrabold text-4xl text-ink-900 dark:text-paper-100">
                  {movieDetails.title}
                </h1>

                <div className="font-mono text-xs uppercase tracking-widest text-ink-700/70 dark:text-paper-600 flex flex-wrap gap-x-3 gap-y-1">
                  <span>{formatDate(movieDetails.release_date)}</span>
                  <span>•</span>
                  <span>
                    {movieDetails.genres?.map(genre => genre.name).join(', ')}
                  </span>
                  <span>•</span>
                  <span>{formatTime(movieDetails.runtime)}</span>
                </div>
              </div>

              {movieDetails.tagline && (
                <span className="italic text-ink-700/70 dark:text-paper-600">
                  "{movieDetails.tagline}"
                </span>
              )}

              <div className="space-y-2">
                <p className="font-title font-bold text-xl text-ink-900 dark:text-paper-100">
                  Sinopse
                </p>
                <p className="text-ink-900/80 dark:text-paper-100/80 leading-relaxed">
                  {movieDetails.overview ||
                    'Sinopse indisponível para este título.'}
                </p>
              </div>

              <div className="perforation" />

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center justify-center size-16 rounded-full border-2 border-gold -rotate-6 font-mono font-bold text-gold text-lg">
                    {movieDetails.vote_average?.toFixed(1)}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-700/70 dark:text-paper-600">
                    Avaliação
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="font-title font-bold text-lg text-ink-900 dark:text-paper-100">
                    {movieDetails.director || 'Desconhecido'}
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-700/70 dark:text-paper-600">
                    Diretor
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <p className="font-title font-bold text-lg text-ink-900 dark:text-paper-100">
                      {country}
                    </p>
                    <CountryFlag code={country} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-700/70 dark:text-paper-600">
                    País de produção
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
