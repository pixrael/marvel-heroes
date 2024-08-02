import { useContext, useEffect, useMemo } from 'react';
import { InputSearchContext } from '../../contexts/search-context';
import debounce from 'lodash.debounce';
import SearchInput from '../search-input/search-input';

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
    <SearchInput
      value={keywords}
      showResults={true}
      handleChange={updateKeywords}
      nResults={results.nResults}
    />
  );
}

export default SearchCharacter;
