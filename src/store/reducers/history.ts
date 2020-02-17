import { handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';
import { actionTypes } from '../actions';

export interface IHistoryState {
  data: List<object>;
  // filterType: string;
  isLoading: boolean;
  isFetched: boolean;
}

interface IPayload {
  readonly type: string;
  readonly data?: object;
}

// TODO: подробнее типизмровать
export const history = handleActions<IHistoryState, IPayload>(
  {
    [actionTypes.FILTER_HISTORY]: (state, { payload }) => ({
      ...state,
      filterType: payload.data,
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
    data: List(),
    // filterType: '',
    isLoading: false,
    isFetched: false,
  }
);
