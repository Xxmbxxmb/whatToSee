import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '218ccaeff86292493f1a2b262e2a0a16',
    language: 'es-ES',
  },
});

export default api;
