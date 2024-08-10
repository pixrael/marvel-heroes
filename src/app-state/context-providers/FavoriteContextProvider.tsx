import { ReactNode } from 'react';
import { FavoriteContext } from '../contexts/favorite-context';
import { useFavoriteCharactersState } from '../../hooks/favorite-characters/useFavoriteCharactersState';

function FavoriteContextProvider({ children }: { children: ReactNode }) {
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
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
