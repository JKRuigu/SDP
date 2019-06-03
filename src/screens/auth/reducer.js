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
  user: {},
  error: null,
  isError:false
};

export default (state = initialState, action) => {
  const { type, payload} = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isError:false,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        token: payload.token,
        user: payload.user[0],
      };
    case LOGIN_ERROR:
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


