import { Dispatch, SetStateAction, createContext } from 'react';

interface InputSearchContextType {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
  debounceKeywords: string;
  setDebounceKeywords: Dispatch<SetStateAction<string>>;
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
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const InputSearchContext = createContext<InputSearchContextType>({
  keywords: '',
  setKeywords: () => '',
  debounceKeywords: '',
  setDebounceKeywords: () => '',
  results: {
    nResults: 0,
    data: null,
  },
  setResults: () => '',
  isLoading: false,
  setIsLoading: () => false,
});
