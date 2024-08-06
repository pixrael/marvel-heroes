import Header from '../components/ui-components/header/header';
import AllCharactersList from '../components/ui-components/all-characters-list/all-characters-list';
import AllCharacterSearch from '../components/page-components/all-character-page-components/all-characters-search/all-character-search';

function AllCharactersPage() {
  return (
    <>
      <Header logoInteractive={false} />
      <div className="bodypage">
        <AllCharacterSearch />
        <div className="gap36"></div>
        <AllCharactersList />
      </div>
    </>
  );
}

export default AllCharactersPage;
