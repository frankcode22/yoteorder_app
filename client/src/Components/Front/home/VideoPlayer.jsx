import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";

const Player = () => (
  <div className="player-wrapper">
    <ReactPlayer
    url="assets/videos/demo_one.mp4"
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default Player;
