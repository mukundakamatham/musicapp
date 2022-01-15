import { loadData, saveData } from "../../utils/localStorage";
import {
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE
  
} from "./actionTypes";
import {app }from "../../utils/request";
const token = loadData("token");


const getALBUMRequest = () => {
  return {
    type: GET_ALBUM_REQUEST
  };
};

// action creator
const getALBUMSuccess = (payload) => {
  return {
    type: GET_ALBUM_SUCCESS,
    payload
  };
};

const getALBUMFailure = (error) => {
  return {
    type: GET_ALBUM_FAILURE,
    payload: error
  };
};

const getALBUM = () => (dispatch) => {
  dispatch(getALBUMRequest());
  return    app.get("/ALBUM/",{ headers: {
    'Authorization': 'Bearer ' + token
  }}).then((res) => {
      dispatch(getALBUMSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getALBUMFailure(err));
    });
};


export default getALBUM ;
