import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
