import { useContext, useEffect, useState } from 'react';
import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import HeroList from '../components/hero-list/hero-list';
import Subtitle from '../components/subtitle/subtitle';
import { FavoriteContext } from '../contexts/favorite-context';
import CharacterByIdFetcher from '../components/fetchers/character-by-id-fetcher';

function FavoritesPage() {
  const { favoriteIds } = useContext(FavoriteContext);
  const [characterData, setCharacterData] =
    useState<any>(undefined); /* TODO: move to parse hook */

  useEffect(() => {
    const results: any[] = [];

    favoriteIds.forEach((fid) => {
      if (!fid.data) return;

      const { id, name, thumbnail } = fid.data.results[0];
      results.push({
        id,
        name,
        thumbnail,
        requestData: fid.requestData,
      });
    });

    const characterData = {
      listData: { results },
      rootRequestData: { error: undefined, isLoading: false },
    };
    setCharacterData(characterData);
  }, [favoriteIds]);

  return (
    <>
      {favoriteIds &&
        favoriteIds.length &&
        favoriteIds.map((favId) => (
          <CharacterByIdFetcher key={favId.id} id={favId.id} />
        ))}

      <Header favoriteInteractive={false} />
      <div className="bodypage">
        <Subtitle text="Favorites" />
        <div className="gap36"></div>
        <SearchCharacter />
        {characterData && <HeroList characterData={characterData} />}
      </div>
    </>
  );
}

export default FavoritesPage;
