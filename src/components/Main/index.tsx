import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';

import { SliderInput } from './styles';

import { fetchWeather, fetchWeatherByName } from '../../store/main/actions';

import Loader from '../Loader';
import Wrapper from '../Wrapper';
import Container from '../Container';
import WeatherSlider from './WeatherSlider';

const { Search } = Input;

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { weatherAll, loading } = useSelector(state => ({
    weatherAll: state.main.weatherAll.data,
    loading: state.main.weatherAll.loading
  }));

  useEffect(() => {
    if (!weatherAll) {
      dispatch(fetchWeather());
    }
  }, [dispatch, weatherAll]);

  const onSlideClick = cityName => {
    console.log(cityName);
  };

  const searchHandler = cityName => {
    dispatch(fetchWeatherByName({ q: cityName }));
  };

  if (loading) return <Loader />;

  return (
    <Wrapper>
      <Container>
        <SliderInput>
          <Search
            placeholder="Enter city"
            onSearch={searchHandler}
            size="large"
            enterButton
          />
        </SliderInput>
        <WeatherSlider data={weatherAll} onSlideClick={onSlideClick} />
      </Container>
      {/*<Container>*/}
      {/*  <img*/}
      {/*    src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}*/}
      {/*    alt="weather"*/}
      {/*  />*/}
      {/*  <div>{weather?.name}</div>*/}
      {/*  <div>{weather?.weather[0].description}</div>*/}
      {/*  <ul>*/}
      {/*    <li>Temperature: {weather?.main.temp}</li>*/}
      {/*    <li>Feels like: {weather?.main.feels_like}</li>*/}
      {/*    <li>Wind degrees: {weather?.wind.deg}</li>*/}
      {/*    <li>Wind Speed: {weather?.wind.speed} km/h</li>*/}
      {/*    <li>Temp min: {weather?.main.temp_min}</li>*/}
      {/*    <li>Temp max: {weather?.main.temp_max}</li>*/}
      {/*    <li>Pressure: {weather?.main.pressure}</li>*/}
      {/*    <li>Humidity: {weather?.main.humidity}</li>*/}
      {/*  </ul>*/}
      {/*</Container>*/}
    </Wrapper>
  );
};

export default Main;
