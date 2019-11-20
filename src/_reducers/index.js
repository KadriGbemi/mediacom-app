import { authTypes, newsTypes, alertType } from '../_constants';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case authTypes.LOGIN_AUTHENTICATED:
      return { ...state, token: action.token };
    case authTypes.LOGIN_ERROR:
      return {
        ...state,
        error: 'Seems your name or token is invalid'
      };
    case newsTypes.GET_EVERYTHING:
      return { ...state, headlines: action.payload };
    case newsTypes.GET_TOP_HEADLINES_BY_COUNTRY:
      return { ...state, headlines: action.payload };
      case newsTypes.GET_STORY:
      return { ...state, story: action.story };
      case newsTypes.GET_USER_PROFILE:
      return { ...state, user: action.user };
      case alertType.ALERT_ACTION:
        return { ...state, error: undefined};
    case authTypes.LOG_OUT:
      return {};
    default:
      return state;
  }
}

export default rootReducer;
