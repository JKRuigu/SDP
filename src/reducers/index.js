import { combineReducers } from 'redux';
import auth from '../screens/auth/reducer';
// import { reducer as form } from 'redux-from'

const rootReducer = combineReducers({ auth }); 

export default rootReducer;
