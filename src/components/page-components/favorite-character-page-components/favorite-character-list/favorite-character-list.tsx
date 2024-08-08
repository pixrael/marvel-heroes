import { useContext } from 'react';
import FavoriteCharacterListItem from '../../../ui-components/favorite-character-list/favorite-character-list-item';

import Grid from '../../../ui-components/grid/grid';
import { FavoriteContext } from '../../../../contexts/favorite-context';
import CharacterCard from '../../../ui-components/character-card/character-card';

function FavoriteCharacterList() {
  const {
    favoriteIdList,
    favoriteCharacters,
    searchData: { debounceKeywords },
  } = useContext(FavoriteContext);

  return (
    <>
      {favoriteIdList.length !== favoriteCharacters.length && (
        <Grid>
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
      {favoriteIdList.length === favoriteCharacters.length && (
        <Grid>
          {favoriteCharacters.map(({ id, name, img }) => (
            <CharacterCard
              key={id}
              id={id}
              name={name}
              img={img}
              isSelected={favoriteIdList.some((favId) => favId === id)}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

export default FavoriteCharacterList;
