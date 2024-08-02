import { useContext } from 'react';
import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import HeroList from '../components/hero-list/hero-list';
import { InputSearchContext } from '../contexts/search-context';
import AllCharactersFetcher from '../components/fetchers/all-character-fetcher';
import Loading from '../components/loading/loading';

function CharacterListPage() {
  const {
    results: { data },
    requestData: { error, isLoading },
  } = useContext(InputSearchContext);

  return (
    <>
      <AllCharactersFetcher />
      <Header logoInteractive={false} />
      <div className="bodypage">
        <SearchCharacter />
        {data && data.length && (
          <HeroList
            characterData={{
              listData: {
                results: data.map((d) => ({
                  id: d.id,
                  name: d.name,
                  thumbnail: d.thumbnail,
                  requestData: {
                    error,
                    isLoading,
                  },
                })),
              },
              rootRequestData: { error, isLoading },
            }}
          />
        )}
        {isLoading && <Loading />}
      </div>
    </>
  );
}

export default CharacterListPage;
