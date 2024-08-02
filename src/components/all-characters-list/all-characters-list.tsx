import { useContext, useEffect } from 'react';
import { FavoriteContext } from '../../contexts/favorite-context';
import Grid from '../grid/grid';
import { useFetchAllCharacters } from '../../hooks/useFetchAllCharacters';
import Loading from '../loading/loading';
import { useFetchAllCharactersParse } from '../../hooks/useFetchAllCharactersParse';
import CharacterCard from '../character-card/character-card';
import { InputSearchContext } from '../../contexts/search-context';

function AllCharactersList() {
  const { favoriteIdList } = useContext(FavoriteContext);
  const { debounceKeywords, setResults } = useContext(InputSearchContext);
  const { data, isLoading, error } = useFetchAllCharacters(debounceKeywords);
  const { parsedData } = useFetchAllCharactersParse(data);

  useEffect(() => {
    //move to a hook useSaveResults
    if (parsedData) {
      setResults({ nResults: parsedData.length, data: null });
    }
  }, [parsedData, setResults]);

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
