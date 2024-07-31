import { useContext } from 'react';
import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import HeroList from '../components/hero-list/hero-list';
import { InputSearchContext } from '../contexts/search-context';
import Subtitle from '../components/subtitle/subtitle';

function FavoritesPage() {
  const { debounceKeywords } = useContext(InputSearchContext);

  return (
    <>
      <Header favoriteInteractive={false} />
      <div className="bodypage">
        <Subtitle text="Favorites" />
        <div className="gap36"></div>
        <SearchCharacter />
        <HeroList heroToSearch={debounceKeywords} />
      </div>
    </>
  );
}

export default FavoritesPage;
