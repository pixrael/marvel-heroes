/*TODO componetize like search-character */
import { useContext, useMemo } from 'react';
import './search-favorite-character.scss';
import { InputSearchContext } from '../../contexts/search-context';
import debounce from 'lodash.debounce';

function SearchCharacter() {
  const {
    keywords,
    setKeywords,
    setDebounceKeywords,
    results,
    requestData: { isLoading, error },
  } = useContext(InputSearchContext);

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
    <div>
      <div className="search">
        <button className="iconbtn iconbtn--small">
          <span className="amplifiericon "></span>
        </button>
        <input
          type="text"
          className="search__searchinput"
          placeholder="SEARCH A CHARACTER..."
          onChange={updateKeywords}
          value={keywords}
        />
      </div>
      {!isLoading && !error && results && results.nResults && (
        <p className="searchnumresults">{results.nResults} results</p>
      )}
    </div>
  );
}

export default SearchCharacter;
