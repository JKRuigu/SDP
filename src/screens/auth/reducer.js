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
  const { type, payload} = action;
  switch (type) {
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
        token: payload.token,
        info: payload.user,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};


