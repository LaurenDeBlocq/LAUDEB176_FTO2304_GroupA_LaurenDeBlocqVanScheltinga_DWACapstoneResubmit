import { useParams } from "react-router-dom";
import { useGetPodcastByIdQuery } from "../services/podcasts";
import { Link } from "react-router-dom";

import SeasonCard from "../components/SeasonCard";

function Show() {
  const { showId } = useParams();
  const { data, isLoading } = useGetPodcastByIdQuery(showId);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  const seasonCards = data.seasons.map((season) => {
    return <SeasonCard data={season} key={season.season} />;
  });

  return (
    <div className="show">
      <Link to={"/"}>
        <button className="page-button">Back</button>
      </Link>
      <div className="show--text">
        <h1>{data.title}</h1>
        <img src={data.image} className="show--image" />
        <p className="show--description">{data.description}</p>
      </div>
      {seasonCards}
    </div>
  );
}

export default Show;
