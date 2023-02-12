import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li>
            <Link to={`${id}`}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
