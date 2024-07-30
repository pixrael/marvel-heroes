import iconHeart from '../../assets/imgs/iconHeart.svg';
import spider_delete from '../../assets/imgs/spider_delete.png';
import './hero-card.scss';

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card__action-area">
        <img
          className="hero-card__media"
          src={spider_delete}
          alt="green iguana"
        />
        <div className="hero-card__content">
          <h5 className="hero-card__title">Name</h5>
          <button className="iconbtn iconbtn--small" onClick={() => {}}>
            <img src={iconHeart} alt="Heart icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
