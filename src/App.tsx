import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CharacterListPage from './pages/character-list-page';
import ErrorPage from './pages/error-page';
import DetailsPage from './pages/details-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'details/:heroId',
    element: <DetailsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
