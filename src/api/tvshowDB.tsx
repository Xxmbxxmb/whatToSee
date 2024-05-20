import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '218ccaeff86292493f1a2b262e2a0a16',
    language: 'es-ES',
    without_genres: 16,
    include_adult: false,
    include_null_first_air_dates: false,
  },
});

export default api;
