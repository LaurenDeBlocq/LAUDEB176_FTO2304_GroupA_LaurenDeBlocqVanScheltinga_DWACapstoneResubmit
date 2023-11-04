import { React } from "react";
import { useParams } from "react-router-dom";
import { useGetPodcastByIdQuery } from "../services/podcasts";

function SeasonPage() {
  const { showId, seasonId } = useParams();
  const { data, isLoading } = useGetPodcastByIdQuery(showId);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return <h1>Season goes here</h1>;
}

export default SeasonPage;
