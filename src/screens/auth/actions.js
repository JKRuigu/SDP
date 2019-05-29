import { User } from '../../constants/api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    user: 'Kamau',
    token: '7655566',
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error:'63748487',
  };
}

export function login(token, provider) {
  return async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      const data = await User.login(data);
      return dispatch(loginSuccess(data));
    } catch (e) {
      return dispatch(loginError(e));
    }
  };
}


// import { MeetupApi } from '../../../constants/api';

// const meetupApi = new MeetupApi();

export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';

export const fetchMyMeetups = () => ({
  type: FETCH_MY_MEETUPS,
  payload: User.fetchData(),
});

