import { takeLatest, call, put } from 'redux-saga/effects';

import {
  fetchWeather,
  fetchWeatherDone,
  fetchWeatherFail,
  fetchWeatherByName,
  fetchWeatherByNameDone,
  fetchWeatherByNameFail
} from './actions';

import { getStartWeather, getWeather } from './api';

function* fetchWeatherFlow() {
  try {
    const res = yield call(getStartWeather);
    if (res) {
      yield put(fetchWeatherDone(res));
    }
  } catch (error) {
    console.log(error);
    yield put(fetchWeatherFail());
  }
}

function* fetchWeatherByCityFlow({ payload }) {
  try {
    const res = yield call(getWeather, payload);
    if (res) {
      yield put(fetchWeatherByNameDone(res));
    }
  } catch (error) {
    console.log(error);
    yield put(fetchWeatherByNameFail());
  }
}

export default function* rootCommonSaga() {
  yield takeLatest(fetchWeather, fetchWeatherFlow);
  yield takeLatest(fetchWeatherByName, fetchWeatherByCityFlow);
}
