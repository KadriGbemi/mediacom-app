import { authTypes, newsTypes } from '../_constants';
import { apiRequestService } from '../_services/api/requests';

export function login(loginDetails, countryAbbreviation) {
    return function(dispatch) {
      dispatch(request("login requested"));
      apiRequestService.getTopHeadlines(countryAbbreviation)
        .then(response => {
          dispatch(success(loginDetails));
          dispatch({
            type: authTypes.LOGIN_AUTHENTICATION,
            payload: response
          });
        })
        .catch(function(error) {
          dispatch(failure(error));
        });
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

export function getUserProfile(userDetails) {
  return { type: newsTypes.GET_USER_PROFILE, userDetails };
}

export function getTopHeadlines(countryAbbreviation) {
  return function(dispatch) {
    apiRequestService.getTopHeadlines(countryAbbreviation).then(data => {
      dispatch({
        type: newsTypes.GET_TOP_HEADLINES_BY_COUNTRY,
        payload: data
      });
    });
  };
}
export function getEverything(request) {
  return function(dispatch) {
    apiRequestService.getTopHeadlines(request).then(data => {
      dispatch({
        type: newsTypes.GET_EVERYTHING,
        payload: data
      });
    });
  };
}
