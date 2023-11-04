import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useGetPodcastByIdQuery } from "../services/podcasts";
import Season from "../components/Season";
import { setSeasonSelected } from "../slices/seasonSlice";

function SeasonPage() {
  const { showId, seasonId } = useParams();
  const { data, isLoading } = useGetPodcastByIdQuery(showId);
  let seasonData;
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  const seasonChoice = data.seasons.map((season) => {
    return (
      <option value={season.season} key={season.season}>
        {season.season}
      </option>
    );
  });
  console.log(data);
  //   useEffect(() => {
  //     seasonData = data.seasons[seasonId];
  //   }, []);

  //   setSeasonSelected(seasonId);
  //   const handleSeasonSelect = (event) => {
  //     const optionValue = event.target.value;
  //     setSeasonSelected(optionValue);
  //   };

  return (
    <>
      <Link to={"/show/" + showId}>
        <button className="page-button">Back</button>
      </Link>

      <div className="show--text">
        <h1>{data.title}</h1>
        <img src={data.image} className="show--image" />
        <p className="show--description">{data.description}</p>
      </div>

      <div className="season--selector">
        <p>Season:</p>
        <select defaultValue={seasonId} onChange={handleSeasonSelect}>
          {seasonChoice}
        </select>
      </div>
      <Season
        data={data.seasons[seasonChosen - 1]}
        showName={data.title.replaceAll(" ", "-")}
      />
    </>
  );
}

export default SeasonPage;
