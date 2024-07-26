import { useContext } from 'react';
import { FavoriteContext } from '../contexts/favorite-context';
import { Link } from 'react-router-dom';

function CharacterListPage() {
  const myValueFromContext = useContext(FavoriteContext);
  return (
    <>
      Character List page!! {myValueFromContext.count}
      <br />
      <button
        onClick={() => {
          myValueFromContext.setCount(myValueFromContext.count + 1);
        }}
      >
        Increase
      </button>
      <br />
      <Link to="/details/1">Go to Details page</Link>
    </>
  );
}

export default CharacterListPage;
