import iconAmplifier from '../../assets/imgs/amplifier button.svg';
import './search-character.scss';

function SearchCharacter() {
  const handleAmplifierClick = () => {
    // console.log('logo clicked'); TODO
  };
  return (
    <div className="searchcontainer">
      <button className="iconbtn" onClick={handleAmplifierClick}>
        <img className="iconbtn__img" src={iconAmplifier} />
      </button>
      <input
        type="text"
        className="searchcontainer__searchinput"
        placeholder="SEARCH A CHARACTER..."
      />
    </div>
  );
}

export default SearchCharacter;
