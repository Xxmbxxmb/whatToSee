import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  params: {
    sfw: false,
    type: 'tv',
  },
});

export default api;
