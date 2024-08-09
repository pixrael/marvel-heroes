import Grid from '../../../ui-components/grid/grid';
import Loading from '../../../ui-components/loading/loading';
import ComicCard from '../../../ui-components/comic-card/comic-card';
import { useFetchComicsByCharacterId } from '../../../../hooks/useFetchComicsByCharacterId';
import { useParams } from 'react-router-dom';
import { useFetchComicsByCharacterIdParse } from '../../../../hooks/useFetchComicsByCharacterIdParse';
import { useSaveComicByCharacterId } from '../../../../hooks/useSaveComicsByCharacterId';

function DetailsCharactersComicList() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchComicsByCharacterId(
    id ? +id : undefined
  );

  const { parsedData } = useFetchComicsByCharacterIdParse(data);
  useSaveComicByCharacterId(parsedData);

  return (
    <>
      {parsedData && (
        <Grid>
          {parsedData.map(({ id, title, img, year }) => (
            <ComicCard key={id} id={id} title={title} img={img} year={year} />
          ))}
        </Grid>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default DetailsCharactersComicList;
