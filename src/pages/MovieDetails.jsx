import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const [id] = useParams();
  console.log(id);
  useEffect(() => {
    console.log(id);
  }, [id]);

  return <h1>Movies Details</h1>;
};
