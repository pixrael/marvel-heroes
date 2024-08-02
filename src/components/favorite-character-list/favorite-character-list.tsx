import { useContext } from 'react';
import FavoriteCharacterListItem from './favorite-character-list-item';
import { FavoriteContext } from '../../contexts/favorite-context';
import Grid from '../grid/grid';

function FavoriteCharacterList() {
  const { favoriteIdList } = useContext(FavoriteContext);
  return (
    <>
      {!!favoriteIdList.length && (
        <Grid>
          {favoriteIdList.map((id) => (
            <FavoriteCharacterListItem key={id} id={id} />
          ))}
        </Grid>
      )}
    </>
  );
}

export default FavoriteCharacterList;
