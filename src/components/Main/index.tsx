import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SliderItem } from './styles';

import { fetchWeather } from '../../store/main/actions';

import Loader from '../Loader';
import Layout from '../Layout';
import Container from '../Container';
import CommonSlider from '../CommonSlider';

const Main: React.FC = () => {
  // TODO: Remove after filled
  const test = [...Array(5).fill(1)];
  const dispatch = useDispatch();
  const { weather, loading } = useSelector(state => ({
    weather: state.main.weather.data,
    loading: state.main.weather.loading
  }));

  useEffect(() => {
    if (!weather) {
      dispatch(fetchWeather({ q: 'Karagandy' }));
    }
  }, [dispatch, weather]);

  const onSlideClick = name => {
    dispatch(fetchWeather(name));
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <Container>
        <CommonSlider trackAddStyles={{ padding: '30px 0 15px' }}>
          {test.map((item, key) => (
            <SliderItem key={key} onClick={() => onSlideClick(weather?.name)}>
              <img
                src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt="weather"
              />
              <h2>{weather?.name}</h2>
              <div>{weather?.weather[0].description}</div>
            </SliderItem>
          ))}
        </CommonSlider>
      </Container>
      <Container>
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt="weather"
        />
        <div>{weather?.name}</div>
        <div>{weather?.weather[0].description}</div>
        <ul>
          <li>Temperature: {weather?.main.temp}</li>
          <li>Feels like: {weather?.main.feels_like}</li>
          <li>Wind degrees: {weather?.wind.deg}</li>
          <li>Wind Speed: {weather?.wind.speed} km/h</li>
          <li>Temp min: {weather?.main.temp_min}</li>
          <li>Temp max: {weather?.main.temp_max}</li>
          <li>Pressure: {weather?.main.pressure}</li>
          <li>Humidity: {weather?.main.humidity}</li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Main;
