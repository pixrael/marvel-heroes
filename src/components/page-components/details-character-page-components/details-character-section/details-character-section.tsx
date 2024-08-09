import CharacterSection from '../../../ui-components/character-section/character-section';
import { useFetchCharacterById } from '../../../../hooks/useFetchCharacterById';
import { useParams } from 'react-router-dom';

import { useFetchCharacterByIdParse } from '../../../../hooks/useFetchCharacterByIdParse';
import { useSaveCharacterDetails } from '../../../../hooks/useSaveCharacterDetails';
import Loading from '../../../ui-components/loading/loading';

function DetailsCharacterSection() {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchCharacterById(id ? +id : 0);
  const { parsedData } = useFetchCharacterByIdParse(data);
  useSaveCharacterDetails(parsedData);

  return (
    <>
      {!isLoading && parsedData && (
        <CharacterSection
          id={parsedData.id}
          title={parsedData.name}
          img={parsedData.img}
          handleFavoriteClick={(id: number) => console.log('favorite ', id)}
          description={parsedData.description}
        />
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default DetailsCharacterSection;
