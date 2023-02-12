import axios from 'axios';

// const API_KEY = '740dee1bffaa9bd60e4b0e1462b3e0c6';
const params = {
  key: '740dee1bffaa9bd60e4b0e1462b3e0c6',
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchMoviesTrending = async () => {
  try {
    const responce = await axios.get(`trending/all/day?api_key=${params.key}`);
    return responce;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};
console.log(response);

fetchMoviesTrending().then(responce => console.log(responce));

const fetchSearchMovies = async () => {};

const fetchMovieDetails = async () => {};

const fetchMovieCredits = async () => {};

const fetchMovieReviews = async () => {};
