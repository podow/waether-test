import { combineReducers } from 'redux';

import common from './common/reducer';
import main from './main/reducer';

export default combineReducers({
  common,
  main
});
