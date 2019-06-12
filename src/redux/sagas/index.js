import {all} from 'redux-saga/effects';
import petSaga from './petSaga';
import ownerSaga from './ownerSaga';

export default function* rootSaga() {
  yield all([
    petSaga(),
	ownerSaga(),
  ]);
}