import { useContext } from 'react';
import { FavoriteContext } from '../../contexts/favorite-context';
import FavoriteCharacterFetcher from './favorite-character-fetcher';

function FavoriteCharacterListFetcher() {
  const { favoriteIdList } = useContext(FavoriteContext);

  return favoriteIdList.map((id) => (
    <FavoriteCharacterFetcher key={id} id={id} />
  ));
}

export default FavoriteCharacterListFetcher;
