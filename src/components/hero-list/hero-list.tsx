import HeroCardGrid from '../hero-card-grid/hero-card-grid';
import Loading from '../loading/loading';

function HeroList({
  characterData: {
    results: { data },
    requestData: { error, isLoading },
  },
}: {
  characterData: {
    results: { data: any };
    requestData: { error: any; isLoading: boolean };
  };
}) {
  return (
    <>
      {data && (
        <>
          <HeroCardGrid
            heroes={data.map(
              ({ id, name, thumbnail: { path, extension } }: any) => {
                return {
                  id,
                  name,
                  img: `${path}.${extension}`,
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
