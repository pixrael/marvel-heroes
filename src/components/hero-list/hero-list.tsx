import { useEffect } from 'react';
import { useCharacters } from '../../hooks/useCharacters';

function HeroList({ fetchParams }: { fetchParams?: string }) {
  const { data, isLoading, isError } = useCharacters(fetchParams);

  useEffect(() => {}, [data, isLoading, isError]);

  return (
    <>
      List of heros:
      <br />
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
      {isLoading && <>Loading list of heros...</>}
      {isError && <>Error loading list</>}
    </>
  );
}

export default HeroList;
