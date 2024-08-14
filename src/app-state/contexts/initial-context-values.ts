export const SetupAppInitialValue = {
  limitTo5Results: false,
  setLimitTo5Results: () => false,
};

export const FavoriteInitialValue = {
  favoriteIdList: [],
  setFavoriteIdList: () => [],
  favoriteCharacters: [],
  setFavoriteCharacters: () => [],
  searchData: {
    keywords: '',
    setKeywords: () => '',
    debounceKeywords: '',
    setDebounceKeywords: () => '',
  },
};
