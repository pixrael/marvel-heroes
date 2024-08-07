import './details-character-section.scss';

function DetailsCharacterSection() {
  const handleFavoriteClick = () => {
    console.log('favorite clicked');
  };
  return (
    <div className="section">
      <div className="bodysection">
        <div className="carddetail">
          <div className="row">
            <div className="colimage">
              <img
                src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
                alt="Card image"
              />
            </div>
            <div className="coldetails">
              <div className="cardbody">
                <div className="cardheader">
                  <h5 className="cardtitle">Card title</h5>
                  <button
                    className="iconbtn iconbtn--medium"
                    onClick={handleFavoriteClick}
                  >
                    <span className="hearticon"></span>
                  </button>
                </div>
                <div className="cardtextcontainer">
                  <p className="cardtext">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a wider card with supporting text
                    below as a natural lead-in to additional content.
                  </p>
                </div>
                <div className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCharacterSection;
