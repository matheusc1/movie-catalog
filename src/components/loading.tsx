import { LucideLoaderCircle } from "lucide-react";

export function Loading() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <LucideLoaderCircle className="animate-spin size-8" />
    </div>
  )
}
