import { useMemo } from 'react';

export interface CHARACTER_BY_ID_RAW {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };
    description: string;
  }[];
}

export const useFetchCharacterByIdParse = (data: CHARACTER_BY_ID_RAW) => {
  const parsedData = useMemo(() => {
    if (data && data.count && data.results && data.results.length) {
      const {
        id,
        name,
        thumbnail: { extension, path },
        /* description, */
      } = data.results[0];

      return {
        id,
        name,
        img: `${path}/${'portrait_uncanny'}.${extension}`,
        /* description, */
      };
    }
    return undefined;
  }, [data]);

  return {
    parsedData,
  };
};
