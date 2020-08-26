import { all } from 'redux-saga/effects';

import main from './main/saga';

export default function* rootSaga() {
  yield all([main()]);
}
