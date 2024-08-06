import './details-character-section.scss';

function DetailsCharacterSection() {
  return (
    <div className="section">
      <div className="bodysection">
        <div className="card-detail">
          <div className="row">
            <div className="col-image">
              <img
                src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
                alt="Card image"
              />
            </div>
            <div className="col-details">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCharacterSection;
