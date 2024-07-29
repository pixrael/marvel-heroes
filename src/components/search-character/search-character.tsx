import iconAmplifier from '../../assets/imgs/amplifier button.svg';

function SearchCharacter() {
  const handleAmplifierClick = () => {
    // console.log('logo clicked'); TODO
  };
  return (
    <div className="searchcontainer">
      <div className="search">
        <button className="iconbtn" onClick={handleAmplifierClick}>
          <img className="iconbtn__img" src={iconAmplifier} />
        </button>
        <input
          type="text"
          className="search__searchinput"
          placeholder="SEARCH A CHARACTER..."
        />
      </div>
      <p className="searchcontainer__numresults">20 results</p>
    </div>
  );
}

export default SearchCharacter;
