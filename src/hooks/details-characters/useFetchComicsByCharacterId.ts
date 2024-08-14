import { FETCH_COMICS_BY_CHACTER_ID_LIMIT } from '../../constants';
import { useFetchMarvelData } from '../useFetchMarvelData';

export const useFetchComicsByCharacterId = (id: number | undefined) => {
  const { data, isLoading, error } = useFetchMarvelData({
    resource: 'characters',
    id,
    subresource: 'comics',
    params: { limit: FETCH_COMICS_BY_CHACTER_ID_LIMIT, orderBy: 'onsaleDate' },
  });

  return {
    data,
    isLoading,
    error: error,
  };
};
