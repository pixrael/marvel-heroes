import { ReactNode } from 'react';
import AllCharactersContextProvider from './AllCharactersContextProvider';
import ComicsByCharacterIdContextProvider from './ComicsByCharacterIdContextProvider';
import DetailsCharacterContextProvider from './DetailsCharacterContextProvider';
import FavoriteContextProvider from './FavoriteContextProvider';

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
