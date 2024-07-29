import useSWR from 'swr';

type FetchArgs = Parameters<typeof fetch>;
const fetcher = (...args: FetchArgs): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

export const useCharacters = (params?: string) => {
  const url = import.meta.env.VITE_REACT_API_MARVEL_URL;
  const resource = 'characters';
  const ts = '1';
  const apikey = import.meta.env.VITE_REACT_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_REACT_MD5;

  let resUrl;
  if (params)
    resUrl = `${url}/${resource}?${params}&ts=${ts}&apikey=${apikey}&hash=${md5}`;
  else resUrl = `${url}/${resource}?ts=${ts}&apikey=${apikey}&hash=${md5}`;

  const { data, error, isLoading } = useSWR(resUrl, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
};
