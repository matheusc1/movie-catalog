interface ErrorFallbackProps {
  onRetry?: () => void
  isFetching?: boolean
}

export function ErrorFallback({ onRetry, isFetching }: ErrorFallbackProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <span className="text-6xl">⚠️</span>

      <div className="space-y-2">
        <p className="text-lg font-bold font-title text-center">
          Não foi possível carregar os filmes.
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-400 text-center">
          Tente novamente em alguns minutos.
        </p>
      </div>

      <button
        onClick={onRetry}
        disabled={isFetching}
        type="button"
        className="px-4 py-2 bg-neutral-725 text-neutral-50 rounded hover:bg-neutral-600 cursor-pointer transition disabled:cursor-not-allowed disabled:opacity-50"
      >
        Tentar novamente
      </button>
    </div>
  )
}
