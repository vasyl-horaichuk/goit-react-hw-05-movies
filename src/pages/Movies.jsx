import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../service/fetchMovies';
import { MoviesList } from 'components/Movies/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');

    if (!searchQuery) {
      return;
    }

    fetchSearchMovies('avatar')
      .then(setMovies)
      .catch(error => console.error(error));
  }, [searchParams]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <>
      <h1>TITLE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};
