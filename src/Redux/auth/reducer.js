import { loadData, saveData } from "../../utils/localStorage";
import { LOGOUT,LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS ,SIGNIN_FAILURE,SIGNIN_REQUEST,SIGNIN_SUCCESS} from "./actionTypes";

const token = loadData("token");
// verify
// once verified

const initState = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: false
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case LOGIN_SUCCESS: {
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        isLoading: false
      };
    }
    case LOGOUT: {
      saveData("token", "");
      return {
        ...state,
        isAuth: false,
        token: "",
       
        isLoading: false
      };
    }
    case SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case SIGNIN_SUCCESS: {
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false
      };
    }
    case SIGNIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export { authReducer };
