import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CharacterListPage from './pages/character-list-page';
import ErrorPage from './pages/error-page';
import DetailsPage from './pages/details-page';
import { FavoriteContext } from './contexts/favorite-context';
import { useState } from 'react';
import { InputSearchContext } from './contexts/search-context';

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
  const [count, setCount] = useState(0);
  const [keywords, setKeywords] = useState('');
  const [debounceKeywords, setDebounceKeywords] = useState('');
  const [searchResults, setSearchResults] = useState({
    nResults: 0,
    data: null,
  });
  const [requestData, setRequestData] = useState({
    error: null,
    isLoading: false,
  });
  return (
    <FavoriteContext.Provider value={{ count, setCount }}>
      <InputSearchContext.Provider
        value={{
          keywords,
          setKeywords,
          debounceKeywords,
          setDebounceKeywords,
          results: searchResults,
          setResults: setSearchResults,
          requestData,
          setRequestData,
        }}
      >
        <RouterProvider router={router} />
      </InputSearchContext.Provider>
    </FavoriteContext.Provider>
  );
}

export default App;
