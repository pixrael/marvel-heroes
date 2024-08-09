import { useContext, useEffect } from 'react';
import { ComicsByCharacterIdContext } from '../contexts/comics-by-character-id-context';

export const useSaveComicByCharacterId = (
  parsedData:
    | {
        id: number;
        title: string;
        img: string;
        year: string;
      }[]
    | undefined
) => {
  const { setResults } = useContext(ComicsByCharacterIdContext);

  useEffect(() => {
    if (parsedData) {
      setResults({ nResults: parsedData.length, data: parsedData });
    }
  }, [parsedData, setResults]);
};
