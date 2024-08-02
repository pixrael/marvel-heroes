import { MutableRefObject, createContext } from 'react';

type DataContextType = MutableRefObject<
  { id: number; name: string; img: string }[]
> | null;

export const DataFavoriteContext = createContext<DataContextType>(null);
