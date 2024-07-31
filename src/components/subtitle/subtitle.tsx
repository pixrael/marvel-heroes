import './subtitle.scss';

function Subtitle({ text }: { text: string }) {
  return <h2 className="subtitle">{text}</h2>;
}

export default Subtitle;
