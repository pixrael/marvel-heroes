import { useContext, useEffect } from 'react';
import { AllCharactersContext } from '../../app-state/contexts/all-characters-context';

export const useSaveAllCharacters = (
  parsedData:
    | {
        id: number;
        name: string;
        img: string;
      }[]
    | undefined
) => {
  const { setResults } = useContext(AllCharactersContext);

  useEffect(() => {
    if (parsedData) {
      setResults({ nResults: parsedData.length, data: parsedData });
    }
  }, [parsedData, setResults]);
};
