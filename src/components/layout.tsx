import { Outlet } from 'react-router'
import { Header } from './header'

export function Layout() {
  return (
    <div className="min-h-dvh">
      <Header />

      <main className="max-w-app w-full mx-auto px-6 lg:px-3 py-8 space-y-8">
        <Outlet />
      </main>
    </div>
  )
}
