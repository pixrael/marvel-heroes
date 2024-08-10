import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllCharactersPage from './pages/all-characters-page';
import ErrorPage from './pages/error-page';
import DetailsPage from './pages/details-character-page';
import FavoritesPage from './pages/favorite-characters-page';
import './App.css';
import ContextProvider from './contexts/context-providers/ContextProvider';

const router = createBrowserRouter([
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
    element: <DetailsPage />,
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
