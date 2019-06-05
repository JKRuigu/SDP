import { Alert } from 'react-native';

import {
  FETCH_PARCEL,
	FETCH_PARCEL_SUCCESS,
	FETCH_PARCEL_ERROR
} from './actions';


import {
  SEND_PARCEL,
  SEND_PARCEL_SUCCESS,
  SEND_PARCEL_ERROR
} from '../send/actions';

import {
  RECEIVE_PARCEL,
  RECEIVE_PARCEL_SUCCESS,
  RECEIVE_PARCEL_ERROR
} from '../receive/actions';

import {
  HANDOVER_PARCEL,
  HANDOVER_PARCEL_SUCCESS,
  HANDOVER_PARCEL_ERROR
} from '../handover/actions';

const initialState = {
  isError: false,
  isLoading: false,
  parcel: [],
  error: null,
};

export default (state = initialState, action) => {
  const { type,payload } = action;
  switch (type) {
    case FETCH_PARCEL:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PARCEL_SUCCESS:
      return {
        isError:false,
        isLoading:false,
        parcel:payload,
        error:null
      };
    case FETCH_PARCEL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error:payload.message
      };
    case SEND_PARCEL:
      return {
        ...state,
        isLoading: true
      };      
    case SEND_PARCEL_SUCCESS:
        return {
          state:sendData,
          error:null,
          parcel:payload,
          isLoading:false,
          isError:false
        };
    case SEND_PARCEL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error:payload.message
      };  
      case RECEIVE_PARCEL:
        return {
          ...state,
          isLoading: true
        };
      case RECEIVE_PARCEL_SUCCESS:
          return {
            ...state,
            parcel:payload,
            error:null,
            isLoading:false,
            isError:false
          };
    case RECEIVE_PARCEL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error:payload
      };

    case HANDOVER_PARCEL:
        return {
          ...state,
          isLoading: true
        };
    case HANDOVER_PARCEL_SUCCESS:
        return {
          ...state,
          parcel:payload,
          error:null,
          isLoading:false,
          isError:false
        };
    case HANDOVER_PARCEL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error:payload
      };    

    default:
      return state;
  }
};


