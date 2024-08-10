import { ReactNode } from 'react';
import { AllCharactersContext } from '../contexts/all-characters-context';
import { useAllCharactersState } from '../../hooks/all-characters/useAllCharactersState';

function AllCharactersContextProvider({ children }: { children: ReactNode }) {
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

  return (
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
      {children}
    </AllCharactersContext.Provider>
  );
}

export default AllCharactersContextProvider;
