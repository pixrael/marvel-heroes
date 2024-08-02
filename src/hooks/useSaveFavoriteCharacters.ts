import { useContext } from 'react';
import { DataFavoriteContext } from '../contexts/data-favorite-context';

export const useSaveFavoriteCharacters = (
  parsedData:
    | {
        id: number;
        name: string;
        img: string;
      }
    | undefined
) => {
  const dataRef = useContext(DataFavoriteContext);
  if (parsedData && dataRef && dataRef.current) {
    const favoriteDataList = dataRef.current;

    const alreadyExist = favoriteDataList.some(
      ({ id }) => id === parsedData.id
    );

    if (!alreadyExist) dataRef.current.push(parsedData);
  }
};
