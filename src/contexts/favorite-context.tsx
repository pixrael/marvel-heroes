import { Dispatch, SetStateAction, createContext } from 'react';

interface FavoriteContextType {
  favoriteIdList: number[];
  setFavoriteIdList: Dispatch<SetStateAction<number[]>>;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favoriteIdList: [],
  setFavoriteIdList: () => [],
});
