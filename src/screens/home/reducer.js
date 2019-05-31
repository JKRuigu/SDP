import {
  	FETCH_PARCEL,
	FETCH_PARCEL_SUCCESS,
	FETCH_PARCEL_ERROR
} from './actions';

const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  info: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        token: action.token,
        info: action.user,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case FETCH_MY_MEETUPS:
      return {
        ...state,
        isLoading: false,
        error: 'Sent',
      };
    default:
      return state;
  }
};


