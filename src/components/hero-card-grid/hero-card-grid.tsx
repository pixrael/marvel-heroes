import { useContext } from 'react';
import HeroCard from '../hero-card/hero-card';
import './hero-card-grid.scss';
import { FavoriteContext } from '../../contexts/favorite-context';

function HeroCardGrid({
  heroes,
}: {
  heroes: {
    id: number;
    name: string;
    img: string;
  }[];
}) {
  const { favoriteIds, setFavoriteIds } = useContext(FavoriteContext);

  const handleFavoriteClick = (id: number) => {
    const already = favoriteIds.some((v) => v === id);

    if (already) {
      const newFavoriteIds = favoriteIds.filter((v) => v !== id);
      setFavoriteIds(newFavoriteIds);
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  return (
    <div className="grid">
      {heroes.map(({ id, name, img }) => (
        <div key={id} className="grid__item">
          <HeroCard
            id={id}
            name={name}
            img={img}
            handleFavoriteClick={handleFavoriteClick}
          />
        </div>
      ))}
    </div>
  );
}

export default HeroCardGrid;
