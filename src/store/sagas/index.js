import { fork } from 'redux-saga/effects';
import { onFetchHistory } from './history';
import { onPostNote } from './note';

export default function*() {
  yield fork(onFetchHistory);
  yield fork(onPostNote);
}
