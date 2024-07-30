import { useContext, useEffect } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { InputSearchContext } from '../../contexts/search-context';
import HeroCardGrid from '../hero-card-grid/hero-card-grid';
import Loading from '../loading/loading';

function HeroList({ heroToSearch }: { heroToSearch?: string }) {
  const { data, isLoading, error } = useCharacters(heroToSearch);
  const { setResults, setRequestData } = useContext(InputSearchContext);

  useEffect(() => {
    if (data && data.count) {
      const result = {
        nResults: data.count,
        data: data.results,
      };
      setResults(result);
    }

    setRequestData({
      error,
      isLoading,
    });
  }, [data, setResults, isLoading, error, setRequestData]);

  return (
    <>
      {data?.results && (
        <>
          <HeroCardGrid
            heroes={data.results.map(
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
