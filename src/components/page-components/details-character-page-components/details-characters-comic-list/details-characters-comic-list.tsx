import { useParams } from 'react-router-dom';
import Loading from '../../../ui-components/loading/loading';
import ComicCard from '../../../ui-components/comic-card/comic-card';
import { useFetchComicsByCharacterId } from '../../../../hooks/details-characters/useFetchComicsByCharacterId';
import { useFetchComicsByCharacterIdParse } from '../../../../hooks/details-characters/useFetchComicsByCharacterIdParse';

import OneRowGrid from '../../../frames/one-row-grid/one-row-grid';
import { useSaveComicByCharacterId } from '../../../../hooks/details-characters/useSaveComicsByCharacterId';

function DetailsCharactersComicList() {
  const { id } = useParams();
  const { data, isLoading } = useFetchComicsByCharacterId(id ? +id : undefined);

  const { parsedData } = useFetchComicsByCharacterIdParse(data);
  useSaveComicByCharacterId(parsedData);

  return (
    <>
      {parsedData && (
        <OneRowGrid>
          {[...parsedData].map(({ id, title, img, year }) => (
            <ComicCard key={id} id={id} title={title} img={img} year={year} />
          ))}
        </OneRowGrid>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default DetailsCharactersComicList;
