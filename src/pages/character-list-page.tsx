import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import AllCharactersList from '../components/all-characters-list/all-characters-list';

function CharacterListPage() {
  return (
    <>
      <Header logoInteractive={false} />
      <div className="bodypage">
        <SearchCharacter />
        <AllCharactersList />
      </div>
    </>
  );
}

export default CharacterListPage;
