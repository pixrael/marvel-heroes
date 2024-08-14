import { FETCH_ALL_CHACTER_LIMIT } from '../../constants';
import { useFetchMarvelData } from '../useFetchMarvelData';

export const useFetchAllCharacters = (heroToSearch?: string) => {
  let params: { limit: number; nameStartsWith?: string } = {
    limit: FETCH_ALL_CHACTER_LIMIT,
  };
  if (heroToSearch) {
    params = { limit: FETCH_ALL_CHACTER_LIMIT, nameStartsWith: heroToSearch };
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
