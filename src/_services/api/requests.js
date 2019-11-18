import axios from 'axios';
import { setAuthorizationHeader } from '../../_utils/auth/header';

axios.defaults.baseURL = 'https://newsapi.org/v2/';

const getToken = 'b3ec4d539b4e4e49ae955f1da3fbf566';

function getTopHeadlines(countryAbbreviation) {
  return axios
    .get(`/top-headlines?country=${countryAbbreviation}&apiKey=${getToken}`)
    .then(response => {
      return response.data;
    });
}

function getEverything(request) {
  return axios
    .get(`/everything?q=${request}&apiKey=${getToken}`)
    .then(response => {
      return response.data;
    });
}

export const apiRequestService = {
  getTopHeadlines,
  getEverything
};
