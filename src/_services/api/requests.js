import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v2/';

function getTopHeadlines(countryAbbreviation, token) {
  return axios
    .get(`/top-headlines?country=${countryAbbreviation}&apiKey=${token}`)
    .then(response => {
      return response.data;
    });
}

function getEverything(request, token) {
  console.log('Token in get Everything', token);
  return axios
    .get(`/everything?q=${request}&apiKey=${token}`)
    .then(response => {
      return response.data;
    });
}

function logout() {
  localStorage.clear();
}

export const apiRequestService = {
  getTopHeadlines,
  getEverything,
  logout
};
