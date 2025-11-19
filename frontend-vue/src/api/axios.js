import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.API_BASE,
  timeout: 10000
});

// ดึง token จาก localStorage ทุกครั้งก่อนยิง request
api.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;
