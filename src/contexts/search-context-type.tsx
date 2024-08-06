import { Dispatch, SetStateAction } from 'react';

export interface SearchContextType {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
  debounceKeywords: string;
  setDebounceKeywords: Dispatch<SetStateAction<string>>;
}

/* export const FavoriteContext = createContext<SearchFavoriteContextType>({
  keywords: '',
  setKeywords: () => '',
  debounceKeywords: '',
  setDebounceKeywords: () => '',
}); */
