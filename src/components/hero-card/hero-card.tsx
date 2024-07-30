import iconHeart from '../../assets/imgs/iconHeart.svg';

function HeroCard({
  id,
  name,
  img,
}: {
  id: number;
  name: string;
  img: string;
}) {
  return (
    <div className="herocard">
      <div className="herocard__action-area">
        <img className="herocard__media" src={img} alt="green iguana" />
        <div className="herocard__content">
          <h5 className="herocard__title">{name}</h5>
          <button
            className="iconbtn iconbtn--small"
            onClick={() => {
              console.log(`clicked ${id}`);
            }}
          >
            <img src={iconHeart} alt="Heart icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
