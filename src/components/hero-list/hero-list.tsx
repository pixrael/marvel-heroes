import HeroCardGrid, { HERO } from '../hero-card-grid/hero-card-grid';
import Loading from '../loading/loading';

function HeroList({
  characterData: {
    listData: { results },
    rootRequestData: { error, isLoading },
  },
}: {
  characterData: {
    listData: {
      results: HERO[];
    };
    rootRequestData: { error: any; isLoading: boolean };
  };
}) {
  return (
    <>
      {results && (
        <>
          <HeroCardGrid
            heroes={results.map(
              ({
                id,
                name,
                thumbnail: { path, extension },
                requestData,
              }: any) => {
                return {
                  id,
                  name,
                  img: `${path}.${extension}`,
                  requestData,
                };
              }
            )}
          />
        </>
      )}
      {isLoading && <Loading />}
      {error && <>Error loading list</>}
    </>
  );
}

export default HeroList;
