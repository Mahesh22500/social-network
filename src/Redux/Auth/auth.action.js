import axios from "axios";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "./auth.actionType";
import { API_BASE_URL, api } from "../../config/api";

export const loginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );

    if (data.token) {
      console.log("I am here")
      localStorage.setItem("jwt", data.token);
    }

    console.log("login success ", data);

    dispatch({ type: LOGIN_SUCCESS, payload: data.token });
  } catch (error) {
    console.log("----", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const registerUserAction = (registerData) => async (dispatch) => {
  console.log("register request ", registerData);

  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      registerData.data
    );
    console.log("register success ", data);
    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    dispatch({ type: REGISTER_SUCCESS, payload: data.token });
  } catch (error) {
    console.log("----", error);
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/api/users/profile`,{
      headers:{
        "Authorization":`Bearer ${jwt}`
      }
  });
    console.log("profile --- ", data);


    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("----", error);
    dispatch({ type: GET_PROFILE_FAILURE, payload: error });
  }
};


export const updateProfileAction = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await api.post(
      `${API_BASE_URL}/api/users`,reqData);

    console.log("profile --- ", data);


    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("----", error);
    dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
  }
};
