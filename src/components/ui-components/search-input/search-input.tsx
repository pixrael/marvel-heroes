import './search-input.scss';
function SearchInput({
  value,
  handleChange,
  showResults,
  nResults,
}: {
  value: string;
  handleChange: (evt) => void;
  showResults: boolean;
  nResults: number;
}) {
  return (
    <div>
      <div className="search">
        <button className="iconbtn iconbtn--small">
          <span className="amplifiericon "></span>
        </button>
        <input
          type="text"
          className="search__searchinput"
          placeholder="SEARCH A CHARACTER..."
          onChange={handleChange}
          value={value}
        />
      </div>
      {showResults && <p className="searchnumresults">{nResults} results</p>}
    </div>
  );
}

export default SearchInput;
