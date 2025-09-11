interface ErrorStateProps {
  onRetry?: () => void
}

export function ErrorFallback({ onRetry }: ErrorStateProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <span className="text-6xl">⚠️</span>

      <div className="space-y-2">
        <p className="text-lg font-semibold text-neutral-200 text-center">
          Não foi possível carregar os filmes.
        </p>
        <p className="text-sm text-neutral-400 text-center">
          Tente novamente em alguns minutos.
        </p>
      </div>

      <button
        onClick={onRetry}
        type="button"
        className="px-4 py-2 bg-neutral-600 text-white rounded hover:bg-neutral-500 cursor-pointer transition"
      >
        Tentar novamente
      </button>
    </div>
  )
}
