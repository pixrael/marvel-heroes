import useSWR from 'swr';

type FetchArgs = Parameters<typeof fetch>;

const fetcher = (...args: FetchArgs): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

interface UseFetchOptions {
  resource: string;
  id?: number;
  subresource?: string;
  params?: Record<string, any>;
}

export const useFetchMarvelData = ({
  resource,
  id,
  subresource,
  params,
}: UseFetchOptions) => {
  const url = import.meta.env.VITE_REACT_API_MARVEL_URL;
  const ts = '1';
  const apikey = import.meta.env.VITE_REACT_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_REACT_MD5;

  const queryString = new URLSearchParams({
    ts,
    apikey,
    hash: md5,
    ...params,
  }).toString();

  let resUrl = '';
  if (id && subresource) {
    resUrl = `${url}/${resource}/${id}/${subresource}?${queryString}`;
  } else if (id && !subresource) {
    resUrl = `${url}/${resource}/${id}?${queryString}`;
  } else {
    //!id
    resUrl = `${url}/${resource}?${queryString}`;
  }

  const { data, error, isLoading } = useSWR(resUrl, fetcher);

  return {
    data: data?.data,
    isLoading,
    error: error,
  };
};
