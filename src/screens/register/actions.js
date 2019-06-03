import { GeneralApi } from '../../constants/api';

export const FETCH_PARCEL = 'FETCH_PARCEL';
export const FETCH_PARCEL_SUCCESS = 'FETCH_PARCEL_SUCCESS';
export const FETCH_PARCEL_ERROR = 'FETCH_PARCEL_ERROR';

function fetchSuccess(data) {
  return {
    type: FETCH_PARCEL_SUCCESS,
    payload:data.parcels
  };
}

function fetchError(error) {
  return {
    type: FETCH_PARCEL_ERROR,
    payload:[]
  };
}

export function fetchParcels({token,parnterId}) {
  return async (dispatch) => {
    
    dispatch({ type: FETCH_PARCEL });

    try {
      const data = await GeneralApi.fetchParcels({token,parnterId});
      return dispatch(fetchSuccess(data));
    } catch (e) {
      return dispatch(fetchError(e));
    }
    
  };
}




export const FETCH_CATERGORY = 'FETCH_CATERGORY';
export const FETCH_CATERGORY_SUCCESS = 'FETCH_CATERGORY_SUCCESS';
export const FETCH_CATERGORY_ERROR = 'FETCH_CATERGORY_ERROR';

function fetchCatergorySuccess(data) {
  return {
    type: FETCH_CATERGORY_SUCCESS,
    payload:data.catergories
  };
}

function fetchCatergoryError(error) {
  return {
    type: FETCH_CATERGORY_ERROR,
    payload:error
  };
}

export function fetchCatergory({token,parnterId}) {
  return async (dispatch) => {
    
    dispatch({ type: FETCH_CATERGORY });

    try {
      const data = await GeneralApi.fetchCatergory({token,parnterId});
      return dispatch(fetchCatergorySuccess(data));
    } catch (e) {
      return dispatch(fetchCatergoryError(e));
    }
    
  };
}


export const FETCH_LOCATION = 'FETCH_LOCATION';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR';

function fetchLocationSuccess(data) {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload:data.locations
  };
}

function fetchLocationError(error) {
  return {
    type: FETCH_LOCATION_ERROR,
    payload:error
  };
}

export function fetchLocation({token,parnterId}) {
  return async (dispatch) => {
    
    dispatch({ type: FETCH_LOCATION });

    try {
      const data = await GeneralApi.fetchLocation({token,parnterId});
      return dispatch(fetchLocationSuccess(data));
    } catch (e) {
      return dispatch(fetchLocationError(e));
    }
    
  };
}


export const FETCH_VEHICLE = 'FETCH_VEHICLE';
export const FETCH_VEHICLE_SUCCESS = 'FETCH_VEHICLE_SUCCESS';
export const FETCH_VEHICLE_ERROR = 'FETCH_VEHICLE_ERROR';

function fetchVehicleSuccess(data) {
  return {
    type: FETCH_VEHICLE_SUCCESS,
    payload:data.vehicles
  };
}

function fetchVehicleError(error) {
  return {
    type: FETCH_VEHICLE_ERROR,
    payload:error
  };
}

export function fetchVehicle({token,parnterId}) {
  return async (dispatch) => {
    
    dispatch({ type: FETCH_VEHICLE });

    try {
      const data = await GeneralApi.fetchVehicle({token,parnterId});
      return dispatch(fetchVehicleSuccess(data));
    } catch (e) {
      return dispatch(fetchVehicleError(e));
    }
    
  };
}