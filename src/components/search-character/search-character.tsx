import { useContext, useMemo } from 'react';
import iconAmplifier from '../../assets/imgs/amplifier button.svg';
import { InputSearchContext } from '../../contexts/search-context';
import debounce from 'lodash.debounce';

function SearchCharacter() {
  const { keywords, setKeywords, setDebounceKeywords } =
    useContext(InputSearchContext);
  //const [debounceKeywords, setDebounceKeywords] = useState('');

  const debounceFunc = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setDebounceKeywords(event.target.value);
      }, 300),
    [setDebounceKeywords]
  );

  const handleAmplifierClick = () => {
    console.log('search for ', keywords);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log('search for ', keywords);
    }
  };

  const updateKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e?.target?.value);
    debounceFunc(e);
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
          onChange={updateKeywords}
          onKeyDown={handleKeyDown}
          value={keywords}
        />
      </div>
      {/* <p className="searchcontainer__numresults">20 results {keywords}</p>
      <p className="searchcontainer__numresults">
        debounce: {debounceKeywords}
      </p> */}
    </div>
  );
}

export default SearchCharacter;
