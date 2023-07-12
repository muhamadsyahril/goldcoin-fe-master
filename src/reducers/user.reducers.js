import { userConstants } from "../actions/constants";

const initState = {
  users: [],
  totalData: 0,
  userDetail: {},
  user: {},
  message: "",
  loading: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.CHANGE_PASSWORD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case userConstants.CHANGE_PASSWORD_FAILURE:
      state = {
        ...state,
        loading: false,
        errorData: action.payload.error,
      };
      break;
    case userConstants.FORGOT_PASSWORD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.FORGOT_PASSWORD_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case userConstants.FORGOT_PASSWORD_FAILURE:
      state = {
        ...state,
        loading: false,
        errorData: action.payload.error,
      };
      break;
    case userConstants.GET_USERS_SUCCESS:
      state = {
        ...state,
        users: action.payload.data.users,
        totalData: action.payload.data.totalData,
        loading: false,
      };
      break;
    case userConstants.GET_USERS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USERS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case userConstants.GET_DETAIL_USERS_SUCCESS:
      state = {
        ...state,
        userDetail: action.payload.data.user,
        loading: false,
      };
      break;
    case userConstants.GET_DETAIL_USERS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_DETAIL_USERS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case userConstants.CREATE_USERS_SUCCESS:
      state = {
        ...state,
        userDetail: action.payload.data.user,
        loading: false,
      };
      break;
    case userConstants.CREATE_USERS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.CREATE_USERS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case userConstants.UPDATE_USERS_SUCCESS:
      state = {
        ...state,
        userDetail: action.payload.data.user,
        loading: false,
      };
      break;
    case userConstants.UPDATE_USERS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.UPDATE_USERS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case userConstants.DELETE_USERS_SUCCESS:
      state = {
        ...state,
        userDetail: action.payload.data.user,
        loading: false,
      };
      break;
    case userConstants.DELETE_USERS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.DELETE_USERS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    default:
      return state;
  }
  return state;
};
