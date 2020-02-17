import { applyMiddleware, compose, createStore } from 'redux';
import createSaga from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from '../store/sagas';

const createSagaMiddleware = createSaga();

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(createSagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  createSagaMiddleware.run(rootSaga);

  return store;
};
