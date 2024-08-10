import { useState } from 'react';

export const useDetailsCharacterState = () => {
  const [searchResults, setSearchResults] = useState({
    nResults: 0,
    data: null,
  });
  const [requestData, setRequestData] = useState({
    error: null,
    isLoading: false,
  });

  return {
    searchResultsDetailCharacter: searchResults,
    setSearchResultsDetailCharacter: setSearchResults,
    requestDataDetailCharacter: requestData,
    setRequestDataDetailCharacter: setRequestData,
  };
};
