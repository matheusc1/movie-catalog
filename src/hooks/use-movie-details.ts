import { useQuery } from '@tanstack/react-query'
import { GetMovieDetails, type MovieDetails } from '../api/get-movie-details'
import { useDirectors } from './use-directors'

export function useMovieDetails(id: number) {
  const { data, isError, refetch, isLoading } = useQuery<MovieDetails>({
    queryKey: ['movie', id],
    queryFn: () => GetMovieDetails(id),
    staleTime: Infinity,
    enabled: !!id,
  })

  const { directors } = useDirectors([id])

  const movieDetails = {
    ...data,
    director: data?.director ?? directors?.find(d => d.movieId === data?.id)?.director
  }

  return { movieDetails, isError, refetch, isLoading }
}
