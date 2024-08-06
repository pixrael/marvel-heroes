import loadingIcon from '../../../assets/imgs/loading-icon.png';
import './loading.scss';

function Loading() {
  return (
    <>
      <img src={loadingIcon} className="loading-icon" alt="Loading" />
    </>
  );
}

export default Loading;
