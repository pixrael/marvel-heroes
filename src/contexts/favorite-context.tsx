import { Dispatch, SetStateAction, createContext } from 'react';

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
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favoriteIdList: [],
  setFavoriteIdList: () => [],
  favoriteCharacters: [],
  setFavoriteCharacters: () => [],
});
