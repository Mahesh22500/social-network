import { API_BASE_URL, api } from "../../config/api";
import {
    CREATE_COMMENT_FAILURE,
    CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USER_POST_FAILURE,
  GET_USER_POST_REQUEST,
  GET_USER_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actionType";

export const createPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });

  try {

    console.log("api is ",api);

    const { data } = await api.post(`${API_BASE_URL}/api/posts`, postData);

    console.log("created post ", data);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log("create post error is ",error);
    dispatch({ type: CREATE_POST_FAILURE, payload: error });
  }
};

export const getAllPostAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_POST_REQUEST });
  
    try {
      const { data } = await api.get(`${API_BASE_URL}/api/posts`);
  
      console.log("posts are  ", data);
      dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log("create post error is ",error);
      dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
    }
  };

  export const getUsersPostAction = (userId) => async (dispatch) => {
    dispatch({ type: GET_USER_POST_REQUEST });
  
    try {
      const { data } = await api.get(`${API_BASE_URL}/api/posts/user/${userId}`);
  
      console.log("users posts are  ", data);
      dispatch({ type: GET_USER_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log("create post error is ",error);
      dispatch({ type: GET_USER_POST_FAILURE, payload: error });
    }
  };

  export const likePostAction = (postId) => async (dispatch) => {
    dispatch({ type: LIKE_POST_REQUEST });
  
    try {
      const { data } = await api.put(`${API_BASE_URL}/api/posts/like/${postId}`);

  
      console.log("liked post is   ", data);
      dispatch({ type: LIKE_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log("like post error is ",error);
      dispatch({ type: LIKE_POST_FAILURE, payload: error });
    }
  };


  export const createCommentAction = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });
  
    try {
      const { data } = await api.post(`${API_BASE_URL}/api/comments/post/${reqData.postId}`, reqData.data);
  
      console.log("commented on post ", data);
      dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
    } catch (error) {
      console.log("comment error is ",error);
      dispatch({ type: CREATE_COMMENT_FAILURE, payload: error });
    }
  };
