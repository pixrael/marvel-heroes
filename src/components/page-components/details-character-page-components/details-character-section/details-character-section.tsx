import CharacterSection from '../../../ui-components/character-section/character-section';

function DetailsCharacterSection() {
  return (
    <CharacterSection
      id={1}
      title="Super HERO"
      img="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
      handleFavoriteClick={(id: number) => console.log('favorite ', id)}
      description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a wider card with supporting text
                    below as a natural lead-in to additional content."
    />
  );
}

export default DetailsCharacterSection;
