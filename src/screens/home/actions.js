import { ParcelsApi as ParcelApi } from '../../constants/api';

export const FETCH_PARCEL = 'FETCH_PARCEL';
export const FETCH_PARCEL_SUCCESS = 'FETCH_PARCEL_SUCCESS';
export const FETCH_PARCEL_ERROR = 'FETCH_PARCEL_ERROR';

function fetchSuccess(data) {
  return {
    type: FETCH_PARCEL_SUCCESS,
    parcels:data
  };
}

function fetchError(error) {
  return {
    type: FETCH_PARCEL_ERROR,
    parcels:[],
    error:error,
    isError:true,
    isLoading:false
  };
}

export function login({token,parnterId}) {
  return async (dispatch) => {
    
    dispatch({ type: FETCH_PARCEL });

    try {
      const data = await ParcelApi.fetchParcels({token,parnterId});
      return dispatch(fetchSuccess(data));
    } catch (e) {
      return dispatch(fetchError(e));
    }
    
  };
}
