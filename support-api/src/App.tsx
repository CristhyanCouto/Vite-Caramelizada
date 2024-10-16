import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home';
import Actors from './routes/actors';
import Animes from './routes/animes';
import Books from './routes/books';
import Creators from './routes/creators';
import CurrentStatusEnPt from './routes/currentStatusEnPt';
import Directors from './routes/directors';
import Games from './routes/games';
import GenreEnPt from './routes/genreEnPt';
import Movies from './routes/movies';
import Plataforms from './routes/plataforms';
import Producers from './routes/producers';
import PublisherBooks from './routes/publisherBooks';
import PublisherGames from './routes/publisherGames';
import RatedPgEn from './routes/ratedPgEn';
import RatedPgPt from './routes/ratedPgPt';
import SeasonsAnimes from './routes/seaonsAnimes';
import SeasonsSeries from './routes/seasonsSeries';
import Series from './routes/series';
import Writers from './routes/writers';
import TestPage from './routes/testPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    path: '/animes',
    element: <Animes />,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/creators',
    element: <Creators />,
  },
  {
    path: '/currentStatusEnPt',
    element: <CurrentStatusEnPt />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '/games',
    element: <Games />,
  },
  {
    path: '/genreEnPt',
    element: <GenreEnPt />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/plataforms',
    element: <Plataforms />,
  },
  {
    path: '/producers',
    element: <Producers />,
  },
  {
    path: '/publisherBooks',
    element: <PublisherBooks />,
  },
  {
    path: '/publisherGames',
    element: <PublisherGames />,
  },
  {
    path: '/ratedPgEn',
    element: <RatedPgEn />,
  },
  {
    path: '/ratedPgPt',
    element: <RatedPgPt />,
  },
  {
    path: '/seasonsAnimes',
    element: <SeasonsAnimes />,
  },
  {
    path: '/seasonsSeries',
    element: <SeasonsSeries />,
  },
  {
    path: '/series',
    element: <Series />,
  },
  {
    path: '/writers',
    element: <Writers />,
  },
  {
    path: '/testPage',
    element: <TestPage />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
