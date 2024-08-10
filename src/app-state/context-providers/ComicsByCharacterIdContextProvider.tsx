import { ReactNode } from 'react';
import { useComicsCharacterByIdState } from '../../hooks/details-characters/useComicsCharacterByIdState';
import { ComicsByCharacterIdContext } from '../contexts/comics-by-character-id-context';

function ComicsByCharacterIdContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    searchResultsComicsCharacters,
    setSearchResultsComicsCharacters,
    requestDataComicsCharacters,
    setRequestDataComicsCharacters,
  } = useComicsCharacterByIdState();

  return (
    <ComicsByCharacterIdContext.Provider
      value={{
        results: searchResultsComicsCharacters,
        setResults: setSearchResultsComicsCharacters,
        requestData: requestDataComicsCharacters,
        setRequestData: setRequestDataComicsCharacters,
      }}
    >
      {children}
    </ComicsByCharacterIdContext.Provider>
  );
}

export default ComicsByCharacterIdContextProvider;
