import { useContext, useEffect } from 'react';
import { useFetchAllCharacters } from '../../hooks/useFetchAllCharacters';
import { InputSearchContext } from '../../contexts/search-context';

function AllCharactersFetcher() {
  const { debounceKeywords, setResults, setRequestData } =
    useContext(InputSearchContext);

  const { data, isLoading, error } = useFetchAllCharacters(debounceKeywords);

  useEffect(() => {
    if (data && data.count) {
      const result = {
        nResults: data.count,
        data: data.results,
      };
      setResults(result);
    }

    setRequestData({
      error,
      isLoading,
    });
  }, [data, setResults, isLoading, error, setRequestData]);

  return <></>;
}

export default AllCharactersFetcher;
