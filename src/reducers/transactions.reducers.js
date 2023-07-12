import { transactionsConstants } from "../actions/constants";

const initState = {
  transactions: [],
  transaction_detail: {},
};

export default (state = initState, action) => {
  switch (action.type) {
      case transactionsConstants.TRANSACTIONS_REQUEST:
        state = {
          ...state,
        };
        break;
      case transactionsConstants.TRANSACTIONS_SUCCESS:
        state = {
          ...state,
          transactions: action.payload.transactions
        };
        break;
      case transactionsConstants.TRANSACTIONS_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;
        case transactionsConstants.TRANSACTION_DETAIL_REQUEST:
          state = {
            ...state,
          };
          break;
        case transactionsConstants.TRANSACTION_DETAIL_SUCCESS:
          state = {
            ...state,
            transaction_detail: action.payload.transaction_detail
          };
          break;
        case transactionsConstants.TRANSACTION_DETAIL_FAILURE:
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
