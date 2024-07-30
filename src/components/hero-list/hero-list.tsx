import { useContext, useEffect } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { InputSearchContext } from '../../contexts/search-context';
import HeroCardGrid from '../hero-card-grid/hero-card-grid';

function HeroList({ heroToSearch }: { heroToSearch?: string }) {
  const { data, isLoading, isError } = useCharacters(heroToSearch);
  const { setResults, setIsLoading } = useContext(InputSearchContext);

  useEffect(() => {
    if (data && data.count) {
      const result = {
        nResults: data.count,
        data: data.results,
      };
      setResults(result);
    }

    setIsLoading(isLoading);
  }, [data, setResults, isLoading, setIsLoading]);

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
          ;
        </>
      )}
      {isLoading && <>Loading list of heros...</>}
      {isError && <>Error loading list</>}
    </>
  );
}

export default HeroList;
