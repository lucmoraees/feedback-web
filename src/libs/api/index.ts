import axios from 'axios';

export const xhr = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
