import { useContext, useMemo } from 'react';
import { AllCharactersContext } from '../../../../contexts/all-characters-context';
import debounce from 'lodash.debounce';
import SearchInput from '../../../ui-components/search-input/search-input';

function AllCharacterSearch() {
  const {
    searchData: { keywords, setKeywords, setDebounceKeywords },
    results,
    requestData: { isLoading, error },
  } = useContext(AllCharactersContext);

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
      handleChange={updateKeywords}
      showResults={!isLoading && !error && results && !!results.nResults}
      nResults={results.nResults}
    />
  );
}

export default AllCharacterSearch;
