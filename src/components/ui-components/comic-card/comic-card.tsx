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
    <div id={id + ''} className="comiccard">
      <img src={img} alt={title} className="comiccard__image" />
      <div className="comiccard__title">{title}</div>
      <div className="comiccard__year">{year}</div>
    </div>
  );
}

export default ComicCard;
