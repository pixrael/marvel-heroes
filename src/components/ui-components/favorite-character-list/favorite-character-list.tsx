import { useContext } from 'react';
import FavoriteCharacterListItem from './favorite-character-list-item';

import Grid from '../grid/grid';
import { FavoriteContext } from '../../../contexts/favorite-context';

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
