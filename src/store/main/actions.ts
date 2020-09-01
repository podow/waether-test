import { createAction } from 'redux-actions';

import { WEATHER, ONE, FETCH, DONE, FAIL } from '../constants';

export const fetchWeather = createAction(WEATHER + FETCH);
export const fetchWeatherDone = createAction(WEATHER + FETCH + DONE);
export const fetchWeatherFail = createAction(WEATHER + FETCH + FAIL);

export const fetchWeatherByName = createAction(WEATHER + ONE + FETCH);
export const fetchWeatherByNameDone = createAction(
  WEATHER + ONE + FETCH + DONE
);
export const fetchWeatherByNameFail = createAction(
  WEATHER + ONE + FETCH + FAIL
);
