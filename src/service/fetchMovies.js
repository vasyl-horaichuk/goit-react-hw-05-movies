import axios from 'axios';

const API_KEY = '740dee1bffaa9bd60e4b0e1462b3e0c6';

const params = {
  search: '&language=ua-UK&page=1&include_adult=false',
  language: '&language=ua-UK',
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchMoviesTrending = async () => {
  const responce = await axios.get(`trending/all/day`);
  return responce.data;
};

export const fetchSearchMovies = async qeury => {
  const responce = await axios.get(
    `/search/movie${params.search}&query=${qeury}`
  );
  return responce.results;
};

export const fetchMovieDetails = async id => {
  const responce = await axios.get(`/movie/${id}${params.language}`);
  return responce.data;
};

export const fetchMovieCredits = async id => {
  const responce = await axios.get(`/movie/${id}/credits${params.language}`);
  return responce.cast;
};

export const fetchMovieReviews = async id => {
  const responce = await axios.get(`/movie/${id}/credits${params.language}`);
  return responce.results;
};
