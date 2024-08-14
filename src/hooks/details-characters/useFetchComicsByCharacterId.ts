import { useContext } from 'react';
import { SetupAppContext } from '../../app-state/contexts/setup-app-context';
import {
  FETCH_COMICS_BY_CHACTER_ID_LIMIT,
  FETCH_COMICS_BY_CHACTER_ID_LIMIT_LIGHT,
} from '../../constants';
import { useFetchMarvelData } from '../useFetchMarvelData';

export const useFetchComicsByCharacterId = (id: number | undefined) => {
  const { limitTo5Results } = useContext(SetupAppContext);

  const limit = limitTo5Results
    ? FETCH_COMICS_BY_CHACTER_ID_LIMIT_LIGHT
    : FETCH_COMICS_BY_CHACTER_ID_LIMIT;

  const { data, isLoading, error } = useFetchMarvelData({
    resource: 'characters',
    id,
    subresource: 'comics',
    params: { limit, orderBy: 'onsaleDate' },
  });

  return {
    data,
    isLoading,
    error: error,
  };
};
