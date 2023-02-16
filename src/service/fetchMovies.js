import axios from 'axios';

const API_KEY = '740dee1bffaa9bd60e4b0e1462b3e0c6';

const params = {
  search: '&language=en-US&page=1&include_adult=false',
  language: '&language=en-US',
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchMoviesTrending = async () => {
  const responce = await axios.get(`trending/movie/day?`);
  return responce.data;
};

export const fetchSearchMovies = async query => {
  const responce = await axios.get(
    `search/movie?${params.search}&query=${query}`
  );
  return responce.data.results;
};

export const fetchMovieDetails = async id => {
  const responce = await axios.get(`movie/${id}?${params.language}`);
  return responce.data;
};

export const fetchMovieCredits = async id => {
  const responce = await axios.get(`movie/${id}/credits?${params.language}`);
  return responce.data.cast;
};

export const fetchMovieReviews = async id => {
  const responce = await axios.get(`movie/${id}/credits?${params.language}`);
  return responce.data.results;
};
