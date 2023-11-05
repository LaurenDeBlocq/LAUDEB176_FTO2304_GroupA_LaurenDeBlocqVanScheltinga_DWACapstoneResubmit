import React from "react";

export default function FavouriteEpisode(props) {
  return (
    <div className="episode-card">
      <div className="episode-preview">
        <img src={props.data.img_file} className="episode-preview--image" />
        <div className="episode-preview--text">
          <h3 className="episode-preview--text-title">
            {props.data.episode_title}
          </h3>
          <h5>{props.data.podcast_name}</h5>
          <h5>Season {props.data.season}</h5>
        </div>
      </div>
    </div>
  );
}
