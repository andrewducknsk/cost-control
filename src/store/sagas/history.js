import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from '../actions';
import request from '../../utils/api';
import { requestPaths } from '../request-config';

function* fetchHistory() {
	try {
		const historyData = yield call(request, requestPaths.fetchHistory);

		yield put({ type: actionTypes.SUCCESS_FETCH_HISTORY, payload: historyData });
	} catch (e) {
		yield put({ type: actionTypes.ERROR_FETCH_HISTORY, payload: e });
	}
}

export const onFetchHistory = function*() {
	yield takeLatest(actionTypes.FETCH_HISTORY, fetchHistory);
};
