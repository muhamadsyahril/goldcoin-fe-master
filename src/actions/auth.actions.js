import axiosCoreIam from "../helpers/axiosCoreIam";
import axiosApi from "../helpers/axiosApi";
import axiosExchange from "../helpers/axiosExchange";
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

export const VerifyPhoneAct = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.VERIFY_PHONE_REQUEST });
    const res = await axiosCoreIam.post(
      "/verify-phone", dataBody
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: authConstants.VERIFY_PHONE_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const VerifyOtpAct = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.VERIFY_OTP_REQUEST });
    const res = await axiosCoreIam.post(
      "/verify-otp", dataBody
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: authConstants.VERIFY_OTP_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const VerifyEmailAct = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.VERIFY_EMAIL_REQUEST });
    const res = await axiosCoreIam.post(
      "/verify-email", dataBody
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: authConstants.VERIFY_EMAIL_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const getAddress = (dataBody) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.GET_ADDRESS_REQUEST });
    const res = await axiosCoreIam.get(
      "/get-address", dataBody
    );
    if (res.data.status === 200) {
      const { address, publicKey, privateKey } = res.data.data.address;
      dispatch({
        type: authConstants.GET_ADDRESS_SUCCESS,
        payload: {
          address,
          publicKey,
          privateKey
        },
      });
      return res.data
    } else {
      dispatch({
        type: authConstants.GET_ADDRESS_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const getBalance = (address) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.GET_BALANCE_REQUEST });
    const res = await axiosApi.get(
      "/api/address/"+address
    );
    if (res.data.status === 200) {
      const { balance } = res.data;
      dispatch({
        type: authConstants.GET_BALANCE_SUCCESS,
        payload: {
          balance
        },
      });
      return res.data
    } else {
      dispatch({
        type: authConstants.GET_BALANCE_FAILURE,
        payload: { error: "get balance failed" },
      });
      return res.data
    }
  };
};

export const getExchange = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.GET_EXCHANGE_REQUEST });
    const res = await axiosExchange.get(
      "/dbXRates/USD"
    );
    if (res.data.items) {
      
      dispatch({
        type: authConstants.GET_EXCHANGE_SUCCESS,
        payload: {
          exchange: res.data.items
        },
      });
      return res.data.items
    } else {
      dispatch({
        type: authConstants.GET_EXCHANGE_FAILURE,
        payload: { error: "get exchange failed" },
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
