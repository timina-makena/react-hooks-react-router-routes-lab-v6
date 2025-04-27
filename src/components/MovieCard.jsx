import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
}

export default MovieCard;