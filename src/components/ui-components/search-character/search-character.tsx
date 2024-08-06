import { useContext, useMemo } from 'react';
import {
  AllCharactersContextType,
  InputSearchContextType,
} from '../../../contexts/all-characters-context';
import debounce from 'lodash.debounce';
import SearchInput from '../search-input/search-input';

function SearchCharacter({
  searchContext,
  resultsContext,
}: {
  searchContext: React.Context<InputSearchContextType>;
  resultsContext: React.Context<AllCharactersContextType>;
}) {
  const { keywords, setKeywords, setDebounceKeywords } =
    useContext(searchContext);

  const {
    results,
    requestData: { isLoading, error },
  } = useContext(resultsContext);

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
