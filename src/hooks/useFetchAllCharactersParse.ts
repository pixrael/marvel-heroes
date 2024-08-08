import { useMemo } from 'react';

export const useFetchAllCharactersParse = (data: {
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
      return data.results.map((d) => ({
        id: d.id,
        name: d.name,
        img: `${d.thumbnail.path}/${'portrait_uncanny'}.${
          d.thumbnail.extension
        }`,
      }));
    }
    return undefined;
  }, [data]);

  return {
    parsedData,
  };
};
