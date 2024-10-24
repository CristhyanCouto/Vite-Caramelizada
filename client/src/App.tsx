import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/index.tsx'
import Movies from './routes/movies/index.tsx'
import NotFound from './routes/notFound/index.tsx'
import MoviePage from './routes/moviePage/index.tsx'
import Series from './routes/series/index.tsx'
import Animes from './routes/animes/index.tsx'
import Games from './routes/games/index.tsx'
import Books from './routes/books/index.tsx'
import TestPage from './routes/testPage/index.tsx'
import GamePage from './routes/gamePage/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/series',
    element: <Series />,
  },
  {
    path: '/animes',
    element: <Animes />,
  },
  {
    path: '/games',
    element: <Games />,
  },
  {
    path: '/games/:gamesId',
    element: <GamePage />,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/movies/:moviesId',
    element: <MoviePage />,
  },
  {
    path: '/testPage',
    element: <TestPage />,
  },
  {
    path: '/testPage/:gamesId',
    element: <TestPage />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
