import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.com' });

// api.interceptors.request.use(async (config) => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return config;
// });

export default api;
