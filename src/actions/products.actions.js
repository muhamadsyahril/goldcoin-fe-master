import axiosCoreIam from "../helpers/axiosCoreIam";
import { productsConstants } from "./constants";

export const allProduct = (uuid) => {
  return async (dispatch) => {
    dispatch({ type: productsConstants.PRODUCTS_REQUEST });
    const res = await axiosCoreIam.get(
      "/api/products"
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: productsConstants.PRODUCTS_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const detailProduct = (uuid) => {
  return async (dispatch) => {
    dispatch({ type: productsConstants.PRODUCT_DETAIL_REQUEST });
    const res = await axiosCoreIam.get(
      "/api/products/detail/"+uuid
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: productsConstants.PRODUCT_DETAIL_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const productAllocation = (uuid) => {
  return async (dispatch) => {
    dispatch({ type: productsConstants.PRODUCT_ALLOCATIONS_REQUEST });
    const res = await axiosCoreIam.get(
      "/api/allocations/all"
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: productsConstants.PRODUCT_ALLOCATIONS_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};

export const productAllocationDetail = (uuid) => {
  return async (dispatch) => {
    dispatch({ type: productsConstants.PRODUCT_ALLOCATION_DETAILS_REQUEST });
    const res = await axiosCoreIam.get(
      "/api/allocations/detail/"+uuid
    );
    if (res.data.status === 200) {
      return res.data
    } else {
      dispatch({
        type: productsConstants.PRODUCT_ALLOCATION_DETAILS_FAILURE,
        payload: { error: res.data.message },
      });
      return res.data
    }
  };
};
