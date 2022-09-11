import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL, JWT_SECRET } from './config';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = JWT_SECRET;
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
  /* TODO:
		- use notification system of mantine library to alert user on error
		- const message = error.response?.data?.message || error.message;
		*/
);
