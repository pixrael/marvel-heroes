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
  if (data && data.count && data.results && data.results.length) {
    const parsedData = data.results.map((d) => ({
      id: d.id,
      name: d.name,
      img: `${d.thumbnail.path}.${d.thumbnail.extension}`,
    }));

    return {
      parsedData,
    };
  }

  return {
    parsedData: undefined,
  };
};
