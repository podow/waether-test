import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';

import { SliderInput } from './styles';

import { fetchWeather, fetchWeatherByName } from '../../store/main/actions';

import { ICity } from '../../interfaces/components/city';

import Loader from '../Loader';
import Wrapper from '../Wrapper';
import Container from '../Container';

import WeatherSlider from './WeatherSlider';
import WeatherDetailed from './WeatherDetailed';

const { Search } = Input;

const Main: React.FC = () => {
  const [currentCity, setCurrentCity] = useState<ICity | null>(null);
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

  const onSlideClick = city => {
    setCurrentCity(city);
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
        {currentCity && <WeatherDetailed data={currentCity} />}
      </Container>
    </Wrapper>
  );
};

export default Main;
