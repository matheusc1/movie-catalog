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
      className="cursor-pointer size-7 rounded-sm flex items-center justify-center bg-neutral-125 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
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
