import { useContext, useEffect } from 'react';
import { FavoriteContext } from '../../../../contexts/favorite-context';
import Grid from '../../../ui-components/grid/grid';
import { useFetchAllCharacters } from '../../../../hooks/useFetchAllCharacters';
import Loading from '../../../ui-components/loading/loading';
import { useFetchAllCharactersParse } from '../../../../hooks/useFetchAllCharactersParse';
import CharacterCard from '../../../ui-components/character-card/character-card';
import { AllCharactersContext } from '../../../../contexts/all-characters-context';
import { useSaveAllCharacters } from '../../../../hooks/useSaveAllCharacters';

function AllCharactersList() {
  const { favoriteIdList } = useContext(FavoriteContext);
  const {
    searchData: { debounceKeywords },
  } = useContext(AllCharactersContext);

  const { data, isLoading, error } = useFetchAllCharacters(debounceKeywords);
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
