import {
  	FETCH_VEHICLE,
	FETCH_VEHICLE_SUCCESS,
	FETCH_VEHICLE_ERROR
} from './actions';

const initialState = {
  isError: false,
  isLoading: false,
  vehicle: [],
  error: null
};

export default (state = initialState, action) => {
  const { type,payload } = action;
  switch (type) {
    case FETCH_VEHICLE:
      return {
        ...state,
        error:null,
        isLoading: true
      };
    case FETCH_VEHICLE_SUCCESS:
      return {
        isError:false,
        isLoading:false,
        vehicle:payload,
        error:false
      };
    case FETCH_VEHICLE_ERROR:
      return {
        ...state,
        error:true,
        isLoading: false,
        isError: true,
        error:payload.message
      };
    default:
      return state;
  }
};


