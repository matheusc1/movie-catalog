interface ErrorFallbackProps {
  onRetry?: () => void
  isFetching?: boolean
}

export function ErrorFallback({ onRetry, isFetching }: ErrorFallbackProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 bg-paper-50 dark:bg-ink-900 text-center px-6">
      <div className="space-y-2 max-w-xs">
        <span className="font-mono text-xs uppercase tracking-widest text-marquee">
          Sessão cancelada
        </span>
        <p className="font-title font-extrabold text-2xl text-ink-900 dark:text-paper-100">
          Não foi possível carregar os filmes.
        </p>
        <p className="text-sm text-ink-700/70 dark:text-paper-600">
          Tente novamente em alguns minutos.
        </p>
      </div>

      <div className="perforation w-32" />

      <button
        onClick={onRetry}
        disabled={isFetching}
        type="button"
        className="font-mono text-sm uppercase tracking-wide px-5 py-2.5 bg-marquee text-paper-50 rounded hover:bg-marquee-dim transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        Tentar novamente
      </button>
    </div>
  )
}
