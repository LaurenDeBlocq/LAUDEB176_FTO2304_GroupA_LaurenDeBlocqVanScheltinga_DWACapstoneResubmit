import FavouriteEpisode from "../components/FavouriteEpisode.jsx";
import { useGetFavouritesQuery } from "../services/database.js";
import { Link } from "react-router-dom";

function FavouritesPage() {
  const { data, isLoading } = useGetFavouritesQuery();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  const episodePreviews = data.map((episode) => {
    return <FavouriteEpisode data={episode} key={episode.episode} />;
  });

  return (
    <>
      <Link to={"/"}>
        <button className="page-button">Home</button>
      </Link>
      {episodePreviews}
    </>
  );
}

export default FavouritesPage;
