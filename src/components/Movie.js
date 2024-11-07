import PropTypes from "prop-types";
import { generatePath } from "react-router-dom/cjs/react-router-dom.min";

function Movie({ title, img, summary, genres }) {
  return (
    <div>
      <hr />
      <h2>{title}</h2>
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
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
