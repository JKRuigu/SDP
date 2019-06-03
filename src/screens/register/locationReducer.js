import {
  	FETCH_LOCATION,
	FETCH_LOCATION_SUCCESS,
	FETCH_LOCATION_ERROR
} from './actions';

const initialState = {
  isError: false,
  isLoading: false,
  location: [],
  error: null
};

export default (state = initialState, action) => {
  const { type,payload } = action;
  switch (type) {
    case FETCH_LOCATION:
      return {
        ...state,
        error:null,
        isLoading: true
      };
    case FETCH_LOCATION_SUCCESS:
      return {
        isError:false,
        isLoading:false,
        location:payload,
        error:false
      };
    case FETCH_LOCATION_ERROR:
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


