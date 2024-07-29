import './search-character.scss';

function SearchCharacter() {
  return (
    <div className="search-container">
      <i className="search-icon"></i>
      <input
        type="text"
        className="search-input"
        placeholder="SEARCH A CHARACTER..."
      />
    </div>
  );
}

export default SearchCharacter;
