import axios from '../../utils/axios.config';

export const getWeather = () =>
  axios
    .get('/current', {
      params: {
        query: 'Karagandy'
      }
    })
    .then(({ data }) => data);
