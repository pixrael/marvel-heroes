import { useContext, useMemo } from 'react';
import debounce from 'lodash.debounce';
import SearchInput from '../../../ui-components/search-input/search-input';
import { FavoriteContext } from '../../../../contexts/favorite-context';

function FavoriteCharacterSearch() {
  const {
    searchData: {
      keywords,
      setKeywords,
      debounceKeywords,
      setDebounceKeywords,
    },
    favoriteIdList,
    favoriteCharacters,
  } = useContext(FavoriteContext);

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
      showResults={!!favoriteCharacters.length}
      nResults={
        debounceKeywords.length
          ? favoriteCharacters.filter(({ id, name }) => {
              const isAFavoriteCharacter = favoriteIdList.some(
                (favoriteId) => favoriteId === id
              );

              const matchName = name
                .toLowerCase()
                .includes(debounceKeywords.toLowerCase());

              return isAFavoriteCharacter && matchName;
            }).length
          : favoriteCharacters.filter(({ id }) => {
              const isAFavoriteCharacter = favoriteIdList.some(
                (favoriteId) => favoriteId === id
              );
              return isAFavoriteCharacter;
            }).length
      }
    />
  );
}

export default FavoriteCharacterSearch;
