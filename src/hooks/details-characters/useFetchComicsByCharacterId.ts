import { useFetchMarvelData } from '../useFetchMarvelData';

export const useFetchComicsByCharacterId = (id: number | undefined) => {
  const { data, isLoading, error } = useFetchMarvelData({
    resource: 'characters',
    id,
    subresource: 'comics',
    params: { limit: 3, orderBy: 'onsaleDate' },
  });

  return {
    data,
    isLoading,
    error: error,
  };
};
