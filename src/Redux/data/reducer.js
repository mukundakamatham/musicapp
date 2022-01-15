import {
 
  GET_ALBUM_FAILURE,
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS
} from "./actionTypes";

const initState = {
  ALBUMS: [],
  isLoading: false,
  isError: false
};

const ALBUMReducer = (state = initState, { type, payload }) => {
  switch (type) {
   
    case GET_ALBUM_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case GET_ALBUM_SUCCESS: {
      return {
        ...state,
        ALBUMs: payload,
        isLoading: false
      };
    }
    case GET_ALBUM_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    default:
      return state;
  }
};

export { ALBUMReducer };
