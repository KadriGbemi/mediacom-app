import { authTypes, newsTypes, alertType } from '../_constants';
import { apiRequestService } from '../_services/api/requests';

export function login(loginDetails) {
  return function(dispatch) {
    dispatch(request('login requested'));
    try {
      dispatch({
        type: authTypes.LOGIN_AUTHENTICATED,
        token: loginDetails.token
      });
      dispatch(getUserProfile(loginDetails));
    } catch (err) {
      console.log('Error login', err);
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
export function logout() {
  apiRequestService.logout();
  return { type: authTypes.LOG_OUT };
}

export function getAlertError(message) {
  return { type: alertType.ALERT_ERROR_SHOW, error: message };
}
export function removeAlertMessage() {
  return { type: alertType.ALERT_ERROR_REMOVE };
}
export function getUserProfile(loginDetails) {
  return {
    type: newsTypes.GET_PROFILE,
    user: loginDetails
  };
}

export function getStory(story) {
  return { type: newsTypes.GET_STORY, story: story };
}
export function updateUserProfile(profile){
  return { type: newsTypes.UPDATE_PROFILE, payload: profile };
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