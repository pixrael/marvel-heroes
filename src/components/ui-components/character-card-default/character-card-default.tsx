import './character-card-default.scss';
import Loading from '../loading/loading';
import defaultImg from '../../../assets/imgs/default_img_portrait_uncanny.jpg';

function CharacterCardDefault({ a }: { a?: boolean }) {
  return (
    <div className="herocard">
      <img className="herocard__media" src={defaultImg} alt="marvel image" />
      <div className="herocard__content">
        <h5 className="herocard__title">
          <Loading />
        </h5>
        <button className="iconbtn iconbtn--smaller" disabled>
          <span className={'hearticon'}></span>
        </button>
      </div>
      <div className="corner"></div>
    </div>
  );
}

export default CharacterCardDefault;
