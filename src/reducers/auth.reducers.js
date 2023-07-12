import { authConstants } from "../actions/constants";

const initState = {
  accessToken: null,
  user: {},
  address: null,
  publicKey: null,
  privateKey: null,
  refreshToken : {},
  parentId: null,
  thirpaty: null,
  authenticate: false,
  authenticating: false,
  phone: null,
  otp: null,
  balance: null,
  exchange: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticate: false,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error : action.payload.error,
        loading: false,
      }
      break;
      case authConstants.REGISTER_REQUEST:
        state = {
          ...state,
          authenticate: false,
          authenticating: true,
        };
        break;
      case authConstants.REGISTER_SUCCESS:
        state = {
          ...state,
          user: action.payload.user,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          authenticate: true,
          authenticating: false,
        };
        break;
      case authConstants.REGISTER_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;
        case authConstants.GET_ADDRESS_REQUEST:
          state = {
            ...state,
          };
          break;
        case authConstants.GET_ADDRESS_SUCCESS:
          state = {
            ...state,
            address: action.payload.address.address,
            publicKey: action.payload.address.publicKey,
            privateKey: action.payload.address.privateKey
          };
          break;
        case authConstants.GET_ADDRESS_FAILURE:
          state = {
            ...state,
            error : action.payload.error,
            loading: false,
          }
          break;
      case authConstants.VERIFY_PHONE_REQUEST:
        state = {
          ...state,
        };
        break;
      case authConstants.VERIFY_PHONE_SUCCESS:
        state = {
          ...state,
          phone: action.payload.phone,
        };
        break;
      case authConstants.VERIFY_PHONE_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;
      case authConstants.VERIFY_OTP_REQUEST:
        state = {
          ...state,
        };
        break;
      case authConstants.VERIFY_OTP_SUCCESS:
        state = {
          ...state,
          phone: action.payload.phone,
          otp: action.payload.otp,
        };
        break;
      case authConstants.VERIFY_OTP_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;
      case authConstants.VERIFY_EMAIL_REQUEST:
          state = {
            ...state,
          };
          break;
      case authConstants.VERIFY_EMAIL_SUCCESS:
        state = {
          ...state,
          email: action.payload.email,
          otp: action.payload.otp,
        };
        break;
      case authConstants.VERIFY_EMAIL_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;
      case authConstants.GET_BALANCE_REQUEST:
          state = {
            ...state,
          };
          break;
      case authConstants.GET_BALANCE_SUCCESS:
        state = {
          ...state,
          balance: action.payload.balance,
        };
        break;
      case authConstants.GET_BALANCE_FAILURE:
        state = {
          ...state,
          error : action.payload.error,
          loading: false,
        }
        break;
      case authConstants.GET_EXCHANGE_REQUEST:
          state = {
            ...state,
          };
          break;
      case authConstants.GET_EXCHANGE_SUCCESS:
        state = {
          ...state,
          exchange: action.payload.exchange,
        };
        break;
      case authConstants.GET_EXCHANGE_FAILURE:
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
