import { useContext } from 'react';
import { AllCharactersContext } from '../../../../contexts/all-characters-context';
import { FavoriteContext } from '../../../../contexts/favorite-context';
import { useFetchAllCharacters } from '../../../../hooks/all-characters/useFetchAllCharacters';
import { useFetchAllCharactersParse } from '../../../../hooks/all-characters/useFetchAllCharactersParse';

import CharacterCard from '../../../ui-components/character-card/character-card';
import Grid from '../../../frames/grid/grid';
import Loading from '../../../ui-components/loading/loading';
import { useSaveAllCharacters } from '../../../../hooks/all-characters/useSaveAllCharacters';

function AllCharactersList() {
  const { favoriteIdList } = useContext(FavoriteContext);
  const {
    searchData: { debounceKeywords },
  } = useContext(AllCharactersContext);

  const { data, isLoading } = useFetchAllCharacters(debounceKeywords);
  const { parsedData } = useFetchAllCharactersParse(data);

  useSaveAllCharacters(parsedData);

  return (
    <>
      {parsedData && (
        <Grid>
          {parsedData.map(({ id, name, img }) => (
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
      {isLoading && <Loading />}
    </>
  );
}

export default AllCharactersList;
