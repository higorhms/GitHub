import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.coms' });

export default api;
