import { Outlet } from 'react-router'
import { Header } from './header'

export function Layout() {
  return (
    <div className="max-w-app w-full mx-auto px-6 lg:px-0 py-10 text-center space-y-7">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
