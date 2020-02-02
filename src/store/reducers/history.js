import { handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';
import { actionTypes } from '../actions';

export const history = handleActions(
	{
		[actionTypes.FILTER_HISTORY]: (state, { payload }) => ({
			...state,
			filterType: payload,
		}),
		[actionTypes.SUCCESS_FETCH_HISTORY]: (state, { payload }) => ({
			...state,
			data: fromJS(payload.data),
			isLoading: false,
			isFetched: true,
		}),
		[actionTypes.FETCH_HISTORY]: state => ({
			...state,
			isLoading: true,
		}),
		// TODO: ренэйм
		[actionTypes.SUCCESS_POST_NOTE]: (state, { payload }) => ({
			...state,
			data: state.data.push(fromJS(payload.data)),
		}),
	},
	{
		data: new List(),
		filterType: '',
		isLoading: false,
		isFetched: false,
	}
);
