import Header from '../components/header/header';
import DetailsCharacterSection from '../components/page-components/details-character-page-components/details-character-section/details-character-section';
import DetailsCharactersComicList from '../components/page-components/details-character-page-components/details-characters-comic-list/details-characters-comic-list';
import LimitFetchResultsControl from '../components/setup-app/limit-fetch-results-control/limit-fetch-results-control';
import Subtitle from '../components/ui-components/subtitle/subtitle';

function DetailsCharactersPage() {
  return (
    <>
      <Header logoInteractive={true} showBorder={true} />
      <DetailsCharacterSection />
      <div className="bodypage">
        <Subtitle text="Comics" />
        <div className="gap24"></div>
        <DetailsCharactersComicList />
      </div>
      <div className="footerpage">
        <LimitFetchResultsControl />
      </div>
    </>
  );
}

export default DetailsCharactersPage;
