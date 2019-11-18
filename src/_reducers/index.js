import { authTypes, newsTypes } from '../_constants';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case authTypes.LOGIN_AUTHENTICATION:
      return { ...state, token: action.payload };
    case authTypes.LOGIN_ERROR:
      return {
        ...state,
        error: 'Seems your name or token is invalid'
      };
    case newsTypes.GET_EVERYTHING:
      return { ...state, everythingNews: action.stations };
    case newsTypes.GET_TOP_HEADLINES_BY_COUNTRY:
      return { ...state, headlines: action.stations };
      case newsTypes.GET_USER_PROFILE:
      return { ...state, profile: action.stations };
    case authTypes.LOG_OUT:
      return {};
    default:
      return state;
  }
}

export default rootReducer;
