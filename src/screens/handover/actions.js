import { GeneralApi } from '../../constants/api';
// import { Platform,Alert } from 'react-native';

export const HANDOVER_PARCEL = 'HANDOVER_PARCEL';
export const HANDOVER_PARCEL_SUCCESS = 'HANDOVER_PARCEL_SUCCESS';
export const HANDOVER_PARCEL_ERROR = 'HANDOVER_PARCEL_ERROR';

function handOverSuccess(data) {
  return {
    type: HANDOVER_PARCEL_SUCCESS,
    payload:data.data
  };
}

function handOverError(error) {
  return {
    type: HANDOVER_PARCEL_ERROR,
    payload:error.message
  };
}

export function handOverParcels(args) {
  return async (dispatch) => {
    
    dispatch({ type: HANDOVER_PARCEL });
    try {
      const data = await GeneralApi.handOverParcels(args);
      return dispatch(handOverSuccess(data));
    } catch (e) {
      return dispatch(handOverError(e));
    }
    
  };
}
