import { handleActions } from 'redux-actions';

import { WEATHER, DONE, FAIL } from '../constants';

import status from '../status';

const initialState = {
  weather: { ...status }
};

export default handleActions(
  {
    [WEATHER]: state => ({
      ...state,
      weather: {
        ...status,
        loading: true
      }
    }),
    [WEATHER + DONE]: (state, { payload }) => ({
      ...state,
      weather: {
        ...status,
        success: true,
        data: payload
      }
    }),
    [WEATHER + FAIL]: state => ({
      ...state,
      weather: {
        ...status,
        failed: true
      }
    })
  },
  initialState
);
