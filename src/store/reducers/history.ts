import { handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';
import { actionTypes } from '../actions';

// TODO: типизация редюсеров
export interface IHistoryState {
  data: List<object>;
  isLoading: boolean;
  isFetched: boolean;
}

interface IPayload {
  readonly data: Array<IHistoryItem>;
}

interface IHistoryItem {
  readonly expenseName: string;
  readonly expenseType: string;
  readonly expenseDate: string;
  readonly expenseAmount: string;
  readonly id: string;
}

interface ITransformedDataItem {
  readonly label: string;
  readonly value: string | number;
  readonly name: string;
  readonly type: string;
}

interface ITransformedData {
  header: Array<ITransformedDataItem>;
  body: Array<ITransformedDataItem>;
  id: string;
}

const transformedPayload: (data: Array<IHistoryItem>) => Array<ITransformedData> = data =>
  data.map((item: IHistoryItem) => {
    const operation: ITransformedData = { header: [], body: [], id: item.id };

    operation.header.push(
      { label: 'Name', value: item.expenseName, name: 'expenseName', type: 'text' },
      { label: 'Amount', value: item.expenseAmount, name: 'expenseAmount', type: 'text' }
    );

    operation.body.push(
      { label: 'Type', value: item.expenseType, name: 'expenseType', type: 'text' },
      { label: 'Date', value: item.expenseDate, name: 'expenseDate', type: 'text' }
    );

    return operation;
  });

// TODO: подробнее типизировать
export const history = handleActions<IHistoryState, IPayload>(
  {
    [actionTypes.SUCCESS_FETCH_HISTORY]: (state, { payload }) => ({
      ...state,
      data: fromJS(transformedPayload(payload.data)),
      isLoading: false,
      isFetched: true,
    }),
    [actionTypes.FETCH_HISTORY]: state => ({
      ...state,
      isLoading: true,
    }),
    // TODO: ренэйм
    [actionTypes.SUCCESS_POST_NOTE]: (state, { payload }) => {
      const transformedNote = transformedPayload(payload.data);

      return {
        ...state,
        data: state.data.push(fromJS(transformedNote[0])),
      };
    },
  },
  {
    data: List(),
    isLoading: false,
    isFetched: false,
  }
);
