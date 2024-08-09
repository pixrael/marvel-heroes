import { useFetchCharacterById } from '../../hooks/useFetchCharacterById';
import { useFetchCharacterByIdParse } from '../../hooks/useFetchCharacterByIdParse';
import { useSaveFavoriteCharacters } from '../../hooks/useSaveFavoriteCharacters';

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
