import { Dispatch, SetStateAction, createContext } from 'react';

interface FavoriteContextType {
  favoriteIds: { id: number; data: any; requestData: any }[];
  setFavoriteIds: Dispatch<
    SetStateAction<{ id: number; data: any; requestData: any }[]>
  >;
  favoritesData: {
    data: any;
    requestData: {
      error: any;
      isLoading: boolean;
    };
  }[];
  addFavoriteData: (newData) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favoriteIds: [],
  setFavoriteIds: () => [],
  favoritesData: [],
  addFavoriteData: (newData) => {},
});
