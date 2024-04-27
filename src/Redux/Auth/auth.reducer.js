import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_REQUEST,
} from "./auth.actionType";

const initialState = {
  jwt: null,
  error: null,
  loading: false,
  user: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_PROFILE_SUCCESS:
      return { ...state, user: action.payload, error: null, loading: false };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, jwt: action.payload, loading: false, error: null };

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
