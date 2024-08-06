import { Dispatch, SetStateAction, createContext } from 'react';
import { SearchContextType } from './search-context-type';

interface FavoriteContextType {
  favoriteIdList: number[];
  setFavoriteIdList: Dispatch<SetStateAction<number[]>>;
  favoriteCharacters: {
    id: number;
    name: string;
    img: string;
  }[];
  setFavoriteCharacters: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        img: string;
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
