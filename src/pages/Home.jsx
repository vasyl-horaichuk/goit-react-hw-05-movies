import { fetchMoviesTrending } from '../service/fetchMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/Movies/moviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>HOME PAGE</h1>
      <MoviesList movies={movies} />
    </main>
  );
};
