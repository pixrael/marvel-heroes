import { Dispatch, SetStateAction, createContext } from 'react';
import { SearchContextType } from './search-context-type';
import { FAVORITE_CHARACTER_DATA, REQUEST_DATA } from '../interfaces';

interface FavoriteContextType {
  favoriteIdList: number[];
  setFavoriteIdList: Dispatch<SetStateAction<number[]>>;
  favoriteCharacters: {
    data: FAVORITE_CHARACTER_DATA;
    requestData: REQUEST_DATA;
  }[];
  setFavoriteCharacters: Dispatch<
    SetStateAction<
      {
        data: FAVORITE_CHARACTER_DATA;
        requestData: REQUEST_DATA;
      }[]
    >
  >;
  searchData: SearchContextType;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favoriteIdList: [],
  setFavoriteIdList: () => [],
  favoriteCharacters: [],
  setFavoriteCharacters: () => [],
  searchData: {
    keywords: '',
    setKeywords: () => '',
    debounceKeywords: '',
    setDebounceKeywords: () => '',
  },
});
