import { useState } from 'react';

export const useComicsCharacterByIdState = () => {
  const [searchResults, setSearchResults] = useState({
    nResults: 0,
    data: null,
  });
  const [requestData, setRequestData] = useState({
    error: null,
    isLoading: false,
  });

  return {
    searchResultsComicsCharacters: searchResults,
    setSearchResultsComicsCharacters: setSearchResults,
    requestDataComicsCharacters: requestData,
    setRequestDataComicsCharacters: setRequestData,
  };
};
