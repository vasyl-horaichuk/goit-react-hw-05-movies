import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from 'service/fetchMovies';
import { BASE_IMG_URL } from 'service/constant';

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesById = async () => {
      try {
        const results = await fetchMovieDetails(movieId);
        setMovieData(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesById();
  }, [movieId]);

  const handelGoBack = () => {
    navigate(location.state.from);
  };

  if (!movieData) {
    return (
      <div>
        <h1>Loding data...</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h1>Movies Details</h1>
      <button onClick={handelGoBack}>go back</button>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" width="200" />
      <Link to="cast" state={{ from: location.state.from }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: location.state.from }}>
        Reviews
      </Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
