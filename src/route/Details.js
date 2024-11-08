import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      <h1>{detail.title_long}</h1>
      <img src={detail.medium_cover_image} alt={detail.title}></img>
      <p>{detail.description_full}</p>
      <ul>
        {detail.genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Details;
