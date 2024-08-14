import Header from '../components/header/header';
import AllCharactersList from '../components/page-components/all-character-page-components/all-characters-list/all-characters-list';
import AllCharacterSearch from '../components/page-components/all-character-page-components/all-characters-search/all-character-search';
import LimitFetchResultsControl from '../components/setup-app/limit-fetch-results-control/limit-fetch-results-control';

function AllCharactersPage() {
  return (
    <>
      <Header logoInteractive={false} />
      <div className="bodypage">
        <AllCharacterSearch />
        <div className="gap36"></div>
        <AllCharactersList />
      </div>
      <div className="footerpage">
        <LimitFetchResultsControl />
      </div>
    </>
  );
}

export default AllCharactersPage;
