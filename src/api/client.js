import { URL_API } from '@/config';
import axios from 'axios';


const client = axios.create({
  baseURL: URL_API
});

client.interceptors.request.use(config => {
  const user = localStorage.getItem('@user');
  if(user) {
    const userJson = JSON.parse(user);

    if(userJson?.state?.user?.token) {
      config.headers.Authorization = `Bearer ${userJson.state.user.token}`
    }
  }

  return config;
});

export default client;
