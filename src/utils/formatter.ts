export function formatDate(dateString: string | undefined): string {
  if (!dateString) return 'Data indisponível'

  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return 'Data indisponível'
  return date.toLocaleDateString('pt-BR')
}

export function formatTime(runtime: number | undefined): string {
  if (!runtime || runtime <= 0) return 'Duração indisponível'

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return `${hours}h ${minutes}m`
}
