import { handleActions } from 'redux-actions';

import { WEATHER, DONE, FAIL, ONE, FETCH } from '../constants';

import status from '../status';

const initialState = {
  weatherAll: { ...status }
};

export default handleActions(
  {
    [WEATHER + FETCH]: state => ({
      ...state,
      weatherAll: {
        ...status,
        loading: true
      }
    }),
    [WEATHER + FETCH + DONE]: (state, { payload }: any) => ({
      ...state,
      weatherAll: {
        ...status,
        success: true,
        data: payload.list
      }
    }),
    [WEATHER + FETCH + FAIL]: state => ({
      ...state,
      weatherAll: {
        ...status,
        failed: true
      }
    }),
    [WEATHER + FETCH + ONE]: state => ({
      ...state,
      weatherAll: {
        ...status,
        loading: true,
      }
    }),
    [WEATHER + FETCH + ONE + DONE]: (state, { payload }) => ({
      ...state,
      weatherAll: {
        ...status,
        success: true,
        data: { ...state.weatherAll, payload }
      }
    }),
    [WEATHER + FETCH + ONE + FAIL]: state => ({
      ...state,
      weatherAll: {
        ...status,
        failed: true
      }
    })
  },
  initialState
);
