import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoriteContext } from '../../../../contexts/favorite-context';
import { useFetchCharacterById } from '../../../../hooks/favorite-characters/useFetchCharacterById';
import { useFetchCharacterByIdParse } from '../../../../hooks/favorite-characters/useFetchCharacterByIdParse';

import Loading from '../../../ui-components/loading/loading';
import CharacterSection from '../../../frames/character-section/character-section';
import CharacterCardDetails from '../../../ui-components/character-card-details/character-card-details';
import { useSaveCharacterDetails } from '../../../../hooks/details-characters/useSaveCharacterDetails';

function DetailsCharacterSection() {
  const { id } = useParams();

  const { data, isLoading } = useFetchCharacterById(id ? +id : 0);
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
        <CharacterSection>
          <CharacterCardDetails
            id={parsedData.id}
            name={parsedData.name}
            img={parsedData.img}
            handleFavoriteClick={handleFavoriteClick}
            description={parsedData.description}
            isSelected={favoriteIdList.some((favId) => favId === parsedData.id)}
          />
        </CharacterSection>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default DetailsCharacterSection;
