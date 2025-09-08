import { useQuery } from '@tanstack/react-query'
import { getDirectors } from '../api/getDirectors'
import { useRawMovies } from './useRawMovies'

export function useDirectors() {
  const { rawMovies: movies } = useRawMovies()

  const { data: directors, isError } = useQuery({
    queryKey: ['directors', movies?.map(m => m.id)],
    enabled: !!movies,
    queryFn: () => getDirectors(movies!.map(m => m.id)),
  })

  return { directors, isError }
}
