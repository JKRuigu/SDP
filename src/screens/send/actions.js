import { GeneralApi } from '../../constants/api';
import { Platform,Alert } from 'react-native';

export const SEND_PARCEL = 'SEND_PARCEL';
export const SEND_PARCEL_SUCCESS = 'SEND_PARCEL_SUCCESS';
export const SEND_PARCEL_ERROR = 'SEND_PARCEL_ERROR';

function sendSuccess(data) {
  return {
    type: SEND_PARCEL_SUCCESS,
    payload:data.data
  };
}

function sendError(error) {
  return {
    type: SEND_PARCEL_ERROR,
    payload:error.message
  };
}

export function sendParcels(args) {
  // Alert.alert(partnerId)
  return async (dispatch) => {
    
    dispatch({ type: SEND_PARCEL });
    try {
      const data = await GeneralApi.sendParcels(args);
      return dispatch(sendSuccess(data));
    } catch (e) {
      return dispatch(sendError(e));
    }
    
  };
}
