import axios from '../../utils/axios.config';

export const getWeather = city =>
  axios
    .get('/weather', {
      params: {
        q: city,
        units: 'metric',
        lang: 'ru'
      }
    })
    .then(({ data }) => data);
