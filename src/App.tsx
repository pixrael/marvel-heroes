import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AllCharactersPage from './pages/all-characters-page';
import ErrorPage from './pages/error-page';
import DetailsPage from './pages/details-page';
import { FavoriteContext } from './contexts/favorite-context';
import { useContext, useEffect, useState } from 'react';
import { AllCharactersContext } from './contexts/all-characters-context';
import FavoritesPage from './pages/favorites-page';

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
    path: 'details/:heroId',
    element: <DetailsPage />,
  },
]);

function App() {
  const [favoriteIdList, setFavoriteIdList] = useState<number[]>([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState<
    {
      id: number;
      name: string;
      img: string;
    }[]
  >([]);

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

  /* Monitoring */
  const { results } = useContext(AllCharactersContext);
  useEffect(() => {
    console.log('results __ ', results);
  }, [results]);

  /* ---Monitoring */

  return (
    <FavoriteContext.Provider
      value={{
        favoriteIdList,
        setFavoriteIdList,
        favoriteCharacters,
        setFavoriteCharacters,
        searchData: {
          keywords,
          setKeywords,
          debounceKeywords,
          setDebounceKeywords,
        },
      }}
    >
      <AllCharactersContext.Provider
        value={{
          results: searchResults,
          setResults: setSearchResults,
          requestData,
          setRequestData,
          searchData: {
            keywords,
            setKeywords,
            debounceKeywords,
            setDebounceKeywords,
          },
        }}
      >
        <RouterProvider router={router} />
      </AllCharactersContext.Provider>
    </FavoriteContext.Provider>
  );
}

export default App;
