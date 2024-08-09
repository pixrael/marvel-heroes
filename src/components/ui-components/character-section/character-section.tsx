import './character-section.scss';

function CharacterSection({
  id,
  title,
  img,
  description,
  isSelected,
  handleFavoriteClick,
}: {
  id: number;
  title: string;
  img: string;
  description: string;
  isSelected: boolean;
  handleFavoriteClick: (id: number) => void;
}) {
  return (
    <div className="section">
      <div className="bodysection">
        <div className="carddetail">
          <div className="row">
            <div className="colimage">
              <img src={img} alt="Card image" />
            </div>
            <div className="coldetails">
              <div className="cardbody">
                <div className="cardheader">
                  <h5 className="cardtitle">{title}</h5>
                  <button
                    className="iconbtn iconbtn--medium"
                    onClick={() => handleFavoriteClick(id)}
                  >
                    <span
                      className={isSelected ? 'heartlineicon' : 'hearticon'}
                    ></span>
                  </button>
                </div>
                <div className="cardtextcontainer">
                  <p className="cardtext">{description}</p>
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

export default CharacterSection;
