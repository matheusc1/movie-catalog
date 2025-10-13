import { useQuery } from '@tanstack/react-query'
import { type Genres, getGenres } from '../api/get-genres'

export function useGenres() {
  const {
    data: genres,
    isError,
    refetch,
  } = useQuery<Genres[]>({
    queryKey: ['genres'],
    queryFn: getGenres,
    staleTime: Infinity,
  })

  return { genres, isError, refetch }
}
