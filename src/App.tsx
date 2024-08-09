import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AllCharactersPage from './pages/all-characters-page';
import ErrorPage from './pages/error-page';
import DetailsPage from './pages/details-character-page';
import { FavoriteContext } from './contexts/favorite-context';
import { AllCharactersContext } from './contexts/all-characters-context';
import FavoritesPage from './pages/favorite-characters-page';
import { useAllCharactersState } from './hooks/useAllCharactersState';
import { useFavoriteCharactersState } from './hooks/useFavoriteCharactersState';
import { useDetailsCharacterState } from './hooks/useDetailsCharacterState';
import { DetailsCharacterContext } from './contexts/details-characters-context';
import { ComicsByCharacterIdContext } from './contexts/comics-by-character-id-context';
import { useComicsCharacterByIdState } from './hooks/useComicsCharacterByIdState';

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

  const {
    searchResultsDetailCharacter,
    setSearchResultsDetailCharacter,
    requestDataDetailCharacter,
    setRequestDataDetailCharacter,
  } = useDetailsCharacterState();

  const {
    searchResultsComicsCharacters,
    setSearchResultsComicsCharacters,
    requestDataComicsCharacters,
    setRequestDataComicsCharacters,
  } = useComicsCharacterByIdState();

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
        <DetailsCharacterContext.Provider
          value={{
            results: searchResultsDetailCharacter,
            setResults: setSearchResultsDetailCharacter,
            requestData: requestDataDetailCharacter,
            setRequestData: setRequestDataDetailCharacter,
          }}
        >
          <ComicsByCharacterIdContext.Provider
            value={{
              results: searchResultsComicsCharacters,
              setResults: setSearchResultsComicsCharacters,
              requestData: requestDataComicsCharacters,
              setRequestData: setRequestDataComicsCharacters,
            }}
          >
            <RouterProvider router={router} />
          </ComicsByCharacterIdContext.Provider>
        </DetailsCharacterContext.Provider>
      </AllCharactersContext.Provider>
    </FavoriteContext.Provider>
  );
}

export default App;
