import { useContext, useEffect } from 'react';
import FavoriteCharacterListItem from './favorite-character-list-item';

import Grid from '../grid/grid';
import { FavoriteContext } from '../../../contexts/favorite-context';

function FavoriteCharacterList() {
  const {
    favoriteIdList,
    favoriteCharacters,
    searchData: { debounceKeywords },
  } = useContext(FavoriteContext);

  return (
    <>
      {!!favoriteIdList.length && (
        <Grid>
          {' '}
          {/*  TODO Sort alphabetically */}
          {!debounceKeywords &&
            favoriteIdList.map((id) => (
              <FavoriteCharacterListItem key={id} id={id} />
            ))}
          {debounceKeywords &&
            favoriteCharacters.length &&
            favoriteCharacters
              .filter(({ name }) =>
                name.toLowerCase().includes(debounceKeywords.toLowerCase())
              )
              .map(({ id }) => <FavoriteCharacterListItem key={id} id={id} />)}
        </Grid>
      )}
    </>
  );
}

export default FavoriteCharacterList;
