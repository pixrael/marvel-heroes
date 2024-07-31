import marvelLogo from '../../assets/imgs/Marvel logo.svg';
import iconHeart from '../../assets/imgs/iconHeart.svg';

function Header() {
  const handleLogoClick = () => {
    // console.log('logo clicked'); TODO
  };

  const handleFavoriteClick = () => {
    console.log('show favorites');
    //TODO;
  };

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
        <span className="favcounter__text">3</span>
      </div>
    </header>
  );
}

export default Header;
