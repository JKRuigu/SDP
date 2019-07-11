import { User } from '../../constants/api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload:data
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload:error
  };
}

export function login({username,password,url}) {
  return async (dispatch) => {
    
    dispatch({ type: LOGIN });

    try {
      const data = await User.login({username,password,url});
      return dispatch(loginSuccess(data));
    } catch (e) {
      return dispatch(loginError(e));
    }
    
  };
}
