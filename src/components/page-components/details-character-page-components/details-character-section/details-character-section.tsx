import CharacterSection from '../../../ui-components/character-section/character-section';
import { useFetchCharacterById } from '../../../../hooks/useFetchCharacterById';
import { useParams } from 'react-router-dom';

import { useFetchCharacterByIdParse } from '../../../../hooks/useFetchCharacterByIdParse';
import { useSaveCharacterDetails } from '../../../../hooks/useSaveCharacterDetails';
import Loading from '../../../ui-components/loading/loading';
import { useContext } from 'react';
import { FavoriteContext } from '../../../../contexts/favorite-context';

function DetailsCharacterSection() {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchCharacterById(id ? +id : 0);
  const { parsedData } = useFetchCharacterByIdParse(data);
  useSaveCharacterDetails(parsedData);

  const {
    favoriteIdList,
    setFavoriteIdList,
    favoriteCharacters,
    setFavoriteCharacters,
  } = useContext(FavoriteContext);

  const handleFavoriteClick = (id: number) => {
    const already = favoriteIdList.some((favId) => favId === id);

    if (already) {
      const newFavoriteIdList = favoriteIdList.filter((favId) => favId !== id);
      setFavoriteIdList(newFavoriteIdList);

      const newFavoriteCharacters = favoriteCharacters.filter(
        (favId) => favId.data.id !== id
      );
      setFavoriteCharacters([...newFavoriteCharacters]);
    } else {
      setFavoriteIdList([...favoriteIdList, id]);
    }
  };

  return (
    <>
      {!isLoading && parsedData && (
        <CharacterSection
          id={parsedData.id}
          title={parsedData.name}
          img={parsedData.img}
          handleFavoriteClick={handleFavoriteClick}
          description={parsedData.description}
          isSelected={favoriteIdList.some((favId) => favId === parsedData.id)}
        />
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default DetailsCharacterSection;
