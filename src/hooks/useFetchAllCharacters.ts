import { useEffect } from 'react';
import useSWR from 'swr';

type FetchArgs = Parameters<typeof fetch>;
const fetcher = (...args: FetchArgs): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

export const useFetchAllCharacters = (heroToSearch?: string) => {
  const url = import.meta.env.VITE_REACT_API_MARVEL_URL;
  const resource = 'characters';
  const ts = '1';
  const apikey = import.meta.env.VITE_REACT_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_REACT_MD5;

  let resUrl = '';
  if (heroToSearch) {
    resUrl = `${url}/${resource}?nameStartsWith=${heroToSearch}&ts=${ts}&apikey=${apikey}&hash=${md5}`;
  } else
    resUrl = `${url}/${resource}?limit=5&ts=${ts}&apikey=${apikey}&hash=${md5}`; //resUrl = `${url}/${resource}?limit=50&ts=${ts}&apikey=${apikey}&hash=${md5}`;

  const { data, error, isLoading } = useSWR(resUrl, fetcher);

  useEffect(() => {
    console.log('data CHECK ', data);
  }, [data, error, isLoading]);

  return {
    data: data?.data,
    isLoading,
    error: error,
  };
};
