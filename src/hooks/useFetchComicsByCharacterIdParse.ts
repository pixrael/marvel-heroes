import { useMemo } from 'react';

export const useFetchComicsByCharacterIdParse = (data: {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: {
    id: number;
    title: string;
    thumbnail: { path: string; extension: string };
    dates: { type: string; date: string }[];
  }[];
}) => {
  const parsedData = useMemo(() => {
    if (data && data.count && data.results && data.results.length) {
      const getSaleYear = (dates: { type: string; date: string }[]) => {
        const dateToProcess = dates.find((d) => d.type === 'onsaleDate');

        if (dateToProcess) {
          const allDate = new Date(dateToProcess.date);
          const year = allDate.getFullYear();
          return year;
        }

        return '';
      };

      return data.results.map((d) => ({
        id: d.id,
        title: d.title,
        img: `${d.thumbnail.path}/${'portrait_uncanny'}.${
          d.thumbnail.extension
        }`,
        year: getSaleYear(d.dates) + '',
      }));
    }
    return undefined;
  }, [data]);

  return {
    parsedData,
  };
};
