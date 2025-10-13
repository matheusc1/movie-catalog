import { useQuery } from '@tanstack/react-query'
import { getDirectors } from '../api/get-directors'

export function useDirectors(movieIds?: number[]) {
  const {
    data: directors,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['directors', movieIds],
    enabled: !!movieIds?.length,
    queryFn: () => getDirectors(movieIds!),
  })

  return { directors, isError, refetch }
}
