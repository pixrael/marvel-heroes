import { useContext, useEffect, useState } from 'react';
import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import HeroList from '../components/hero-list/hero-list';
import Subtitle from '../components/subtitle/subtitle';
import { FavoriteContext } from '../contexts/favorite-context';
import CharacterByIdFetcher from '../components/fetchers/character-by-id-fetcher';

function FavoritesPage() {
  const { favoriteIds } = useContext(FavoriteContext);

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

        {/*  <HeroList
          characterData={{
            results: { data },
            requestData: { error, isLoading },
          }}
        /> */}
      </div>
    </>
  );
}

export default FavoritesPage;
