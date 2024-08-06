import { Dispatch, SetStateAction, createContext } from 'react';

interface SearchFavoriteContextType {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
  debounceKeywords: string;
  setDebounceKeywords: Dispatch<SetStateAction<string>>;
}

export const FavoriteContext = createContext<SearchFavoriteContextType>({
  keywords: '',
  setKeywords: () => '',
  debounceKeywords: '',
  setDebounceKeywords: () => '',
});
