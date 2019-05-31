import {createStore, applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

// const store = createStore(
// rootReducer,
//  	applyMiddleware(thunk)
//  );

// export default store;


const middlewares = [
  thunk
];

if (__DEV__) { // eslint-disable-line
  middlewares.push(createLogger());
}

// rootReducer,
//  	applyMiddleware(thunk)
export default createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(...middlewares)),
);
