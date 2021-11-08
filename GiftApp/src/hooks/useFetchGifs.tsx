import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<{ data: number[]; loading: boolean }>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((img) => {
      setState({ data: img, loading: false });
    });
  }, [category]);

  return state;
};
