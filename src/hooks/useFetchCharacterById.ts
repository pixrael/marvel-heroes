import useSWR from 'swr';

type FetchArgs = Parameters<typeof fetch>;
const fetcher = (...args: FetchArgs): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

export const useFetchCharacterById = (id: number) => {
  const url = import.meta.env.VITE_REACT_API_MARVEL_URL;
  const resource = 'characters';
  const ts = '1';
  const apikey = import.meta.env.VITE_REACT_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_REACT_MD5;

  const resUrl = `${url}/${resource}/${id}?ts=${ts}&apikey=${apikey}&hash=${md5}`;

  const { data, error, isLoading } = useSWR(resUrl, fetcher);

  return {
    data: data?.data,
    isLoading,
    error: error,
  };
};
