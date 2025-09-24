export function CardSkeleton() {
  return (
    <div className="w-[280px] h-fit flex flex-col items-center border-1 dark:bg-neutral-800 border-neutral-175 dark:border-neutral-750 rounded-[10px]">
      <div className="w-[107px] h-[145px] bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
      <div className="h-0.25 w-full bg-neutral-150 dark:bg-neutral-725" />
      <div className="w-full p-4 space-y-5">
        <div className="h-6 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-md animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-md animate-pulse" />
          <div className="flex gap-2 flex-row">
            <div className="rounded-md h-4 w-20 bg-neutral-125 dark:bg-neutral-725 animate-pulse" />
            <div className="rounded-md h-4 w-20 bg-neutral-125 dark:bg-neutral-725 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
