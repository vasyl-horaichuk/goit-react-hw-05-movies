import { useEffect, useState } from 'react';
import { fetchMoviesTrending } from '../service/fetchMovies';
import { MoviesList } from '../components/Movies/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loding....</h1>
      </div>
    );
  }

  return (
    <main>
      <h1>HOME PAGE</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
