import React from "react";
import ReactPlayer from "react-player";
import "./PlayerStyles.css";



export const VendorAccount = () => (
    <div className="player-wrapper">
      <ReactPlayer
      url="assets/videos/vendor_account.mp4"
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
 



  export const Player = () => (
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
