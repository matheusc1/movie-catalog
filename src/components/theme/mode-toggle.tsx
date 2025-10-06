import { useTheme } from './theme-provider'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="mr-2">Tema escuro</span>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <div className="w-11 h-6 rounded-full bg-neutral-200 peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:h-5 after:w-5 after:bg-white after:rounded-full after:border after:border-neutral-300 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full" />
    </label>
  )
}
