import FavoriteCharacterList from '../components/ui-components/favorite-character-list/favorite-character-list';
import Header from '../components/ui-components/header/header';
import SearchCharacter from '../components/ui-components/search-character/search-character';
import Subtitle from '../components/ui-components/subtitle/subtitle';

function FavoritesPage() {
  return (
    <>
      <Header favoriteInteractive={false} />
      <div className="bodypage">
        <Subtitle text="Favorites" />
        <div className="gap36"></div>
        {/* <SearchCharacter /> */}
        <FavoriteCharacterList />
      </div>
    </>
  );
}

export default FavoritesPage;
