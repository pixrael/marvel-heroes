import { createContext, Dispatch, SetStateAction } from 'react';
import { SetupAppInitialValue } from './initial-context-values';

interface SetupAppContextType {
  limitTo5Results: boolean;
  setLimitTo5Results: Dispatch<SetStateAction<boolean>>;
}

export const SetupAppContext =
  createContext<SetupAppContextType>(SetupAppInitialValue);
