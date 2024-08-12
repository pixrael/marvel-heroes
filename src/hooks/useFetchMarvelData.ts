import useSWR from 'swr';
import { API_CONFIG } from '../config/apiConfig';

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
  const { ts, apikey, hash, url } = API_CONFIG;
  const queryString = new URLSearchParams({
    ts,
    apikey,
    hash,
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
