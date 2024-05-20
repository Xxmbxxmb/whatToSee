import { useEffect, useState } from 'react';
import api from '../api/animeDB';
import { Anime, AnimeResponse } from '../interfaces/animeInterface';

interface AnimeInterface {
  nowPlaying: Anime[];
  popular: Anime[];
  upcoming: Anime[];
}

export const useAnimes = () => {
  const [isLoading, setisLoading] = useState(true);
  const [animes, setAnimes] = useState<AnimeInterface>({
    nowPlaying: [],
    popular: [],
    upcoming: [],
  });

  const getAnimes = async () => {
    const nowPlaying = api.get<AnimeResponse>('/top/anime', {
      params: {
        filter: 'airing',
      },
    });

    const popular = api.get<AnimeResponse>('/top/anime', {
      params: {
        filter: 'bypopularity',
      },
    });

    const upcoming = api.get<AnimeResponse>('/top/anime', {
      params: { filter: 'upcoming' },
    });

    const response = await Promise.all([nowPlaying, popular, upcoming]);

    setAnimes({
      nowPlaying: response[0].data.data,
      popular: response[1].data.data,
      upcoming: response[2].data.data,
    });

    setisLoading(false);
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return {
    ...animes,
    isLoading,
  };
};
