import { useContext, useEffect } from 'react';
import marvelLogo from '../../assets/imgs/Marvel logo.svg';
import './header.scss';
import { FavoriteContext } from '../../contexts/favorite-context';

function Header() {
  const handleLogoClick = () => {
    // console.log('logo clicked'); TODO
  };

  const handleFavoriteClick = () => {
    console.log('show favorites');
    //TODO;
  };

  const { favoriteIds } = useContext(FavoriteContext);

  useEffect(() => {
    console.log(favoriteIds);
  }, [favoriteIds]);

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={marvelLogo} />
      </div>
      <div className="favcounter">
        <button
          className="iconbtn iconbtn--medium"
          onClick={handleFavoriteClick}
        >
          <span className="hearticon"></span>
        </button>
        <span className="favcounter__text">{favoriteIds.length}</span>
      </div>
    </header>
  );
}

export default Header;
