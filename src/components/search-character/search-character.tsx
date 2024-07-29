import { useContext } from 'react';
import iconAmplifier from '../../assets/imgs/amplifier button.svg';
import { InputSearchContext } from '../../contexts/search-context';

function SearchCharacter() {
  const { keywords, setKeywords } = useContext(InputSearchContext);

  const handleAmplifierClick = () => {
    console.log('search for ', keywords);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log('search for ', keywords);
    }
  };

  const updateKeywords = (e) => setKeywords(e?.target?.value);

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
          onChange={updateKeywords}
          onKeyDown={handleKeyDown}
          value={keywords}
        />
      </div>
      <p className="searchcontainer__numresults">20 results {keywords}</p>
    </div>
  );
}

export default SearchCharacter;
