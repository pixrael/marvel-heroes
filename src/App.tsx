import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CharacterListPage from './pages/character-list-page';
import ErrorPage from './pages/error-page';
import DetailsPage from './pages/details-page';
import { FavoriteContext } from './contexts/favorite-context';
import { useState } from 'react';
import { InputSearchContext } from './contexts/search-context';
import FavoritesPage from './pages/favorites-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterListPage />,
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
  const [favoriteIds, setFavoriteIds] = useState<
    { id: number; data: any; requestData: any }[]
  >([]);
  const [favoritesData] = useState<any[]>([]);
  const addFavoriteData = (newData) => {
    let shouldUpdate = false;
    const newFavoriteIds = favoriteIds.map((favId) => {
      if (favId.id === newData.id && !favId.data) {
        shouldUpdate = true;
        return {
          id: favId.id,
          data: newData.data,
          requestData: newData.requestData,
        };
      } else return favId;
    });

    if (shouldUpdate) {
      console.log('making update');
      setFavoriteIds(newFavoriteIds);
    }
  };

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
    <FavoriteContext.Provider
      value={{
        favoriteIds,
        setFavoriteIds,
        favoritesData,
        addFavoriteData,
      }}
    >
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
