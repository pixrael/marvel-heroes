import { ReactNode } from 'react';
import AllCharactersContextProvider from './context-providers/AllCharactersContextProvider';
import ComicsByCharacterIdContextProvider from './context-providers/ComicsByCharacterIdContextProvider';
import DetailsCharacterContextProvider from './context-providers/DetailsCharacterContextProvider';
import FavoriteContextProvider from './context-providers/FavoriteContextProvider';

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <FavoriteContextProvider>
      <AllCharactersContextProvider>
        <DetailsCharacterContextProvider>
          <ComicsByCharacterIdContextProvider>
            {children}
          </ComicsByCharacterIdContextProvider>
        </DetailsCharacterContextProvider>
      </AllCharactersContextProvider>
    </FavoriteContextProvider>
  );
}

export default ContextProvider;
