import axios from 'axios';

const API_KEY = '740dee1bffaa9bd60e4b0e1462b3e0c6';
const URL = 'https://api.themoviedb.org/3/';

const params = {
  search: '&language=ua-UK&page=1&include_adult=false',
  language: '&language=ua-UK',
};

axios.defaults.params = {
  baseURL: URL,
  key_api: API_KEY,
};

export const fetchMoviesTrending = async () => {
  try {
    const responce = await axios.get(`trending/all/day`);
    return responce.date;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

export const fetchSearchMovies = async qeury => {
  try {
    const responce = await axios.get(
      `/search/movie${params.search}&query=${qeury}`
    );
    return responce.results;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const responce = await axios.get(`/movie/${id}${params.language}`);
    return responce.date;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

export const fetchMovieCredits = async id => {
  try {
    const responce = await axios.get(`/movie/${id}/credits${params.language}`);
    return responce.cast;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

export const fetchMovieReviews = async id => {
  try {
    const responce = await axios.get(`/movie/${id}/credits${params.language}`);
    return responce.results;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};
