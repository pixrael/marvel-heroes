import { useContext } from 'react';
import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import HeroList from '../components/hero-list/hero-list';
import { InputSearchContext } from '../contexts/search-context';
import AllCharactersFetcher from '../components/fetchers/all-character-fetcher';

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
        <HeroList
          characterData={{
            listData: { results: data, requestData: { error, isLoading } },
            rootRequestData: { error, isLoading },
          }}
        />
      </div>
    </>
  );
}

export default CharacterListPage;
