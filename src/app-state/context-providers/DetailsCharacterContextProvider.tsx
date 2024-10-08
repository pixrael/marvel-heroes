import { ReactNode } from 'react';
import { useDetailsCharacterState } from '../hooks/useDetailsCharacterState';
import { DetailsCharacterContext } from '../contexts/details-characters-context';

function DetailsCharacterContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    searchResultsDetailCharacter,
    setSearchResultsDetailCharacter,
    requestDataDetailCharacter,
    setRequestDataDetailCharacter,
  } = useDetailsCharacterState();

  return (
    <DetailsCharacterContext.Provider
      value={{
        results: searchResultsDetailCharacter,
        setResults: setSearchResultsDetailCharacter,
        requestData: requestDataDetailCharacter,
        setRequestData: setRequestDataDetailCharacter,
      }}
    >
      {children}
    </DetailsCharacterContext.Provider>
  );
}

export default DetailsCharacterContextProvider;
