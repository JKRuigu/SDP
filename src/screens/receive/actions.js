import { GeneralApi } from '../../constants/api';
// import { Platform,Alert } from 'react-native';

export const RECEIVE_PARCEL = 'RECEIVE_PARCEL';
export const RECEIVE_PARCEL_SUCCESS = 'RECEIVE_PARCEL_SUCCESS';
export const RECEIVE_PARCEL_ERROR = 'RECEIVE_PARCEL_ERROR';

function receiveSuccess(data) {
  return {
    type: RECEIVE_PARCEL_SUCCESS,
    payload:data.data
  };
}

function receiveError(error) {
  return {
    type: RECEIVE_PARCEL_ERROR,
    payload:error.message
  };
}

export function receiveParcels(args) {
  return async (dispatch) => {
    
    dispatch({ type: RECEIVE_PARCEL });
    try {
      const data = await GeneralApi.receiveParcels(args);
      return dispatch(receiveSuccess(data));
    } catch (e) {
      return dispatch(receiveError(e));
    }
    
  };
}
