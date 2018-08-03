import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './root.reducer';

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});

const middleWare = [promiseMiddleware, loggerMiddleware];

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(...middleWare)
)(createStore);

const makeStore = (initialState?: any) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default makeStore;
