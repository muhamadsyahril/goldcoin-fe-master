import axiosCoreIam from "../helpers/axiosCoreIam";
import { transactionsConstants } from "./constants";

export const allTransaction = (uuid) => {
  return async (dispatch) => {
    dispatch({ type: transactionsConstants.TRANSACTIONS_REQUEST });
    const res = await axiosCoreIam.get(
      "/api/transactions"
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: transactionsConstants.TRANSACTIONS_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const detailTransaction = (uuid) => {
  return async (dispatch) => {
    dispatch({ type: transactionsConstants.TRANSACTION_DETAIL_REQUEST });
    const res = await axiosCoreIam.get(
      "/api/transactions/detail/"+uuid
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: transactionsConstants.TRANSACTION_DETAIL_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};
