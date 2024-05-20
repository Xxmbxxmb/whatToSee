import { useEffect, useState } from 'react';
import { Movie, MoviesResponse } from '../interfaces/movieInterface';
import api from '../api/movieDB';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [peliculas, setPeliculas] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlaying = api.get<MoviesResponse>('/now_playing');
    const popular = api.get<MoviesResponse>('/popular');
    const topRated = api.get<MoviesResponse>('/top_rated');
    const upcoming = api.get<MoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,
    ]);

    setPeliculas({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setisLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...peliculas,
    isLoading,
  };
};
