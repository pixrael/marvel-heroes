import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AllCharactersPage from './pages/all-characters-page';
import ErrorPage from './pages/error-page';
import DetailsPage from './pages/details-character-page';
import { FavoriteContext } from './contexts/favorite-context';
import { useContext, useEffect } from 'react';
import { AllCharactersContext } from './contexts/all-characters-context';
import FavoritesPage from './pages/favorite-characters-page';
import { useAllCharactersState } from './hooks/useAllCharactersState';
import { useFavoriteCharactersState } from './hooks/useFavoriteCharactersState';

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
  const {
    keywordsFavoriteCharacters,
    setKeywordsFavoriteCharacters,
    debounceKeywordsFavoriteCharacters,
    setDebounceKeywordsFavoriteCharacters,
    favoriteIdList,
    setFavoriteIdList,
    favoriteCharacters,
    setFavoriteCharacters,
  } = useFavoriteCharactersState();

  const {
    keywordsAllCharacters,
    setKeywordsAllCharacters,
    debounceKeywordsAllCharacters,
    setDebounceKeywordsAllCharacters,
    searchResultsAllCharacters,
    setSearchResultsAllCharacters,
    requestDataAllCharacters,
    setRequestDataAllCharacters,
  } = useAllCharactersState();

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
          keywords: keywordsFavoriteCharacters,
          setKeywords: setKeywordsFavoriteCharacters,
          debounceKeywords: debounceKeywordsFavoriteCharacters,
          setDebounceKeywords: setDebounceKeywordsFavoriteCharacters,
        },
      }}
    >
      <AllCharactersContext.Provider
        value={{
          results: searchResultsAllCharacters,
          setResults: setSearchResultsAllCharacters,
          requestData: requestDataAllCharacters,
          setRequestData: setRequestDataAllCharacters,
          searchData: {
            keywords: keywordsAllCharacters,
            setKeywords: setKeywordsAllCharacters,
            debounceKeywords: debounceKeywordsAllCharacters,
            setDebounceKeywords: setDebounceKeywordsAllCharacters,
          },
        }}
      >
        <RouterProvider router={router} />
      </AllCharactersContext.Provider>
    </FavoriteContext.Provider>
  );
}

export default App;
