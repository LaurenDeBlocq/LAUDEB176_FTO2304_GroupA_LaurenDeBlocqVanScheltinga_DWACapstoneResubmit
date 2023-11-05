import FavouriteEpisode from "../components/FavouriteEpisode.jsx";
import { useGetFavouritesQuery } from "../services/database.js";
import { Link } from "react-router-dom";

function FavouritesPage() {
  const { data, isLoading } = useGetFavouritesQuery();
  console.log(data);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  const episodePreviews = data.map((episode) => {
    return (
      <FavouriteEpisode
        data={episode}
        key={episode.episode}
        //   image={episode.image_file}
        //   showName={episode.podcast_name}
        //   seasonNum={episode.season}

        // handleClick={handleClick}
        // toggleFavourite={toggleFavourite}
        // isFavourite={isFavourite(episode)}
      />
    );
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
