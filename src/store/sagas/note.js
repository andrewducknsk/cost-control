import { takeLatest, put, call } from 'redux-saga/effects';
import { actionTypes } from '../actions';
import request from '../../utils/api';
import { requestPaths } from '../request-config';

function* postNote({ payload }) {
	try {
		const postResponse = yield call(request, requestPaths.postNote, 'POST', payload);

		yield put({ type: actionTypes.SUCCESS_POST_NOTE, payload: postResponse });
	} catch (e) {
		yield put({ type: actionTypes.ERROR_POST_NOTE });
	}
}

export const onPostNote = function*() {
	yield takeLatest(actionTypes.POST_NOTE, postNote);
};
