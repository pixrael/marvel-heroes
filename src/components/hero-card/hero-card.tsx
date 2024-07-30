import iconHeart from '../../assets/imgs/iconHeart.svg';
import spider_delete from '../../assets/imgs/spider_delete.png';
import './hero-card.scss';

function HeroCard() {
  return (
    <div className="card">
      <div className="card-action-area">
        <img className="card-media" src={spider_delete} alt="green iguana" />
        <div className="card-content">
          <h5 className="card-title">Name</h5>
          <button className="iconbtn iconbtn--small" onClick={() => {}}>
            <img src={iconHeart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
