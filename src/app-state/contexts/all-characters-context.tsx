import { Dispatch, SetStateAction, createContext } from 'react';

import { REQUEST_DATA, RESULTS_DATA } from '../../interfaces';
import { SearchContextType } from './search-context-type';

export interface AllCharactersContextType {
  results: RESULTS_DATA;
  setResults: Dispatch<SetStateAction<RESULTS_DATA>>;
  requestData: REQUEST_DATA;
  setRequestData: Dispatch<REQUEST_DATA>;
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
