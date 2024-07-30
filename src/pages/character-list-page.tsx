import { useContext } from 'react';
import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import HeroList from '../components/hero-list/hero-list';
import { InputSearchContext } from '../contexts/search-context';

function CharacterListPage() {
  const { debounceKeywords } = useContext(InputSearchContext);

  return (
    <>
      <Header />
      <div className="bodypage">
        <SearchCharacter />
        <HeroList heroToSearch={debounceKeywords} />
      </div>
    </>
  );
}

export default CharacterListPage;
