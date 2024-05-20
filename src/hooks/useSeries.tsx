import { useEffect, useState } from 'react';
import { TvShow, TvShowResponse } from '../interfaces/showInterface';
import api from '../api/tvshowDB';

interface TvShowsInterface {
  nowPlaying: TvShow[];
  popular: TvShow[];
  topRated: TvShow[];
}

export const useSeries = () => {
  const [isLoading, setisLoading] = useState(true);
  const [tvshows, setTvshows] = useState<TvShowsInterface>({
    nowPlaying: [],
    popular: [],
    topRated: [],
  });

  const getTvShows = async () => {
    const date = new Date();

    const nowPlaying = api.get<TvShowResponse>('/discover/tv', {
      params: {
        'air_date.gte': date.toISOString().split('T')[0],
        sort_by: 'vote_count.desc',
      },
    });
    const popular = api.get<TvShowResponse>('/discover/tv', {
      params: {
        'first_air_date.gte': '2005-01-01',
        sort_by: 'vote_count.desc',
      },
    });
    const topRated = api.get<TvShowResponse>('tv//top_rated');

    const response = await Promise.all([nowPlaying, popular, topRated]);

    setTvshows({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
    });

    setisLoading(false);
  };

  useEffect(() => {
    getTvShows();
  }, []);

  return {
    ...tvshows,
    isLoading,
  };
};
