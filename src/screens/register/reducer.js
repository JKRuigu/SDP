import {
  	FETCH_PARCEL,
	FETCH_PARCEL_SUCCESS,
	FETCH_PARCEL_ERROR
} from './actions';

const initialState = {
  isError: false,
  isLoading: false,
  parcel: [],
  error: null,
};

export default (state = initialState, action) => {
  const { type,payload } = action;
  switch (action.type) {
    case FETCH_PARCEL:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PARCEL_SUCCESS:
      return {
        isError:false,
        isLoading:false,
        parcel:payload,
        error:null
      };
    case FETCH_PARCEL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error:payload.message
      };
    default:
      return state;
  }
};


