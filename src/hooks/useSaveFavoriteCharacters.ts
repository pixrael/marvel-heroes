import { useContext, useEffect } from 'react';
import { FavoriteContext } from '../contexts/favorite-context';

import isEqual from 'lodash.isequal';

export const useSaveFavoriteCharacters = (
  parsedData: {
    id: number;
    name: string;
    img: string;
  },
  requestData: { isLoading: boolean; error: any }
) => {
  const { favoriteCharacters, setFavoriteCharacters } =
    useContext(FavoriteContext);

  useEffect(() => {
    const oldCharacter = favoriteCharacters.find(
      (favC) => favC.data.id === parsedData.id
    );

    if (!oldCharacter) {
      setFavoriteCharacters([
        ...favoriteCharacters,
        { data: parsedData, requestData },
      ]);
    } else {
      const newCharacter = {
        data: parsedData,
        requestData,
      };
      const sameData = isEqual(oldCharacter, newCharacter);
      if (!sameData) {
        const newFavoriteList = favoriteCharacters.filter(
          (favC) => favC.data.id !== parsedData.id
        );
        setFavoriteCharacters([...newFavoriteList, newCharacter]);
      }
    }
  }, [parsedData, requestData, favoriteCharacters, setFavoriteCharacters]);
};
