interface TmdbCrewMember {
  id: number
  name: string
  job: string
  credit_id: string
  department: string
  profile_path: string | null
  gender: number | null
}

interface TmdbCreditsResponse {
  id: number
  crew: TmdbCrewMember[]
}

export type Director = {
  movieId: number
  director?: string
}

export async function getDirectors(movieIds: number[]): Promise<Director[]> {
  try {
    const results = await Promise.all(
      movieIds.map(async movieId => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=pt-BR`
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch directors for movie ${movieId}`)
        }

        const data: TmdbCreditsResponse = await response.json()
        const director = data.crew.find(c => c.job === 'Director')?.name

        return {
          movieId,
          director,
        }
      })
    )

    return results
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch directors')
  }
}
