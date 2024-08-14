import { useState } from 'react';

export const useAllCharactersState = () => {
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

  return {
    keywordsAllCharacters: keywords,
    setKeywordsAllCharacters: setKeywords,
    debounceKeywordsAllCharacters: debounceKeywords,
    setDebounceKeywordsAllCharacters: setDebounceKeywords,
    searchResultsAllCharacters: searchResults,
    setSearchResultsAllCharacters: setSearchResults,
    requestDataAllCharacters: requestData,
    setRequestDataAllCharacters: setRequestData,
  };
};
