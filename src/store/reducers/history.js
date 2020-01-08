import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { actionTypes } from '../actions';

export const history = handleActions(
	{
		[actionTypes.POST_NOTE]: (state, { payload }) => ({
			...state,
			data: state.data.push(fromJS(payload)),
		}),
		[actionTypes.FILTER_HISTORY]: (state, { payload }) => ({
			...state,
			filterType: payload,
		}),
	},
	{
		data: fromJS([
			{
				expenseName: 'Eat',
				expenseType: 'eat',
				expenseDate: '2017-02-14',
				expenseAmount: '45',
				id: '1',
				type: 'expenses',
			},
			{
				expenseName: 'ZP',
				expenseType: 'ZP',
				expenseDate: '2017-02-14',
				expenseAmount: '450',
				id: '2',
				type: 'income',
			},
		]),
		filterType: '',
		isLoading: false,
		isFetched: false,
	}
);
