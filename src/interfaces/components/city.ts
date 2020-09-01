export interface ICity {
  id: number;
  dt: number;
  name: string;
  visibility: number;
  main: Main;
  sys: Sys;
  wind: Wind;
  clouds: Clouds;
  coord: Coords;
  weather: Weather[];
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Main {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp_min: number;
  temp_max: number;
}

interface Coords {
  lon: number;
  lat: number;
}

interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}
