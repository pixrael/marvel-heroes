import { ReactNode } from 'react';
import AllCharactersContextProvider from './context-providers/AllCharactersContextProvider';
import ComicsByCharacterIdContextProvider from './context-providers/ComicsByCharacterIdContextProvider';
import DetailsCharacterContextProvider from './context-providers/DetailsCharacterContextProvider';
import FavoriteContextProvider from './context-providers/FavoriteContextProvider';
import SetupAppContextProvider from './context-providers/SetupAppContextProvider';

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <FavoriteContextProvider>
      <AllCharactersContextProvider>
        <DetailsCharacterContextProvider>
          <ComicsByCharacterIdContextProvider>
            <SetupAppContextProvider>{children}</SetupAppContextProvider>
          </ComicsByCharacterIdContextProvider>
        </DetailsCharacterContextProvider>
      </AllCharactersContextProvider>
    </FavoriteContextProvider>
  );
}

export default ContextProvider;
