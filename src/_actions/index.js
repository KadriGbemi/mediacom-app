import { authTypes, newsTypes, alertType } from '../_constants';
import { apiRequestService } from '../_services/api/requests';

export function login(loginDetails, countryAbbreviation) {
  return function(dispatch) {
    try {
      getTopHeadlines(countryAbbreviation, loginDetails.token);
      dispatch(request('login requested'));
      dispatch({
        type: authTypes.LOGIN_AUTHENTICATED,
        token: loginDetails.token
      });
    } catch (err) {
      dispatch(failure(err));
    }
  };
  function request(message) {
    return { type: authTypes.LOGIN_REQUEST, message };
  }
  function failure(error) {
    return { type: authTypes.LOGIN_ERROR, error };
  }
}
export function success(loginDetails) {
  return { type: authTypes.LOGIN_SUCCESS, loginDetails };
}

export function logout() {
  console.log('Log out action index');
  apiRequestService.logout();
  return { type: authTypes.LOG_OUT };
}

export function removeAlertMessage() {
  return { type: alertType.ALERT_ACTION };
}
export function getUserProfile(loginDetails) {
  return { type: newsTypes.GET_USER_PROFILE, user: loginDetails };
}

export function getStory(story) {
  console.log('get story action', story);
  return { type: newsTypes.GET_STORY, story: story };
}

export function getTopHeadlines(countryAbbreviation, loginDetailsToken) {
  return function(dispatch) {
    apiRequestService
      .getTopHeadlines(countryAbbreviation, loginDetailsToken)
      .then(data => {
        dispatch({
          type: newsTypes.GET_TOP_HEADLINES_BY_COUNTRY,
          payload: data
        });
      });
  };
}
export function getEverything(request, token) {
  return function(dispatch) {
    apiRequestService.getEverything(request, token).then(data => {
      dispatch({
        type: newsTypes.GET_EVERYTHING,
        payload: data
      });
    });
  };
}
