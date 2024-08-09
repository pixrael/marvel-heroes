import './comic-card.scss';

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
    <div className="stacked-card">
      <img src={img} alt={title} className="stacked-card__image" />
      <div className="stacked-card__title">{title}</div>
      <div className="stacked-card__year">{year}</div>
    </div>
  );
}

export default ComicCard;
