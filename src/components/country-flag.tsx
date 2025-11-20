import 'flag-icons/css/flag-icons.min.css'

export function CountryFlag({ code }: { code: string }) {
  if (code === 'Desconhecido' || !code) return <span className="size-5">🏳️</span>

  return <span className={`fi fi-${code.toLowerCase()}`} />
}
