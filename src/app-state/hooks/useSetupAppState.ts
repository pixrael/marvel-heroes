import { useState } from 'react';

export const useSetupAppState = () => {
  const [limitTo5Results, setLimitTo5Results] = useState(false);

  return {
    limitTo5Results,
    setLimitTo5Results,
  };
};
