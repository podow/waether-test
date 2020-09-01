import { handleActions } from 'redux-actions';

import { WEATHER, DONE, FAIL, ONE, FETCH } from '../constants';
import { IStore } from '../../interfaces/store/weather';

import status from '../status';

const initialState: IStore = {
  weatherAll: { ...status, data: null }
};

export default handleActions(
  {
    [WEATHER + FETCH]: state => ({
      ...state,
      weatherAll: {
        ...status,
        loading: true,
        data: null
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
        failed: true,
        data: null
      }
    }),
    [WEATHER + ONE + FETCH]: state => ({
      ...state,
      weatherAll: {
        ...status,
        loading: true,
        data: null
      }
    }),
    [WEATHER + ONE + FETCH + DONE]: (state, { payload }: any) => ({
      ...state,
      weatherAll: {
        ...status,
        success: true,
        data: [...state.weatherAll.data, payload]
      }
    }),
    [WEATHER + ONE + FETCH + FAIL]: state => ({
      ...state,
      weatherAll: {
        ...status,
        failed: true,
        data: null
      }
    })
  },
  initialState
);
