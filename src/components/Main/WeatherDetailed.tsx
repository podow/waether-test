import React from 'react';
import { List, Divider } from 'antd';

import {
  WeatherDetailedWrapper,
  WeatherDetailedImageRow,
  WeatherDetailedImageWrapper
} from './styles';

import { ICity } from '../../interfaces/components/city';

const WeatherDetailed: React.FC<{ data: ICity }> = ({ data }) => {
  const {
    name,
    weather,
    main: { temp, feels_like, pressure, humidity, temp_min, temp_max },
    wind: { deg, speed },
    clouds: { all: clouds }
  } = data;

  const asd = [
    `<strong>${weather[0].main}</strong> (${weather[0].description})`,
    `
      <strong>Temperature</strong>: ${parseInt(String(temp))}°;
      <strong>Feels like</strong> - ${parseInt(String(feels_like))}°;
      <strong>Min</strong> - ${parseInt(String(temp_min))}°;
      <strong>Max</strong> - ${parseInt(String(temp_max))}°;
    `,
    `<strong>Wind</strong>: degrees - ${deg}°, speed - ${speed} km/h`,
    `<strong>Pressure</strong>: ${pressure}`,
    `<strong>Humidity</strong>: ${humidity}%`,
    `<strong>Clouds</strong>: ${clouds}%`
  ];

  return (
    <WeatherDetailedWrapper>
      <Divider orientation="left">Detailed info</Divider>
      <WeatherDetailedImageRow>
        <WeatherDetailedImageWrapper>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].main}
            title={weather[0].description}
          />
        </WeatherDetailedImageWrapper>
      </WeatherDetailedImageRow>
      <List
        size="large"
        header={<h3>{name}</h3>}
        dataSource={asd}
        renderItem={item => (
          <List.Item>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </List.Item>
        )}
        bordered
      />
    </WeatherDetailedWrapper>
  );
};

export default WeatherDetailed;
