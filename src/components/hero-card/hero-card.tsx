import './hero-card.scss';

function HeroCard({
  id,
  name,
  img,
  isSelected,
  handleFavoriteClick,
  handleCardClick,
}: {
  id: number;
  name: string;
  img: string;
  isSelected: boolean;
  handleFavoriteClick: (id: number) => void;
  handleCardClick: (id: number) => void;
}) {
  return (
    <div className="herocard" onClick={() => handleCardClick(id)}>
      <img className="herocard__media" src={img} alt="marvel image" />
      <div className="herocard__content">
        <h5 className="herocard__title">{name}</h5>
        <button
          className="iconbtn iconbtn--smaller"
          onClick={(event) => {
            event.stopPropagation();
            handleFavoriteClick(id);
          }}
        >
          <span className={isSelected ? 'heartlineicon' : 'hearticon'}></span>
        </button>
      </div>
      <div className="corner"></div>
    </div>
  );
}

export default HeroCard;
