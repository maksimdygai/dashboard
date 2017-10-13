import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';

const
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
	enhancer = composeEnhancers(applyMiddleware(logger, thunk)),
	store = createStore(rootReducer, enhancer);
	
export default store;
