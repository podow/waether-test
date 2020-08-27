import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchWeather, fetchWeatherDone, fetchWeatherFail } from './actions';

import { getWeather } from './api';

function* fetchWeatherFlow({ payload }) {
  try {
    const res = yield call(getWeather, payload);
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
