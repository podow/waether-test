import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainWrapper, Header, Logo } from './styles';

import { fetchWeather } from '../../store/main/actions';

import Loader from '../Loader';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { weather, loading, failed } = useSelector(state => ({
    weather: state.main.weather.data,
    loading: state.main.weather.loading,
    failed: state.main.weather.failed
  }));

  useEffect(() => {
    if (!weather) {
      dispatch(fetchWeather());
    }
  }, [dispatch, weather]);

  if (loading) return <Loader />;

  if (failed) return <h1>Failed!</h1>;

  return (
    <MainWrapper>
      <Header>
        <Logo src={weather?.current.weather_icons[0]} alt="weather" />
        <span>{weather?.current.weather_descriptions[0]}</span>
        <ul>
          <li>Temperature: {weather?.current.temperature}</li>
          <li>Feels like: {weather?.current.feelslike}</li>
          <li>Wind direction: {weather?.current.wind_dir}</li>
          <li>Wind Speed: {weather?.current.wind_speed} km/h</li>
          <li>Pressure: {weather?.current.pressure}</li>
          <li>Humidity: {weather?.current.humidity}</li>
        </ul>
      </Header>
    </MainWrapper>
  );
};

export default Main;
