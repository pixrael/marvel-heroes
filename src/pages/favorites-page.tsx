import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import Subtitle from '../components/subtitle/subtitle';
import FavoriteCharacterList from '../components/favorite-character-list/favorite-character-list';

function FavoritesPage() {
  return (
    <>
      <Header favoriteInteractive={false} />
      <div className="bodypage">
        <Subtitle text="Favorites" />
        <div className="gap36"></div>
        <SearchCharacter />
        <FavoriteCharacterList />
      </div>
    </>
  );
}

export default FavoritesPage;
