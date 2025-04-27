import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import Directors from './components/Directors';
import Actors from './components/Actors';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  }
]);

export default router;