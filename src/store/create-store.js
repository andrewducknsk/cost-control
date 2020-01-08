import { createStore } from 'redux';
import rootReducer from '../store/reducers';

export default initialState => {
	const store = createStore(
		rootReducer,
		initialState,
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	);

	return store;
};
