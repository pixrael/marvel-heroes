import { useContext } from 'react';
import HeroCard from '../hero-card/hero-card';
import { FavoriteContext } from '../../contexts/favorite-context';
import Grid from '../grid/grid';
import GridItem from '../grid/grid-item';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export interface HERO {
  id: number;
  name: string;
  img: string;
}

function HeroCardGrid({ heroes }: { heroes: HERO[] }) {
  const { favoriteIds, setFavoriteIds } = useContext(FavoriteContext);
  const navigate = useNavigate();

  const handleFavoriteClick = (id: number) => {
    const already = favoriteIds.some((v) => v.id === id);

    if (already) {
      const newFavoriteIds = favoriteIds.filter((v) => v.id !== id);
      setFavoriteIds(newFavoriteIds);
    } else {
      setFavoriteIds([
        ...favoriteIds,
        { id, data: undefined, requestData: undefined },
      ]);
    }
  };

  const handleCardClick = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <Grid>
      {heroes.map(({ id, name, img }) => (
        <GridItem key={id} id={id}>
          <HeroCard
            id={id}
            name={name}
            img={img}
            isSelected={favoriteIds.some((favId) => favId.id === id)}
            handleFavoriteClick={handleFavoriteClick}
            handleCardClick={handleCardClick}
          />
        </GridItem>
      ))}
    </Grid>
  );
}

export default HeroCardGrid;
