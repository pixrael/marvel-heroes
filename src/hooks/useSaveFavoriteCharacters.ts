import { useContext, useEffect } from 'react';
import { FavoriteContext } from '../contexts/favorite-context';

export const useSaveFavoriteCharacters = (
  parsedData:
    | {
        id: number;
        name: string;
        img: string;
      }
    | undefined
) => {
  const { favoriteCharacters, setFavoriteCharacters } =
    useContext(FavoriteContext);

  useEffect(() => {
    if (parsedData) {
      const alreadyExist = favoriteCharacters.some(
        (favC) => favC.id === parsedData.id
      );

      if (!alreadyExist) {
        setFavoriteCharacters([...favoriteCharacters, parsedData]);
      }
    }
  }, [parsedData, favoriteCharacters, setFavoriteCharacters]);
};
