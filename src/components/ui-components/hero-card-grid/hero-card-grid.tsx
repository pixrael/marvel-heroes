import { useContext } from 'react';
import { FavoriteContext } from '../../contexts/favorite-context';
import Grid from '../../frames/grid/grid';
import GridItem from '../../frames/grid/grid-item';
import Loading from '../loading/loading';
import CharacterCard from '../character-card/character-card';

export interface HERO {
  id: number;
  name: string;
  img: string;
  requestData: {
    error: any;
    isLoading: boolean;
  };
}

function HeroCardGrid({ heroes }: { heroes: HERO[] }) {
  const { favoriteIdList } = useContext(FavoriteContext);

  return (
    <Grid>
      {heroes.map(({ id, name, img, requestData: { error, isLoading } }) => (
        <GridItem key={id} id={id}>
          {!error && !isLoading && (
            <CharacterCard
              id={id}
              name={name}
              img={img}
              isSelected={favoriteIdList.some((favId) => favId === id)}
            />
          )}
          {isLoading && <Loading />}
        </GridItem>
      ))}
    </Grid>
  );
}

export default HeroCardGrid;
