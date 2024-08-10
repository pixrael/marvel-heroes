import { useContext, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { AllCharactersContext } from '../../../../app-state/all-characters-context';
import SearchInput from '../../../ui-components/search-input/search-input';
import { getInputSearchDebounce } from '../../../../utils/utils';
import { INPUT_SEARCH_DEBOUNCE_TIME } from '../../../../constants';

function AllCharacterSearch() {
  const {
    searchData: { keywords, setKeywords, setDebounceKeywords },
    results,
    requestData: { isLoading, error },
  } = useContext(AllCharactersContext);

  const debounceFunc = useMemo(
    () =>
      debounce(
        getInputSearchDebounce(setDebounceKeywords),
        INPUT_SEARCH_DEBOUNCE_TIME
      ),
    [setDebounceKeywords]
  );

  const updateKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e?.target?.value);
    debounceFunc(e);
  };

  return (
    <SearchInput
      placeholder="SEARCH A CHARACTER..."
      value={keywords}
      handleChange={updateKeywords}
      showResults={!isLoading && !error && results && !!results.nResults}
      nResults={results.nResults}
    />
  );
}

export default AllCharacterSearch;
