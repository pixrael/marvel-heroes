import { useParams } from 'react-router-dom';
import Loading from '../../../ui-components/loading/loading';
import ComicCard from '../../../ui-components/comic-card/comic-card';
import { useFetchComicsByCharacterId } from '../../../../hooks/useFetchComicsByCharacterId';
import { useFetchComicsByCharacterIdParse } from '../../../../hooks/useFetchComicsByCharacterIdParse';
import { useSaveComicByCharacterId } from '../../../../hooks/useSaveComicsByCharacterId';
import OneRowGrid from '../../../ui-components/one-row-grid/one-row-grid';

function DetailsCharactersComicList() {
  const { id } = useParams();
  const { data, isLoading } = useFetchComicsByCharacterId(id ? +id : undefined);

  const { parsedData } = useFetchComicsByCharacterIdParse(data);
  useSaveComicByCharacterId(parsedData);

  return (
    <>
      {parsedData && (
        <OneRowGrid>
          {[...parsedData, ...parsedData, ...parsedData].map(
            ({ id, title, img, year }) => (
              <ComicCard key={id} id={id} title={title} img={img} year={year} />
            )
          )}
        </OneRowGrid>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default DetailsCharactersComicList;
