import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const composeSwitch =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    composeWithDevTools(applyMiddleware(thunk))) ||
  compose(applyMiddleware(thunk));

export default createStore(rootReducer, composeSwitch);
