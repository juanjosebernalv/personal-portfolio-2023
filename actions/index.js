import useSWR from 'swr';

const fetcher = url => fetch(url).then( res => res.json() );

export const useGetHello = () => useSWR('/api/hello', fetcher);

export const useGetBlogs = () => useSWR(`/api/blogs`, fetcher);