import { useFetchMarvelData } from '../useFetchMarvelData';

export const useFetchCharacterById = (id: number) => {
  const { data, isLoading, error } = useFetchMarvelData({
    resource: 'characters',
    id,
    params: { limit: 1 },
  });

  return {
    data,
    isLoading,
    error: error,
  };
};
