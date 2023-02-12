import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');

  const data = useSearchParams();
  console.log(data);

  const handleChange = e => {
    setQuery(e.targe.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
