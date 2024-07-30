import { useCharacters } from '../../hooks/useCharacters';

function HeroList({ heroToSearch }: { heroToSearch?: string }) {
  const { data, isLoading, isError } = useCharacters(heroToSearch);

  return (
    <>
      List of heros:
      <br />
      keywordsToSearch:
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
