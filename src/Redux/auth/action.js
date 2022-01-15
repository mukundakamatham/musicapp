import {LOGOUT, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,SIGNIN_FAILURE,SIGNIN_SUCCESS,SIGNIN_REQUEST } from "./actionTypes";
import {app }from "../../utils/request";
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const loginFailure = (err) => {
  return {
    type:  LOGIN_FAILURE,
    payload: err
  };
};
const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};
const signinRequest = () => {
  return {
    type: SIGNIN_REQUEST
  };
};
const signinSuccess = (token) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: token
  };
};

const signinFailure = (err) => {
  return {
    type: SIGNIN_FAILURE,
    payload: err
  };
};
const loginUser = (payload) => (dispatch) => {
  const requestAction = loginRequest();
  dispatch(requestAction);
  const { email, password } = payload;
  app
    .post("/login", {
      email,
      password
    } )
    .then((res) => {
      const successAction = loginSuccess(res.data.token);
      dispatch(successAction);
      console.log(res.data.token);
    })
    .catch((err) => {
      const failureAction = loginFailure(err.message);
      dispatch(failureAction);
      console.log(err);
    });
};

const signinUser = (payload) => (dispatch) => {
  const requestAction = signinRequest();
  dispatch(requestAction);
  const { email, password,name } = payload;
  app
    .post("/register", {
      email,
      password,name
    } )
    .then((res) => {
      const successAction = signinSuccess(res.data.token);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = signinFailure(err.message);
      dispatch(failureAction);
    });
};
const logOUT = () => {
  return {
    type:  LOGOUT,
    payload: ""
  };
};

const Logout= () => (dispatch) => {
  dispatch(logOUT)
}
export { Logout,loginRequest, loginSuccess, loginFailure, loginUser,signinUser,signinRequest,signinSuccess,signinFailure };
