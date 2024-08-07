import Header from '../components/ui-components/header/header';
import AllCharactersList from '../components/page-components/all-character-page-components/all-characters-list/all-characters-list';
import AllCharacterSearch from '../components/page-components/all-character-page-components/all-characters-search/all-character-search';
import DetailsCharacterSection from '../components/page-components/details-character-page-components/details-character-section/details-character-section';

function DetailsCharactersPage() {
  return (
    <>
      <Header logoInteractive={true} showBorder={true} />
      <DetailsCharacterSection />
      <div className="bodypage">
        {/* <AllCharacterSearch />
        <div className="gap36"></div>
        <AllCharactersList /> */}
      </div>
    </>
  );
}

export default DetailsCharactersPage;
