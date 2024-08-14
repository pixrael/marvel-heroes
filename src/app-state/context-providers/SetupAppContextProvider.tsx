import { ReactNode } from 'react';
import { useSetupAppState } from '../hooks/useSetupAppState';
import { SetupAppContext } from '../contexts/setup-app-context';

function SetupAppContextProvider({ children }: { children: ReactNode }) {
  const { limitTo5Results, setLimitTo5Results } = useSetupAppState();

  return (
    <SetupAppContext.Provider
      value={{
        limitTo5Results,
        setLimitTo5Results,
      }}
    >
      {children}
    </SetupAppContext.Provider>
  );
}

export default SetupAppContextProvider;
