import { useContext, useEffect } from 'react';
import { FavoriteContext } from '../contexts/favorite-context';
import { Link } from 'react-router-dom';
import Header from '../components/header/header';
import SearchCharacter from '../components/search-character/search-character';
import HeroList from '../components/hero-list/hero-list';

function CharacterListPage() {
  /* const myValueFromContext = useContext(FavoriteContext); */
  console.log('CHARACTERLIST PAGE');

  return (
    <>
      <Header />
      <div className="bodypage">
        <SearchCharacter />
        <HeroList fetchParams="nameStartsWith=Wol" />
      </div>
      {/*       Character List page!! {myValueFromContext.count}
      <br />
      <button
        onClick={() => {
          myValueFromContext.setCount(myValueFromContext.count + 1);
        }}
      >
        Increase
      </button>
      <br />
      <Link to="/details/1">Go to Details page</Link> */}
    </>
  );
}

export default CharacterListPage;
