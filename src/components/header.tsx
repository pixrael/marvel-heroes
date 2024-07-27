import './header.scss';
import marvelLogo from '../assets/imgs/Marvel logo.svg';
import iconHeart from '../assets/imgs/iconHeart.svg';

function Header() {
  const handleLogoClick = () => {
    // console.log('HELLO'); TODO
  };

  const handleFavoriteClick = () => {
    //setCount(count + 1);
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={marvelLogo} />
      </div>
      <div className="favcounter">
        <button className="iconbtn" onClick={handleFavoriteClick}>
          <img src={iconHeart} />
        </button>
        <span className="favcounter__text">3</span>
      </div>
    </header>
  );
}

export default Header;
