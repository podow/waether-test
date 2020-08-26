import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchWeather, fetchWeatherDone, fetchWeatherFail } from './actions';

import { getWeather } from './api';

function* fetchWeatherFlow() {
  try {
    const res = yield call(getWeather);
    if (res) {
      yield put(fetchWeatherDone(res));
    }
  } catch (error) {
    console.log(error);
    yield put(fetchWeatherFail());
  }
}

export default function* rootCommonSaga() {
  yield takeLatest(fetchWeather, fetchWeatherFlow);
}
