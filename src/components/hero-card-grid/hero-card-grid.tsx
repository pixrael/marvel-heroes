import HeroCard from '../hero-card/hero-card';
import './hero-card-grid.scss';

function HeroCardGrid({
  heroes,
}: {
  heroes: {
    id: number;
    name: string;
    img: string;
  }[];
}) {
  return (
    <div className="grid">
      {heroes.map(({ id, name, img }) => (
        <div key={id} className="grid__item">
          <HeroCard id={id} name={name} img={img} />
        </div>
      ))}
    </div>
  );
}

export default HeroCardGrid;
