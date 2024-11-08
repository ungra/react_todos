import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, img, summary, genres }) {
  return (
    <div>
      <hr />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={img} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
