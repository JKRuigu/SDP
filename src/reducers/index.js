import { combineReducers } from 'redux';
import auth from '../screens/auth/reducer';
import catergory from '../screens/register/catergoryReducer';
import parcel from '../screens/register/reducer';
import location from '../screens/register/locationReducer';
import vehicle from '../screens/register/vehicleReducer';
// import { reducer as form } from 'redux-from'

const rootReducer = combineReducers({ auth,catergory,parcel,location,vehicle }); 

export default rootReducer;
