import { createAction } from 'redux-actions';

import { WEATHER, DONE, FAIL } from '../constants';

export const fetchWeather = createAction(WEATHER);
export const fetchWeatherDone = createAction(WEATHER + DONE);
export const fetchWeatherFail = createAction(WEATHER + FAIL);
