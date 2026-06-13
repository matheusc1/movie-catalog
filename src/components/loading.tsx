import TicketMark from '/ticket-mark.svg'

export function Loading() {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center gap-4 bg-paper-50 dark:bg-ink-900">
      <img src={TicketMark} alt="" className="w-12 h-12 animate-pulse" />
      <span className="font-mono text-xs uppercase tracking-widest text-ink-600 dark:text-paper-600">
        Validando ingresso...
      </span>
    </div>
  )
}
