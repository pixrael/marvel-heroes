import { Dispatch, SetStateAction, createContext } from 'react';
import { SearchContextType } from './search-context-type';

interface FavoriteContextType {
  favoriteIdList: number[];
  setFavoriteIdList: Dispatch<SetStateAction<number[]>>;
  favoriteCharacters: {
    data: { id: number; name: string; img: string };
    requestData: {
      isLoading: boolean;
      error: any;
    };
  }[];
  setFavoriteCharacters: Dispatch<
    SetStateAction<
      {
        data: { id: number; name: string; img: string };
        requestData: {
          isLoading: boolean;
          error: any;
        };
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
