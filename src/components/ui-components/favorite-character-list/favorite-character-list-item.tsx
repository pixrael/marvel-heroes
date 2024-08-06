import { useContext } from 'react';
import { FavoriteContext } from '../../../contexts/favorite-context';
import { useFetchCharacterById } from '../../../hooks/useFetchCharacterById';
import { useFetchCharacterByIdParse } from '../../../hooks/useFetchCharacterByIdParse';
import { useSaveFavoriteCharacters } from '../../../hooks/useSaveFavoriteCharacters';
import CharacterCard from '../character-card/character-card';
import Loading from '../loading/loading';

function FavoriteCharacterListItem({ id }: { id: number }) {
  const { favoriteIdList } = useContext(FavoriteContext);
  const { data, isLoading, error } = useFetchCharacterById(id);
  const { parsedData } = useFetchCharacterByIdParse(data);
  useSaveFavoriteCharacters(parsedData);

  return (
    <>
      {parsedData && (
        <CharacterCard
          id={parsedData.id}
          name={parsedData.name}
          img={parsedData.img}
          isSelected={favoriteIdList.some((favId) => favId === id)}
        />
      )}
      {isLoading && <Loading />}
      {error && <>Error loading list</>}
    </>
  );
}

export default FavoriteCharacterListItem;
