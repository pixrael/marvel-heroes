import { useContext, useMemo } from 'react';
import iconAmplifier from '../../assets/imgs/amplifier button.svg';
import { InputSearchContext } from '../../contexts/search-context';
import debounce from 'lodash.debounce';

function SearchCharacter() {
  const { keywords, setKeywords, setDebounceKeywords, results, isLoading } =
    useContext(InputSearchContext);

  const debounceFunc = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setDebounceKeywords(event.target.value);
      }, 300),
    [setDebounceKeywords]
  );

  const updateKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e?.target?.value);
    debounceFunc(e);
  };

  return (
    <div className="searchcontainer">
      <div className="search">
        <button className="iconbtn">
          <img className="iconbtn__img" src={iconAmplifier} />
        </button>
        <input
          type="text"
          className="search__searchinput"
          placeholder="SEARCH A CHARACTER..."
          onChange={updateKeywords}
          value={keywords}
        />
      </div>
      {!isLoading && results && results.nResults && (
        <p className="searchcontainer__numresults">
          {results.nResults} results
        </p>
      )}
    </div>
  );
}

export default SearchCharacter;
