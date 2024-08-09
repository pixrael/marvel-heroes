import { useNavigate } from 'react-router-dom';
import './comic-card.scss';
import { useContext } from 'react';
import { FavoriteContext } from '../../../contexts/favorite-context';

function ComicCard({
  id,
  title,
  img,
  year,
}: {
  id: number;
  title: string;
  img: string;
  year: string;
}) {
  return (
    <>
      {id} - {title} - {year}
    </>
  );

  /*  return (
    <div className="herocard clickeable" onClick={() => handleCardClick(id)}>
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
  ); */
}

export default ComicCard;
