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
    case newsTypes.GET_TOP_HEADLINES_REQUEST:
      return { ...state, isLoading: true };
    case newsTypes.GET_TOP_HEADLINES_RECEIVED:
      return { ...state, isLoading: false };
    case newsTypes.GET_STORY:
      return { ...state, story: action.story };
    case newsTypes.GET_PROFILE:
      return { ...state, user: action.user };
    case newsTypes.UPDATE_PROFILE:
      return { ...state, user: action.payload };
    case alertType.ALERT_ERROR_SHOW:
      return { ...state, error: action.error };
    case alertType.ALERT_ERROR_REMOVE:
      return { ...state, error: undefined };
    case authTypes.LOG_OUT:
      return {};
    default:
      return state;
  }
}

export default rootReducer;
