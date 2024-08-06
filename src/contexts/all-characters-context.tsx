import { Dispatch, SetStateAction, createContext } from 'react';
import { SearchContextType } from './search-context-type';

export interface InputSearchContextType {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
  debounceKeywords: string;
  setDebounceKeywords: Dispatch<SetStateAction<string>>;
}

export const InputSearchContext = createContext<InputSearchContextType>({
  keywords: '',
  setKeywords: () => '',
  debounceKeywords: '',
  setDebounceKeywords: () => '',
});

export interface AllCharactersContextType {
  results: {
    nResults: number;
    data: any;
  };
  setResults: Dispatch<
    SetStateAction<{
      nResults: number;
      data: any;
    }>
  >;
  requestData: {
    error: any;
    isLoading: boolean;
  };
  setRequestData: Dispatch<{
    error: any;
    isLoading: boolean;
  }>;
  searchData: SearchContextType;
}

export const AllCharactersContext = createContext<AllCharactersContextType>({
  results: {
    nResults: 0,
    data: null,
  },
  setResults: () => '',
  requestData: {
    error: null,
    isLoading: false,
  },
  setRequestData: () => false,
  searchData: {
    keywords: '',
    setKeywords: () => '',
    debounceKeywords: '',
    setDebounceKeywords: () => '',
  },
});
