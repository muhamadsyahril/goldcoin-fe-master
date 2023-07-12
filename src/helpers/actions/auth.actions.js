import axiosCoreIam from "../helpers/axiosCoreIam";
import { authConstants } from "./constants";

export const login = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axiosCoreIam.post(
      "/login", dataBody
    );
    if (res.data.status === 200) {
      const { accessToken, refreshToken, user } = res.data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          accessToken,
          user
        },
      });
      return res.data
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const register = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.REGISTER_REQUEST });
    const res = await axiosCoreIam.post(
      "/register", dataBody
    );
    if (res.data.status === 200) {
      const { accessToken, refreshToken, user } = res.data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.REGISTER_SUCCESS,
        payload: {
          accessToken,
          user
        },
      });
      return res.data
    } else {
      dispatch({
        type: authConstants.REGISTER_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const isUserLogin = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const user = JSON.parse(localStorage.getItem("user"));
    if (accessToken && user) {
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          accessToken,
          refreshToken,
          user
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "User not login" },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS });
  };
};
