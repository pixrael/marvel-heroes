import { useContext, useEffect } from 'react';
import { SetupAppContext } from '../../../app-state/contexts/setup-app-context';
import SwitchButton from '../../ui-components/switch-button/switch-button';
import './limit-fetch-results-control.scss';

function LimitFetchResultsControl() {
  const { limitTo5Results, setLimitTo5Results } = useContext(SetupAppContext);

  useEffect(() => {
    console.log('limitTo5Results ', limitTo5Results);
  }, [limitTo5Results]);
  return (
    <>
      <span className="instructions">
        Limit to 5 results per request (to improve fetch times)
      </span>
      <SwitchButton
        checked={limitTo5Results}
        onChange={() => {
          setLimitTo5Results(!limitTo5Results);
        }}
      />
    </>
  );
}

export default LimitFetchResultsControl;
