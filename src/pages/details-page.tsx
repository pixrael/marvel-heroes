import { useContext } from 'react';
import { FavoriteContext } from '../contexts/favorite-context';
import { Link } from 'react-router-dom';

function DetailsPage() {
  const myValueFromContext = useContext(FavoriteContext);
  return (
    <>
      Details page! {myValueFromContext.count}
      <br />
      <button
        onClick={() => {
          myValueFromContext.setCount(myValueFromContext.count + 1);
        }}
      >
        Increase
      </button>
      <br />
      <Link to="/">Go to Home page</Link>
    </>
  );
}

export default DetailsPage;
