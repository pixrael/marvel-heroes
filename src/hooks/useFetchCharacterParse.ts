export interface RAWCHARACTERRESPONSE {
  offset: 0;
  limit: 20;
  total: 1;
  count: 1;
  results: RAWCHARACTER[];
}

export interface RAWCHARACTER {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CHARACTER {
  id: number;
  name: string;
  img: string;
}

export const useFetchCharacterParse = (
  data: RAWCHARACTERRESPONSE | undefined
): CHARACTER | undefined => {
  if (!data || !data.results || data.results.length) return undefined;

  const character: RAWCHARACTER = data.results[1];

  const {
    id,
    name,
    thumbnail: { path, extension },
  } = character;

  return { id, name, img: `${path}.${extension}` };
};
