import { useState } from 'react';

export const useFavoriteCharactersState = () => {
  const [keywords, setKeywords] = useState('');
  const [debounceKeywords, setDebounceKeywords] = useState('');
  const [favoriteIdList, setFavoriteIdList] = useState<number[]>([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState<
    {
      data: { id: number; name: string; img: string };
      requestData: {
        isLoading: boolean;
        error: any;
      };
    }[]
  >([]);
  return {
    keywordsFavoriteCharacters: keywords,
    setKeywordsFavoriteCharacters: setKeywords,
    debounceKeywordsFavoriteCharacters: debounceKeywords,
    setDebounceKeywordsFavoriteCharacters: setDebounceKeywords,
    favoriteIdList,
    setFavoriteIdList,
    favoriteCharacters,
    setFavoriteCharacters,
  };
};
