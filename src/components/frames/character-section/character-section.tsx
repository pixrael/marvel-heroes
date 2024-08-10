import './character-section.scss';

function CharacterSection({ children }: { children: any }) {
  return (
    <div className="section">
      <div className="bodysection">{children}</div>
    </div>
  );
}

export default CharacterSection;
