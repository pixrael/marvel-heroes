import './hero-card.scss';

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
      <img className="herocard__media" src={img} alt="marvel image" />
      <div className="herocard__content">
        <h5 className="herocard__title">{name}</h5>
        <button
          className="iconbtn iconbtn--smaller"
          onClick={() => {
            console.log(`clicked ${id}`);
          }}
        >
          <span className="hearticon"></span>
        </button>
      </div>
      <div className="corner"></div>
    </div>
  );
}

export default HeroCard;
