import { useContext, useEffect } from 'react';
import { DetailsCharacterContext } from '../contexts/details-characters-context';

export const useSaveCharacterDetails = (
  parsedData:
    | {
        id: number;
        name: string;
        img: string;
        description: string;
      }
    | undefined
) => {
  const { setResults } = useContext(DetailsCharacterContext);

  useEffect(() => {
    if (parsedData) {
      console.log('useSaveCharacterDetails ', parsedData);
      setResults({ nResults: 1, data: parsedData });
    }
  }, [parsedData, setResults]);
};
