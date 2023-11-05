import React, { useEffect } from "react";
import Episode from "./Episode";
import { useGetFavouritesQuery } from "../services/database.js";
import { supabase } from "../client.js";
// import AudioPlayer from "./AudioPlayer";

function Season(props) {
  // const [isPlaying, setIsPlaying] = React.useState(false);
  // const [whatIsPlaying, setWhatIsPlaying] = React.useState({
  //   title: "",
  //   description: "",
  //   episode: 0,
  //   file: "",
  // });
  const { data, isLoading, refetch } = useGetFavouritesQuery();
  console.log(props)
  console.log(data)

  function handleClick(props) {
    console.log("Clicked");
  }

  const toggleFavourite = (episode, isFavourite) => {
    console.log(isFavourite)
    isFavourite? asyncRemoveFavourite(episode): asyncAddFavourite(episode)
  };
  const asyncAddFavourite = async (episode) => {
    const { error } =  await supabase
        .from('favourites')
        .insert([
          { podcast_id: props.podcast_id, season: props.data.season, episode:episode },
        ])
    refetch()
  }
  const asyncRemoveFavourite = async (episode) => {
    const { error } =  await supabase
        .from('favourites')
        .delete()
        .eq('podcast_id',props.podcast_id)
        .eq('season',props.data.season)
        .eq('episode',episode)
    refetch()
  }
  const isFavourite = (episode) => {

    return data?.some(item=> {
      return (item.season === props.data.season) && (item.episode === episode.episode) && (item.podcast_id === parseInt(props.podcast_id))
    })
  }
  // useEffect(() => {
  //   setIsPlaying(true);
  // }, [whatIsPlaying]);

  // useEffect(() => {
  //   setWhatIsPlaying({ title: "", description: "", episode: 0, file: "" });
  // }, [props.data.season]);
  const episodePreviews = props.data.episodes.map((episode) => {
    return (
      <Episode
        data={episode}
        key={episode.episode}
        image={props.data.image}
        showName={props.showName}
        seasonNum={props.data.title.replace(" ", "-")}
        handleClick={handleClick}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite(episode)}
      />
    );
  });

  // let audio;
  // if (whatIsPlaying.file) {
  //   audio = <AudioPlayer key={whatIsPlaying.title} data={whatIsPlaying} />;
  // }

  return (
    <main>
      {episodePreviews}
      {/* {audio} */}
    </main>
  );
}

export default Season;
