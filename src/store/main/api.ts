import axios from '../../utils/axios.config';

export const getStartWeather = () =>
  axios
    .get('/group', {
      params: {
        id: '524901,2988507,2643743,5128581,1816670'
      }
    })
    .then(({ data }) => data);

export const getWeather = params =>
  axios
    .get('/weather', {
      params: { ...params }
    })
    .then(({ data }) => data);
