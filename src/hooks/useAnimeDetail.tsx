import { useEffect, useState } from 'react';
import api from '../api/animeDB';
import { Cast } from '../interfaces/castInterface';
import { AnimeFull, AnimeIdResponse } from '../interfaces/animeInterface';

interface AnimeDetail {
  cast?: Cast[];
  animeFull?: AnimeFull;
  isLoading: boolean;
}

export const useAnimeDetail = (animeId: number) => {
  const [state, setState] = useState<AnimeDetail>({
    isLoading: true,
    animeFull: undefined,
    cast: [],
  });

  const getAnimeDetails = async () => {
    const detailPromise = await api.get<AnimeIdResponse>(`/anime/${animeId}`);

    setState({
      isLoading: false,
      animeFull: detailPromise.data.data,
    });
  };

  useEffect(() => {
    getAnimeDetails();
  }, []);

  return {
    ...state,
  };
};
