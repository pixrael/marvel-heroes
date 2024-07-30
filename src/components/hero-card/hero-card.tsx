import iconHeart from '../../assets/imgs/iconHeart.svg';
import spider_delete from '../../assets/imgs/spider_delete.png';

function HeroCard() {
  return (
    <div className="herocard">
      <div className="herocard__action-area">
        <img
          className="herocard__media"
          src={spider_delete}
          alt="green iguana"
        />
        <div className="herocard__content">
          <h5 className="herocard__title">Name</h5>
          <button className="iconbtn iconbtn--small" onClick={() => {}}>
            <img src={iconHeart} alt="Heart icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
