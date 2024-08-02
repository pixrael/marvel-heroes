import { useMemo } from 'react';

export const useFetchCharacterByIdParse = (data: {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };
  }[];
}) => {
  const parsedData = useMemo(() => {
    if (data && data.count && data.results && data.results.length) {
      const {
        id,
        name,
        thumbnail: { extension, path },
      } = data.results[0];

      return {
        id,
        name,
        img: `${path}.${extension}`,
      };
    }
    return undefined;
  }, [data]);

  return {
    parsedData,
  };
};
