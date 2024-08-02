import { useContext, useEffect } from 'react';
import marvelLogo from '../../assets/imgs/Marvel logo.svg';
import './header.scss';
import { FavoriteContext } from '../../contexts/favorite-context';
import { useNavigate } from 'react-router-dom';

function Header({
  logoInteractive = true,
  favoriteInteractive = true,
}: {
  logoInteractive?: boolean;
  favoriteInteractive?: boolean;
}) {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    if (logoInteractive) navigate(`/`);
  };

  const handleFavoriteClick = () => {
    if (favoriteInteractive) navigate(`/favorites`);
  };

  const { favoriteIdList } = useContext(FavoriteContext);

  return (
    <header className="header">
      <div
        className={`logo ${logoInteractive ? 'clickeable' : ''}`}
        onClick={handleLogoClick}
      >
        <img src={marvelLogo} />
      </div>
      <div className="favcounter">
        <button
          className="iconbtn iconbtn--medium"
          onClick={handleFavoriteClick}
        >
          <span className="hearticon"></span>
        </button>
        <span className="favcounter__text">{favoriteIdList.length}</span>
      </div>
    </header>
  );
}

export default Header;
