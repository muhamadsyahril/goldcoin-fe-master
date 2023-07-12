import axiosCoreIam from "../helpers/axiosCoreIam";
import { userConstants } from "./constants";

export const forgotPassword = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.FORGOT_PASSWORD_REQUEST });
    const res = await axiosCoreIam.post(
      "/forgot-password", dataBody
    );
    
    if (res.data.status === 200) {
      const { data, status, message } = res.data;

      dispatch({
        type: userConstants.FORGOT_PASSWORD_SUCCESS,
        payload: {
          data,
          status,
          message
        },
      });
      return res.data
    } else {
      dispatch({
        type: userConstants.FORGOT_PASSWORD_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const changePassword = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.CHANGE_PASSWORD_REQUEST });
    const res = await axiosCoreIam.post(
      "/change-password", dataBody
    );
    if (res.data.status === 200) {
      const { data, status, message } = res.data;

      dispatch({
        type: userConstants.CHANGE_PASSWORD_SUCCESS,
        payload: {
          data,
          status,
          message
        },
      });
      return res.data
    } else {
      dispatch({
        type: userConstants.CHANGE_PASSWORD_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const getUsers = (search) => {
  return async (dispatch) => {
      dispatch({ type: userConstants.GET_USERS_REQUEST });
      const res = await axiosCoreIam.get(`/api/users/all?${search}`);
      if (res.status === 200) {
          dispatch({
              type: userConstants.GET_USERS_SUCCESS,
              payload: res.data,
          });
      } else {
          dispatch({
              type: userConstants.GET_USERS_FAILURE,
              payload: { error: res.data.error },
          });
      }
  };
};

export const getDetailUsers = (uuid) => {
  return async (dispatch) => {
      dispatch({ type: userConstants.GET_DETAIL_USERS_REQUEST });
      const res = await axiosCoreIam.get(`/api/users/${uuid}`);
      if (res.status === 200) {
          dispatch({
              type: userConstants.GET_DETAIL_USERS_SUCCESS,
              payload: res.data,
          });
      } else {
          dispatch({
              type: userConstants.GET_DETAIL_USERS_FAILURE,
              payload: { error: res.data.error },
          });
      }
  };
};

export const createUsers = (form) => {
  return async (dispatch) => {
      dispatch({ type: userConstants.CREATE_USERS_REQUEST });
      const res = await axiosCoreIam.post("/api/users", form);
      if (res.status === 200) {
          dispatch({
              type: userConstants.CREATE_USERS_SUCCESS,
              payload: res.data,
          });
      } else {
          dispatch({
              type: userConstants.CREATE_USERS_FAILURE,
              payload: { error: res.data.error },
          });
      }
  };
};

export const updateUsers = (uuid, form) => {
  return async (dispatch) => {
      dispatch({ type: userConstants.UPDATE_USERS_REQUEST });
      const res = await axiosCoreIam.put(`/api/users/${uuid}`, form);
      if (res.status === 200) {
          dispatch({
              type: userConstants.UPDATE_USERS_SUCCESS,
              payload: res.data,
          });
      } else {
          dispatch({
              type: userConstants.UPDATE_USERS_FAILURE,
              payload: res.data,
          });
      }
  };
};

export const deleteUsers = (uuid, form) => {
  return async (dispatch) => {
      dispatch({ type: userConstants.DELETE_USERS_REQUEST });
      const res = await axiosCoreIam.patch(`/api/users/delete/${uuid}`, form);
      if (res.status === 200) {
          dispatch({
              type: userConstants.DELETE_USERS_SUCCESS,
              payload: res.data,
          });
      } else {
          dispatch({
              type: userConstants.DELETE_USERS_FAILURE,
              payload: res.data,
          });
      }
  };
};