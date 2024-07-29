import useSWR from 'swr';

type FetchArgs = Parameters<typeof fetch>;
const fetcher = (...args: FetchArgs): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

export const useCharacters = () => {
  const url = import.meta.env.VITE_REACT_API_MARVEL_URL;
  const resource = 'characters';
  const params = 'nameStartsWith=Sup';
  const ts = '1';
  const apikey = import.meta.env.VITE_REACT_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_REACT_MD5;

  const resUrl = `${url}/${resource}?${params}&ts=${ts}&apikey=${apikey}&hash=${md5}`;

  const { data, error, isLoading } = useSWR(resUrl, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
