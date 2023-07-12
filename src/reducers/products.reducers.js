import { productsConstants } from "../actions/constants";

const initState = {
  products: [],
  product_detail: {},
};

export default (state = initState, action) => {
  switch (action.type) {
      case productsConstants.PRODUCT_REQUEST:
        state = {
          ...state,
        };
        break;
      case productsConstants.PRODUCT_SUCCESS:
        state = {
          ...state,
          products: action.payload.products
        };
        break;
      case productsConstants.PRODUCT_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;
      case productsConstants.PRODUCT_DETAIL_REQUEST:
        state = {
          ...state,
        };
        break;
      case productsConstants.PRODUCT_DETAIL_SUCCESS:
        state = {
          ...state,
          product_detail: action.payload.product_detail
        };
        break;
      case productsConstants.PRODUCT_DETAIL_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;

      case productsConstants.PRODUCT_ALLOCATIONS_REQUEST:
        state = {
          ...state,
        };
        break;
      case productsConstants.PRODUCT_ALLOCATIONS_SUCCESS:
        state = {
          ...state,
          allocations: action.payload.allocations
        };
        break;
      case productsConstants.PRODUCT_ALLOCATIONS_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;

        case productsConstants.PRODUCT_ALLOCATION_DETAILS_REQUEST:
        state = {
          ...state,
        };
        break;
      case productsConstants.PRODUCT_ALLOCATION_DETAILS_SUCCESS:
        state = {
          ...state,
          allocation_detail: action.payload.allocation_detail
        };
        break;
      case productsConstants.PRODUCT_ALLOCATION_DETAILS_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;

    default: 
      return state;
  }
  return state;
};
