import { combineReducers } from 'redux';
import { history, IHistoryState } from './history';

export interface IState {
  history: IHistoryState;
}

export default combineReducers({ history });
