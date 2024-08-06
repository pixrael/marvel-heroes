import FavoriteCharacterSearch from '../components/page-components/favorite-character-page-components/favorite-character-search/favorite-character-search';
import FavoriteCharacterList from '../components/ui-components/favorite-character-list/favorite-character-list';
import Header from '../components/ui-components/header/header';
import Subtitle from '../components/ui-components/subtitle/subtitle';

function FavoritesPage() {
  return (
    <>
      <Header favoriteInteractive={false} />
      <div className="bodypage">
        <Subtitle text="Favorites" />
        <div className="gap36"></div>
        <FavoriteCharacterSearch />
        <FavoriteCharacterList />
      </div>
    </>
  );
}

export default FavoritesPage;
