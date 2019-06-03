import {
  	FETCH_CATERGORY,
	FETCH_CATERGORY_SUCCESS,
	FETCH_CATERGORY_ERROR
} from './actions';

const initialState = {
  isError: false,
  isLoading: false,
  catergory: [],
  error: null
};

export default (state = initialState, action) => {
  const { type,payload } = action;
  switch (type) {
    case FETCH_CATERGORY:
      return {
        ...state,
        error:null,
        isLoading: true
      };
    case FETCH_CATERGORY_SUCCESS:
      return {
        isError:false,
        isLoading:false,
        catergory:payload,
        error:false
      };
    case FETCH_CATERGORY_ERROR:
      return {
        ...state,
        error:true,
        isLoading: false,
        isError: true,
        error:payload.message
      };
    default:
      return state;
  }
};


