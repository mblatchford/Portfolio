import React from "react";
import Parity from "./assets/parity.mp4";
import AdventchureTyme from "./assets/adventure.mp4";
import Unscramble from "./assets/unscramble.mp4";
import BattleTanks from "./assets/BattleTanks.mp4";

const ProjectMedia = (props) => {
  const toRender = () => {
    switch (props.embedVid) {
      case "Parity":
        console.log("switch parity");
        return (
          <video
            src={Parity}
            type="video/mp4"
            autoPlay={true}
            loop={true}
          />
        );
      case "AdventchureTyme":
        console.log("switch adventure");
        return (
          <video
            src={AdventchureTyme}
            type="video/mp4"
            autoPlay={true}
            loop={true}
          />
        );
      case "ScrambleUn":
        console.log("switch scrambleun");
        return (
          <video
            src={Unscramble}
            type="video/mp4"
            autoPlay={true}
            loop={true}
          />
        );
      case "BattleTanks":
        console.log("switch battleTanks");
        return (
          <video
            src={BattleTanks}
            type="video/mp4"
            autoPlay={true}
            loop={true}
          />
        );

      default:
        break;
    }
  };
  return toRender();
};

export default ProjectMedia;
