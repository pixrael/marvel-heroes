import { useContext, useEffect } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { InputSearchContext } from '../../contexts/search-context';
/* import HeroCard from '../hero-card/hero-card'; */

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
          {data.results.map((characterData: any) => {
            return (
              <div key={characterData.id}>
                {characterData.name}
                <br />
              </div>
            );
          })}
        </>
      )}
      {/* <HeroCard /> */}
      {isLoading && <>Loading list of heros...</>}
      {isError && <>Error loading list</>}
    </>
  );
}

export default HeroList;
