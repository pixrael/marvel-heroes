import { useFetchMarvelData } from '../useFetchMarvelData';

export const useFetchAllCharacters = (heroToSearch?: string) => {
  let params: { limit: number; nameStartsWith?: string } = { limit: 5 };
  if (heroToSearch) {
    params = { limit: 5, nameStartsWith: heroToSearch };
  }

  const { data, isLoading, error } = useFetchMarvelData({
    resource: 'characters',
    params,
  });

  return {
    data,
    isLoading,
    error: error,
  };
};
