import './search-input.scss';
function SearchInput({
  value,
  handleChange,
  showResults,
  nResults,
  placeholder,
}: {
  value: string;
  handleChange: (evt) => void;
  showResults: boolean;
  nResults: number;
  placeholder: string;
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
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      </div>
      {showResults && <p className="searchnumresults">{nResults} results</p>}
    </div>
  );
}

export default SearchInput;
