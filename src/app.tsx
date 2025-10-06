import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { Layout } from './components/layout'
import { MovieDetails } from './pages/movie-details'
import { PopularMovies } from './pages/popular-movies'
import { Search } from './pages/search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <PopularMovies /> },
      { path: 'search', element: <Search /> },
      { path: 'movie/:id', element: <MovieDetails /> },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
