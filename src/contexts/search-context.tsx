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
  requestData: {
    error: any;
    isLoading: boolean;
  };
  setRequestData: Dispatch<{
    error: any;
    isLoading: boolean;
  }>;
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
  requestData: {
    error: null,
    isLoading: false,
  },
  setRequestData: () => false,
});
