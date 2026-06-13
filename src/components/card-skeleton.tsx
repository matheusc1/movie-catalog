export function CardSkeleton() {
  return (
    <div className="w-[320px] h-[160px] flex bg-paper-50 dark:bg-ink-850 border border-ink-700/15 dark:border-paper-200/10 rounded-lg overflow-hidden">
      <div className="w-[108px] h-full bg-ink-700/10 dark:bg-paper-200/10 animate-pulse shrink-0" />

      <div className="perforation-v" />

      <div className="flex-1 flex flex-col justify-between p-4 min-w-0">
        <div className="space-y-2">
          <div className="h-5 w-40 bg-ink-700/10 dark:bg-paper-200/10 rounded animate-pulse" />
          <div className="h-4 w-24 bg-ink-700/10 dark:bg-paper-200/10 rounded animate-pulse" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-5 w-16 bg-ink-700/10 dark:bg-paper-200/10 rounded animate-pulse" />
          <div className="h-5 w-16 bg-ink-700/10 dark:bg-paper-200/10 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}
