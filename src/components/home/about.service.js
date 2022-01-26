import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/file/',
    withCredentials: false,
  });

export const buscarYoutube = params => api.get(`/url/${params}`);
