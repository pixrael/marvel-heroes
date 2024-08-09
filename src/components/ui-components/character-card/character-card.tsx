import { useNavigate } from 'react-router-dom';
import './character-card.scss';
import { useContext } from 'react';
import { FavoriteContext } from '../../../contexts/favorite-context';

function CharacterCard({
  id,
  name,
  img,
  isSelected,
}: {
  id: number;
  name: string;
  img: string;
  isSelected: boolean;
}) {
  const navigate = useNavigate();
  const { favoriteIdList, setFavoriteIdList } = useContext(FavoriteContext);
  const handleFavoriteClick = (id: number) => {
    const already = favoriteIdList.some((favId) => favId === id);

    if (already) {
      const newFavoriteIdList = favoriteIdList.filter((favId) => favId !== id);
      setFavoriteIdList(newFavoriteIdList);
    } else {
      setFavoriteIdList([...favoriteIdList, id]);
    }
  };

  const handleCardClick = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
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
  );
}

export default CharacterCard;
