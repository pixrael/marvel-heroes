import { useContext, useMemo } from 'react';
import debounce from 'lodash.debounce';
import SearchInput from '../../../ui-components/search-input/search-input';
import { FavoriteContext } from '../../../../contexts/favorite-context';
import { getInputSearchDebounce } from '../../../../utils/utils';
import { INPUT_SEARCH_DEBOUNCE_TIME } from '../../../../constants';

function FavoriteCharacterSearch() {
  const {
    searchData: {
      keywords,
      setKeywords,
      debounceKeywords,
      setDebounceKeywords,
    },
    favoriteCharacters,
  } = useContext(FavoriteContext);

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
      placeholder="SEARCH CHARACTER IN FAVORITES..."
      value={keywords}
      handleChange={updateKeywords}
      showResults={!!favoriteCharacters.length}
      nResults={
        favoriteCharacters.filter((character) => {
          if (character) {
            return character.data.name.includes(debounceKeywords);
          }
          return true;
        }).length
      }
    />
  );
}

export default FavoriteCharacterSearch;
