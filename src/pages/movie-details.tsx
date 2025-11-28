import { useIsFetching } from '@tanstack/react-query'
import { LucideArrowLeft, LucideStar } from 'lucide-react'
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
    <div className="max-w-screen pt-10">
      <div className="max-w-app mx-auto space-y-10 mb-5 px-6 sm:px-0">
        <Header />

        <Link to="/" className="flex items-center justify-start gap-2 ">
          <LucideArrowLeft />
          <span>Voltar</span>
        </Link>
      </div>

      <div className="relative w-full h-full md:h-[587px] overflow-ellipsis sm:overflow-hidden">
        <div
          className="absolute inset-0 blur-[2px]"
          style={cover}
        />
        <div className="absolute inset-0 -mt-1 sm:-mt-0 bg-neutral-50/85 dark:bg-neutral-900/85" />

        <div className="flex flex-col md:flex-row gap-6 relative z-10 max-w-app mx-auto pt-10 px-6 sm:px-0 h-full">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieDetails.poster_path}`}
            className="w-[320px] h-[480px] mx-auto md:mx-0"
            alt="Movie Poster"
          />

          <div className="flex flex-col gap-7 sm:gap-10 mb-5 sm:mb-0">
            <div className="space-y-2">
              <h1 className="font-title font-bold text-4xl text-neutral-950 dark:text-neutral-50">
                {movieDetails.title}
              </h1>

              <div className="text-neutral-700 dark:text-neutral-200">
                <span className="mr-2">
                  {formatDate(movieDetails.release_date)}
                </span>
                •
                <span className="mx-2">
                  {movieDetails.genres?.map(genre => genre.name).join(', ')}
                </span>
                •
                <span className="ml-2">{formatTime(movieDetails.runtime)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="italic text-neutral-600 dark:text-neutral-400">
                {movieDetails.tagline}
              </span>
              <p className="font-bold font-title text-neutral-950 dark:text-neutral-50 text-2xl">
                Sinopse
              </p>
              <p>
                {movieDetails.overview ||
                  'Sinopse indisponível para este título.'}
              </p>
            </div>

            <div className="flex gap-5 md:gap-20">
              <div>
                <div className="flex items-center justify-center gap-1.5 font-title font-bold text-neutral-950 dark:text-neutral-50">
                  {movieDetails.vote_average?.toFixed(1)}/10
                  <LucideStar
                    className="text-yellow-300 size-4"
                    strokeWidth={2}
                    fill="#FFDF20"
                  />
                </div>
                <span className="text-sm text-neutral-700 dark:text-neutral-200">
                  Avaliação
                </span>
              </div>

              <div>
                <p className="font-title font-bold text-neutral-950 dark:text-neutral-50">
                  {movieDetails.director}
                </p>
                <span className="text-sm text-neutral-700 dark:text-neutral-200">
                  Diretor
                </span>
              </div>

              <div>
                <div className="flex gap-x-1.5 items-center">
                  <p className="font-title font-bold text-neutral-950 dark:text-neutral-50">
                    {country}
                  </p>
                  <CountryFlag code={country} />
                </div>

                <span className="text-sm text-neutral-700 dark:text-neutral-200">
                  País de produção
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
