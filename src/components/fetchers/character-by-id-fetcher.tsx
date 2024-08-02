import { useContext, useEffect } from 'react';
import { FavoriteContext } from '../../contexts/favorite-context';
import { useFetchCharacterById } from '../../hooks/useFetchCharacterById';

function CharacterByIdFetcher({ id }: { id: number }) {
  const { addFavoriteData, updateRequestFavoriteData } =
    useContext(FavoriteContext);

  const { data, isLoading, error } = useFetchCharacterById(id);

  useEffect(() => {
    if (data) {
      addFavoriteData({
        id,
        data,
        requestData: {
          error,
          isLoading,
        },
      });
    }
  }, [id, data, addFavoriteData, error, isLoading]);

  useEffect(() => {
    updateRequestFavoriteData(id, error, isLoading);
  }, [id, error, isLoading, updateRequestFavoriteData]);

  return <></>;
}

export default CharacterByIdFetcher;
