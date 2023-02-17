import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../service/fetchMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setReviews);
  }, [movieId]);
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </div>
  );
};

export default Reviews;
