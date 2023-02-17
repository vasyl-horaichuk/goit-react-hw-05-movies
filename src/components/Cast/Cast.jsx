import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'service/fetchMovies';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </div>
  );
};

export default Cast;
