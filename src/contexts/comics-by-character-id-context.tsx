import { Dispatch, SetStateAction, createContext } from 'react';
import { REQUEST_DATA, RESULTS_DATA } from '../interfaces';

export interface ComicsByCharacterIdContextType {
  results: RESULTS_DATA;
  setResults: Dispatch<SetStateAction<RESULTS_DATA>>;
  requestData: REQUEST_DATA;
  setRequestData: Dispatch<REQUEST_DATA>;
}

export const ComicsByCharacterIdContext =
  createContext<ComicsByCharacterIdContextType>({
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
