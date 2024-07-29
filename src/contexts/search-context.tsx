import { Dispatch, SetStateAction, createContext } from 'react';

interface InputSearchContextType {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}

export const InputSearchContext = createContext<InputSearchContextType>({
  keywords: '',
  setKeywords: () => '',
});
