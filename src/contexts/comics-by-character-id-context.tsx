import { Dispatch, SetStateAction, createContext } from 'react';

export interface ComicsByCharacterIdContextType {
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
