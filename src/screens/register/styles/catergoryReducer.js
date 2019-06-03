import {
  	FETCH_CATEGORY,
	FETCH_CATEGORY_SUCCESS,
	FETCH_CATEGORY_ERROR
} from './actions';

const initialState = {
  isError: false,
  isLoading: false,
  catergory: [],
  error: null
};

export default (state = initialState, action) => {
  const { type,payload } = action;
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        isError:false,
        isLoading:false,
        catergory:payload.catergories,
        error:null
      };
    case FETCH_CATEGORY_ERROR:
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


