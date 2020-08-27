import { Store } from 'redux';
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { decrementApi, incrementApi } from '../store/common/actions';

let store: null | Store = null;

export const setHelpersStore = newStore => {
  store = newStore;
};

const axiosConfig: AxiosInstance & AxiosRequestConfig = axios.create({
  baseURL: `${process.env.REACT_APP_WEATHER_API_HOST}`,
  headers: {
    accept: 'application/json'
  },
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY
  }
});

axiosConfig.interceptors.request.use(request => {
  store && store.dispatch(incrementApi());
  return { ...request };
});

axiosConfig.interceptors.response.use(
  config => {
    store && store.dispatch(decrementApi());
    return config;
  },
  error => {
    store && store.dispatch(decrementApi());
    throw error;
  }
);

export default axiosConfig;
