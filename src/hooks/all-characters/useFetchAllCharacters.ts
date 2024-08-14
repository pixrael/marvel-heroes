import { useContext } from 'react';
import { useFetchMarvelData } from '../useFetchMarvelData';
import { SetupAppContext } from '../../app-state/contexts/setup-app-context';
import {
  FETCH_ALL_CHACTER_LIMIT_LIGHT,
  FETCH_ALL_CHACTER_LIMIT,
} from '../../constants';

export const useFetchAllCharacters = (heroToSearch?: string) => {
  const { limitTo5Results } = useContext(SetupAppContext);

  const limit = limitTo5Results
    ? FETCH_ALL_CHACTER_LIMIT_LIGHT
    : FETCH_ALL_CHACTER_LIMIT;

  let params: { limit: number; nameStartsWith?: string } = {
    limit,
  };
  if (heroToSearch) {
    params = { limit, nameStartsWith: heroToSearch };
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
