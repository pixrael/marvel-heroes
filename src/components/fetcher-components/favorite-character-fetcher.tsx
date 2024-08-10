import { useFetchCharacterById } from '../../hooks/favorite-characters/useFetchCharacterById';
import { useFetchCharacterByIdParse } from '../../hooks/favorite-characters/useFetchCharacterByIdParse';
import { useSaveFavoriteCharacters } from '../../hooks/favorite-characters/useSaveFavoriteCharacters';

function FavoriteCharacterFetcher({ id }: { id: number }) {
  const { data, isLoading, error } = useFetchCharacterById(id);
  const { parsedData } = useFetchCharacterByIdParse(data);
  useSaveFavoriteCharacters(parsedData ?? { id, img: '', name: '' }, {
    isLoading,
    error,
  });

  return <></>;
}

export default FavoriteCharacterFetcher;
