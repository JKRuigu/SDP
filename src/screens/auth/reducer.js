import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  FETCH_MY_MEETUPS
} from './actions';

const initialState = {
  isLogged: false,
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
        error: action.error,
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


