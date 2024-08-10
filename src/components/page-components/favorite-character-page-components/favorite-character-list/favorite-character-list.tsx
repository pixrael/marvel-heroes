import { ReactNode, useContext } from 'react';
import Grid from '../../../frames/grid/grid';
import { FavoriteContext } from '../../../../app-state/contexts/favorite-context';
import CharacterCard from '../../../ui-components/character-card/character-card';
import CharacterCardDefault from '../../../ui-components/character-card-default/character-card-default';

function FavoriteCharacterList() {
  const {
    favoriteIdList,
    favoriteCharacters,
    searchData: { debounceKeywords },
  } = useContext(FavoriteContext);

  const displayCard = (character: any): ReactNode => {
    if (character.requestData.isLoading) {
      return <CharacterCardDefault />;
    } else if (!character.requestData.isLoading && character.data) {
      return (
        <CharacterCard
          key={character.data.id}
          id={character.data.id}
          name={character.data.name}
          img={character.data.img}
          isSelected={favoriteIdList.some(
            (favId) => favId === character.data.id
          )}
        />
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <Grid>
      {favoriteCharacters
        .filter((character) => {
          if (character) {
            return character.data.name.includes(debounceKeywords);
          }
          return true;
        })
        .map((character, i) => (
          <div key={i}>{displayCard(character)}</div>
        ))}
    </Grid>
  );
}

export default FavoriteCharacterList;
