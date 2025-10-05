import { Moon, Sun } from 'lucide-react'

import { useTheme } from './theme-provider'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      className="cursor-pointer size-8 rounded-md flex items-center justify-center bg-neutral-125 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-zinc-500"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  )
}
