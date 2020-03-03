import { handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';
import { actionTypes } from '../actions';

// TODO: типизация редюсеров
export interface IHistoryState {
  data: List<object>;
  isLoading: boolean;
  isFetched: boolean;
}

interface IHistoryItem {
  readonly expenseName: string;
  readonly expenseType: string;
  readonly expenseDate: string;
  readonly expenseAmount: string;
  readonly id: string;
}

interface IPayload {
  readonly data: Array<IHistoryItem>;
}

interface ITransformedData {
  header: Array<ITransformedDataItem>;
  body: Array<ITransformedDataItem>;
}

interface ITransformedDataItem {
  readonly label: string;
  readonly value: string | number;
  readonly type: string;
}

// TODO: подробнее типизировать
export const history = handleActions<IHistoryState, IPayload>(
  {
    [actionTypes.SUCCESS_FETCH_HISTORY]: (state, { payload }) => {
      const transformedData = payload.data.map((item: IHistoryItem) => {
        const operation = { header: [], body: [], id: item.id } as ITransformedData;

        operation.header.push(
          { label: 'Name', value: item.expenseName, type: 'text' },
          { label: 'Amount', value: item.expenseAmount, type: 'text' }
        );

        operation.body.push(
          { label: 'Type', value: item.expenseType, type: 'text' },
          { label: 'Date', value: item.expenseDate, type: 'text' }
        );

        return operation;
      });

      return {
        ...state,
        data: fromJS(transformedData),
        isLoading: false,
        isFetched: true,
      };
    },
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
    isLoading: false,
    isFetched: false,
  }
);
