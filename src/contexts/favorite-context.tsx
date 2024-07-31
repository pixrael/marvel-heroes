import { Dispatch, SetStateAction, createContext } from 'react';

interface FavoriteContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  favoriteIds: number[];
  setFavoriteIds: Dispatch<SetStateAction<number[]>>;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  count: 0,
  setCount: () => 0,
  favoriteIds: [],
  setFavoriteIds: () => [],
});
