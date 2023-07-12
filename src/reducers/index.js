import authReducer from "./auth.reducers";
import productsReducers from "./products.reducers";
import transactionsReducers from "./transactions.reducers";
import userReducers from "./user.reducers";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducers,
  transactions: transactionsReducers, 
  userProfile: userReducers,
});

export default rootReducer;
