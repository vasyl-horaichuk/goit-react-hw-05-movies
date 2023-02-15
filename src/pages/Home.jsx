import { useEffect, useState } from 'react';
import { fetchMoviesTrending } from '../service/fetchMovies';
import { MoviesList } from 'components/Movies/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesTrending();
        setMovies(data.results);
        console.log(data);
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
