import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/fetchMovies';

export const Movies = () => {
  const [query, setQuery] = useState('');
  // const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    console.log(searchQuery);
    if (!searchQuery) {
      return;
    }

    fetchSearchMovies(searchQuery).then(data => {
      console.log(data);
    });
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
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
    </>
  );
};
