import axios from '../../utils/axios.config';

export const getWeather = params =>
  axios
    .get('/weather', {
      params: {
        units: 'metric',
        lang: 'ru',
        ...params
      }
    })
    .then(({ data }) => data);
