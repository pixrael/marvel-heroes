import { createBrowserRouter } from 'react-router-dom';
import AllCharactersPage from './pages/all-characters-page';
import ErrorPage from './pages/error-page';
import FavoritesPage from './pages/favorite-characters-page';
import DetailsCharactersPage from './pages/details-character-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AllCharactersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'favorites',
    element: <FavoritesPage />,
  },
  {
    path: 'details/:id',
    element: <DetailsCharactersPage />,
  },
]);
